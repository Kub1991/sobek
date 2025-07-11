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
      localDesc: {
        "zlotow": "Profesjonalne balustrady Złotów realizowane przez SEB-STAL-SPAW. Nasze wieloletnie doświadczenie w Złotowie obejmuje wykonanie setek metrów bieżących balustrad balkonowych, schodowych i tarasowych. Wykorzystujemy najwyższej jakości stal czarną i nierdzewną, oferując również malowanie proszkowe w pełnej gamie kolorów RAL. Mieszkańcy Złotowa doceniają naszą punktualność, rzetelność i konkurencyjne ceny. Każda balustrada jest projektowana indywidualnie, uwzględniając specyfikę budynku i preferencje właściciela.",
        "pila": "Balustrady Piła to nasza specjalność od wielu lat. W Pile zrealizowaliśmy dziesiątki projektów balustrad dla budynków mieszkalnych, biurowców i obiektów przemysłowych. Oferujemy kompleksową obsługę - od pomiarów przez projekt aż po montaż z gwarancją. Mieszkańcy Piły wybierają nas ze względu na profesjonalne podejście, terminowość realizacji i atrakcyjne ceny. Nasze balustrady charakteryzują się nie tylko wysoką jakością wykonania, ale również nowoczesnym designem dopasowanym do architektury budynku."
      },
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
      localDesc: {
        "zlotow": "Ogrodzenia i bramy Złotów - kompleksowe rozwiązania dla Twojej posesji. W Złotowie wykonaliśmy setki metrów ogrodzeń posesyjnych, bram przesuwnych i dwuskrzydłowych. Specjalizujemy się w nowoczesnych konstrukcjach stalowych z automatyką najlepszych marek. Mieszkańcy Złotowa cenią nas za rzetelność, terminowość i konkurencyjne ceny. Każde ogrodzenie projektujemy indywidualnie, uwzględniając specyfikę terenu i wymagania bezpieczeństwa.",
        "pila": "Profesjonalne ogrodzenia i bramy Piła od SEB-STAL-SPAW. W Pile jesteśmy rozpoznawalną marką w branży ogrodzeń stalowych. Oferujemy pełen zakres usług - od projektowania przez produkcję aż po montaż z automatyką. Nasze ogrodzenia wyróżniają się wysoką jakością wykonania i nowoczesnym designem. Klienci z Piły doceniają naszą fachowość, punktualność i uczciwe ceny."
      },
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