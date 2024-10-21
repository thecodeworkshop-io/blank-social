import { DirectusUsers } from '@/types/directus_core/directus'
import { NavigationItems } from '@/types/directus_core/interface'
import { Languages } from '@/types/directus_core/languages'

export type Blogs = {
  date_created?: string | null
  date_updated?: string | null
  id: string
  sort?: number | null
  status: string
  user_created?: string | DirectusUsers | null
  user_updated?: string | DirectusUsers | null
}

export type Pages = {
  content: any[] | PagesContent[]
  date_created?: string | null
  date_updated?: string | null
  id: string
  navigation_item?: number | NavigationItems | null
  sort?: number | null
  status: string
  translations: any[] | PagesTranslations[]
  user_created?: string | DirectusUsers | null
  user_updated?: string | DirectusUsers | null
}
export type PagesContent = {
  collection?: string | null
  id: number
  item?: string | any | null
  pages_id?: string | Pages | null
  sort?: number | null
}

export type PagesTranslations = {
  id: number
  languages_code?: string | Languages | null
  page_title?: string | null
  pages_id?: string | Pages | null
  seo_description?: string | null
  seo_keywords?: unknown | null
  seo_title?: string | null
}

export type LegalDocuments = {
  applicable?: unknown | null
  date_created?: string | null
  date_updated?: string | null
  id: string
  sort?: number | null
  status: string
  translations: any[] | LegalDocumentsTranslations[]
  type?: string | null
  user_created?: string | DirectusUsers | null
  user_updated?: string | DirectusUsers | null
}

export type LegalDocumentsTranslations = {
  id: number
  languages_code?: string | Languages | null
  legal_documents_id?: string | LegalDocuments | null
  text?: string | null
}

export type FrontPageIntroComponent = {
  id: number
  translations: any[] | FrontPageIntroComponentTranslations[]
}

export type FrontPageIntroComponentTranslations = {
  front_page_intro_component_id?: number | FrontPageIntroComponent | null
  id: number
  languages_code?: string | Languages | null
  lines?: unknown | null
}

export type HighlightsComponent = {
  id: string
}

export type NewProfilesComponent = {
  id: number
}

export type TextComponent = {
  date_created?: string | null
  date_updated?: string | null
  id: string
  translations: any[] | TextComponentTranslations[]
  user_created?: string | DirectusUsers | null
  user_updated?: string | DirectusUsers | null
}

export type TextComponentTranslations = {
  id: number
  languages_code?: string | Languages | null
  text?: string | null
  text_component_id?: string | TextComponent | null
}
