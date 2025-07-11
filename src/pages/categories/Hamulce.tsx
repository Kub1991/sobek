import { Link } from "react-router-dom";
import { SeoHead } from "@/components/SeoHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/ServiceBreadcrumb";
import { siteConfig } from "@/config/siteConfig";

const Hamulce = () => {
  const category = siteConfig.categories.find(cat => cat.slug === "hamulce");
  const services = siteConfig.services.filter(service => service.parentCategorySlug === "hamulce");

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Hamulce ${siteConfig.city}`,
    "description": `Profesjonalne usługi hamulcowe w ${siteConfig.city}. Wymiana klocków, regeneracja zacisków, 2-letnia gwarancja.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": siteConfig.businessName,
      "telephone": siteConfig.phone
    },
    "areaServed": siteConfig.city,
    "serviceType": "Automotive Brake Service"
  };

  return (
    <div className="min-h-screen">
      <SeoHead 
        title={`Hamulce ${siteConfig.city} – ${siteConfig.businessName}`}
        description={`Profesjonalne usługi hamulce ${siteConfig.city} w warsztacie ${siteConfig.businessName}. Wymiana klocków, regeneracja zacisków, 2-letnia gwarancja. Odbiór auta w ${siteConfig.city}.`}
        structuredData={serviceSchema}
      />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServiceBreadcrumb categoryName="Hamulce" categorySlug="hamulce" />
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Hamulce Piła – Serwis FORDZIK
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Profesjonalne usługi hamulce Piła w Serwisie FORDZIK. Oferujemy kompleksową obsługę 
              układów hamulcowych wszystkich marek samochodów. Nasze doświadczenie i nowoczesny sprzęt 
              gwarantują bezpieczeństwo na drodze.
            </p>
            <p className="text-muted-foreground mb-6">
              Specjalizujemy się w naprawie i wymianie klocków hamulcowych, tarcz, zacisków oraz 
              całościowej diagnostyce układu hamulcowego. Każda naprawa objęta jest 2-letnią gwarancją 
              na części i robociznę. Oferujemy także odbiór i zwrot pojazdu w obrębie Piły.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Nasze usługi hamulcowe</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/uslugi/${service.slug}-pila`}
                className="group block"
              >
                <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 group-hover:scale-105">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Profesjonalna {service.name.toLowerCase()} w Pile z 2-letnią gwarancją
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

export default Hamulce;