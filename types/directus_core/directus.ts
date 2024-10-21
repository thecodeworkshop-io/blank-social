import {
  PaymentMethods,
  Subscriptions,
  UserPurchases,
} from '@/types/directus_core/business'
import { Languages, SpokenLanguages } from '@/types/directus_core/languages'
import { Profiles } from '@/types/directus_core/profiles'
import {
  SalonOpeningHours,
  SalonProfile,
} from '@/types/directus_core/salon_profiles'

// Core types
export type DirectusActivity = {
  action: string
  collection: string
  comment?: string | null
  id: number
  ip?: string | null
  item: string
  origin?: string | null
  revisions: any[] | DirectusRevisions[]
  timestamp: string
  user?: string | DirectusUsers | null
  user_agent?: string | null
}

export type DirectusCollections = {
  accountability?: string | null
  archive_app_filter: boolean
  archive_field?: string | null
  archive_value?: string | null
  collapse: string
  collection: string
  color?: string | null
  display_template?: string | null
  group?: string | DirectusCollections | null
  hidden: boolean
  icon?: string | null
  item_duplication_fields?: unknown | null
  note?: string | null
  preview_url?: string | null
  singleton: boolean
  sort?: number | null
  sort_field?: string | null
  translations?: unknown | null
  unarchive_value?: string | null
  versioning: boolean
}

export type DirectusDashboards = {
  color?: string | null
  date_created?: string | null
  icon: string
  id: string
  name: string
  note?: string | null
  panels: any[] | DirectusPanels[]
  user_created?: string | DirectusUsers | null
}

export type DirectusExtensions = {
  bundle?: string | null
  enabled: boolean
  folder: string
  id: string
  source: string
}

export type DirectusFields = {
  collection: string | DirectusCollections
  conditions?: unknown | null
  display?: string | null
  display_options?: unknown | null
  field: string
  group?: string | DirectusFields | null
  hidden: boolean
  id: number
  interface?: string | null
  note?: string | null
  options?: unknown | null
  readonly: boolean
  required?: boolean | null
  sort?: number | null
  special?: unknown | null
  translations?: unknown | null
  validation?: unknown | null
  validation_message?: string | null
  width?: string | null
}

export type DirectusFiles = {
  charset?: string | null
  description?: string | null
  duration?: number | null
  embed?: string | null
  filename_disk?: string | null
  filename_download: string
  filesize?: number | null
  focal_point_x?: number | null
  focal_point_y?: number | null
  folder?: string | DirectusFolders | null
  height?: number | null
  id: string
  image_sort?: number | null
  location?: string | null
  metadata?: unknown | null
  modified_by?: string | DirectusUsers | null
  modified_on: string
  storage: string
  tags?: unknown | null
  title?: string | null
  type?: string | null
  uploaded_by?: string | DirectusUsers | null
  uploaded_on: string
  width?: number | null
}

export type DirectusFlows = {
  accountability?: string | null
  color?: string | null
  date_created?: string | null
  description?: string | null
  icon?: string | null
  id: string
  name: string
  operation?: string | DirectusOperations | null
  operations: any[] | DirectusOperations[]
  options?: unknown | null
  status: string
  trigger?: string | null
  user_created?: string | DirectusUsers | null
}

export type DirectusFolders = {
  id: string
  name: string
  parent?: string | DirectusFolders | null
}

export type DirectusMigrations = {
  name: string
  timestamp?: string | null
  version: string
}

export type DirectusNotifications = {
  collection?: string | null
  id: number
  item?: string | null
  message?: string | null
  recipient: string | DirectusUsers
  sender?: string | DirectusUsers | null
  status?: string | null
  subject: string
  timestamp?: string | null
}

export type DirectusOperations = {
  date_created?: string | null
  flow: string | DirectusFlows
  id: string
  key: string
  name?: string | null
  options?: unknown | null
  position_x: number
  position_y: number
  reject?: string | DirectusOperations | null
  resolve?: string | DirectusOperations | null
  type: string
  user_created?: string | DirectusUsers | null
}

export type DirectusPanels = {
  color?: string | null
  dashboard: string | DirectusDashboards
  date_created?: string | null
  height: number
  icon?: string | null
  id: string
  name?: string | null
  note?: string | null
  options?: unknown | null
  position_x: number
  position_y: number
  show_header: boolean
  type: string
  user_created?: string | DirectusUsers | null
  width: number
}

export type DirectusPermissions = {
  action: string
  collection: string
  fields?: unknown | null
  id: number
  permissions?: unknown | null
  presets?: unknown | null
  role?: string | DirectusRoles | null
  validation?: unknown | null
}

export type DirectusPresets = {
  bookmark?: string | null
  collection?: string | null
  color?: string | null
  filter?: unknown | null
  icon?: string | null
  id: number
  layout?: string | null
  layout_options?: unknown | null
  layout_query?: unknown | null
  refresh_interval?: number | null
  role?: string | DirectusRoles | null
  search?: string | null
  user?: string | DirectusUsers | null
}

export type DirectusRelations = {
  id: number
  junction_field?: string | null
  many_collection: string
  many_field: string
  one_allowed_collections?: unknown | null
  one_collection?: string | null
  one_collection_field?: string | null
  one_deselect_action: string
  one_field?: string | null
  sort_field?: string | null
}

export type DirectusRevisions = {
  activity: number | DirectusActivity
  collection: string
  data?: unknown | null
  delta?: unknown | null
  id: number
  item: string
  parent?: number | DirectusRevisions | null
  version?: string | DirectusVersions | null
}

