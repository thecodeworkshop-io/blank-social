import { triggerFlow } from '@directus/sdk'

import { NextResponse } from 'next/server'

import directus_app from '@/lib/directus_app'

export async function GET(request: Request) {
  try {
    const response = await directus_app.request(
      triggerFlow('GET', 'e95dfb1f-cdfe-48de-a1d6-3795dfede886')
    )

    return NextResponse.json(
      { message: `Webhook received at ${new Date().toLocaleString()}` },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: `Webhook failed at ${new Date().toLocaleString()}` },
      { status: 500 }
    )
  }
}
