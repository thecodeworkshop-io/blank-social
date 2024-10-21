import { createItem, readItems, readUser, updateUser } from "@directus/sdk";
import dayjs from "dayjs";
import Stripe from "stripe";

import { headers } from "next/headers";
import { NextResponse } from "next/server";

import directus_app from "@/lib/directus_app";
import { stripe } from "@/lib/stripe";

export async function POST(request: Request) {
  // Get the body and signature from the request
  const body = await request.text();
  const signature = headers().get("Stripe-Signature") as string;

  // Get the webhook secret from the environment variables
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  // Initialize the event variable
  let event: Stripe.Event;

  // Verify the webhook signature
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.log("⚠️  Webhook signature verification failed.", err);
    return NextResponse.json(
      { message: "Webhook signature verification failed" },
      { status: 400 }
    );
  }

  // Get the session object from the event
  const session = event.data.object as Stripe.Checkout.Session;

  // Check if the user exists
  let user;
  try {
    user = await directus_app.request(readUser(session.client_reference_id!));
  } catch (error) {
    console.log("error fetching the user" + error);
  }

  // Check if the event is a checkout session completed event
  if (event.type === "checkout.session.completed") {
    console.log("🚀 ~ POST ~ event : has completed checkout");

    if (!user) {
      console.log("User not found");
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Check if the session has a subscription
    if (session.subscription) {
      // Retrieve the subscription details
      const subscription = await stripe.subscriptions.retrieve(
        session.subscription as string
      );
      console.log(
        "🚀 ~ POST ~ subscription.items.data:",
        subscription.items.data
      );

      // Create a new user purchase
      await directus_app.request(
        createItem("user_purchases", {
          amount: subscription.items.data[0].price.unit_amount
            ? subscription.items.data[0].price.unit_amount / 100
            : 0,
          currency: subscription.items.data[0].price.currency,
          payment_type: "subscription",
          product_name: subscription.items.data[0].price.nickname,
          status: "completed",
          stripe_object_id: session.id,
          stripe_customer_id: session.customer as string,
          stripe_event_object: event,
          stripe_invoice_id: subscription.latest_invoice as string,
          stripe_subscription_id: subscription.id,
          subscription_valid_from: dayjs(
            subscription.current_period_start * 1000
          ).toISOString(),
          subscription_valid_to: dayjs(
            subscription.current_period_end * 1000
          ).toISOString(),
          user: user.id,
        })
      );
      // Get the first word of the subscription nickname
      const productName =
        subscription.items.data[0].price.nickname?.split(" ")[0];
      // Get the subscription id
      const subscriptionid = await directus_app.request(
        readItems("subscriptions", {
          fields: ["id"],
          filter: { name: { _eq: productName } },
        })
      );
      console.log("🚀 ~ POST ~ userPurchase:", subscriptionid);

      // Update the user
      await directus_app.request(
        updateUser(user.id, {
          active_subscription: subscriptionid[0].id,
          subscription_date: dayjs(
            subscription.current_period_start * 1000
          ).toISOString(),
          subscription_expiry: dayjs(
            subscription.current_period_end * 1000
          ).toISOString(),
        })
      );
    } else {
      console.log("🚀 ~ POST ~ session: one time payment", session);
      const line_items = await stripe.checkout.sessions.listLineItems(
        session.id
      );
      console.log("🚀 ~ POST ~ session: line items", line_items);

      try {
        await directus_app.request(
          createItem("user_purchases", {
            amount: session.amount_total ? session.amount_total / 100 : 0,
            currency: session.currency,
            payment_type: "",
            product_name: line_items.data[0].description,
            status: "completed",
            stripe_object_id: session.id,
            stripe_customer_id: session.customer as string,
            stripe_event_object: { event, line_items },
            user: user.id,
          })
        );
      } catch (error) {
        console.log("error creating the user purchase", error);
      }

      // Depending on the product line item update the user's paid_boosts or add credits
      if (
        line_items.data[0].description &&
        line_items.data[0].description.includes("Credits")
      ) {
        console.log(
          "is a credit transaction for amount",
          line_items.data[0].amount_total / 10,
          "user current credits",
          user.remaining_credits ?? 0,
          "user new credits ",
          (user.remaining_credits ?? 0) + line_items.data[0].amount_total / 10
        );
        const newcredits =
          (user.remaining_credits ?? 0) + line_items.data[0].amount_total / 10;
        const addedcredits = await directus_app.request(
          updateUser(user.id, {
            remaining_credits: newcredits,
          })
        );
        console.log("🚀 ~ POST ~ addedcredits:", addedcredits);
        await fetch(
          `${process.env.NEXT_PUBLIC_CHAT_SERVER_URL}/api/new-credits`,
          {
            method: "POST",
            body: JSON.stringify({ userId: user.id, credits: newcredits }),
          }
        );
      }

      if (
        line_items.data[0].description &&
        line_items.data[0].description.includes("Boost")
      ) {
        console.log("is a boost transaction");
        // Update the user's paid_boosts
        const newPaidBoost =
          (user.paid_boosts ?? 0) + (line_items.data[0]?.quantity ?? 0);
        await directus_app.request(
          updateUser(user.id, {
            paid_boosts: newPaidBoost,
          })
        );
      }
    }
  }
  return NextResponse.json({ message: "Webhook received" }, { status: 200 });
}
