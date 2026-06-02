export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="eyebrow">Tietoa palvelusta</div>
        <h1>Mikä on Suoraan Tuottajalta?</h1>
        <div className="card" style={{ marginTop: 24 }}>
          <p>
            Suoraan Tuottajalta on kasvava hakemisto suomalaisista lähiruoan
            suoramyynti- ja lyhyen ketjun ostopaikoista.
          </p>
          <p>
            Palvelun tarkoitus on auttaa kuluttajia löytämään tilamyymälöitä,
            REKO-renkaita, toreja, lähiruokapuoteja, ruokapiirejä, satokasseja,
            osuuskuntia ja tuottajien verkkokauppoja.
          </p>
          <h2>Rajaus</h2>
          <p>
            Kaikki kohteet eivät ole juridisesti suoramyyntiä. Siksi palvelu
            erottaa suoraan tuottajalta ostamisen, lyhyen ketjun kautta
            ostamisen ja epäselvät tai tarkistettavat kohteet.
          </p>
          <h2>MVP-vaihe</h2>
          <p>
            Tämä on ensimmäinen versio. Dataa on vielä vähän, ja osa tiedoista
            on merkitty tarkistettavaksi. Tavoite on rakentaa luotettava,
            lähteistetty ja päivittyvä valtakunnallinen hakemisto.
          </p>
        </div>
      </div>
    </section>
  );
}
