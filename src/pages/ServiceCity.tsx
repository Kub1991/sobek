import { useParams } from "react-router-dom";
import { SeoHead } from "@/components/SeoHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/ServiceBreadcrumb";
import { ServiceForm } from "@/components/ServiceForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { siteConfig } from "@/config/siteConfig";
import NotFound from "./NotFound";

const ServiceCity = () => {
  const { serviceSlug, citySlug } = useParams();
  
  // Znajdź usługę i miasto na podstawie slug
  const service = siteConfig.services.find(s => s.slug === serviceSlug);
  const city = siteConfig.cities.find(c => c.slug === citySlug);
  
  if (!service || !city) {
    return <NotFound />;
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Czy oferujecie ${service.name.toLowerCase()} w ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Tak, oferujemy profesjonalne ${service.name.toLowerCase()} w ${city.name}. Zapewniamy bezpłatny pomiar, projekt i montaż z 3-letnią gwarancją.`
        }
      },
      {
        "@type": "Question",
        "name": `Ile kosztuje dojazd do ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Dojazd i pomiar w ${city.name} jest bezpłatny. Oferujemy bezpłatny pomiar w promieniu 60 km od naszej siedziby w ${siteConfig.city}.`
        }
      }
    ]
  };

  const combinedSchema = [faqSchema];

  return (
    <div className="min-h-screen">
      <SeoHead 
        title={`${service.name} ${city.name} – ${siteConfig.businessName}`}
        description={`Profesjonalne ${service.name.toLowerCase()} ${city.name} w warsztacie ${siteConfig.businessName}. Bezpłatny pomiar, projekt 3D, montaż z 3-letnią gwarancją. Zadzwoń ${siteConfig.phone}.`}
        schemaType="custom"
        serviceData={service}
        cityData={city}
        customStructuredData={combinedSchema}
        noIndex={true}
      />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServiceBreadcrumb 
          categoryName={service.name}
          categorySlug={service.slug}
          serviceName={`${service.name} ${city.name}`}
        />
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              {service.name} {city.name} – {siteConfig.businessName}
            </h1>
            
            <div className="mb-8">
              <img 
                src="https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
                alt={`${service.name} ${city.name} – zdjęcie poglądowe`}
                className="w-full h-64 object-cover rounded-2xl mb-6"
                loading="lazy"
              />
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground mb-4">
                Profesjonalne {service.name.toLowerCase()} {city.name} w {siteConfig.businessName}. 
                Obsługujemy klientów w {city.name} i okolicach, oferując kompleksowe usługi z zakresu {service.group.toLowerCase()}.
                Bezpłatny pomiar, projekt 3D i montaż z 3-letnią gwarancją.
              </p>
            </div>

            {/* Sekcja: Treść lokalna */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Nasze doświadczenie w {city.name}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.localDesc && service.localDesc[city.slug] 
                  ? service.localDesc[city.slug]
                  : `Profesjonalne ${service.name.toLowerCase()} ${city.name} to nasza specjalność. W ${city.name} zrealizowaliśmy dziesiątki projektów dla klientów indywidualnych i firm. Nasze wieloletnie doświadczenie w ${city.name} pozwala nam oferować najwyższą jakość usług spawalniczych i ślusarskich. Mieszkańcy ${city.name} doceniają naszą rzetelność, terminowość i konkurencyjne ceny. Każdy projekt realizujemy z pełnym zaangażowaniem, wykorzystując najnowocześniejsze technologie spawalnicze i najwyższej jakości materiały. Oferujemy kompleksową obsługę - od pomiarów przez projekt aż po montaż z gwarancją.`
                }
              </p>
            </div>

            {/* Galeria realizacji */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Galeria realizacji w {city.name}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="relative group">
                    <img
                      src={`https://images.pexels.com/photos/${3862627 + index}/pexels-photo-${3862627 + index}.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop`}
                      alt={`${service.name} ${city.name} - realizacja ${index}`}
                      loading="lazy"
                      className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg"></div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Przykładowe realizacje {service.name.toLowerCase()} w {city.name} i okolicach
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-card mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Usługi w kategorii {service.name}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {service.subservices.map((subservice, index) => (
                  <div key={subservice.slug} className="flex items-start p-4 bg-secondary rounded-lg">
                    <div className="w-8 h-8 bg-gradient-hero text-white font-bold text-sm rounded-full flex items-center justify-center mr-3 mt-0.5">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{subservice.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Dostępne w {city.name} z bezpłatnym pomiarem i projektem
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-card mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Dlaczego klienci z {city.name} wybierają nas?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">🎯 Lokalna obsługa</h4>
                  <p className="text-muted-foreground text-sm">
                    Bezpłatny dojazd do {city.name}, pomiar i wycena. Znamy lokalne wymagania i specyfikę.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">⚡ Szybka realizacja</h4>
                  <p className="text-muted-foreground text-sm">
                    Krótkie terminy realizacji dzięki bliskości {city.name}. Stały kontakt w trakcie projektu.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">🛡️ Gwarancja jakości</h4>
                  <p className="text-muted-foreground text-sm">
                    3-letnia gwarancja na wszystkie prace spawalnicze i powłoki dla klientów z {city.name}.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">🚛 Transport gratis</h4>
                  <p className="text-muted-foreground text-sm">
                    Bezpłatny transport i montaż konstrukcji w {city.name} i okolicach.
                  </p>
                </div>
              </div>
            </div>

            <Accordion type="single" collapsible className="bg-white rounded-2xl shadow-card">
              <AccordionItem value="item-1" className="px-6">
                <AccordionTrigger>Czy oferujecie {service.name.toLowerCase()} w {city.name}?</AccordionTrigger>
                <AccordionContent>
                  Tak, oferujemy profesjonalne {service.name.toLowerCase()} w {city.name}. 
                  Zapewniamy bezpłatny pomiar, projekt i montaż z 3-letnią gwarancją na spawy i powłoki.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="px-6">
                <AccordionTrigger>Ile kosztuje dojazd do {city.name}?</AccordionTrigger>
                <AccordionContent>
                  Dojazd i pomiar w {city.name} jest bezpłatny. Oferujemy bezpłatny pomiar w promieniu 60 km 
                  od naszej siedziby w {siteConfig.city}.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="px-6">
                <AccordionTrigger>Jak długo trwa realizacja w {city.name}?</AccordionTrigger>
                <AccordionContent>
                  Czas realizacji zależy od rodzaju {service.name.toLowerCase()}. Standardowe projekty 
                  to 7-21 dni roboczych. Dokładny termin ustalamy podczas bezpłatnego pomiaru w {city.name}.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="lg:col-span-1">
            <ServiceForm serviceName={`${service.name} ${city.name}`} />
            
            <div className="mt-8 bg-secondary rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Obsługa {city.name}</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Bezpłatny pomiar w {city.name}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Transport konstrukcji gratis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Montaż przez zespół lokalny
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Serwis pogwarancyjny
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Czas dojazdu do {city.name}:</strong> około 30-45 min
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Obszar obsługi:</strong> {city.name} + 15 km
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceCity;