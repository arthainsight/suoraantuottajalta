import type { Place } from "@/lib/places";

type Props = {
  places: Place[];
};

export function MapView({ places }: Props) {
  const geocodedPlaces = places.filter(
    (place) => typeof place.latitude === "number" && typeof place.longitude === "number",
  );

  return (
    <div className="map-placeholder">
      <div>
        <h2>Karttanäkymä</h2>
        <p>
          {geocodedPlaces.length > 0
            ? `Kartalla näytettäisiin ${geocodedPlaces.length} koordinaateilla varustettua kohdetta.`
            : "Yhdelläkään sample-kohteella ei ole vielä koordinaatteja."}
        </p>
        <p>
          Seuraava toteutusvaihe: lisää koordinaatit ja korvaa tämä komponentti
          Leaflet- tai MapLibre-kartalla.
        </p>
      </div>
    </div>
  );
}
