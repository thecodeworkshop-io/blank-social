import { DirectusUsers } from '@/types/directus_core/directus'
import { Languages } from '@/types/directus_core/languages'

export type Challenges = {
  date_created?: string | null
  date_updated?: string | null
  id: number
  prompt?: string | null
  sort?: number | null
  status: string
  translations: any[] | ChallengesTranslations[]
  user_created?: string | DirectusUsers | null
  user_updated?: string | DirectusUsers | null
}

export type ChallengesTranslations = {
  challenges_id?: number | Challenges | null
  id: number
  instruction?: string | null
  languages_code?: string | Languages | null
}

export type EmailConfirmation = {
  date_created?: string | null
  id: string
  user_id?: string | null
}

export type EmailReset = {
  date_created?: string | null
  user_id?: string | null
  id: string
}
