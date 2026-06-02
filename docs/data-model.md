# Datamalli

Perusyksikkö on myynti- tai luovutuspaikka, ei yritys.

Sama organisaatio voi esiintyä useassa paikassa: tilamyymälässä, torilla, REKO-jaossa, verkkokaupan noutopisteessä tai satokassijakelussa.

## Place

| Kenttä | Tyyppi | Kuvaus |
|---|---|---|
| id | string | Yksilöllinen tunniste |
| name | string | Kohteen nimi |
| slug | string | URL-muotoinen nimi |
| description | string | Lyhyt kuvaus |
| type | string | Pääluokka |
| subtype | string | Alaluokka |
| sales_model | string | suoraan_tuottajalta / lyhyt_ketju / epäselvä |
| address | string | Osoite |
| postal_code | string | Postinumero |
| municipality | string | Kunta |
| region | string | Maakunta |
| latitude | number | Leveysaste |
| longitude | number | Pituusaste |
| products | string[] | Tuoteryhmät |
| opening_hours | string | Aukiolo tai jakeluaika |
| seasonality | string | ympäri_vuoden / kausi / epäselvä |
| website_url | string | Verkkosivu |
| facebook_url | string | Facebook |
| instagram_url | string | Instagram |
| email | string | Sähköposti |
| phone | string | Puhelin |
| source_name | string | Lähteen nimi |
| source_url | string | Lähdeosoite |
| verification_status | string | pending / verified / needs_review |
| last_checked_at | date | Viimeisin tarkistus |
