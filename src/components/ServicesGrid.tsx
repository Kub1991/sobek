import { Link } from "react-router-dom";
import { siteConfig } from "@/config/siteConfig";

interface ServicesGridProps {
  variant?: "home" | "catalog";
}

const getServiceImage = (serviceSlug: string) => {
  const imageMap = {
    'balustrady': '/hero-workshop.jpg',
    'ogrodzenia': '/ogrodzenie1.jpg', 
    'konstrukcje-stalowe': '/konstrukcjestalowe.jpg',
    'meble-loft': '/meble loft.jpg',
    'uslugi-spawalnicze': '/spawanie.jpg'
  };
  
  return imageMap[serviceSlug] || '/hero-workshop.jpg';
};

export const ServicesGrid = ({ variant = "home" }: ServicesGridProps) => {
  const getDescription = (categoryName: string) => {
    if (variant === "home") {
      return `Profesjonalna ${categoryName.toLowerCase()}`;
    } else {
      return `Kompleksowa ${categoryName.toLowerCase()} w Starej Wiśniewce z gwarancją jakości i profesjonalnym doradztwem`;
    }
  };

  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Nasze specjalizacje
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kompleksowe usługi spawalnicze i ślusarskie w Starej Wiśniewce
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service) => (
            <Link
              key={service.slug}
              to={`/${service.slug}`}
              className="group block"
            >
              <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 group-hover:scale-105">
                <div className="mb-4 overflow-hidden rounded-xl">
                  <img 
                    src={getServiceImage(service.slug)}
                    alt={`${service.name} - ${siteConfig.businessName}`}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {getDescription(service.name)}
                </p>
                <div className="flex items-center text-blue group-hover:underline">
                  <span>Zobacz usługi</span>
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};