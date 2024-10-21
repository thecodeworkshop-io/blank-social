import {
  Blogs,
  FrontPageIntroComponent,
  FrontPageIntroComponentTranslations,
  HighlightsComponent,
  LegalDocuments,
  LegalDocumentsTranslations,
  NewProfilesComponent,
  Pages,
  PagesContent,
  PagesTranslations,
  TextComponent,
  TextComponentTranslations,
} from "@/types/directus_core/blogs_pages_documents";
import {
  Boosts,
  BoostsTranslations,
  CreditPacks,
  CreditTransactions,
  Gifts,
  GiftsTranslations,
  Offerings,
  PaymentMethods,
  Products,
  ProductsTranslations,
  Promotions,
  PromotionsProducts,
  SalonsProfilesComponent,
  ShoppingCarts,
  SubscriptionDurations,
  Subscriptions,
  SubscriptionsTranslations,
  UserPurchases,
  VerotelTransactions,
} from "@/types/directus_core/business";
import {
  DirectusActivity,
  DirectusCollections,
  DirectusDashboards,
  DirectusExtensions,
  DirectusFields,
  DirectusFiles,
  DirectusFlows,
  DirectusFolders,
  DirectusMigrations,
  DirectusNotifications,
  DirectusOperations,
  DirectusPanels,
  DirectusPermissions,
  DirectusPresets,
  DirectusRelations,
  DirectusRevisions,
  DirectusRoles,
  DirectusSessions,
  DirectusSettings,
  DirectusShares,
  DirectusTranslations,
  DirectusUsers,
  DirectusVersions,
  DirectusWebhooks,
  JunctionDirectusRolesTranslations,
  JunctionDirectusUsersFiles,
  JunctionDirectusUsersPaymentMethods,
  JunctionDirectusUsersSpokenLanguages,
} from "@/types/directus_core/directus";
import {
  Currencies,
  Months,
  MonthsTranslations,
  SwissCities,
  Weekdays,
  WeekdaysTranslations,
} from "@/types/directus_core/general";
import {
  Footer,
  FooterTranslations,
  NavigationItems,
  NavigationItemsTranslations,
  Navigations,
  NavigationsTranslations,
} from "@/types/directus_core/interface";
import {
  Languages,
  SpokenLanguages,
  SpokenLanguagesTranslations,
} from "@/types/directus_core/languages";
import {
  Challenges,
  ChallengesTranslations,
  EmailConfirmation,
  EmailReset,
} from "@/types/directus_core/process";

import {
  Availabilites,
  AwayRates,
  HomeRates,
  ProfilesAvailabilites,
} from "@/types/directus_core/rates_availabilities";
import {
  SalonOpeningHours,
  SalonProfile,
  SalonProfileAvailabilites,
  SalonProfileFiles,
  SalonProfileFiles1,
  SalonProfileFiles2,
  SalonProfileFiles3,
  SalonProfileFiles4,
  SalonProfileServices,
  SalonProfileSpokenLanguages,
  SalonProfileTranslations,
} from "@/types/directus_core/salon_profiles";
import {
  Comments,
  Likes,
  Messages,
  Ratings,
  Visits,
} from "@/types/directus_core/social";

export type CustomDirectusTypes = {
  availabilites: Availabilites[];
  away_rates: AwayRates[];
  blogs: Blogs[];
  boosts: Boosts[];
  boosts_translations: BoostsTranslations[];
  challenges: Challenges[];
  challenges_translations: ChallengesTranslations[];
  credit_packs: CreditPacks[];
  credit_transactions: CreditTransactions[];
  comments: Comments[];
  currencies: Currencies[];
  directus_activity: DirectusActivity[];
  directus_collections: DirectusCollections[];
  directus_dashboards: DirectusDashboards[];
  directus_extensions: DirectusExtensions[];
  directus_fields: DirectusFields[];
  directus_files: DirectusFiles[];
  directus_flows: DirectusFlows[];
  directus_folders: DirectusFolders[];
  directus_migrations: DirectusMigrations[];
  directus_notifications: DirectusNotifications[];
  directus_operations: DirectusOperations[];
  directus_panels: DirectusPanels[];
  directus_permissions: DirectusPermissions[];
  directus_presets: DirectusPresets[];
  directus_relations: DirectusRelations[];
  directus_revisions: DirectusRevisions[];
  directus_roles: DirectusRoles[];
  directus_sessions: DirectusSessions[];
  directus_settings: DirectusSettings;
  directus_shares: DirectusShares[];
  directus_translations: DirectusTranslations[];
  directus_users: DirectusUsers[];
  directus_versions: DirectusVersions[];
  directus_webhooks: DirectusWebhooks[];
  email_confirmation: EmailConfirmation[];
  email_reset: EmailReset[];

  footer: Footer;
  footer_translations: FooterTranslations[];
  front_page_intro_component: FrontPageIntroComponent[];
  front_page_intro_component_translations: FrontPageIntroComponentTranslations[];

  gifts: Gifts[];
  gifts_translations: GiftsTranslations[];

  highlights_component: HighlightsComponent[];
  home_rates: HomeRates[];
  junction_directus_roles_translations: JunctionDirectusRolesTranslations[];
  junction_directus_users_files: JunctionDirectusUsersFiles[];
  junction_directus_users_payment_methods: JunctionDirectusUsersPaymentMethods[];
  junction_directus_users_spoken_languages: JunctionDirectusUsersSpokenLanguages[];
  languages: Languages[];
  legal_documents: LegalDocuments[];
  legal_documents_translations: LegalDocumentsTranslations[];
  likes: Likes[];
  messages: Messages[];
  months: Months[];
  months_translations: MonthsTranslations[];
  navigation_items: NavigationItems[];
  navigation_items_translations: NavigationItemsTranslations[];
  navigations: Navigations[];
  navigations_translations: NavigationsTranslations[];
  new_profiles_component: NewProfilesComponent[];
  offerings: Offerings[];

  pages: Pages[];
  pages_content: PagesContent[];
  pages_translations: PagesTranslations[];
  payment_methods: PaymentMethods[];
  products: Products[];
  products_translations: ProductsTranslations[];

  profiles_availabilites: ProfilesAvailabilites[];

  promotions: Promotions[];
  promotions_products: PromotionsProducts[];
  ratings: Ratings[];
  salon_opening_hours: SalonOpeningHours[];
  salon_profile: SalonProfile[];
  salon_profile_availabilites: SalonProfileAvailabilites[];
  salon_profile_files: SalonProfileFiles[];
  salon_profile_files_1: SalonProfileFiles1[];
  salon_profile_files_2: SalonProfileFiles2[];
  salon_profile_files_3: SalonProfileFiles3[];
  salon_profile_files_4: SalonProfileFiles4[];
  salon_profile_services: SalonProfileServices[];
  salon_profile_spoken_languages: SalonProfileSpokenLanguages[];
  salon_profile_translations: SalonProfileTranslations[];
  salons_profiles_component: SalonsProfilesComponent[];

  shopping_carts: ShoppingCarts[];

  spoken_languages: SpokenLanguages[];
  spoken_languages_translations: SpokenLanguagesTranslations[];
  subscription_durations: SubscriptionDurations[];
  subscriptions: Subscriptions[];
  subscriptions_translations: SubscriptionsTranslations[];
  swiss_cities: SwissCities[];
  text_component: TextComponent[];
  text_component_translations: TextComponentTranslations[];
  user_purchases: UserPurchases[];
  verotel_transactions: VerotelTransactions[];
  visits: Visits[];
  weekdays: Weekdays[];
  weekdays_translations: WeekdaysTranslations[];
};
