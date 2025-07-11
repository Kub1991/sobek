import { Link } from "react-router-dom";
import { siteConfig } from "@/config/siteConfig";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{siteConfig.businessName}</h3>
            <p className="text-gray-300 mb-4">
              Profesjonalne usługi spawalnicze i ślusarskie w Starej Wiśniewce. 
              Projekt, produkcja i montaż konstrukcji stalowych.
            </p>
            <p className="text-blue font-semibold">{siteConfig.phone}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Usługi</h4>
            <ul className="space-y-2">
              {siteConfig.categories.slice(0, 5).map((category) => (
                <li key={category.slug}>
                  <Link
                    to={`/uslugi/${category.slug}-${siteConfig.slugBase}`}
                    className="text-gray-300 hover:text-blue transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Firma</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/o-nas" className="text-gray-300 hover:text-blue transition-colors">
                  O nas
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-gray-300 hover:text-blue transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/uslugi" className="text-gray-300 hover:text-blue transition-colors">
                  Wszystkie usługi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Lokalizacja</h4>
            <p className="text-gray-300 mb-2">ul. Główna 15</p>
            <p className="text-gray-300 mb-4">89-113 Stara Wiśniewka</p>
            <div className="space-y-2">
              <p className="text-gray-300">Pon-Pt: 8:00-17:00</p>
              <p className="text-gray-300">Sob: 8:00-14:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">
            © 2024 {siteConfig.businessName}. Wszystkie prawa zastrzeżone.
          </p>
          <p className="text-gray-300 mt-4 md:mt-0">
            Usługi spawalnicze i ślusarskie Stara Wiśniewka
          </p>
        </div>
      </div>
    </footer>
  );
};