import Link from "next/link";
import { regions } from "@/lib/regions";

export function RegionLinks() {
  return (
    <div className="card" style={{ marginTop: 24 }}>
      <h3>Maakunnat</h3>
      <div className="filters" aria-label="Maakuntalinkit">
        {regions.map((region) => (
          <Link className="filter" href={`/maakunta/${region.slug}`} key={region.slug}>
            {region.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
