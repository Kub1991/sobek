import { SeoHead } from "@/components/SeoHead";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ServicesGrid } from "@/components/ServicesGrid";
import { AreasSection } from "@/components/AreasSection";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/siteConfig";

const Index = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.businessName,
    "description": `Profesjonalne usługi spawalnicze i ślusarskie w ${siteConfig.city}. Projekt, produkcja i montaż konstrukcji stalowych, balustrad, bram i mebli loftowych.`,
    "url": "https://seb-stal-spaw.pl",
    "telephone": siteConfig.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 15",
      "addressLocality": siteConfig.city,
      "postalCode": "89-113",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "53.2516",
      "longitude": "17.8380"
    },
    "openingHours": [
      "Mo-Fr 08:00-17:00",
      "Sa 08:00-14:00"
    ],
    "priceRange": "$$",
    "image": "https://seb-stal-spaw.pl/welding-workshop.jpg"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Czy oferujecie bezpłatny pomiar w promieniu 60 km?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak! Oferujemy bezpłatny pomiar i wycenę w promieniu 60 km od naszej siedziby w Starej Wiśniewce. Po tym dystansie naliczamy symboliczną opłatę za dojazd."
        }
      },
      {
        "@type": "Question",
        "name": "Ile kosztuje wycena projektu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wycena standardowych projektów jest GRATIS. W przypadku bardziej skomplikowanych konstrukcji na zamówienie informujemy o koszcie projektu przed rozpoczęciem prac."
        }
      },
      {
        "@type": "Question",
        "name": "Czy wykonujecie projekty ze stali nierdzewnej?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, wykonujemy konstrukcje zarówno ze stali czarnej jak i nierdzewnej. Oferujemy również malowanie proszkowe w różnych kolorach RAL oraz patynowanie."
        }
      },
      {
        "@type": "Question",
        "name": "Jak długo trwa realizacja projektu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Czas realizacji zależy od złożoności projektu. Standardowe balustrady to 7-14 dni, bramy i konstrukcje większe to 2-4 tygodnie. Terminy ustalamy indywidualnie."
        }
      }
    ]
  };

  const combinedSchema = [localBusinessSchema, faqSchema];

  return (
    <div className="min-h-screen">
      <SeoHead 
        title={`Usługi spawalnicze | ${siteConfig.businessName}`}
        description={`${siteConfig.businessName} to profesjonalne usługi spawalnicze i ślusarskie. Projekt, produkcja i montaż konstrukcji stalowych. Bezpłatny pomiar w promieniu 60 km. Zadzwoń ${siteConfig.phone}`}
        structuredData={combinedSchema}
      />
      <Header />
      <main>
        <Hero />
        <ProcessSteps />
        <ServicesGrid variant="home" />
        <AreasSection />
        <ReviewCarousel />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
