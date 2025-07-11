import { SeoHead } from "@/components/SeoHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/ServiceBreadcrumb";
import { ServiceForm } from "@/components/ServiceForm";
import { RelatedServices } from "@/components/RelatedServices";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { siteConfig } from "@/config/siteConfig";

const WymianaKlockowHamulcowych = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Wymiana klocków hamulcowych ${siteConfig.city}`,
    "description": `Profesjonalna wymiana klocków hamulcowych w ${siteConfig.city}. Wysokiej jakości części, 2-letnia gwarancja, diagnoza GRATIS.`,
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
    "serviceType": "Automotive Brake Pad Replacement",
    "offers": {
      "@type": "Offer",
      "priceRange": "120-200 PLN",
      "availability": "http://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jak często wymieniać klocki hamulcowe w Pile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Klocki hamulcowe należy wymieniać co 20-40 tysięcy kilometrów, w zależności od stylu jazdy i warunków miejskich w Pile. Częste zatrzymywanie na skrzyżowaniach i korki przyśpieszają zużycie."
        }
      },
      {
        "@type": "Question",
        "name": "Czy oferujecie odbiór auta z dzielnicy Podlasie w Pile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, oferujemy bezpłatny odbiór i zwrot pojazdu w całej Pile, w tym z dzielnicy Podlasie, Górne oraz centrum miasta. Skontaktuj się z nami, aby umówić odbiór."
        }
      }
    ]
  };

  const combinedSchema = [serviceSchema, faqSchema];

  return (
    <div className="min-h-screen">
      <SeoHead 
        title={`Wymiana klocków hamulcowych ${siteConfig.city} – ${siteConfig.businessName}`}
        description={`Profesjonalna wymiana klocków hamulcowych ${siteConfig.city} w warsztacie ${siteConfig.businessName}. Wysokiej jakości części, 2-letnia gwarancja, diagnoza GRATIS w 15 min. Odbiór auta w ${siteConfig.city}.`}
        structuredData={combinedSchema}
      />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServiceBreadcrumb 
          categoryName="Hamulce" 
          categorySlug="hamulce"
          serviceName="Wymiana klocków hamulcowych"
        />
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Wymiana klocków hamulcowych Piła – Serwis FORDZIK
            </h1>
            
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop" 
                alt="Wymiana klocków hamulcowych – zdjęcie poglądowe"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground mb-4">
                Profesjonalna wymiana klocków hamulcowych Piła w Serwisie FORDZIK. Zużyte klocki 
                hamulcowe to poważne zagrożenie bezpieczeństwa na drodze. Nasze doświadczenie i wysokiej 
                jakości części gwarantują skuteczne hamowanie Twojego pojazdu.
              </p>
              <p className="text-muted-foreground mb-4">
                Proces wymiany obejmuje demontaż kół, wymianę klocków hamulcowych na oryginalne części, 
                kontrolę tarcz hamulcowych oraz test działania układu. Czas realizacji: 30-60 minut. 
                Każda wymiana objęta jest 2-letnią gwarancją na części i robociznę.
              </p>
              <p className="text-muted-foreground">
                Oferujemy także bezpłatną diagnostykę całego układu hamulcowego oraz doradztwo w zakresie 
                konserwacji. Umów wizytę już dziś i zadbaj o bezpieczeństwo swojej rodziny.
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
                      <td className="py-2">Wymiana klocków przód</td>
                      <td className="py-2 font-semibold">120 zł</td>
                      <td className="py-2">30 min</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Wymiana klocków tył</td>
                      <td className="py-2 font-semibold">100 zł</td>
                      <td className="py-2">25 min</td>
                    </tr>
                    <tr>
                      <td className="py-2">Komplet przód + tył</td>
                      <td className="py-2 font-semibold">200 zł</td>
                      <td className="py-2">60 min</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <Accordion type="single" collapsible className="bg-white rounded-2xl shadow-card">
              <AccordionItem value="item-1" className="px-6">
                <AccordionTrigger>Jak często wymieniać klocki hamulcowe w Pile?</AccordionTrigger>
                <AccordionContent>
                  Klocki hamulcowe należy wymieniać co 20-40 tysięcy kilometrów, w zależności od stylu jazdy 
                  i warunków miejskich w Pile. Częste zatrzymywanie na skrzyżowaniach i korki przyśpieszają zużycie.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="px-6">
                <AccordionTrigger>Czy oferujecie odbiór auta z dzielnicy Podlasie w Pile?</AccordionTrigger>
                <AccordionContent>
                  Tak, oferujemy bezpłatny odbiór i zwrot pojazdu w całej Pile, w tym z dzielnicy Podlasie, 
                  Górne oraz centrum miasta. Skontaktuj się z nami, aby umówić odbiór.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <RelatedServices 
              currentSlug="wymiana-klockow"
              parentCategory="hamulce"
            />
          </div>

          <div className="lg:col-span-1">
            <ServiceForm serviceName="Wymiana klocków hamulcowych" />
            
            <div className="mt-8 bg-secondary rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Nasze zalety</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Diagnoza GRATIS w 15 min
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  2-letnia gwarancja
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Odbiór auta w Pile
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Kontakt SMS/WhatsApp
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

export default WymianaKlockowHamulcowych;