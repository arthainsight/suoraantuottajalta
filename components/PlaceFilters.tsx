import Link from "next/link";

const typeFilters = [
  { label: "REKO-renkaat", href: "/hakemisto?type=reko" },
  { label: "Torit", href: "/hakemisto?type=tori" },
  { label: "Tilamyymälät", href: "/hakemisto?type=tilamyymala" },
  { label: "Lähiruokapuodit", href: "/hakemisto?type=lahiruokapuoti" },
  { label: "Verkkokaupat", href: "/hakemisto?type=verkkokauppa" },
];

const regionFilters = [
  { label: "Uusimaa", href: "/hakemisto?region=Uusimaa" },
  { label: "Varsinais-Suomi", href: "/hakemisto?region=Varsinais-Suomi" },
  { label: "Etelä-Savo", href: "/hakemisto?region=Etelä-Savo" },
];

export function PlaceFilters() {
  return (
    <div>
      <div className="filters" aria-label="Myyntitavan suodattimet">
        <Link className="filter" href="/hakemisto">
          Kaikki
        </Link>
        {typeFilters.map((filter) => (
          <Link className="filter" href={filter.href} key={filter.label}>
            {filter.label}
          </Link>
        ))}
      </div>
      <div className="filters" aria-label="Maakunnan suodattimet">
        {regionFilters.map((filter) => (
          <Link className="filter" href={filter.href} key={filter.label}>
            {filter.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
