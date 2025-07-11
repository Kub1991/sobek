import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/ServiceBreadcrumb";
import { ServiceForm } from "@/components/ServiceForm";
import { RelatedServices } from "@/components/RelatedServices";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WymianaOleju = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServiceBreadcrumb 
          categoryName="Płyny eksploatacyjne" 
          categorySlug="plyny-eksploatacyjne"
          serviceName="Wymiana oleju silnikowego"
        />
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Wymiana oleju silnikowego Piła – Serwis FORDZIK
            </h1>
            
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop" 
                alt="Wymiana oleju silnikowego – zdjęcie poglądowe"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground mb-4">
                Profesjonalna wymiana oleju silnikowego Piła w Serwisie FORDZIK – Warsztacie Tony'ego. 
                Specjalizujemy się w obsłudze Ford, używając oryginalnych olejów Castrol i Motorcraft 
                zgodnych z wymaganiami WSS-M2C. Regularna wymiana oleju to podstawa długiej żywotności silnika.
              </p>
              <p className="text-muted-foreground mb-4">
                Proces obejmuje spuszczenie starego oleju, wymianę filtra oleju, uzupełnienie świeżym olejem 
                oraz kontrolę szczelności. Sprawdzamy również poziom innych płynów eksploatacyjnych. 
                Czas realizacji: 20-30 minut. Każda wymiana z 2-letnią gwarancją.
              </p>
              <p className="text-muted-foreground">
                Oferujemy przypomnienia SMS o zbliżającym się terminie wymiany oraz program lojalnościowy 
                dla stałych klientów. Ewidencja serwisowa zgodna z wymogami gwarancji Ford.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-card mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Cennik orientacyjny</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Usługa</th>
                      <th className="text-left py-2">Cena od</th>
                      <th className="text-left py-2">Czas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">Wymiana oleju 5W-30 (4L)</td>
                      <td className="py-2 font-semibold">180 zł</td>
                      <td className="py-2">20 min</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Wymiana oleju + filtr</td>
                      <td className="py-2 font-semibold">220 zł</td>
                      <td className="py-2">30 min</td>
                    </tr>
                    <tr>
                      <td className="py-2">Serwis kompleksowy + inne płyny</td>
                      <td className="py-2 font-semibold">350 zł</td>
                      <td className="py-2">45 min</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <Accordion type="single" collapsible className="bg-white rounded-2xl shadow-card">
              <AccordionItem value="item-1" className="px-6">
                <AccordionTrigger>Jak często wymieniać olej w Ford w Pile?</AccordionTrigger>
                <AccordionContent>
                  W Pile, ze względu na miejskie warunki jazdy i zmienne temperatury, zalecamy wymianę oleju 
                  co 10-15 tysięcy kilometrów lub raz na rok. Ford EcoBoost wymaga częstszych wymian ze względu na doładowanie.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="px-6">
                <AccordionTrigger>Czy używacie oryginalnych olejów Ford?</AccordionTrigger>
                <AccordionContent>
                  Tak, używamy wyłącznie olejów Castrol i Motorcraft z certyfikatami WSS-M2C zgodnie z wymaganiami Ford. 
                  Mamy pełen asortyment dla wszystkich silników od 1.0 EcoBoost do 2.3 Turbo.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <RelatedServices 
              currentSlug="wymiana-oleju"
              parentCategory="plyny-eksploatacyjne"
            />
          </div>

          <div className="lg:col-span-1">
            <ServiceForm serviceName="Wymiana oleju silnikowego" />
            
            <div className="mt-8 bg-secondary rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Nasze zalety</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Oryginalne oleje Castrol/Motorcraft
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Przypomnienia SMS
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Ewidencja serwisowa Ford
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Program lojalnościowy
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

export default WymianaOleju;