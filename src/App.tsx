import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StickyCall } from "@/components/StickyCall";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ServicesPage from "./pages/ServicesPage";
import NotFound from "./pages/NotFound";
import ServiceLayout from "./pages/ServiceLayout";
import ServiceCity from "./pages/ServiceCity";

// Category pages
import BalustradyOgrodzenia from "./pages/categories/BalustradyOgrodzenia";
import BramyFurtki from "./pages/categories/BramyFurtki";
import Konstrukcje from "./pages/categories/Konstrukcje";
import MebleLoft from "./pages/categories/MebleLoft";
import ProduktyUzytkowe from "./pages/categories/ProduktyUzytkowe";
import SpawaNaprawy from "./pages/categories/SpawaNaprawy";

// Service pages
import BalustradyBalkonowe from "./pages/services/BalustradyBalkonowe";
import BalustradySchodowe from "./pages/services/BalustradySchodowe";
import OgrodzeniaPostsyjne from "./pages/services/OgrodzeniaPostsyjne";
import BramyPrzesuwne from "./pages/services/BramyPrzesuwne";
import BramyDwuskrzydlowe from "./pages/services/BramyDwuskrzydlowe";
import FurtkiOgrodowe from "./pages/services/FurtkiOgrodowe";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <StickyCall />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/uslugi" element={<ServicesPage />} />
          <Route path="/o-nas" element={<AboutUs />} />
          <Route path="/kontakt" element={<Contact />} />
          
          {/* Dynamic routing for services and cities */}
          <Route path="/:serviceSlug" element={<ServiceLayout />} />
          <Route path="/:serviceSlug/:citySlug" element={<ServiceCity />} />
          
          {/* Category pages */}
          <Route path="/uslugi/balustrady-ogrodzenia-stara-wisniewka" element={<BalustradyOgrodzenia />} />
          <Route path="/uslugi/bramy-furtki-stara-wisniewka" element={<BramyFurtki />} />
          <Route path="/uslugi/konstrukcje-stara-wisniewka" element={<Konstrukcje />} />
          <Route path="/uslugi/meble-loft-stara-wisniewka" element={<MebleLoft />} />
          <Route path="/uslugi/produkty-uzytkowe-stara-wisniewka" element={<ProduktyUzytkowe />} />
          <Route path="/uslugi/spawanie-naprawy-stara-wisniewka" element={<SpawaNaprawy />} />
          
          {/* Service pages */}
          <Route path="/uslugi/balustrady-balkonowe-stara-wisniewka" element={<BalustradyBalkonowe />} />
          <Route path="/uslugi/balustrady-schodowe-stara-wisniewka" element={<BalustradySchodowe />} />
          <Route path="/uslugi/ogrodzenia-posesyjne-stara-wisniewka" element={<OgrodzeniaPostsyjne />} />
          <Route path="/uslugi/bramy-przesuwne-stara-wisniewka" element={<BramyPrzesuwne />} />
          <Route path="/uslugi/bramy-dwuskrzydlowe-stara-wisniewka" element={<BramyDwuskrzydlowe />} />
          <Route path="/uslugi/furtki-ogrodowe-stara-wisniewka" element={<FurtkiOgrodowe />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
