import Link from "next/link";
import { SearchBar } from "@/components/SearchBar";
import { PlaceCard } from "@/components/PlaceCard";
import { RegionLinks } from "@/components/RegionLinks";
import { getPlaces } from "@/lib/places";

export default function HomePage() {
  const places = getPlaces();

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Kasvava lähiruokahakemisto</div>
            <h1>Löydä ruokaa suoraan tuottajilta.</h1>
            <p>
              Tilamyymälät, REKO-renkaat, torit, lähiruokapuodit, ruokapiirit,
              satokassit ja tuottajien verkkokaupat yhdessä haussa.
            </p>
            <SearchBar />
            <div className="button-row">
              <Link className="button" href="/kartta">
                Selaa kartalta
              </Link>
              <Link className="button secondary" href="/lisaa-kohde">
                Lisää oma kohde
              </Link>
            </div>
          </div>
          <div className="card">
            <h2>{places.length}</h2>
            <p>
              Ensimmäiset kohteet on lisätty sample-datana. Seuraava työ on
              kerätä ja tarkistaa laajempi valtakunnallinen aineisto.
            </p>
            <div className="badges">
              <span className="badge">Suoraan tuottajalta</span>
              <span className="badge">Lyhyt ketju</span>
              <span className="badge warning">Tarkistettava tieto</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">Poiminnat</div>
          <h2>Ensimmäiset kohteet</h2>
          <div className="place-grid" style={{ marginTop: 24 }}>
            {places.slice(0, 3).map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
          <RegionLinks />
        </div>
      </section>

      <section className="section">
        <div className="container grid three">
          <div className="card">
            <h3>1. Löydä</h3>
            <p>Hae kunnan, maakunnan, tuoteryhmän tai myyntitavan mukaan.</p>
          </div>
          <div className="card">
            <h3>2. Tarkista</h3>
            <p>
              Katso lähde, viimeisin tarkistuspäivä ja myyntimallin rajaus.
            </p>
          </div>
          <div className="card">
            <h3>3. Osta läheltä</h3>
            <p>
              Siirry tuottajan, torin, REKO-renkaan tai lähiruokapuodin omaan
              kanavaan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
