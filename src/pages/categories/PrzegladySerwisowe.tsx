import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/ServiceBreadcrumb";
import { siteConfig } from "@/config/siteConfig";

const PrzegladySerwisowe = () => {
  const category = siteConfig.categories.find(cat => cat.slug === "przeglady-serwisowe");
  const services = siteConfig.services.filter(service => service.parentCategorySlug === "przeglady-serwisowe");

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServiceBreadcrumb categoryName="Przeglądy serwisowe" categorySlug="przeglady-serwisowe" />
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Przeglądy serwisowe Piła – Serwis FORDZIK
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Profesjonalne przeglądy serwisowe Piła w Serwisie FORDZIK – Warsztacie Tony'ego. 
              Specjalizujemy się w kompleksowych przeglądach Ford zgodnie z harmonogramem serwisowym. 
              Regularne przeglądy to gwarancja bezpieczeństwa i długiej żywotności pojazdu.
            </p>
            <p className="text-muted-foreground mb-6">
              Wykonujemy przeglądy okresowe zgodne z wymogami gwarancji Ford, obejmujące kontrolę 
              wszystkich układów pojazdu, wymianę płynów eksploatacyjnych oraz części serwisowych. 
              Każdy przegląd dokumentowany w książce serwisowej pojazdu.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Przeglądy serwisowe Ford</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/uslugi/${service.slug}-pila`}
                className="group block"
              >
                <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 group-hover:scale-105">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Profesjonalne {service.name.toLowerCase()} w Pile z gwarancją
                  </p>
                  <div className="flex items-center text-primary group-hover:underline">
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

export default PrzegladySerwisowe;