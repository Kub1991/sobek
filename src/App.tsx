import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ServicesPage from "./pages/ServicesPage";
import NotFound from "./pages/NotFound";

// Category pages
import Hamulce from "./pages/categories/Hamulce";
import Klimatyzacja from "./pages/categories/Klimatyzacja";
import WymianaOlejuCategory from "./pages/categories/WymianaOleju";
import Zawieszenie from "./pages/categories/Zawieszenie";
import DiagnostykaKomputerowa from "./pages/categories/DiagnostykaKomputerowa";
import Wulkanizacja from "./pages/categories/Wulkanizacja";
import Elektryka from "./pages/categories/Elektryka";
import PrzegladySerwisowe from "./pages/categories/PrzegladySerwisowe";

// Service pages
import WymianaKlockowHamulcowych from "./pages/services/WymianaKlockowHamulcowych";
import RegeneracjaZaciskow from "./pages/services/RegeneracjaZaciskow";
import DiagnostykaBenzyna from "./pages/services/DiagnostykaBenzyna";
import WymianaOleju from "./pages/services/WymianaOleju";
import OdgrzybianieLimy from "./pages/services/OdgrzybianieLimy";
import GeometriaKol from "./pages/services/GeometriaKol";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/uslugi" element={<ServicesPage />} />
          <Route path="/o-nas" element={<AboutUs />} />
          <Route path="/kontakt" element={<Contact />} />
          
          {/* Category pages */}
          <Route path="/uslugi/hamulce-pila" element={<Hamulce />} />
          <Route path="/uslugi/klimatyzacja-pila" element={<Klimatyzacja />} />
          <Route path="/uslugi/plyny-eksploatacyjne-pila" element={<WymianaOlejuCategory />} />
          <Route path="/uslugi/zawieszenie-pila" element={<Zawieszenie />} />
          <Route path="/uslugi/diagnostyka-komputerowa-pila" element={<DiagnostykaKomputerowa />} />
          <Route path="/uslugi/wulkanizacja-pila" element={<Wulkanizacja />} />
          <Route path="/uslugi/elektryka-pila" element={<Elektryka />} />
          <Route path="/uslugi/przeglady-serwisowe-pila" element={<PrzegladySerwisowe />} />
          
          {/* Service pages */}
          <Route path="/uslugi/wymiana-klockow-pila" element={<WymianaKlockowHamulcowych />} />
          <Route path="/uslugi/regeneracja-zaciskow-pila" element={<RegeneracjaZaciskow />} />
          <Route path="/uslugi/diagnostyka-benzyna-pila" element={<DiagnostykaBenzyna />} />
          <Route path="/uslugi/wymiana-oleju-pila" element={<WymianaOleju />} />
          <Route path="/uslugi/odgrzybianie-klimy-pila" element={<OdgrzybianieLimy />} />
          <Route path="/uslugi/geometria-kol-pila" element={<GeometriaKol />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
