import { Currencies, Weekdays } from '@/types/directus_core/general'
import { Profiles } from '@/types/directus_core/profiles'
import { SalonProfile } from '@/types/directus_core/salon_profiles'

export type AwayRates = {
  amount?: number | null
  currency?: number | Currencies | null
  duration?: number | null
  id: number
  profile?: string | Profiles | null
  time_unit?: string | null
}

export type HomeRates = {
  amount?: number | null
  currency?: number | Currencies | null
  duration?: number | null
  id: number
  profile?: string | Profiles | null
  salon_id?: string | SalonProfile | null
  time_unit?: string | null
}

export type ProfilesAvailabilites = {
  availabilites_id?: number | Availabilites | null
  id: number
  profiles_id?: string | Profiles | null
}

export type Availabilites = {
  day?: number | Weekdays | null
  from?: string | null
  id: number
  not_available?: boolean | null
  to?: string | null
  user?: string | Profiles | null
}
