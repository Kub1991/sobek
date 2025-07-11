import { SeoHead } from "@/components/SeoHead";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/siteConfig";

const Index = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.businessName,
    "description": `Profesjonalny warsztat samochodowy w ${siteConfig.city}. Kompleksowa obsługa, diagnostyka, naprawy z gwarancją.`,
    "url": "https://auto-expert-pila.pl",
    "telephone": siteConfig.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Przemysłowa 12",
      "addressLocality": siteConfig.city,
      "postalCode": "64-920",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "53.1516",
      "longitude": "16.7380"
    },
    "openingHours": [
      "Mo-Fr 08:00-17:00",
      "Sa 08:00-14:00"
    ],
    "priceRange": "$$",
    "image": "https://auto-expert-pila.pl/workshop-image.jpg"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Czy oferujecie odbiór auta w dzielnicy Górne?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak! Odbieramy i zwracamy samochody w całej Pile, w tym w dzielnicy Górne. Usługa jest bezpłatna w promieniu miasta."
        }
      },
      {
        "@type": "Question",
        "name": "Ile kosztuje diagnoza komputerowa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Podstawowa diagnoza jest GRATIS i trwa około 15 minut. W przypadku bardziej zaawansowanej diagnostyki informujemy o kosztach przed rozpoczęciem."
        }
      },
      {
        "@type": "Question",
        "name": "Czy naprawiacie wszystkie marki samochodów?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, naprawiamy wszystkie marki - od popularnych jak VW, Opel, Ford, po premium jak BMW, Audi, Mercedes. Mamy odpowiedni sprzęt diagnostyczny."
        }
      },
      {
        "@type": "Question",
        "name": "Jak długo trwa wymiana oleju?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standardowa wymiana oleju to około 30-45 minut. Jeśli chcesz poczekać, przygotowujemy kawę. Możesz też zostawić auto i odebrać później."
        }
      }
    ]
  };

  const combinedSchema = [localBusinessSchema, faqSchema];

  return (
    <div className="min-h-screen">
      <SeoHead 
        title={`Serwis Ford ${siteConfig.city} | Specjalistyczny warsztat Ford`}
        description={`${siteConfig.businessName} to specjalistyczny serwis Ford w ${siteConfig.city}. Doświadczeni mechanicy, nowoczesny sprzęt, członek sieci ProfiAuto. Umów się online lub zadzwoń ${siteConfig.phone}`}
        structuredData={combinedSchema}
      />
      <Header />
      <main>
        <Hero />
        <ProcessSteps />
        <ServicesGrid variant="home" />
        <ReviewCarousel />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
