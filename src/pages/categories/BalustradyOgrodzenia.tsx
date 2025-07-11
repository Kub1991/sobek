import { Link } from "react-router-dom";
import { SeoHead } from "@/components/SeoHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/ServiceBreadcrumb";
import { siteConfig } from "@/config/siteConfig";

const BalustradyOgrodzenia = () => {
  const category = siteConfig.categories.find(cat => cat.slug === "balustrady-ogrodzenia");
  const services = siteConfig.services.filter(service => service.parentCategorySlug === "balustrady-ogrodzenia");

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Balustrady i ogrodzenia ${siteConfig.city}`,
    "description": `Profesjonalne balustrady i ogrodzenia w ${siteConfig.city}. Stal czarna, nierdzewna, malowanie proszkowe, 3-letnia gwarancja.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": siteConfig.businessName,
      "telephone": siteConfig.phone
    },
    "areaServed": siteConfig.city,
    "serviceType": "Metal Railings and Fencing"
  };

  return (
    <div className="min-h-screen">
      <SeoHead 
        title={`Balustrady i ogrodzenia ${siteConfig.city} – ${siteConfig.businessName}`}
        description={`Profesjonalne balustrady i ogrodzenia ${siteConfig.city} w warsztacie ${siteConfig.businessName}. Balustrady balkonowe, schodowe, ogrodzenia posesyjne. Stal czarna i nierdzewna, 3-letnia gwarancja.`}
        structuredData={serviceSchema}
      />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServiceBreadcrumb categoryName="Balustrady i ogrodzenia" categorySlug="balustrady-ogrodzenia" />
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Balustrady i ogrodzenia Stara Wiśniewka – SEB-STAL-SPAW
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Profesjonalne balustrady i ogrodzenia Stara Wiśniewka w SEB-STAL-SPAW. Oferujemy kompleksową obsługę 
              od projektu przez produkcję po montaż balustrad balkonowych, schodowych oraz ogrodzeń posesyjnych. 
              Nasze doświadczenie i nowoczesny sprzęt gwarantują trwałość i estetykę wykonanych konstrukcji.
            </p>
            <p className="text-muted-foreground mb-6">
              Specjalizujemy się w produkcji balustrad ze stali czarnej i nierdzewnej, z możliwością malowania 
              proszkowego w dowolnym kolorze RAL. Każda realizacja objęta jest 3-letnią gwarancją na spawy i powłoki. 
              Oferujemy także bezpłatny pomiar w promieniu 60 km od Starej Wiśniewki.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Nasze usługi balustrad i ogrodzeń</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/uslugi/${service.slug}-${siteConfig.slugBase}`}
                className="group block"
              >
                <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 group-hover:scale-105">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Profesjonalna {service.name.toLowerCase()} w Starej Wiśniewce z 3-letnią gwarancją
                  </p>
                  <div className="flex items-center text-blue group-hover:underline">
                    <span>Zobacz szczegóły</span>
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-secondary rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Dlaczego warto wybrać nas?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {siteConfig.usp.map((usp, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm font-medium text-foreground">{usp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BalustradyOgrodzenia;