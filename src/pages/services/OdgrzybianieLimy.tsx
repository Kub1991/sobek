import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/ServiceBreadcrumb";
import { ServiceForm } from "@/components/ServiceForm";
import { RelatedServices } from "@/components/RelatedServices";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const OdgrzybianieLimy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServiceBreadcrumb 
          categoryName="Klimatyzacja" 
          categorySlug="klimatyzacja"
          serviceName="Odgrzybianie klimatyzacji"
        />
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Odgrzybianie klimatyzacji Piła – Serwis FORDZIK
            </h1>
            
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop" 
                alt="Odgrzybianie klimatyzacji – zdjęcie poglądowe"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground mb-4">
                Profesjonalne odgrzybianie klimatyzacji Piła w Serwisie FORDZIK – Warsztacie Tony'ego. 
                Wilgotny klimat Piły sprzyja rozwojowi bakterii i grzybów w systemie klimatyzacji Ford. 
                Nasze odgrzybianie usuwa nieprzyjemne zapachy i zapewnia zdrowe powietrze w kabinie.
              </p>
              <p className="text-muted-foreground mb-4">
                Proces obejmuje płukanie parownika specjalnymi środkami antybakteryjnymi, wymianę filtra 
                kabinowego oraz dezynfekcję całego systemu. Używamy profesjonalnych środków bezpiecznych 
                dla zdrowia. Czas realizacji: 60-90 minut. Efekt utrzymuje się przez cały sezon.
              </p>
              <p className="text-muted-foreground">
                Gwarancja skuteczności odgrzybiania oraz bezpłatna kontrola po miesiącu. Oferujemy 
                pakiety serwisowe klimatyzacji z rabatem dla stałych klientów Ford.
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
                      <td className="py-2">Odgrzybianie podstawowe</td>
                      <td className="py-2 font-semibold">120 zł</td>
                      <td className="py-2">60 min</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Odgrzybianie + filtr kabinowy</td>
                      <td className="py-2 font-semibold">180 zł</td>
                      <td className="py-2">75 min</td>
                    </tr>
                    <tr>
                      <td className="py-2">Pakiet kompletny + ozonowanie</td>
                      <td className="py-2 font-semibold">250 zł</td>
                      <td className="py-2">90 min</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <Accordion type="single" collapsible className="bg-white rounded-2xl shadow-card">
              <AccordionItem value="item-1" className="px-6">
                <AccordionTrigger>Jak często odgrzybiać klimatyzację Ford w Pile?</AccordionTrigger>
                <AccordionContent>
                  Ze względu na wilgotny klimat w Pile, zalecamy odgrzybianie klimatyzacji co roku przed sezonem letnim. 
                  Jeśli parkujesz nad jeziorem Pile lub w wilgotnych miejscach, może być potrzebne częściej.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="px-6">
                <AccordionTrigger>Czy ozonowanie jest bezpieczne dla Ford?</AccordionTrigger>
                <AccordionContent>
                  Tak, stosujemy ozonowanie w bezpiecznych stężeniach zgodnie z wytycznymi Ford. 
                  Ozon skutecznie eliminuje bakterie i grzyby bez uszkadzania komponentów plastikowych i gumowych.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <RelatedServices 
              currentSlug="odgrzybianie-klimy"
              parentCategory="klimatyzacja"
            />
          </div>

          <div className="lg:col-span-1">
            <ServiceForm serviceName="Odgrzybianie klimatyzacji" />
            
            <div className="mt-8 bg-secondary rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Nasze zalety</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Środki bezpieczne dla zdrowia
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Gwarancja skuteczności
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Kontrola po miesiącu GRATIS
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Pakiety serwisowe z rabatem
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

export default OdgrzybianieLimy;