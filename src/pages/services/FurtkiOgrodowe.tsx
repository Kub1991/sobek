import { SeoHead } from "@/components/SeoHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/ServiceBreadcrumb";
import { ServiceForm } from "@/components/ServiceForm";
import { RelatedServices } from "@/components/RelatedServices";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { siteConfig } from "@/config/siteConfig";

const FurtkiOgrodowe = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Furtki ogrodowe stalowe ${siteConfig.city}`,
    "description": `Profesjonalne furtki ogrodowe stalowe w ${siteConfig.city}. Stal czarna i nierdzewna, malowanie proszkowe, 3-letnia gwarancja.`,
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
    "serviceType": "Garden Gates Installation",
    "offers": {
      "@type": "Offer",
      "priceRange": "800-3000 PLN",
      "availability": "http://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jak długo trwa montaż furtki ogrodowej w Starej Wiśniewce?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Montaż standardowej furtki ogrodowej trwa 1 dzień roboczy. Czas zależy od stopnia skomplikowania projektu i rodzaju montażu."
        }
      },
      {
        "@type": "Question",
        "name": "Czy oferujecie furtki z domofonem lub wideodomofonem?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, oferujemy furtki z możliwością montażu domofonu, wideodomofonu oraz elektrozaczepu. Zapewniamy kompleksową instalację."
        }
      }
    ]
  };

  const combinedSchema = [serviceSchema, faqSchema];

  return (
    <div className="min-h-screen">
      <SeoHead 
        title={`Furtki ogrodowe stalowe ${siteConfig.city} – ${siteConfig.businessName}`}
        description={`Profesjonalne furtki ogrodowe stalowe ${siteConfig.city} w warsztacie ${siteConfig.businessName}. Stal czarna i nierdzewna, malowanie proszkowe w kolorach RAL, 3-letnia gwarancja. Bezpłatny pomiar w promieniu 60 km.`}
        structuredData={combinedSchema}
      />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServiceBreadcrumb 
          categoryName="Bramy i furtki" 
          categorySlug="bramy-furtki"
          serviceName="Furtki ogrodowe stalowe"
        />
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Furtki ogrodowe stalowe Stara Wiśniewka – SEB-STAL-SPAW
            </h1>
            
            <div className="mb-8">
              <img 
                src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
                alt="Furtki ogrodowe stalowe – zdjęcie poglądowe"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground mb-4">
                Profesjonalne furtki ogrodowe stalowe Stara Wiśniewka w SEB-STAL-SPAW. 
                Solidne i estetyczne furtki ogrodowe to dopełnienie każdego ogrodzenia. 
                Nasze furtki łączą funkcjonalność z wysoką jakością wykonania, zapewniając 
                bezpieczeństwo i trwałość.
              </p>
              <p className="text-muted-foreground mb-4">
                Oferujemy furtki wykonane ze stali czarnej z malowaniem proszkowym 
                oraz ze stali nierdzewnej. Dostępne są różne wzory i wypełnienia, 
                dopasowane do stylu ogrodzenia i bramy. Możliwość montażu elektrozaczepu 
                lub domofonu. Czas realizacji: 7-14 dni.
              </p>
              <p className="text-muted-foreground">
                Każda furtka ogrodowa objęta jest 3-letnią gwarancją na konstrukcję. 
                Oferujemy bezpłatny pomiar, projekt i wycenę oraz profesjonalny montaż 
                w całej północnej Polsce.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-card mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Cennik orientacyjny</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Rodzaj furtki</th>
                      <th className="text-left py-2">Cena od</th>
                      <th className="text-left py-2">Czas realizacji</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">Furtka standardowa malowana</td>
                      <td className="py-2 font-semibold">800 zł</td>
                      <td className="py-2">7 dni</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Furtka z elementami ozdobnymi</td>
                      <td className="py-2 font-semibold">1200 zł</td>
                      <td className="py-2">10 dni</td>
                    </tr>
                    <tr>
                      <td className="py-2">Furtka nierdzewna z elektrozaczepem</td>
                      <td className="py-2 font-semibold">1800 zł</td>
                      <td className="py-2">14 dni</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <Accordion type="single" collapsible className="bg-white rounded-2xl shadow-card">
              <AccordionItem value="item-1" className="px-6">
                <AccordionTrigger>Jak długo trwa montaż furtki ogrodowej w Starej Wiśniewce?</AccordionTrigger>
                <AccordionContent>
                  Montaż standardowej furtki ogrodowej trwa 1 dzień roboczy. Czas zależy od 
                  stopnia skomplikowania projektu i rodzaju montażu (np. z podmurówką).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="px-6">
                <AccordionTrigger>Czy oferujecie furtki z domofonem lub wideodomofonem?</AccordionTrigger>
                <AccordionContent>
                  Tak, oferujemy furtki z możliwością montażu domofonu, wideodomofonu oraz 
                  elektrozaczepu. Zapewniamy kompleksową instalację i konfigurację.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <RelatedServices 
              currentSlug="furtki-ogrodowe"
              parentCategory="bramy-furtki"
            />
          </div>

          <div className="lg:col-span-1">
            <ServiceForm serviceName="Furtki ogrodowe stalowe" />
            
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
                  Różne wzory i wypełnienia
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Możliwość automatyki
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

export default FurtkiOgrodowe;