export type DirectusRoles = {
  admin_access: boolean
  app_access: boolean
  description?: string | null
  display_in_frontend?: boolean | null
  enforce_tfa: boolean
  icon: string
  id: string
  ip_access?: unknown | null
  name: string
  sort?: number | null
  span?: string | null
  style?: string | null
  translations: any[] | JunctionDirectusRolesTranslations[]
  users: any[] | DirectusUsers[]
}

export type DirectusSessions = {
  expires: string
  ip?: string | null
  next_token?: string | null
  origin?: string | null
  share?: string | DirectusShares | null
  token: string
  user?: string | DirectusUsers | null
  user_agent?: string | null
}

export type DirectusSettings = {
  auth_login_attempts?: number | null
  auth_password_policy?: string | null
  basemaps?: unknown | null
  custom_aspect_ratios?: unknown | null
  custom_css?: string | null
  default_appearance: string
  default_language: string
  default_theme_dark?: string | null
  default_theme_light?: string | null
  id: number
  mapbox_key?: string | null
  module_bar?: unknown | null
  project_color: string
  project_descriptor?: string | null
  project_logo?: string | DirectusFiles | null
  project_name: string
  project_url?: string | null
  public_background?: string | DirectusFiles | null
  public_favicon?: string | DirectusFiles | null
  public_foreground?: string | DirectusFiles | null
  public_note?: string | null
  public_registration: boolean
  public_registration_email_filter?: unknown | null
  public_registration_role?: string | null
  public_registration_verify_email: boolean
  report_bug_url?: string | null
  report_error_url?: string | null
  report_feature_url?: string | null
  storage_asset_presets?: unknown | null
  storage_asset_transform?: string | null
  storage_default_folder?: string | DirectusFolders | null
  theme_dark_overrides?: unknown | null
  theme_light_overrides?: unknown | null
  theming_group: string
}

export type DirectusShares = {
  collection: string | DirectusCollections
  date_created?: string | null
  date_end?: string | null
  date_start?: string | null
  id: string
  item: string
  max_uses?: number | null
  name?: string | null
  password?: string | null
  role?: string | DirectusRoles | null
  times_used?: number | null
  user_created?: string | DirectusUsers | null
}

export type DirectusTranslations = {
  id: string
  key: string
  language: string
  value: string
}

export type DirectusUsers = {
  active_subscription: number | Subscriptions | null
  appearance?: string | null
  auth_data?: unknown | null
  avatar?: string | DirectusFiles | null
  billing_additional_information?: string | null
  billing_address_1?: string | null
  billing_address_2?: string | null
  billing_city?: string | null
  billing_country?: string | null
  billing_geocoding?: string | null
  billing_phone?: string | null
  billing_region?: string | null
  billing_zipcode?: string | null
  birthdate?: string | null
  boosts_available: number | null
  category?: string | null
  chat_nickname?: string | null
  description?: string | null
  email?: string | null
  email_notifications?: boolean | null
  external_identifier?: string | null
  first_name?: string | null
  free_boosts?: number | null
  id: string
  images: any[] | JunctionDirectusUsersFiles[]
  language?: string | null
  last_access?: string | null
  last_name?: string | null
  last_page?: string | null
  location?: string | null
  open_247?: boolean | null
  opening_hours: any[] | SalonOpeningHours[]
  paid_boosts?: number | null
  password?: string | null
  payment_methods: any[] | JunctionDirectusUsersPaymentMethods[]
  profiles: any[] | Profiles[]
  provider: string
  received_credits?: number | null
  remaining_credits?: number | null
  role?: string | DirectusRoles | null
  salon_profile: any[] | SalonProfile[]
  spoken_languages: any[] | JunctionDirectusUsersSpokenLanguages[]
  status: string
  subscription_date: string | null
  subscription_expiry: string | null
  tags?: unknown | null
  tfa_secret?: string | null
  theme_dark?: string | null
  theme_dark_overrides?: unknown | null
  theme_light?: string | null
  theme_light_overrides?: unknown | null
  title?: string | null
  token?: string | null
  user_purchases: any[] | UserPurchases[]
  username?: string | null
  website?: string | null
}

export type DirectusVersions = {
  collection: string | DirectusCollections
  date_created?: string | null
  date_updated?: string | null
  hash?: string | null
  id: string
  item: string
  key: string
  name?: string | null
  user_created?: string | DirectusUsers | null
  user_updated?: string | DirectusUsers | null
}

export type DirectusWebhooks = {
  actions: unknown
  collections: unknown
  data: boolean
  headers?: unknown | null
  id: number
  method: string
  migrated_flow?: string | null
  name: string
  status: string
  url: string
  was_active_before_deprecation: boolean
}

// Junction types
export type JunctionDirectusRolesTranslations = {
  directus_roles_id?: string | DirectusRoles | null
  id: number
  languages_code?: string | Languages | null
  role_signup_description?: string | null
  role_signup_title?: string | null
}

export type JunctionDirectusUsersFiles = {
  directus_files_id?: string | DirectusFiles | null
  directus_users_id?: string | DirectusUsers | null
  id: number
}

export type JunctionDirectusUsersPaymentMethods = {
  directus_users_id?: string | DirectusUsers | null
  id: number
  payment_methods_id?: number | PaymentMethods | null
}

export type JunctionDirectusUsersSpokenLanguages = {
  directus_users_id?: string | DirectusUsers | null
  id: number
  spoken_languages_id?: number | SpokenLanguages | null
}
