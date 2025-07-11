import { useState } from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/siteConfig";

export const AreasSection = () => {
  const [showAllCities, setShowAllCities] = useState(false);
  
  const mainCities = siteConfig.cities.slice(0, 3); // Złotów, Piła, Zakrzewo
  const otherCities = siteConfig.cities.slice(3); // Pozostałe miasta
  const mainServiceSlug = siteConfig.services[0].slug; // "balustrady"

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Obszary działalności
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Obsługujemy klientów w Starej Wiśniewce i okolicach. Bezpłatny pomiar w promieniu 60 km.
          </p>
        </div>

        {/* Główne 3 miasta */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {mainCities.map((city) => (
            <Link
              key={city.slug}
              to={`/${mainServiceSlug}/${city.slug}`}
              className="group block"
            >
              <div className="bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-hover hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">
                      {city.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Kompleksowe usługi spawalnicze
                  </p>
                  <div className="text-sm text-blue font-medium">
                    Zobacz realizacje →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Karta "Zobacz wszystkie miasta" */}
        <div className="text-center">
          <button
            onClick={() => setShowAllCities(!showAllCities)}
            className="bg-secondary rounded-2xl p-6 shadow-card hover:shadow-hover hover:scale-105 transition-all duration-300 inline-block"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-lg">+</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {showAllCities ? 'Ukryj pozostałe miasta' : 'Zobacz wszystkie miasta'}
              </h3>
              <p className="text-muted-foreground text-sm">
                {showAllCities ? 'Zwiń listę' : `${otherCities.length} więcej lokalizacji`}
              </p>
            </div>
          </button>
        </div>

        {/* Pozostałe miasta - rozwijane */}
        {showAllCities && (
          <div className="mt-8 bg-secondary rounded-2xl p-6">
            <h4 className="text-lg font-bold text-foreground mb-4 text-center">
              Pozostałe obszary obsługi
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {otherCities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/${mainServiceSlug}/${city.slug}`}
                  className="group block"
                >
                  <div className="bg-white rounded-lg p-4 hover:bg-blue hover:text-white hover:scale-105 transition-all duration-200 text-center">
                    <span className="text-sm font-medium">{city.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};