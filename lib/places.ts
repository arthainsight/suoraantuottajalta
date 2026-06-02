import placesData from "@/data/places.sample.json";
import lahituottajatSeedData from "@/data/lahituottajat.seed.json";
import { regions } from "@/lib/regions";
import { slugify } from "@/lib/slugify";

export type Place = {
  id: string;
  name: string;
  slug: string;
  description: string;
  type: string;
  subtype: string;
  sales_model: "suoraan_tuottajalta" | "lyhyt_ketju" | "epaselva" | string;
  address: string | null;
  postal_code: string | null;
  municipality: string;
  region: string;
  latitude: number | null;
  longitude: number | null;
  products: string[];
  opening_hours: string | null;
  seasonality: string;
  website_url: string | null;
  facebook_url: string | null;
  instagram_url: string | null;
  email: string | null;
  phone: string | null;
  source_name: string;
  source_url: string | null;
  verification_status: "pending" | "verified" | "needs_review" | string;
  last_checked_at: string;
};

export function getPlaces(): Place[] {
  return [...(placesData as Place[]), ...(lahituottajatSeedData as Place[])];
}

export function getPlaceBySlug(slug: string): Place | undefined {
  return getPlaces().find((place) => place.slug === slug);
}

export function getPlacesByRegionSlug(regionSlug: string): Place[] {
  const region = getRegionBySlug(regionSlug);

  if (!region) {
    return [];
  }

  return getPlaces().filter((place) => place.region === region.name);
}

export function getRegionBySlug(slug: string) {
  return regions.find((region) => region.slug === slug);
}

export function getRegionSlug(regionName: string): string {
  const region = regions.find((item) => item.name === regionName);

  return region?.slug ?? slugify(regionName);
}
