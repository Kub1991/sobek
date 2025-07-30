import { SeoHead } from "@/components/SeoHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/ServiceBreadcrumb";
import { ServiceForm } from "@/components/ServiceForm";
import { CitiesLinks } from "@/components/CitiesLinks";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/siteConfig";
import { Link } from "react-router-dom";

const UslugiSpawalniczne = () => {
  const service = siteConfig.services.find(s => s.slug === "uslugi-spawalnicze");
  
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen">
      <SeoHead 
        title={`${service.name} – ${siteConfig.businessName}`}
        description={`Profesjonalne ${service.name.toLowerCase()}. ${siteConfig.businessName} oferuje kompleksowe usługi spawalnicze i ślusarskie z 3-letnią gwarancją.`}
        schemaType="service"
        serviceData={service}
      />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServiceBreadcrumb 
          categoryName={service.name}
          categorySlug={service.slug}
        />
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              {service.name} {siteConfig.city} – {siteConfig.businessName}
            </h1>
            
            <div className="mb-8">
              <img 
                src="https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
                alt={`${service.name} – zdjęcie poglądowe`}
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground mb-4">
                Profesjonalne {service.name.toLowerCase()} {siteConfig.city} w {siteConfig.businessName}. 
                Oferujemy kompleksowe usługi z zakresu {service.group.toLowerCase()}, 
                łącząc tradycyjne techniki spawalnicze z nowoczesnymi rozwiązaniami.
              </p>
              <p className="text-muted-foreground mb-4">
                Nasze doświadczenie i nowoczesny sprzęt gwarantują najwyższą jakość wykonania. 
                Każda realizacja objęta jest 3-letnią gwarancją na spawy i powłoki. 
                Oferujemy bezpłatny pomiar w promieniu 60 km od {siteConfig.city}.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Nasze usługi z kategorii {service.name}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.subservices.map((subservice) => (
                  <Card key={subservice.slug} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{subservice.name}</CardTitle>
                      <CardDescription>
                        Profesjonalna {subservice.name.toLowerCase()} w {siteConfig.city} z 3-letnią gwarancją
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Kompleksowa obsługa od projektu przez produkcję po montaż.
                      </p>
                      <div className="text-blue hover:underline text-sm font-medium">
                        Zobacz dostępne miasta →
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Dostępne lokalizacje</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {siteConfig.cities.map((city) => (
                  <Link
                    key={city.slug}
                    to={`/${service.slug}/${city.slug}`}
                    className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border"
                  >
                    <div className="text-center">
                      <h3 className="font-semibold text-foreground">{city.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {service.name}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <CitiesLinks serviceSlug={service.slug} />

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
          </div>

          <div className="lg:col-span-1">
            <ServiceForm serviceName={service.name} />
            
            <div className="mt-8 bg-secondary rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Nasze zalety</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Bezpłatny pomiar w 60 km
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  3-letnia gwarancja
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Projekt 3D GRATIS
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Malowanie proszkowe RAL
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UslugiSpawalniczne;