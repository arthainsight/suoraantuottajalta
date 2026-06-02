# Lähteet ja datan keruuperiaatteet

Tämä dokumentti kuvaa, miten Suoraan Tuottajalta -palvelun kohdedata kerätään, tarkistetaan ja merkitään.

## Lähdetyypit

Hyväksyttäviä lähteitä ovat esimerkiksi:

- tuottajan tai yrityksen oma verkkosivu
- kunnan tai kaupungin virallinen torisivu
- REKO-renkaan oma sivu tai ylläpitäjän ilmoitus
- lähiruokapuodin tai ruokapiirin oma verkkosivu
- yritysrekisterit ja alueelliset ruokahakemistot
- kohteen omistajan itse lähettämä ilmoitus

## Varmennustilat

- `pending`: ilmoitus on vastaanotettu, mutta sitä ei ole tarkistettu
- `needs_review`: kohde on lisätty lähteen perusteella, mutta tieto vaatii vielä tarkistuksen
- `verified`: tiedot on tarkistettu luotettavasta lähteestä

## Rajaus

Palvelu ei väitä, että jokainen kohde on juridisesti suoramyyntiä. Kohteet jaetaan myyntimallin mukaan:

- `suoraan_tuottajalta`
- `lyhyt_ketju`
- `epaselva`

## Päivitysperiaate

Jokaisella kohteella tulee olla lähde ja `last_checked_at`-päivämäärä. Vanhentuneita tietoja ei pidä esittää varmennettuina.
