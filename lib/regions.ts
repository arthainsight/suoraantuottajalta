export const regions = [
  { name: "Ahvenanmaa", slug: "ahvenanmaa" },
  { name: "Etelä-Karjala", slug: "etela-karjala" },
  { name: "Etelä-Pohjanmaa", slug: "etela-pohjanmaa" },
  { name: "Etelä-Savo", slug: "etela-savo" },
  { name: "Kainuu", slug: "kainuu" },
  { name: "Kanta-Häme", slug: "kanta-hame" },
  { name: "Keski-Pohjanmaa", slug: "keski-pohjanmaa" },
  { name: "Keski-Suomi", slug: "keski-suomi" },
  { name: "Kymenlaakso", slug: "kymenlaakso" },
  { name: "Lappi", slug: "lappi" },
  { name: "Pirkanmaa", slug: "pirkanmaa" },
  { name: "Pohjanmaa", slug: "pohjanmaa" },
  { name: "Pohjois-Karjala", slug: "pohjois-karjala" },
  { name: "Pohjois-Pohjanmaa", slug: "pohjois-pohjanmaa" },
  { name: "Pohjois-Savo", slug: "pohjois-savo" },
  { name: "Päijät-Häme", slug: "paijat-hame" },
  { name: "Satakunta", slug: "satakunta" },
  { name: "Uusimaa", slug: "uusimaa" },
  { name: "Varsinais-Suomi", slug: "varsinais-suomi" }
] as const;

export type Region = (typeof regions)[number];
