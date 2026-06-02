import { notFound } from "next/navigation";
import { getPlaceBySlug, getPlaces } from "@/lib/places";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getPlaces().map((place) => ({ slug: place.slug }));
}

export default function PlacePage({ params }: Props) {
  const place = getPlaceBySlug(params.slug);

  if (!place) {
    notFound();
  }

  return (
    <section className="section">
      <div className="container">
        <div className="card">
          <div className="eyebrow">{place.region}</div>
          <h1>{place.name}</h1>
          <p>{place.description}</p>
          <div className="badges">
            <span className="badge">{place.type}</span>
            <span className="badge">{place.sales_model}</span>
            <span className="badge warning">{place.verification_status}</span>
          </div>
          <div className="grid three" style={{ marginTop: 28 }}>
            <div>
              <h3>Sijainti</h3>
              <p>{place.address || "Osoite puuttuu"}</p>
              <p>{place.municipality}, {place.region}</p>
            </div>
            <div>
              <h3>Tuotteet</h3>
              <p>{place.products.join(", ")}</p>
            </div>
            <div>
              <h3>Aukiolo</h3>
              <p>{place.opening_hours || "Ei tiedossa"}</p>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <h3>Lähde</h3>
            <p>{place.source_name}</p>
            <p>Viimeksi tarkistettu: {place.last_checked_at}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
