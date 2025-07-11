import { SeoHead } from "@/components/SeoHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/ServiceBreadcrumb";
import { ServiceForm } from "@/components/ServiceForm";
import { RelatedServices } from "@/components/RelatedServices";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { siteConfig } from "@/config/siteConfig";

const BalustradyBalkonowe = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Balustrady balkonowe stalowe ${siteConfig.city}`,
    "description": `Profesjonalne balustrady balkonowe stalowe w ${siteConfig.city}. Stal czarna i nierdzewna, malowanie proszkowe, 3-letnia gwarancja.`,
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
    "serviceType": "Balcony Railings Installation",
    "offers": {
      "@type": "Offer",
      "priceRange": "200-800 PLN/mb",
      "availability": "http://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jak długo trwa montaż balustrady balkonowej w Starej Wiśniewce?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Montaż standardowej balustrady balkonowej trwa 1-2 dni robocze. Czas zależy od długości balustrady i stopnia skomplikowania projektu."
        }
      },
      {
        "@type": "Question",
        "name": "Czy oferujecie bezpłatny pomiar balustrady?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, oferujemy bezpłatny pomiar w promieniu 60 km od Starej Wiśniewki. Pomiar obejmuje również wstępny projekt i wycenę."
        }
      }
    ]
  };

  const combinedSchema = [serviceSchema, faqSchema];

  return (
    <div className="min-h-screen">
      <SeoHead 
        title={`Balustrady balkonowe stalowe ${siteConfig.city} – ${siteConfig.businessName}`}
        description={`Profesjonalne balustrady balkonowe stalowe ${siteConfig.city} w warsztacie ${siteConfig.businessName}. Stal czarna i nierdzewna, malowanie proszkowe w kolorach RAL, 3-letnia gwarancja. Bezpłatny pomiar w promieniu 60 km.`}
        structuredData={combinedSchema}
      />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServiceBreadcrumb 
          categoryName="Balustrady i ogrodzenia" 
          categorySlug="balustrady-ogrodzenia"
          serviceName="Balustrady balkonowe stalowe"
        />
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Balustrady balkonowe stalowe Stara Wiśniewka – SEB-STAL-SPAW
            </h1>
            
            <div className="mb-8">
              <img 
                src="https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
                alt="Balustrady balkonowe stalowe – zdjęcie poglądowe"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground mb-4">
                Profesjonalne balustrady balkonowe stalowe Stara Wiśniewka w SEB-STAL-SPAW. 
                Bezpieczne i estetyczne balustrady balkonowe to podstawa komfortu użytkowania balkonu. 
                Nasze doświadczenie i wysokiej jakości materiały gwarantują trwałość i piękny wygląd przez lata.
              </p>
              <p className="text-muted-foreground mb-4">
                Proces realizacji obejmuje bezpłatny pomiar, projekt 3D, produkcję w warsztacie oraz 
                profesjonalny montaż. Oferujemy balustrady ze stali czarnej i nierdzewnej z malowaniem 
                proszkowym w dowolnym kolorze RAL. Czas realizacji: 7-14 dni roboczych.
              </p>
              <p className="text-muted-foreground">
                Każda balustrada objęta jest 3-letnią gwarancją na spawy i powłoki oraz bezpłatną 
                kontrolą po roku użytkowania. Oferujemy także transport i montaż w całej północnej Polsce.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-card mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Cennik orientacyjny</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Rodzaj balustrady</th>
                      <th className="text-left py-2">Cena od (za mb)</th>
                      <th className="text-left py-2">Czas realizacji</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">Balustrada prosta malowana</td>
                      <td className="py-2 font-semibold">200 zł</td>
                      <td className="py-2">7 dni</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Balustrada z wypełnieniem</td>
                      <td className="py-2 font-semibold">350 zł</td>
                      <td className="py-2">10 dni</td>
                    </tr>
                    <tr>
                      <td className="py-2">Balustrada stal nierdzewna</td>
                      <td className="py-2 font-semibold">500 zł</td>
                      <td className="py-2">14 dni</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <Accordion type="single" collapsible className="bg-white rounded-2xl shadow-card">
              <AccordionItem value="item-1" className="px-6">
                <AccordionTrigger>Jak długo trwa montaż balustrady balkonowej w Starej Wiśniewce?</AccordionTrigger>
                <AccordionContent>
                  Montaż standardowej balustrady balkonowej trwa 1-2 dni robocze. Czas zależy od długości 
                  balustrady i stopnia skomplikowania projektu. Większe konstrukcje mogą wymagać 3-4 dni.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="px-6">
                <AccordionTrigger>Czy oferujecie bezpłatny pomiar balustrady?</AccordionTrigger>
                <AccordionContent>
                  Tak, oferujemy bezpłatny pomiar w promieniu 60 km od Starej Wiśniewki. 
                  Pomiar obejmuje również wstępny projekt i szczegółową wycenę konstrukcji.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <RelatedServices 
              currentSlug="balustrady-balkonowe"
              parentCategory="balustrady-ogrodzenia"
            />
          </div>

          <div className="lg:col-span-1">
            <ServiceForm serviceName="Balustrady balkonowe stalowe" />
            
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
                  Projekt 3D GRATIS
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Malowanie proszkowe RAL
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

export default BalustradyBalkonowe;