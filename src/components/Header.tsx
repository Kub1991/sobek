import { Link } from "react-router-dom";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "./Button";
import { Phone } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white shadow-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-foreground">
              {siteConfig.businessName}
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-blue transition-colors">
              Strona główna
            </Link>
            <Link to="/uslugi" className="text-foreground hover:text-blue transition-colors">
              Usługi
            </Link>
            <Link to="/o-nas" className="text-foreground hover:text-blue transition-colors">
              O nas
            </Link>
            <Link to="/kontakt" className="text-foreground hover:text-blue transition-colors">
              Kontakt
            </Link>
          </nav>

          <a href={`tel:${siteConfig.phone}`}>
            <Button variant="primary" className="hidden md:flex">
              {siteConfig.phone}
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};