import { Link } from "react-router-dom";
import { SeoHead } from "@/components/SeoHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/ServiceBreadcrumb";
import { siteConfig } from "@/config/siteConfig";

const Klimatyzacja = () => {
  const category = siteConfig.categories.find(cat => cat.slug === "klimatyzacja");
  const services = siteConfig.services.filter(service => service.parentCategorySlug === "klimatyzacja");

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Klimatyzacja ${siteConfig.city}`,
    "description": `Serwis klimatyzacji samochodowej w ${siteConfig.city}. Odgrzybianie, napełnianie czynnikiem, diagnostyka układów klimatyzacji.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": siteConfig.businessName,
      "telephone": siteConfig.phone
    },
    "areaServed": siteConfig.city,
    "serviceType": "Automotive Air Conditioning Service"
  };

  return (
    <div className="min-h-screen">
      <SeoHead 
        title={`Klimatyzacja ${siteConfig.city} – ${siteConfig.businessName}`}
        description={`Serwis klimatyzacja ${siteConfig.city} w ${siteConfig.businessName} - kompleksowa obsługa systemów klimatyzacji samochodowej. Odgrzybianie, napełnianie czynnikiem chłodniczym, diagnostyka układów klimatyzacji wszystkich marek pojazdów.`}
        structuredData={serviceSchema}
      />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServiceBreadcrumb categoryName="Klimatyzacja" categorySlug="klimatyzacja" />
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Klimatyzacja Piła – Serwis FORDZIK
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Serwis klimatyzacja Piła w Serwisie FORDZIK - kompleksowa obsługa systemów klimatyzacji 
              samochodowej. Oferujemy odgrzybianie, napełnianie czynnikiem chłodniczym oraz diagnostykę 
              układów klimatyzacji wszystkich marek pojazdów.
            </p>
            <p className="text-muted-foreground mb-6">
              Dysponujemy nowoczesnym sprzętem do obsługi zarówno starszych systemów R134a jak i 
              najnowszych R1234yf. Każda usługa wykonywana jest przez wykwalifikowanych mechaników 
              z wieloletnim doświadczeniem w serwisie klimatyzacji samochodowej.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Usługi klimatyzacji samochodowej</h2>
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
                    Profesjonalna {service.name.toLowerCase()} w Pile z gwarancją
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

export default Klimatyzacja;