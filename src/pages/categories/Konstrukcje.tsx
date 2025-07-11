import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/ServiceBreadcrumb";
import { siteConfig } from "@/config/siteConfig";

const Konstrukcje = () => {
  const category = siteConfig.categories.find(cat => cat.slug === "konstrukcje");
  const services = siteConfig.services.filter(service => service.parentCategorySlug === "konstrukcje");

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServiceBreadcrumb categoryName="Konstrukcje i zadaszenia" categorySlug="konstrukcje" />
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Konstrukcje i zadaszenia Stara Wiśniewka – SEB-STAL-SPAW
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Kompleksowe konstrukcje i zadaszenia Stara Wiśniewka w SEB-STAL-SPAW - projektowanie, 
              produkcja i montaż konstrukcji stalowych wszelkiego rodzaju. Oferujemy zadaszenia, 
              wiaty, pergole, altany oraz konstrukcje schodów stalowych.
            </p>
            <p className="text-muted-foreground mb-6">
              Oferujemy konstrukcje stalowe dla budownictwa mieszkaniowego i przemysłowego. 
              Wykonujemy zadaszenia tarasów, wiaty garażowe, pergole ogrodowe oraz skomplikowane 
              konstrukcje architektoniczne. Każda konstrukcja projektowana jest indywidualnie 
              i objęta 3-letnią gwarancją na spawy i powłoki.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Konstrukcje stalowe</h2>
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
                    Profesjonalna {service.name.toLowerCase()} w Starej Wiśniewce z gwarancją
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

export default Konstrukcje;