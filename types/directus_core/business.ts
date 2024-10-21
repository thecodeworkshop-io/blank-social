import { DirectusFiles, DirectusUsers } from '@/types/directus_core/directus'
import { Currencies } from '@/types/directus_core/general'
import { Languages } from '@/types/directus_core/languages'
import { Profiles } from '@/types/directus_core/profiles'
import { SalonProfile } from '@/types/directus_core/salon_profiles'

export type Boosts = {
  date_created?: string | null
  date_updated?: string | null
  id: string
  name?: string | null
  number_of_boosts?: number | null
  price?: number | null
  sort?: number | null
  stripe_payment_link?: string | null
  translations: any[] | BoostsTranslations[]
  user_created?: string | DirectusUsers | null
  user_updated?: string | DirectusUsers | null
}

export type BoostsTranslations = {
  boosts_id?: string | Boosts | null
  description?: string | null
  id: number
  languages_code?: string | Languages | null
}

export type CreditPacks = {
  amount?: number | null
  credits?: number | null
  id: string
  name?: string | null
  stripe_url?: string | null
}

export type CreditTransactions = {
  amount?: number | null
  date_created?: string | null
  from_user?: string | DirectusUsers | null
  id: string
  to_user?: string | DirectusUsers | null
}

export type Gifts = {
  credit_cost?: number | null
  id: number
  image?: string | DirectusFiles | null
  translations: any[] | GiftsTranslations[]
}

export type GiftsTranslations = {
  description?: string | null
  gifts_id?: number | Gifts | null
  id: number
  languages_code?: string | Languages | null
  name?: string | null
}

export type Offerings = {
  date_created?: string | null
  gift?: number | Gifts | null
  id: number
  to_user?: string | Profiles | null
  user_created?: string | DirectusUsers | null
}

export type SalonsProfilesComponent = {
  id: number
}

export type PaymentMethods = {
  id: number
  name?: string | null
  profile?: string | Profiles | null
  salon_payment_methods?: string | SalonProfile | null
}

export type Products = {
  boosts?: number | null
  credits?: number | null
  currency?: number | Currencies | null
  date_created?: string | null
  date_updated?: string | null
  duration?: number | null
  id: string
  name?: string | null
  price?: number | null
  promotions: any[] | PromotionsProducts[]
  sort?: number | null
  status: string
  time_unit?: string | null
  translations: any[] | ProductsTranslations[]
  type?: string | null
  user_created?: string | DirectusUsers | null
  user_updated?: string | DirectusUsers | null
}

export type ProductsTranslations = {
  arguments?: unknown | null
  id: number
  languages_code?: string | Languages | null
  name?: string | null
  products_id?: string | Products | null
  short_description?: string | null
}

export type Promotions = {
  amount?: string | null
  date_created?: string | null
  date_updated?: string | null
  from?: string | null
  id: string
  name?: string | null
  product: any[] | PromotionsProducts[]
  sort?: number | null
  to?: string | null
  type?: string | null
  user_created?: string | DirectusUsers | null
  user_updated?: string | DirectusUsers | null
}

export type PromotionsProducts = {
  id: number
  products_id?: string | Products | null
  promotions_id?: string | Promotions | null
}

export type ShoppingCarts = {
  date_created?: string | null
  date_updated?: string | null
  id: string
  items?: unknown | null
  sort?: number | null
  status: string
  taxes?: number | null
  total_after_promotion?: number | null
  total_before_promotion?: number | null
  user_created?: string | DirectusUsers | null
  user_updated?: string | DirectusUsers | null
}

export type Subscriptions = {
  a_la_carte_ratio?: number | null
  category?: string | null
  date_created?: string | null
  date_updated?: string | null
  durations: any[] | SubscriptionDurations[]
  id: number
  max_profiles?: number | null
  max_pictures?: number | null
  max_stories?: number | null
  max_videos?: number | null
  name?: string | null
  salon_rate_per_profile?: unknown | null
  sort?: number | null
  status: string
  translations: any[] | SubscriptionsTranslations[]
  user_created?: string | DirectusUsers | null
  user_updated?: string | DirectusUsers | null
}

export type SubscriptionDurations = {
  amount?: number | null
  days?: number | null
  id: number
  stripe_alacarte_price_id?: string | null
  stripe_alacarte_url?: string | null
  stripe_price_id?: string | null
  stripe_url?: string | null
  subscription?: number | Subscriptions | null
}

export type SubscriptionsTranslations = {
  advantages?: string | null
  description?: string | null
  id: number
  languages_code?: string | Languages | null
  name?: string | null
  subscriptions_id?: number | Subscriptions | null
}

export type UserPurchases = {
  amount?: number | null
  currency?: string | null
  date_created?: string | null
  date_updated?: string | null
  id: string
  payment_type?: string | null
  product_name?: string | null
  status: string
  stripe_customer_id?: string | null
  stripe_event_object?: unknown | null
  stripe_invoice_id?: string | null
  stripe_object_id?: string | null
  stripe_subscription_id?: string | null
  subscription_valid_from?: string | null
  subscription_valid_to?: string | null
  user?: string | DirectusUsers | null
  user_created?: string | DirectusUsers | null
  user_updated?: string | DirectusUsers | null
}

export type VerotelTransactions = {
  date_created?: string | null
  id: string
  postback_data?: unknown | null
  user_created?: string | DirectusUsers | null
  user_id?: string | DirectusUsers | null
}
