import Link from "next/link";
import type { Place } from "@/lib/places";

type Props = {
  place: Place;
};

export function PlaceCard({ place }: Props) {
  return (
    <article className="card">
      <div className="eyebrow">
        {place.municipality} · {place.region}
      </div>
      <h3>
        <Link href={`/kohde/${place.slug}`}>{place.name}</Link>
      </h3>
      <p>{place.description}</p>
      <div className="badges">
        <span className="badge">{place.type}</span>
        <span className="badge">{place.sales_model}</span>
        <span className="badge warning">{place.verification_status}</span>
      </div>
    </article>
  );
}
