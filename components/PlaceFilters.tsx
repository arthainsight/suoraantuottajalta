const filters = [
  "Tilamyymälät",
  "REKO-renkaat",
  "Torit",
  "Lähiruokapuodit",
  "Verkkokaupat",
  "Satokassit",
  "Varmennettu tieto",
];

export function PlaceFilters() {
  return (
    <div className="filters" aria-label="Kohdesuodattimet">
      {filters.map((filter) => (
        <button className="filter" type="button" key={filter}>
          {filter}
        </button>
      ))}
    </div>
  );
}
