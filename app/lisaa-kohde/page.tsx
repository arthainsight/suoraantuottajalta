export default function AddPlacePage() {
  return (
    <section className="section">
      <div className="container">
        <div className="eyebrow">Lisää kohde</div>
        <h1>Ilmoita uusi suoramyynti- tai lähiruokakohde</h1>
        <p>
          Ensimmäisessä versiossa lomake on staattinen. Seuraavassa vaiheessa
          lomake liitetään tietokantaan tai lomakepalveluun.
        </p>

        <form className="card form">
          <label>
            Kohteen nimi
            <input name="name" placeholder="Esim. Mäkitalon tilamyymälä" />
          </label>

          <label>
            Tyyppi
            <select name="type" defaultValue="">
              <option value="" disabled>
                Valitse tyyppi
              </option>
              <option value="tilamyymala">Tilamyymälä</option>
              <option value="reko">REKO-rengas</option>
              <option value="tori">Tori</option>
              <option value="lahiruokapuoti">Lähiruokapuoti</option>
              <option value="verkkokauppa">Verkkokauppa</option>
              <option value="muu">Muu</option>
            </select>
          </label>

          <label>
            Osoite tai noutopaikka
            <input name="address" placeholder="Katuosoite tai kuvaus" />
          </label>

          <label>
            Kunta
            <input name="municipality" placeholder="Esim. Espoo" />
          </label>

          <label>
            Maakunta
            <input name="region" placeholder="Esim. Uusimaa" />
          </label>

          <label>
            Tuotteet
            <input name="products" placeholder="Esim. kananmunat, naudanliha, marjat" />
          </label>

          <label>
            Verkkosivu tai some-linkki
            <input name="website" placeholder="https://..." />
          </label>

          <label>
            Lisätiedot
            <textarea name="notes" rows={5} placeholder="Aukiolo, kausitiedot, lähde..." />
          </label>

          <button className="button" type="button">
            Lähetä tarkistukseen
          </button>
        </form>
      </div>
    </section>
  );
}
