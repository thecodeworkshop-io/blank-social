import { Pages } from '@/types/directus_core/blogs_pages_documents'
import { DirectusUsers } from '@/types/directus_core/directus'
import { Languages } from '@/types/directus_core/languages'

export type Footer = {
  date_created?: string | null
  date_updated?: string | null
  id: string
  status: string
  translations: any[] | FooterTranslations[]
  user_created?: string | DirectusUsers | null
  user_updated?: string | DirectusUsers | null
}

export type FooterTranslations = {
  final_words?: string | null
  first_column?: string | null
  footer_id?: string | Footer | null
  id: number
  languages_code?: string | Languages | null
  second_column?: string | null
}

export type NavigationItems = {
  display?: string | null
  id: number
  navigation?: number | Navigations | null
  pages: any[] | Pages[]
  sort?: number | null
  translations: any[] | NavigationItemsTranslations[]
  url?: string | null
}

export type NavigationItemsTranslations = {
  id: number
  languages_code?: string | Languages | null
  navigation_items_id?: number | NavigationItems | null
  text?: string | null
}

export type Navigations = {
  id: number
  items: any[] | NavigationItems[]
  name?: string | null
  translations: any[] | NavigationsTranslations[]
}

export type NavigationsTranslations = {
  id: number
  languages_code?: string | Languages | null
  navigations_id?: number | Navigations | null
  role?: string | null
}
