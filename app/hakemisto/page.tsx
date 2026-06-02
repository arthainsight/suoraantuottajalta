import { PlaceCard } from "@/components/PlaceCard";
import { PlaceFilters } from "@/components/PlaceFilters";
import { filterPlaces } from "@/lib/filterPlaces";
import { getPlaces } from "@/lib/places";

type DirectoryPageProps = {
  searchParams?: {
    q?: string;
    type?: string;
    region?: string;
  };
};

export default function DirectoryPage({ searchParams }: DirectoryPageProps) {
  const places = getPlaces();
  const filteredPlaces = filterPlaces(places, {
    q: searchParams?.q,
    type: searchParams?.type,
    region: searchParams?.region,
  });

  return (
    <section className="section">
      <div className="container">
        <div className="eyebrow">Hakemisto</div>
        <h1>Kaikki kohteet</h1>
        <p>
          Lista näyttää nykyisen aineiston. Voit hakea nimen, kunnan,
          maakunnan, tuotteen tai myyntitavan mukaan.
        </p>
        <PlaceFilters />
        <p>
          Näytetään {filteredPlaces.length} / {places.length} kohdetta.
        </p>
        <div className="place-grid">
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((place) => <PlaceCard key={place.id} place={place} />)
          ) : (
            <div className="card">
              <h3>Ei osumia</h3>
              <p>Kokeile väljempää hakua tai poista suodattimia.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
