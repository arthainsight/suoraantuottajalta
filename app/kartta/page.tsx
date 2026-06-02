import { MapView } from "@/components/MapView";
import { PlaceFilters } from "@/components/PlaceFilters";
import { getPlaces } from "@/lib/places";

export default function MapPage() {
  const places = getPlaces();

  return (
    <section className="section">
      <div className="container">
        <div className="eyebrow">Kartta</div>
        <h1>Selaa kohteita kartalta</h1>
        <p>
          Kartta on MVP-vaiheessa paikkamerkki. Kun kohteille lisätään
          koordinaatit, tähän voidaan liittää Leaflet tai MapLibre.
        </p>
        <PlaceFilters />
        <MapView places={places} />
      </div>
    </section>
  );
}
