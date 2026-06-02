import { PlaceCard } from "@/components/PlaceCard";
import { PlaceFilters } from "@/components/PlaceFilters";
import { getPlaces } from "@/lib/places";

export default function DirectoryPage() {
  const places = getPlaces();

  return (
    <section className="section">
      <div className="container">
        <div className="eyebrow">Hakemisto</div>
        <h1>Kaikki kohteet</h1>
        <p>
          Lista näyttää nykyisen sample-aineiston. Data laajennetaan myöhemmin
          kattavaksi ja tarkistetuksi hakemistoksi.
        </p>
        <PlaceFilters />
        <div className="place-grid">
          {places.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </div>
    </section>
  );
}
