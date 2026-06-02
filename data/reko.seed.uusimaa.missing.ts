import { slugify } from "@/lib/slugify";

const uusimaaRekoRows = [
  "Inkoo",
  "Järvenpää",
  "Kauniainen (Grani)",
  "Kerava",
  "Kirkkonummi",
  "Kirkkonummi (Veikkola)",
  "Lapinjärvi",
  "Lohja",
  "Loviisa",
  "Mäntsälä",
  "Myrskylä",
  "Nurmijärvi",
  "Porvoo",
  "Pukkila",
  "Raasepori (Karjaa)",
  "Raasepori (Tammisaari)",
  "Sipoo (Itä-Uusimaa)",
  "Siuntio",
  "Tuusula",
  "Vantaa (Hakunila)",
  "Vantaa (Kivistö)",
  "Vantaa (Myyrmäki)",
  "Vantaa (Pohjois-Vantaa)",
  "Vantaa (Tikkurila)",
  "Vihti (Nummela)",
  "Vihti (Selki)",
] as const;

export const rekoSeedUusimaaMissing = uusimaaRekoRows.map((name, index) => {
  const placeSlug = `reko-${slugify(name)}`;

  return {
    id: `fi-reko-uusimaa-missing-${index + 1}-${placeSlug}`,
    name: `REKO ${name}`,
    slug: placeSlug,
    description:
      "REKO-lähiruokarengas. Tiedot on tuotu Lähituottajat.fi:n Uusimaa-REKO-listasta ja vaativat vielä profiilikohtaisen tarkistuksen.",
    type: "reko",
    subtype: "lahiruokarengas",
    sales_model: "suoraan_tuottajalta",
    address: null,
    postal_code: null,
    municipality: name.split(" (")[0],
    region: "Uusimaa",
    latitude: null,
    longitude: null,
    products: ["vaihtelee"],
    opening_hours: null,
    seasonality: "ympari_vuoden",
    website_url: null,
    facebook_url: null,
    instagram_url: null,
    email: null,
    phone: null,
    source_name: "Lähituottajat.fi",
    source_url: "https://lahituottajat.fi/maakunnat/uusimaa/",
    verification_status: "needs_review",
    last_checked_at: "2026-06-02",
  };
});
