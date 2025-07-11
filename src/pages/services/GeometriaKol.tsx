import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/ServiceBreadcrumb";
import { ServiceForm } from "@/components/ServiceForm";
import { RelatedServices } from "@/components/RelatedServices";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const GeometriaKol = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServiceBreadcrumb 
          categoryName="Zawieszenie" 
          categorySlug="zawieszenie"
          serviceName="Geometria kół 3D"
        />
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Geometria kół 3D Piła – Serwis FORDZIK
            </h1>
            
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop" 
                alt="Geometria kół 3D – zdjęcie poglądowe"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground mb-4">
                Profesjonalna geometria kół 3D Piła w Serwisie FORDZIK – Warsztacie Tony'ego. 
                Nowoczesny stanowisk Hunter z technologią 3D zapewnia precyzyjne ustawienie geometrii 
                we wszystkich modelach Ford. Nieprawidłowa geometria to przyspieszenie zużycia opon i gorsze prowadzenie.
              </p>
              <p className="text-muted-foreground mb-4">
                Proces obejmuje pomiar wszystkich kątów geometrii, porównanie z normami Ford oraz regulację 
                zbieżności, pochylenia i odchylenia kół. Dokładny raport z pomiarów przed i po regulacji. 
                Czas realizacji: 45-90 minut w zależności od stanu zawieszenia.
              </p>
              <p className="text-muted-foreground">
                Gwarancja zachowania parametrów przez 10 000 km oraz bezpłatna kontrola po miesiącu. 
                Oferujemy pakiet geometria + wyważanie kół z atrakcyjnym rabatem.
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
                      <td className="py-2">Pomiar geometrii 3D</td>
                      <td className="py-2 font-semibold">80 zł</td>
                      <td className="py-2">30 min</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Regulacja geometrii</td>
                      <td className="py-2 font-semibold">150 zł</td>
                      <td className="py-2">60 min</td>
                    </tr>
                    <tr>
                      <td className="py-2">Pakiet geometria + wyważanie</td>
                      <td className="py-2 font-semibold">220 zł</td>
                      <td className="py-2">90 min</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <Accordion type="single" collapsible className="bg-white rounded-2xl shadow-card">
              <AccordionItem value="item-1" className="px-6">
                <AccordionTrigger>Jak często sprawdzać geometrię kół Ford w Pile?</AccordionTrigger>
                <AccordionContent>
                  W Pile, ze względu na nierówne nawierzchnie i dziury na drogach, zalecamy kontrolę geometrii 
                  co 20 000 km lub po każdym mocnym uderzeniu w dziurę. Ford ST wymaga częstszych kontroli.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="px-6">
                <AccordionTrigger>Czy oferujecie geometrię dla Ford Performance?</AccordionTrigger>
                <AccordionContent>
                  Tak, mamy doświadczenie w ustawianiu geometrii sportowej dla Ford Focus ST, Fiesta ST i Mustang. 
                  Możemy dostosować ustawienia do Twoich preferencji jazdy i rodzaju użytkowania.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <RelatedServices 
              currentSlug="geometria-kol"
              parentCategory="zawieszenie"
            />
          </div>

          <div className="lg:col-span-1">
            <ServiceForm serviceName="Geometria kół 3D" />
            
            <div className="mt-8 bg-secondary rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Nasze zalety</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Stanowisko Hunter 3D
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Raport z pomiarów
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Gwarancja 10 000 km
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Doświadczenie Ford Performance
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

export default GeometriaKol;