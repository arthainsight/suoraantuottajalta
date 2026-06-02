import type { Place } from "@/lib/places";

type FilterParams = {
  q?: string;
  type?: string;
  region?: string;
};

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export function filterPlaces(places: Place[], params: FilterParams): Place[] {
  const query = normalize(params.q ?? "");
  const type = normalize(params.type ?? "");
  const region = normalize(params.region ?? "");

  return places.filter((place) => {
    const searchableText = normalize([
      place.name,
      place.description,
      place.type,
      place.subtype,
      place.sales_model,
      place.municipality,
      place.region,
      place.products.join(" "),
    ].join(" "));

    const matchesQuery = query.length === 0 || searchableText.includes(query);
    const matchesType = type.length === 0 || normalize(place.type) === type;
    const matchesRegion = region.length === 0 || normalize(place.region) === region;

    return matchesQuery && matchesType && matchesRegion;
  });
}
