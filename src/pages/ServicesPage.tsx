import { SeoHead } from "@/components/SeoHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServicesGrid } from "@/components/ServicesGrid";
import { siteConfig } from "@/config/siteConfig";

const ServicesPage = () => {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Usługi serwisowe ${siteConfig.city}`,
    "description": `Kompleksowe usługi serwisowe dla samochodów Ford w ${siteConfig.city}`,
    "itemListElement": siteConfig.categories.map((category, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": category.name,
        "description": `Profesjonalne usługi ${category.name.toLowerCase()} w ${siteConfig.city}`,
        "provider": {
          "@type": "LocalBusiness",
          "name": siteConfig.businessName
        }
      }
    }))
  };

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Usługi – Serwis FORDZIK Piła | Diagnostyka, hamulce, klimatyzacja"
        description="Pełna lista naszych usług: diagnostyka komputerowa silnika, wymiana oleju, serwis hamulców i klimatyzacji. Obsługujemy Piłę i okolice. Umów wizytę online."
        canonical="/uslugi"
        structuredData={servicesSchema}
      />
      <Header />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Usługi – {siteConfig.businessName}
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Nasz serwis samochodowy w Piłe specjalizuje się w pełnej obsłudze pojazdów
              osobowych i dostawczych. Oferujemy komputerową diagnostykę silników
              benzynowych i diesla, szybkie serwisy wymiany oleju z kontrolą płynów
              eksploatacyjnych, naprawy układu hamulcowego oraz kompleksowy serwis
              klimatyzacji R134a i R1234yf. Każdą usługę wykonujemy zgodnie z procedurą OEM,
              używając części premium i narzędzi dedykowanych do Twojej marki auta.
              Klientom zapewniamy dwuletnią gwarancję na części i robociznę, a także
              bezpłatną diagnostykę wstępną przy każdej wizycie. Pracujemy od poniedziałku
              do soboty, a termin możesz zarezerwować online w 60 sekund. Sprawdź pełną
              listę usług poniżej i umów wizytę – obsługujemy kierowców z Piły, Złotowa oraz
              całej północnej Wielkopolski.
            </p>
          </div>

          <div className="mb-16">
            <ServicesGrid variant="catalog" />
          </div>

          <div className="bg-secondary rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Dlaczego wybrać {siteConfig.businessName}?
              </h2>
              <p className="text-muted-foreground">
                Jesteśmy członkami sieci ProfiAuto, co zapewnia dostęp do najlepszych części i najnowszych technologii
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {siteConfig.usp.map((usp, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="font-semibold text-foreground">{usp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;