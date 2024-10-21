import { Languages } from "@/types/directus_core/languages";

export type Currencies = {
  code?: string | null;
  id: number;
  name?: string | null;
};

export type Months = {
  id: number;
  name?: string | null;
  translations: any[] | MonthsTranslations[];
};

export type MonthsTranslations = {
  id: number;
  languages_code?: string | Languages | null;
  months_id?: number | Months | null;
  name?: string | null;
};

export type SwissCities = {
  geo_localization?: string | null;
  id: number;
  name?: string | null;
  region?: string | null;
  zip_code?: number | null;
};

export type Weekdays = {
  id: number;
  name?: string | null;
  sort?: number | null;
  translations: any[] | WeekdaysTranslations[];
};

export type WeekdaysTranslations = {
  id: number;
  languages_code?: string | Languages | null;
  name?: string | null;
  weekdays_id?: number | Weekdays | null;
};
