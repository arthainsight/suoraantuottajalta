import { notFound } from "next/navigation";
import { PlaceCard } from "@/components/PlaceCard";
import { getPlacesByRegionSlug, getRegionBySlug } from "@/lib/places";
import { regions } from "@/lib/regions";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return regions.map((region) => ({ slug: region.slug }));
}

export default function RegionPage({ params }: Props) {
  const region = getRegionBySlug(params.slug);

  if (!region) {
    notFound();
  }

  const places = getPlacesByRegionSlug(params.slug);

  return (
    <section className="section">
      <div className="container">
        <div className="eyebrow">Maakunta</div>
        <h1>Osta lähiruokaa: {region.name}</h1>
        <p>
          Maakuntasivu kokoaa alueen suoramyynti- ja lyhyen ketjun kohteet.
          Sisältö täydentyy datankeruun edetessä.
        </p>
        <div className="place-grid" style={{ marginTop: 24 }}>
          {places.length > 0 ? (
            places.map((place) => <PlaceCard key={place.id} place={place} />)
          ) : (
            <div className="card">
              <h3>Ei kohteita vielä</h3>
              <p>Tälle maakunnalle ei ole vielä sample-aineistoa.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
