export type Languages = {
  code: string
  direction?: string | null
  name?: string | null
  sort?: number | null
}

export type SpokenLanguages = {
  id: number
  is_a_most_commun_language?: boolean | null
  name?: string | null
  sort?: number | null
  translations: any[] | SpokenLanguagesTranslations[]
}

export type SpokenLanguagesTranslations = {
  id: number
  languages_code?: string | Languages | null
  name?: string | null
  spoken_languages_id?: number | SpokenLanguages | null
}
