export default function SourcesPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="eyebrow">Lähteet</div>
        <h1>Lähteet ja datan keruuperiaatteet</h1>
        <div className="grid three" style={{ marginTop: 24 }}>
          <div className="card">
            <h3>Hyväksyttävät lähteet</h3>
            <p>
              Tuottajan oma sivu, kunnan torisivu, REKO-renkaan ilmoitus,
              lähiruokapuodin verkkosivu, alueellinen ruokahakemisto tai
              kohteen omistajan lähettämä tieto.
            </p>
          </div>
          <div className="card">
            <h3>Varmennustilat</h3>
            <p>
              Kohde voi olla vastaanotettu, tarkistusta vaativa tai varmennettu.
              Varmennustila pitää näyttää käyttäjälle näkyvästi.
            </p>
          </div>
          <div className="card">
            <h3>Päivitys</h3>
            <p>
              Jokaisella kohteella pitää olla lähde ja viimeisin tarkistuspäivä.
              Vanhentunutta tietoa ei pidä esittää varmana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
