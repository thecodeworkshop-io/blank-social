import { PaymentMethods } from '@/types/directus_core/business'
import { DirectusFiles, DirectusUsers } from '@/types/directus_core/directus'
import { SwissCities, Weekdays } from '@/types/directus_core/general'
import { Languages, SpokenLanguages } from '@/types/directus_core/languages'
import { Services } from '@/types/directus_core/profiles'
import {
  Availabilites,
  HomeRates,
} from '@/types/directus_core/rates_availabilities'

export type SalonOpeningHours = {
  day?: number | Weekdays | null
  from?: string | null
  id: number
  salon?: string | DirectusUsers | null
  to?: string | null
}

export type SalonProfile = {
  about?: string | null
  boost_active?: boolean | null
  boost_active_on?: string | null
  boost_can_be_triggered_again_on?: string | null
  boost_deactivate_on?: string | null
  boost_executed_on?: string | null
  boost_to_be_renewed_on?: string | null
  boost_type?: string | null
  category?: string | null
  date_created?: string | null
  date_updated?: string | null
  home_rates: any[] | HomeRates[]
  id: string
  images: any[] | SalonProfileFiles[]
  localization?: SwissCities | null
  logo?: string | DirectusFiles | null
  name?: string | null
  new_availabilities?: any[] | []
  new_home_rates?: any[] | []
  number_of_girls?: number | null
  open_247?: boolean | null
  paused: boolean | null
  payment_methods: any[] | PaymentMethods[]
  phone?: string | null
  presentation_videos: any[] | SalonProfileFiles4[]
  schedule: any[] | SalonProfileAvailabilites[]
  services: any[] | SalonProfileServices[]
  slug?: string | null
  sort?: number | null
  spoken_languages: any[] | SalonProfileSpokenLanguages[]
  status: string
  translations: any[] | SalonProfileTranslations[]
  user?: string | DirectusUsers | null
  user_created?: string | DirectusUsers | null
  user_updated?: string | DirectusUsers | null
  website?: string | null
}

export type SalonProfileAvailabilites = {
  availabilites_id?: number | Availabilites | null
  id: number
  salon_profile_id?: string | SalonProfile | null
}

export type SalonProfileFiles = {
  directus_files_id?: string | DirectusFiles | null
  id: number
  salon_profile_id?: string | SalonProfile | null
}

export type SalonProfileFiles1 = {
  directus_files_id?: string | DirectusFiles | null
  id: number
  salon_profile_id?: string | SalonProfile | null
}

export type SalonProfileFiles2 = {
  directus_files_id?: string | DirectusFiles | null
  id: number
  salon_profile_id?: string | SalonProfile | null
}

export type SalonProfileFiles3 = {
  directus_files_id?: string | DirectusFiles | null
  id: number
  salon_profile_id?: string | SalonProfile | null
}

export type SalonProfileFiles4 = {
  directus_files_id?: string | DirectusFiles | null
  id: number
  salon_profile_id?: string | SalonProfile | null
}

export type SalonProfileServices = {
  id: number
  salon_profile_id?: string | SalonProfile | null
  services_id?: number | Services | null
}

export type SalonProfileSpokenLanguages = {
  id: number
  salon_profile_id?: string | SalonProfile | null
  spoken_languages_id?: number | SpokenLanguages | null
}

export type SalonProfileTranslations = {
  about?: string | null
  id: number
  languages_code?: string | Languages | null
  salon_profile_id?: string | SalonProfile | null
}
