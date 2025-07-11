export const siteConfig = {
  // ───────────────────────
  // Dane firmowe
  // ───────────────────────
  businessName: "SEB-STAL-SPAW",
  city: "Stara Wiśniewka",
  primaryCategory: "Usługi spawalnicze i ślusarskie",
  slugBase: "stara-wisniewka",
  phone: "+48 786 618 536",

  // ───────────────────────
  // Kolorystyka (stal + pomarańcz akcent)
  // ───────────────────────
  palette: {
    bg: "#FFFFFF",
    accent1: "#FF6B00",   // pomarańcz (RAL2004)
    accent2: "#4D4D4D"    // stalowy grafit
  },

  // ───────────────────────
  // USP – pokazywane w hero i sekcji korzyści
  // ───────────────────────
  usp: [
    "Projekt, produkcja i montaż w jednym miejscu",
    "Stal czarna, nierdzewna i malowanie proszkowe",
    "Bezpłatny pomiar w promieniu 60 km",
    "3-letnia gwarancja na spawy i powłoki"
  ],

  // ───────────────────────
  // Kategorie (kafelki na stronie głównej)
  // ───────────────────────
  categories: [
    { name: "Balustrady i ogrodzenia",      slug: "balustrady-ogrodzenia" },
    { name: "Bramy i furtki",               slug: "bramy-furtki" },
    { name: "Konstrukcje i zadaszenia",     slug: "konstrukcje" },
    { name: "Meble loft & dekoracje",       slug: "meble-loft" },
    { name: "Produkty użytkowe",            slug: "produkty-uzytkowe" },
    { name: "Spawanie i naprawy",           slug: "spawanie-naprawy" }
  ],

  // ───────────────────────
  // Usługi (long-tail podstrony)
  // ───────────────────────
  services: [
    // Balustrady i ogrodzenia
    { name: "Balustrady balkonowe stalowe",        slug: "balustrady-balkonowe",      parentCategorySlug: "balustrady-ogrodzenia" },
    { name: "Balustrady schodowe wewnętrzne",      slug: "balustrady-schodowe",       parentCategorySlug: "balustrady-ogrodzenia" },
    { name: "Ogrodzenia posesyjne z elementami ozdobnymi", slug: "ogrodzenia-posesyjne", parentCategorySlug: "balustrady-ogrodzenia" },

    // Bramy i furtki
    { name: "Bramy przesuwne z automatyką",         slug: "bramy-przesuwne",           parentCategorySlug: "bramy-furtki" },
    { name: "Bramy dwuskrzydłowe",                  slug: "bramy-dwuskrzydlowe",       parentCategorySlug: "bramy-furtki" },
    { name: "Furtki ogrodowe stalowe",             slug: "furtki-ogrodowe",           parentCategorySlug: "bramy-furtki" },

    // Konstrukcje i zadaszenia
    { name: "Konstrukcje stalowe schodów",          slug: "konstrukcje-schodow",       parentCategorySlug: "konstrukcje" },
    { name: "Zadaszenia i wiaty metalowe",          slug: "zadaszenia-wiaty",          parentCategorySlug: "konstrukcje" },
    { name: "Pergole i altany stalowe",             slug: "pergole-altany",            parentCategorySlug: "konstrukcje" },

    // Meble loft & dekoracje
    { name: "Stoły loft z blatem dębowym",          slug: "stoly-loft",                parentCategorySlug: "meble-loft" },
    { name: "Półki industrialne",                   slug: "polki-industrialne",        parentCategorySlug: "meble-loft" },

    // Produkty użytkowe
    { name: "Kratki ochronne na okna",              slug: "kratki-ochronne",           parentCategorySlug: "produkty-uzytkowe" },
    { name: "Osłony techniczne i obudowy",          slug: "oslony-techniczne",         parentCategorySlug: "produkty-uzytkowe" },

    // Spawanie i naprawy
    { name: "Spawanie konstrukcji stalowych",       slug: "spawanie-konstrukcji",      parentCategorySlug: "spawanie-naprawy" },
    { name: "Naprawa i renowacja elementów metalowych", slug: "naprawa-renowacja",   parentCategorySlug: "spawanie-naprawy" }
  ]
};
