import { slugify } from "@/lib/slugify";

const varsinaisSuomiRekoRows = [
  "Aura",
  "Kaarina",
  "Kemiönsaari",
  "Koski Tl",
  "Kustavi",
  "Laitila",
  "Lieto",
  "Loimaa",
  "Masku",
  "Mynämäki",
  "Naantali",
  "Nousiainen",
  "Paimio",
  "Parainen",
  "Pöytyä",
  "Raisio",
  "Rusko",
  "Salo",
  "Somero",
  "Turku",
  "Uusikaupunki",
] as const;

export const rekoSeedVarsinaisSuomi = varsinaisSuomiRekoRows.map((name, index) => {
  const placeSlug = `reko-${slugify(name)}`;

  return {
    id: `fi-reko-varsinais-suomi-${index + 1}-${placeSlug}`,
    name: `REKO ${name}`,
    slug: placeSlug,
    description:
      "REKO-lähiruokarengas. Tiedot on tuotu Lähituottajat.fi:n Varsinais-Suomi-REKO-listasta ja vaativat vielä profiilikohtaisen tarkistuksen.",
    type: "reko",
    subtype: "lahiruokarengas",
    sales_model: "suoraan_tuottajalta",
    address: null,
    postal_code: null,
    municipality: name.split(" (")[0],
    region: "Varsinais-Suomi",
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
    source_url: "https://lahituottajat.fi/maakunnat/varsinais-suomi/",
    verification_status: "needs_review",
    last_checked_at: "2026-06-02",
  };
});
