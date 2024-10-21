import { DirectusUsers } from "@/types/directus_core/directus";
import { Profiles } from "@/types/directus_core/profiles";

export type Comments = {
  about_profile?: string | Profiles | null;
  comment?: string | null;
  date_created?: string | null;
  id: number;
  user_created?: string | DirectusUsers | null;
};

export type Likes = {
  date_created?: string | null;
  id: number;
  profile?: string | Profiles | null;
  user_created?: string | DirectusUsers | null;
};

export type Messages = {
  date_created?: string | null;
  id: number;
  is_gift?: boolean | null;
  message?: string | null;
  to_user?: string | DirectusUsers | null;
  user_created?: string | DirectusUsers | null;
};

export type Ratings = {
  date_created?: string | null;
  date_updated?: string | null;
  from?: string | DirectusUsers | null;
  id: number;
  rated_profile?: string | Profiles | null;
  rating?: number | null;
};

export type Visits = {
  date_created?: string | null;
  from?: string | DirectusUsers | null;
  id: number;
  visit?: string | Profiles | null;
};
