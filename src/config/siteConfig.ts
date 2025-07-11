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
  // Nowa struktura usług z dynamicznym routingiem
  // ───────────────────────
  services: [
    {
      slug: "balustrady",
      name: "Balustrady",
      group: "Balustrady",
      subservices: [
        { slug: "balustrady-schodowe-wewnetrzne", name: "Balustrady schodowe wewnętrzne" },
        { slug: "balustrady-schodowe-zewnetrzne", name: "Balustrady schodowe zewnętrzne" },
        { slug: "balustrady-balkonowe", name: "Balustrady balkonowe" },
        { slug: "balustrady-tarasowe", name: "Balustrady tarasowe" }
      ]
    },
    {
      slug: "ogrodzenia",
      name: "Ogrodzenia i bramy",
      group: "Ogrodzenia",
      subservices: [
        { slug: "bramy-jednoskrzydlowe", name: "Bramy wjazdowe jednoskrzydłowe" },
        { slug: "bramy-dwuskrzydlowe", name: "Bramy wjazdowe dwuskrzydłowe" },
        { slug: "bramy-przesuwne", name: "Bramy przesuwne i rozsuwane" },
        { slug: "furtki-ogrodowe", name: "Furtki ogrodowe" },
        { slug: "przesla-ogrodzeniowe", name: "Przęsła ogrodzeniowe" }
      ]
    },
    {
      slug: "konstrukcje-stalowe",
      name: "Konstrukcje stalowe",
      group: "Konstrukcje",
      subservices: [
        { slug: "schody-stalowe", name: "Konstrukcje stalowe schodów" },
        { slug: "antresole", name: "Platformy i antresole" },
        { slug: "zadaszenia-wiaty", name: "Zadaszenia i wiaty" },
        { slug: "pergole-altany", name: "Pergole i altany" }
      ]
    },
    {
      slug: "meble-loft",
      name: "Meble loft",
      group: "Meble",
      subservices: [
        { slug: "stoly", name: "Stoły loft" },
        { slug: "krzesla", name: "Krzesła loft" },
        { slug: "polki", name: "Półki loft" },
        { slug: "dekoracje", name: "Elementy dekoracyjne" }
      ]
    },
    {
      slug: "uslugi-spawalnicze",
      name: "Usługi spawalnicze",
      group: "Spawanie",
      subservices: [
        { slug: "spawanie-konstrukcji", name: "Spawanie konstrukcji stalowych (TIG/MIG)" },
        { slug: "naprawy-renowacje", name: "Naprawa i renowacja elementów metalowych" },
        { slug: "montaz", name: "Montaż i instalacja" }
      ]
    }
  ],

  // ───────────────────────
  // Obsługiwane miasta
  // ───────────────────────
  cities: [
    { slug: "zlotow", name: "Złotów" },
    { slug: "pila", name: "Piła" },
    { slug: "zakrzewo", name: "Zakrzewo" },
    { slug: "okonek", name: "Okonek" },
    { slug: "debrzno", name: "Debrzno" },
    { slug: "chojnice", name: "Chojnice" },
    { slug: "krajenka", name: "Krajenka" },
    { slug: "jastrowie", name: "Jastrowie" },
    { slug: "ledyczek", name: "Lędyczek" },
    { slug: "walcz", name: "Wałcz" }
  ],

  // ───────────────────────
  // Stara struktura kategorii (kompatybilność wsteczna)
  // ───────────────────────
  categories: [
    { name: "Balustrady i ogrodzenia", slug: "balustrady-ogrodzenia" },
    { name: "Bramy i furtki", slug: "bramy-furtki" },
    { name: "Konstrukcje i zadaszenia", slug: "konstrukcje" },
    { name: "Meble loft & dekoracje", slug: "meble-loft" },
    { name: "Produkty użytkowe", slug: "produkty-uzytkowe" },
    { name: "Spawanie i naprawy", slug: "spawanie-naprawy" }
  ]
};