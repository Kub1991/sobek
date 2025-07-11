import { SeoHead } from "@/components/SeoHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/ServiceBreadcrumb";
import { ServiceForm } from "@/components/ServiceForm";
import { RelatedServices } from "@/components/RelatedServices";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { siteConfig } from "@/config/siteConfig";

const BramyDwuskrzydlowe = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Bramy dwuskrzydłowe ${siteConfig.city}`,
    "description": `Profesjonalne bramy dwuskrzydłowe w ${siteConfig.city}. Stal czarna i nierdzewna, malowanie proszkowe, 3-letnia gwarancja.`,
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
    "serviceType": "Double-Leaf Gates Installation",
    "offers": {
      "@type": "Offer",
      "priceRange": "2500-10000 PLN",
      "availability": "http://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jak długo trwa montaż bramy dwuskrzydłowej w Starej Wiśniewce?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Montaż standardowej bramy dwuskrzydłowej z automatyką trwa 1-2 dni robocze. Czas zależy od rozpiętości bramy i rodzaju automatyki."
        }
      },
      {
        "@type": "Question",
        "name": "Czy oferujecie bramy dwuskrzydłowe z automatyką?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, oferujemy bramy dwuskrzydłowe z pełną automatyką, w tym siłownikami, pilotami i fotokomórkami. Zapewniamy montaż i serwis."
        }
      }
    ]
  };

  const combinedSchema = [serviceSchema, faqSchema];

  return (
    <div className="min-h-screen">
      <SeoHead 
        title={`Bramy dwuskrzydłowe ${siteConfig.city} – ${siteConfig.businessName}`}
        description={`Profesjonalne bramy dwuskrzydłowe ${siteConfig.city} w warsztacie ${siteConfig.businessName}. Stal czarna i nierdzewna, malowanie proszkowe w kolorach RAL, 3-letnia gwarancja. Bezpłatny pomiar w promieniu 60 km.`}
        structuredData={combinedSchema}
      />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServiceBreadcrumb 
          categoryName="Bramy i furtki" 
          categorySlug="bramy-furtki"
          serviceName="Bramy dwuskrzydłowe"
        />
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Bramy dwuskrzydłowe Stara Wiśniewka – SEB-STAL-SPAW
            </h1>
            
            <div className="mb-8">
              <img 
                src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
                alt="Bramy dwuskrzydłowe – zdjęcie poglądowe"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground mb-4">
                Profesjonalne bramy dwuskrzydłowe Stara Wiśniewka w SEB-STAL-SPAW. 
                Klasyczne i eleganckie bramy dwuskrzydłowe to idealne rozwiązanie dla posesji, 
                gdzie nie ma miejsca na bramę przesuwną. Nasze bramy łączą estetykę z funkcjonalnością.
              </p>
              <p className="text-muted-foreground mb-4">
                Oferujemy bramy dwuskrzydłowe wykonane ze stali czarnej z malowaniem proszkowym 
                oraz ze stali nierdzewnej. Możliwość montażu automatyki do bramy, co zwiększa komfort użytkowania. 
                Dostępne są różne wzory i wypełnienia, dopasowane do stylu ogrodzenia. Czas realizacji: 10-18 dni.
              </p>
              <p className="text-muted-foreground">
                Każda brama dwuskrzydłowa objęta jest 3-letnią gwarancją na konstrukcję i automatykę. 
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
                      <td className="py-2">Brama dwuskrzydłowa 3m malowana</td>
                      <td className="py-2 font-semibold">2 500 zł</td>
                      <td className="py-2">10 dni</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Brama dwuskrzydłowa 4m z automatyką</td>
                      <td className="py-2 font-semibold">4 800 zł</td>
                      <td className="py-2">14 dni</td>
                    </tr>
                    <tr>
                      <td className="py-2">Brama dwuskrzydłowa 5m nierdzewna</td>
                      <td className="py-2 font-semibold">7 500 zł</td>
                      <td className="py-2">18 dni</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <Accordion type="single" collapsible className="bg-white rounded-2xl shadow-card">
              <AccordionItem value="item-1" className="px-6">
                <AccordionTrigger>Jak długo trwa montaż bramy dwuskrzydłowej w Starej Wiśniewce?</AccordionTrigger>
                <AccordionContent>
                  Montaż standardowej bramy dwuskrzydłowej z automatyką trwa 1-2 dni robocze. Czas zależy od 
                  rozpiętości bramy i rodzaju automatyki.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="px-6">
                <AccordionTrigger>Czy oferujecie bramy dwuskrzydłowe z automatyką?</AccordionTrigger>
                <AccordionContent>
                  Tak, oferujemy bramy dwuskrzydłowe z pełną automatyką, w tym siłownikami, pilotami i fotokomórkami. 
                  Zapewniamy montaż i serwis.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <RelatedServices 
              currentSlug="bramy-dwuskrzydlowe"
              parentCategory="bramy-furtki"
            />
          </div>

          <div className="lg:col-span-1">
            <ServiceForm serviceName="Bramy dwuskrzydłowe" />
            
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
                  Różne wzory i wypełnienia
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

export default BramyDwuskrzydlowe;