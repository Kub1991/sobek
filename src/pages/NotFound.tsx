import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground">404 - Strona nie znaleziona</h1>
        <p className="text-xl text-muted-foreground mb-4">Ups! Strona nie została znaleziona</p>
        <a href="/" className="text-orange hover:underline font-semibold">
          Powrót do strony głównej
        </a>
      </div>
    </div>
  );
};

export default NotFound;
