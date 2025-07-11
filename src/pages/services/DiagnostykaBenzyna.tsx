import { SeoHead } from "@/components/SeoHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/ServiceBreadcrumb";
import { ServiceForm } from "@/components/ServiceForm";
import { RelatedServices } from "@/components/RelatedServices";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { siteConfig } from "@/config/siteConfig";

const DiagnostykaBenzyna = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Diagnostyka silników benzynowych ${siteConfig.city}`,
    "description": `Profesjonalna diagnostyka silników benzynowych w ${siteConfig.city}. Specjalizacja Ford, nowoczesny sprzęt diagnostyczny, szczegółowy raport.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": `Serwis FORDZIK – Warsztat Tony'ego`,
      "telephone": siteConfig.phone,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": siteConfig.city
      }
    },
    "areaServed": siteConfig.city,
    "serviceType": "Automotive Engine Diagnostics",
    "offers": {
      "@type": "Offer",
      "priceRange": "80-200 PLN",
      "availability": "http://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Kiedy wykonać diagnostykę silnika benzynowego w Pile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Diagnostyka jest wskazana przy problemach z rozruchem, nierównej pracy silnika, zwiększonym spalaniu lub świeceniu się lampki Check Engine. W Pile, zimowe warunki często ujawniają problemy z systemem zapłonu."
        }
      },
      {
        "@type": "Question",
        "name": "Czy diagnostyka obejmuje wszystkie systemy Ford?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, nasza diagnostyka komputerowa obejmuje wszystkie moduły sterownicze w pojazdach Ford, włączając silnik, skrzynię biegów, ABS, klimatyzację i systemy komfortu."
        }
      }
    ]
  };

  const combinedSchema = [serviceSchema, faqSchema];

  return (
    <div className="min-h-screen">
      <SeoHead 
        title={`Diagnostyka silników benzynowych ${siteConfig.city} – Serwis FORDZIK`}
        description={`Profesjonalna diagnostyka silników benzynowych ${siteConfig.city} w Serwisie FORDZIK – Warsztacie Tony'ego. Specjalizacja Ford, nowoczesny sprzęt diagnostyczny, szczegółowy raport z zaleceniami napraw.`}
        structuredData={combinedSchema}
      />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServiceBreadcrumb 
          categoryName="Diagnostyka komputerowa" 
          categorySlug="diagnostyka-komputerowa"
          serviceName="Diagnostyka silników benzynowych"
        />
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Diagnostyka silników benzynowych Piła – Serwis FORDZIK
            </h1>
            
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop" 
                alt="Diagnostyka silników benzynowych – zdjęcie poglądowe"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground mb-4">
                Profesjonalna diagnostyka silników benzynowych Piła w Serwisie FORDZIK – Warsztacie Tony'ego. 
                Specjalizujemy się w kompleksowej diagnostyce Ford. Nowoczesny sprzęt diagnostyczny pozwala 
                nam szybko zidentyfikować usterki w systemie zapłonu, wtrysku paliwa i sterowaniu silnika.
              </p>
              <p className="text-muted-foreground mb-4">
                Proces diagnostyki obejmuje odczyt kodów błędów, sprawdzenie parametrów pracy silnika, 
                test czujników i aktuatorów. Szczegółowy raport diagnostyczny z zaleceniami napraw. 
                Czas realizacji: 30-60 minut w zależności od złożoności problemu.
              </p>
              <p className="text-muted-foreground">
                Gwarancja dokładności diagnozy oraz bezpłatna ponowna kontrola po wykonanych naprawach. 
                Doświadczenie w obsłudze wszystkich modeli Ford od 1995 roku.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-card mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Cennik orientacyjny</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Usługa</th>
                      <th className="text-left py-2">Cena od</th>
                      <th className="text-left py-2">Czas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">Diagnostyka podstawowa</td>
                      <td className="py-2 font-semibold">80 zł</td>
                      <td className="py-2">30 min</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Diagnostyka rozszerzona</td>
                      <td className="py-2 font-semibold">150 zł</td>
                      <td className="py-2">60 min</td>
                    </tr>
                    <tr>
                      <td className="py-2">Diagnostyka + raport pisemny</td>
                      <td className="py-2 font-semibold">200 zł</td>
                      <td className="py-2">90 min</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <Accordion type="single" collapsible className="bg-white rounded-2xl shadow-card">
              <AccordionItem value="item-1" className="px-6">
                <AccordionTrigger>Kiedy wykonać diagnostykę silnika benzynowego w Pile?</AccordionTrigger>
                <AccordionContent>
                  Diagnostyka jest wskazana przy problemach z rozruchem, nierównej pracy silnika, zwiększonym spalaniu 
                  lub świeceniu się lampki Check Engine. W Pile, zimowe warunki często ujawniają problemy z systemem zapłonu.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="px-6">
                <AccordionTrigger>Czy diagnostyka obejmuje wszystkie systemy Ford?</AccordionTrigger>
                <AccordionContent>
                  Tak, nasza diagnostyka komputerowa obejmuje wszystkie moduły sterownicze w pojazdach Ford, 
                  włączając silnik, skrzynię biegów, ABS, klimatyzację i systemy komfortu.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <RelatedServices 
              currentSlug="diagnostyka-benzyna"
              parentCategory="diagnostyka-komputerowa"
            />
          </div>

          <div className="lg:col-span-1">
            <ServiceForm serviceName="Diagnostyka silników benzynowych" />
            
            <div className="mt-8 bg-secondary rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Nasze zalety</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Diagnoza GRATIS w 15 min
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Specjalizacja Ford
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Nowoczesny sprzęt diagnostyczny
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Raport pisemny z diagnozy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DiagnostykaBenzyna;