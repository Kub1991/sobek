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
        "pila": "Balustrady Piła to nasza specjalność od wielu lat. W Pile zrealizowaliśmy dziesiątki projektów balustrad dla budynków mieszkalnych, biurowców i obiektów przemysłowych. Oferujemy kompleksową obsługę - od pomiarów przez projekt aż po montaż z gwarancją. Mieszkańcy Piły wybierają nas ze względu na profesjonalne podejście, terminowość realizacji i atrakcyjne ceny. Nasze balustrady charakteryzują się nie tylko wysoką jakością wykonania, ale również nowoczesnym designem dopasowanym do architektury budynku.",
        "zakrzewo": "Balustrady Zakrzewo wykonywane przez SEB-STAL-SPAW to gwarancja najwyższej jakości i precyzji. W Zakrzewie i okolicach zrealizowaliśmy ponad 50 projektów balustrad dla domów jednorodzinnych i małych firm. Specjalizujemy się w balustradach schodowych wewnętrznych i zewnętrznych oraz balkonowych ze stali nierdzewnej i czarnej. Mieszkańcy Zakrzewa cenią nas za indywidualne podejście do każdego projektu i możliwość dostosowania designu do lokalnej architektury. Oferujemy bezpłatny dojazd i pomiar oraz gwarancję 3 lata na wszystkie spawy."
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
        "pila": "Profesjonalne ogrodzenia i bramy Piła od SEB-STAL-SPAW. W Pile jesteśmy rozpoznawalną marką w branży ogrodzeń stalowych. Oferujemy pełen zakres usług - od projektowania przez produkcję aż po montaż z automatyką. Nasze ogrodzenia wyróżniają się wysoką jakością wykonania i nowoczesnym designem. Klienci z Piły doceniają naszą fachowość, punktualność i uczciwe ceny.",
        "zakrzewo": "Ogrodzenia Zakrzewo projektowane i montowane przez zespół SEB-STAL-SPAW. W Zakrzewie wykonaliśmy kompleksowe ogrodzenia dla ponad 40 posesji, w tym nowoczesne bramy przesuwne z automatyką. Nasza specjalność to połączenie funkcjonalności z estetyką - każde ogrodzenie dopasowujemy do stylu domu i krajobrazu. Mieszkańcy Zakrzewa wybierają nas ze względu na solidność konstrukcji, terminowość wykonania i atrakcyjne ceny. Oferujemy również serwis pogwarancyjny i konserwację automatyki bramowej."
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
      localDesc: {
        "zlotow": "Konstrukcje stalowe Złotów realizowane przez doświadczony zespół SEB-STAL-SPAW. W Złotowie wykonaliśmy dziesiątki konstrukcji stalowych - od schodów zewnętrznych po wiaty garażowe i zadaszenia tarasów. Nasze konstrukcje charakteryzują się precyzyjnym wykonaniem i długotrwałą eksploatacją. Mieszkańcy Złotowa doceniają naszą umiejętność projektowania konstrukcji dopasowanych do istniejącej architektury. Oferujemy kompleksową obsługę od projektu przez prefabrykację w warsztacie aż po montaż na miejscu. Każda konstrukcja objęta jest 3-letnią gwarancją.",
        "pila": "Profesjonalne konstrukcje stalowe Piła od SEB-STAL-SPAW. W Pile zrealizowaliśmy ponad 80 projektów konstrukcji stalowych dla obiektów mieszkalnych i komercyjnych. Specjalizujemy się w zadaszeniach, wiatach, pergolach oraz konstrukcjach schodów stalowych. Nasze wieloletnie doświadczenie w Pile pozwala nam oferować rozwiązania dostosowane do lokalnych warunków klimatycznych i architektonicznych. Klienci cenią nas za profesjonalizm, terminowość i konkurencyjne ceny. Wszystkie konstrukcje wykonujemy zgodnie z normami budowlanymi.",
        "zakrzewo": "Konstrukcje stalowe Zakrzewo projektowane z myślą o trwałości i funkcjonalności. W Zakrzewie i okolicach wykonaliśmy konstrukcje dla ponad 30 klientów, w tym zadaszenia wejść, wiaty gospodarcze i antresole. Każda konstrukcja jest indywidualnie projektowana i wykonywana z najwyższej jakości stali. Mieszkańcy Zakrzewa wybierają nas ze względu na precyzję wykonania i dbałość o szczegóły. Oferujemy również modernizację i wzmacnianie istniejących konstrukcji stalowych. Bezpłatny pomiar i wycena dla wszystkich projektów."
      },
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
      localDesc: {
        "zlotow": "Meble loft Złotów w wykonaniu SEB-STAL-SPAW - unikalne połączenie stali i drewna. W Złotowie stworzyliśmy już ponad 60 mebli w stylu industrialnym dla mieszkań, restauracji i biur. Nasze stoły, półki i elementy dekoracyjne charakteryzują się wysoką jakością wykonania i oryginalnym designem. Mieszkańcy Złotowa doceniają możliwość personalizacji każdego mebla według indywidualnych potrzeb. Używamy wyłącznie najwyższej jakości stali i naturalnego drewna dębowego. Każdy mebel jest ręcznie wykończony i objęty 2-letnią gwarancją.",
        "pila": "Designerskie meble loft Piła od SEB-STAL-SPAW. W Pile jesteśmy znani z tworzenia wyjątkowych mebli łączących stal z drewnem. Zrealizowaliśmy projekty dla ponad 40 klientów, tworząc stoły, krzesła, półki i elementy dekoracyjne. Nasze meble są nie tylko funkcjonalne, ale również stanowią ozdobę każdego wnętrza. Klienci z Piły cenią nas za kreatywność, wysoką jakość materiałów i precyzję wykonania. Oferujemy pełną personalizację - od wymiarów po wykończenie. Meble dostępne również w wersji outdoor.",
        "zakrzewo": "Meble loft Zakrzewo ręcznie wykonywane przez mistrzów SEB-STAL-SPAW. W Zakrzewie stworzyliśmy unikalne meble dla ponad 25 domów, łącząc tradycyjne techniki z nowoczesnym designem. Specjalizujemy się w stołach loft z naturalnym drewnem, półkach industrialnych i elementach dekoracyjnych. Mieszkańcy Zakrzewa wybierają nas ze względu na indywidualne podejście i możliwość stworzenia mebla idealnie dopasowanego do wnętrza. Każdy element jest unikalny i wykonany z dbałością o najdrobniejsze szczegóły."
      },
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
      localDesc: {
        "zlotow": "Usługi spawalnicze Złotów realizowane przez certyfikowanych spawaczy SEB-STAL-SPAW. W Złotowie świadczymy kompleksowe usługi spawalnicze dla klientów indywidualnych i firm. Specjalizujemy się w spawaniu metodami TIG, MIG/MAG oraz elektrodą otuloną. Wykonujemy naprawy konstrukcji stalowych, renowacje oraz spawanie konstrukcji nowych. Mieszkańcy Złotowa cenią nas za profesjonalizm, szybkość wykonania i konkurencyjne ceny. Oferujemy również spawanie mobilne na terenie klienta. Wszystkie prace spawalnicze objęte są gwarancją jakości.",
        "pila": "Profesjonalne usługi spawalnicze Piła od doświadczonych spawaczy SEB-STAL-SPAW. W Pile jesteśmy rozpoznawalni jako specjaliści od trudnych napraw i spawania precyzyjnego. Realizujemy projekty dla przemysłu, budownictwa i klientów indywidualnych. Nasze usługi obejmują spawanie konstrukcji, naprawy maszyn i urządzeń oraz renowacje elementów metalowych. Klienci z Piły doceniają naszą fachowość, terminowość i uczciwe ceny. Dysponujemy nowoczesnym sprzętem spawalniczym i certyfikowanymi spawaczami.",
        "zakrzewo": "Spawanie i naprawy Zakrzewo wykonywane przez zespół SEB-STAL-SPAW z wieloletnim doświadczeniem. W Zakrzewie świadczymy usługi spawalnicze dla rolników, drobnych firm i mieszkańców. Specjalizujemy się w naprawach sprzętu rolniczego, konstrukcji gospodarczych i elementów ogrodzeniowych. Oferujemy również spawanie mobilne - przyjeżdżamy do klienta z pełnym wyposażeniem. Mieszkańcy Zakrzewa wybierają nas ze względu na szybkość reakcji, rzetelność i przystępne ceny. Każda naprawa wykonywana jest solidnie i z gwarancją."
      },
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
  ],

  // ───────────────────────
  // Domyślne wartości SEO
  // ───────────────────────
  seoDefault: {
    title: "SEB-STAL-SPAW Stara Wiśniewka | Usługi spawalnicze i ślusarskie",
    description: "SEB-STAL-SPAW to profesjonalne usługi spawalnicze i ślusarskie w Starej Wiśniewce. Projekt, produkcja i montaż konstrukcji stalowych, balustrad, bram i mebli loftowych. Bezpłatny pomiar w promieniu 60 km."
  }
};