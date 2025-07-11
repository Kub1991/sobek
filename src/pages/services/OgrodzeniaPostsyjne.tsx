import { SeoHead } from "@/components/SeoHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/ServiceBreadcrumb";
import { ServiceForm } from "@/components/ServiceForm";
import { RelatedServices } from "@/components/RelatedServices";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { siteConfig } from "@/config/siteConfig";

const OgrodzeniaPostsyjne = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Ogrodzenia posesyjne z elementami ozdobnymi ${siteConfig.city}`,
    "description": `Profesjonalne ogrodzenia posesyjne z elementami ozdobnymi w ${siteConfig.city}. Stal czarna i nierdzewna, malowanie proszkowe, 3-letnia gwarancja.`,
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
    "serviceType": "Property Fencing Installation",
    "offers": {
      "@type": "Offer",
      "priceRange": "150-500 PLN/mb",
      "availability": "http://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jak długo trwa montaż ogrodzenia posesyjnego w Starej Wiśniewce?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Montaż standardowego ogrodzenia posesyjnego trwa 2-5 dni roboczych w zależności od długości i złożoności projektu."
        }
      },
      {
        "@type": "Question",
        "name": "Czy wykonujecie ogrodzenia na trudnym terenie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, wykonujemy ogrodzenia na terenie pochyłym, z różnicami poziomów oraz w trudnych warunkach gruntowych."
        }
      }
    ]
  };

  const combinedSchema = [serviceSchema, faqSchema];

  return (
    <div className="min-h-screen">
      <SeoHead 
        title={`Ogrodzenia posesyjne z elementami ozdobnymi ${siteConfig.city} – ${siteConfig.businessName}`}
        description={`Profesjonalne ogrodzenia posesyjne z elementami ozdobnymi ${siteConfig.city} w warsztacie ${siteConfig.businessName}. Stal czarna i nierdzewna, malowanie proszkowe w kolorach RAL, 3-letnia gwarancja. Bezpłatny pomiar w promieniu 60 km.`}
        structuredData={combinedSchema}
      />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServiceBreadcrumb 
          categoryName="Balustrady i ogrodzenia" 
          categorySlug="balustrady-ogrodzenia"
          serviceName="Ogrodzenia posesyjne z elementami ozdobnymi"
        />
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Ogrodzenia posesyjne z elementami ozdobnymi Stara Wiśniewka – SEB-STAL-SPAW
            </h1>
            
            <div className="mb-8">
              <img 
                src="https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
                alt="Ogrodzenia posesyjne z elementami ozdobnymi – zdjęcie poglądowe"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground mb-4">
                Profesjonalne ogrodzenia posesyjne z elementami ozdobnymi Stara Wiśniewka w SEB-STAL-SPAW. 
                Estetyczne i trwałe ogrodzenia posesyjne to wizytówka każdej nieruchomości. Nasze doświadczenie 
                w projektowaniu i wykonawstwie gwarantuje perfekcyjne połączenie funkcjonalności z estetyką.
              </p>
              <p className="text-muted-foreground mb-4">
                Oferujemy ogrodzenia klasyczne, nowoczesne i stylizowane z elementami ozdobnymi. Wykonujemy 
                konstrukcje ze stali czarnej z malowaniem proszkowym oraz ze stali nierdzewnej. Możliwość 
                różnych wypełnień: blacha perforowana, elementy kutej, szkło hartowane. Czas realizacji: 14-21 dni.
              </p>
              <p className="text-muted-foreground">
                Każde ogrodzenie posesyjne objęte jest 3-letnią gwarancją na spawy i powłoki. Oferujemy 
                bezpłatny pomiar, projekt i wycenę oraz profesjonalny montaż z fundamentami betonowymi 
                w całej północnej Polsce.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-card mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Cennik orientacyjny</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Rodzaj ogrodzenia</th>
                      <th className="text-left py-2">Cena od (za mb)</th>
                      <th className="text-left py-2">Czas realizacji</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">Ogrodzenie klasyczne malowane</td>
                      <td className="py-2 font-semibold">150 zł</td>
                      <td className="py-2">14 dni</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Ogrodzenie z elementami ozdobnymi</td>
                      <td className="py-2 font-semibold">280 zł</td>
                      <td className="py-2">18 dni</td>
                    </tr>
                    <tr>
                      <td className="py-2">Ogrodzenie designerskie nierdzewne</td>
                      <td className="py-2 font-semibold">450 zł</td>
                      <td className="py-2">21 dni</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <Accordion type="single" collapsible className="bg-white rounded-2xl shadow-card">
              <AccordionItem value="item-1" className="px-6">
                <AccordionTrigger>Jak długo trwa montaż ogrodzenia posesyjnego w Starej Wiśniewce?</AccordionTrigger>
                <AccordionContent>
                  Montaż standardowego ogrodzenia posesyjnego trwa 2-5 dni roboczych w zależności od długości 
                  i złożoności projektu. Ogrodzenia z fundamentami wymagają dodatkowego czasu na utwardzenie betonu.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="px-6">
                <AccordionTrigger>Czy wykonujecie ogrodzenia na trudnym terenie?</AccordionTrigger>
                <AccordionContent>
                  Tak, wykonujemy ogrodzenia na terenie pochyłym, z różnicami poziomów oraz w trudnych 
                  warunkach gruntowych. Każdy projekt dostosowujemy indywidualnie do warunków terenowych.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <RelatedServices 
              currentSlug="ogrodzenia-posesyjne"
              parentCategory="balustrady-ogrodzenia"
            />
          </div>

          <div className="lg:col-span-1">
            <ServiceForm serviceName="Ogrodzenia posesyjne z elementami ozdobnymi" />
            
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
                  Fundamenty betonowe
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

export default OgrodzeniaPostsyjne;