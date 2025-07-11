import { useState } from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/siteConfig";

interface CitiesLinksProps {
  serviceSlug: string;
}

export const CitiesLinks = ({ serviceSlug }: CitiesLinksProps) => {
  const [showAll, setShowAll] = useState(false);
  
  const mainCities = siteConfig.cities.slice(0, 3); // Złotów, Piła, Zakrzewo
  const otherCities = siteConfig.cities.slice(3); // Pozostałe miasta

  return (
    <div className="bg-white rounded-2xl p-6 shadow-card">
      <h3 className="text-xl font-bold text-foreground mb-6">
        Obsługiwane miasta
      </h3>
      
      {/* Główne 3 miasta */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {mainCities.map((city) => (
          <Link
            key={city.slug}
            to={`/${serviceSlug}/${city.slug}`}
            className="group block"
          >
            <div className="bg-secondary rounded-2xl p-4 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <h4 className="font-semibold text-foreground group-hover:text-blue transition-colors">
                  {city.name}
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Bezpłatny pomiar i wycena
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Przycisk "Zobacz wszystkie miasta" */}
      <div className="text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue hover:underline font-medium"
        >
          {showAll ? 'Ukryj pozostałe miasta' : `Zobacz wszystkie miasta (${otherCities.length} więcej)`}
        </button>
      </div>

      {/* Pozostałe miasta - rozwijane */}
      {showAll && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {otherCities.map((city) => (
              <Link
                key={city.slug}
                to={`/${serviceSlug}/${city.slug}`}
                className="group block"
              >
                <div className="bg-gray-50 rounded-lg p-3 hover:bg-blue hover:text-white transition-all duration-200">
                  <div className="text-center">
                    <span className="text-sm font-medium">{city.name}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};