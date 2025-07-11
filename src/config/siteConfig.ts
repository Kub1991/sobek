export const siteConfig = {
  businessName: "Serwis FORDZIK",
  city: "Piła",
  primaryCategory: "Warsztat samochodowy Ford",
  slugBase: "pila",
  phone: "67-123-45-67",
  palette: {
    bg: "#FFFFFF",
    accent1: "#0074D9",   // niebieski (Ford Blue)
    accent2: "#000000"
  },

  // ► USP-y w hero i sekcji korzyści
  usp: [
    "Specjalizacja Ford - wszystkie modele",
    "Części oryginalne i zamienniki",
    "Członek sieci ProfiAuto",
    "Nowoczesny sprzęt diagnostyczny"
  ],

  // ► Kategorie (kafelki na stronie głównej)
  categories: [
    { name: "Diagnostyka komputerowa", slug: "diagnostyka-komputerowa" },
    { name: "Przeglądy serwisowe",     slug: "przeglady-serwisowe" },
    { name: "Płyny eksploatacyjne",    slug: "plyny-eksploatacyjne" },
    { name: "Klimatyzacja",            slug: "klimatyzacja" },
    { name: "Układ hamulcowy",         slug: "hamulce" },
    { name: "Układ kierowniczy",       slug: "kierowniczy" },
    { name: "Zawieszenie",             slug: "zawieszenie" },
    { name: "Mechanika ogólna",        slug: "mechanika" }
  ],

  // ► Usługi (podstrony long-tail w ramach kategorii)
  services: [
    // Diagnostyka
    { name: "Diagnostyka silników benzynowych", slug: "diagnostyka-benzyna", parentCategorySlug: "diagnostyka-komputerowa" },

    // Płyny
    { name: "Wymiana oleju silnikowego",        slug: "wymiana-oleju",      parentCategorySlug: "plyny-eksploatacyjne" },

    // Klimatyzacja
    { name: "Odgrzybianie klimatyzacji",        slug: "odgrzybianie-klimy", parentCategorySlug: "klimatyzacja" },

    // Hamulce
    { name: "Wymiana klocków hamulcowych",      slug: "wymiana-klockow",    parentCategorySlug: "hamulce" },
    { name: "Regeneracja zacisków hamulcowych", slug: "regeneracja-zaciskow", parentCategorySlug: "hamulce" },

    // Zawieszenie
    { name: "Geometria kół 3D",                 slug: "geometria-kol",      parentCategorySlug: "zawieszenie" },
  ]
};