import { Link } from "react-router-dom";
import { SeoHead } from "@/components/SeoHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/ServiceBreadcrumb";
import { siteConfig } from "@/config/siteConfig";

const DiagnostykaKomputerowa = () => {
  const category = siteConfig.categories.find(cat => cat.slug === "diagnostyka-komputerowa");
  const services = siteConfig.services.filter(service => service.parentCategorySlug === "diagnostyka-komputerowa");

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Diagnostyka komputerowa ${siteConfig.city}`,
    "description": `Profesjonalna diagnostyka komputerowa w ${siteConfig.city}. Diagnoza GRATIS w 15 min, nowoczesny sprzęt OBD.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": siteConfig.businessName,
      "telephone": siteConfig.phone
    },
    "areaServed": siteConfig.city,
    "serviceType": "Automotive Computer Diagnostics"
  };

  return (
    <div className="min-h-screen">
      <SeoHead 
        title={`Diagnostyka komputerowa ${siteConfig.city} – ${siteConfig.businessName}`}
        description={`Profesjonalna diagnostyka komputerowa ${siteConfig.city} w warsztacie ${siteConfig.businessName}. Kompleksowa diagnostyka OBD wszystkich systemów pojazdu z użyciem najnowszej technologii. Diagnoza GRATIS w 15 minut.`}
        structuredData={serviceSchema}
      />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServiceBreadcrumb categoryName="Diagnostyka komputerowa" categorySlug="diagnostyka-komputerowa" />
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Diagnostyka komputerowa Piła – Serwis FORDZIK
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Profesjonalna diagnostyka komputerowa Piła w Serwisie FORDZIK. Oferujemy 
              kompleksową diagnostykę OBD wszystkich systemów pojazdu z użyciem najnowszej 
              technologii. Diagnoza GRATIS w 15 minut - sprawdź co dzieje się z Twoim autem.
            </p>
            <p className="text-muted-foreground mb-6">
              Dysponujemy profesjonalnym sprzętem diagnostycznym do wszystkich marek samochodów. 
              Wykonujemy diagnostykę silnika, skrzyni biegów, układu ABS, ESP, klimatyzacji 
              oraz wszystkich modułów elektronicznych. Kasowanie błędów i programowanie sterowników.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Usługi diagnostyki komputerowej</h2>
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
                    Profesjonalna {service.name.toLowerCase()} w Pile
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

export default DiagnostykaKomputerowa;