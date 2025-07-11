import { SeoHead } from "@/components/SeoHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/ServiceBreadcrumb";
import { ServiceForm } from "@/components/ServiceForm";
import { RelatedServices } from "@/components/RelatedServices";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { siteConfig } from "@/config/siteConfig";

const BramyPrzesuwne = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Bramy przesuwne z automatyką ${siteConfig.city}`,
    "description": `Profesjonalne bramy przesuwne z automatyką w ${siteConfig.city}. Stal czarna i nierdzewna, malowanie proszkowe, 3-letnia gwarancja.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": siteConfig.businessName,
      "telephone": siteConfig.phone,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": siteConfig.city
      }
    },
    "areaServed": siteConfig.city,
    "serviceType": "Sliding Gates Installation",
    "offers": {
      "@type": "Offer",
      "priceRange": "3000-15000 PLN",
      "availability": "http://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jak długo trwa montaż bramy przesuwnej w Starej Wiśniewce?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Montaż standardowej bramy przesuwnej z automatyką trwa 2-3 dni robocze. Czas zależy od rozpiętości bramy i rodzaju automatyki."
        }
      },
      {
        "@type": "Question",
        "name": "Czy oferujecie serwis automatyki do bram?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, oferujemy pełny serwis automatyki do bram przesuwnych, w tym konserwację, naprawy i wymianę elementów."
        }
      }
    ]
  };

  const combinedSchema = [serviceSchema, faqSchema];

  return (
    <div className="min-h-screen">
      <SeoHead 
        title={`Bramy przesuwne z automatyką ${siteConfig.city} – ${siteConfig.businessName}`}
        description={`Profesjonalne bramy przesuwne z automatyką ${siteConfig.city} w warsztacie ${siteConfig.businessName}. Stal czarna i nierdzewna, malowanie proszkowe w kolorach RAL, 3-letnia gwarancja. Bezpłatny pomiar w promieniu 60 km.`}
        structuredData={combinedSchema}
      />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServiceBreadcrumb 
          categoryName="Bramy i furtki" 
          categorySlug="bramy-furtki"
          serviceName="Bramy przesuwne z automatyką"
        />
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Bramy przesuwne z automatyką Stara Wiśniewka – SEB-STAL-SPAW
            </h1>
            
            <div className="mb-8">
              <img 
                src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
                alt="Bramy przesuwne z automatyką – zdjęcie poglądowe"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground mb-4">
                Profesjonalne bramy przesuwne z automatyką Stara Wiśniewka w SEB-STAL-SPAW. 
                Wygodne i bezpieczne bramy przesuwne z automatyką to nowoczesne rozwiązanie dla 
                każdej posesji. Nasze doświadczenie w projektowaniu i montażu gwarantuje niezawodność 
                działania przez lata.
              </p>
              <p className="text-muted-foreground mb-4">
                Oferujemy bramy przesuwne samonośne i prowadzone po szynie dolnej. Wykonujemy 
                konstrukcje ze stali czarnej z malowaniem proszkowym oraz ze stali nierdzewnej. 
                Montujemy automatykę najlepszych marek z pilotem zdalnego sterowania i lampą 
                ostrzegawczą. Czas realizacji: 14-21 dni.
              </p>
              <p className="text-muted-foreground">
                Każda brama przesuwna objęta jest 3-letnią gwarancją na konstrukcję i automatykę. 
                Oferujemy bezpłatny pomiar, projekt i wycenę oraz profesjonalny montaż z uruchomieniem 
                automatyki w całej północnej Polsce.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-card mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Cennik orientacyjny</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Rodzaj bramy</th>
                      <th className="text-left py-2">Cena od</th>
                      <th className="text-left py-2">Czas realizacji</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">Brama przesuwna 4m malowana</td>
                      <td className="py-2 font-semibold">3 500 zł</td>
                      <td className="py-2">14 dni</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Brama przesuwna 6m z automatyką</td>
                      <td className="py-2 font-semibold">6 800 zł</td>
                      <td className="py-2">18 dni</td>
                    </tr>
                    <tr>
                      <td className="py-2">Brama przesuwna 8m nierdzewna</td>
                      <td className="py-2 font-semibold">12 500 zł</td>
                      <td className="py-2">21 dni</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <Accordion type="single" collapsible className="bg-white rounded-2xl shadow-card">
              <AccordionItem value="item-1" className="px-6">
                <AccordionTrigger>Jak długo trwa montaż bramy przesuwnej w Starej Wiśniewce?</AccordionTrigger>
                <AccordionContent>
                  Montaż standardowej bramy przesuwnej z automatyką trwa 2-3 dni robocze. Czas zależy od 
                  rozpiętości bramy i rodzaju automatyki. Większe konstrukcje mogą wymagać 4-5 dni.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="px-6">
                <AccordionTrigger>Czy oferujecie serwis automatyki do bram?</AccordionTrigger>
                <AccordionContent>
                  Tak, oferujemy pełny serwis automatyki do bram przesuwnych, w tym konserwację, 
                  naprawy i wymianę elementów. Gwarancja na automatykę wynosi 2 lata.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <RelatedServices 
              currentSlug="bramy-przesuwne"
              parentCategory="bramy-furtki"
            />
          </div>

          <div className="lg:col-span-1">
            <ServiceForm serviceName="Bramy przesuwne z automatyką" />
            
            <div className="mt-8 bg-secondary rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Nasze zalety</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Bezpłatny pomiar w 60 km
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  3-letnia gwarancja
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Automatyka premium
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Pilot zdalnego sterowania
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

export default BramyPrzesuwne;