import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/ServiceBreadcrumb";
import { ServiceForm } from "@/components/ServiceForm";
import { RelatedServices } from "@/components/RelatedServices";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const RegeneracjaZaciskow = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServiceBreadcrumb 
          categoryName="Hamulce" 
          categorySlug="hamulce"
          serviceName="Regeneracja zacisków hamulcowych"
        />
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Regeneracja zacisków hamulcowych Piła – Serwis FORDZIK
            </h1>
            
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop" 
                alt="Regeneracja zacisków hamulcowych – zdjęcie poglądowe"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground mb-4">
                Profesjonalna regeneracja zacisków hamulcowych Piła w Serwisie FORDZIK. Zacięte lub 
                przeciekające zaciski hamulcowe powodują nierównomierne zużycie klocków i utratę 
                skuteczności hamowania. Nasze usługi regeneracji przywrócą pełną funkcjonalność układu.
              </p>
              <p className="text-muted-foreground mb-4">
                Proces regeneracji obejmuje demontaż zacisków, czyszczenie, wymianę uszczelek oraz 
                tłoczków, testowanie szczelności i montaż. Czas realizacji: 2-4 godziny w zależności 
                od stanu technicznego. Gwarancja 24 miesiące na wykonane prace.
              </p>
              <p className="text-muted-foreground">
                Regeneracja jest ekonomiczną alternatywą dla wymiany zacisków na nowe. Oszczędzasz 
                do 60% kosztów przy zachowaniu pełnej funkcjonalności i bezpieczeństwa.
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
                      <td className="py-2">Regeneracja 1 zacisk</td>
                      <td className="py-2 font-semibold">180 zł</td>
                      <td className="py-2">2 h</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Regeneracja komplet przód</td>
                      <td className="py-2 font-semibold">320 zł</td>
                      <td className="py-2">3 h</td>
                    </tr>
                    <tr>
                      <td className="py-2">Regeneracja komplet tył</td>
                      <td className="py-2 font-semibold">280 zł</td>
                      <td className="py-2">2.5 h</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <Accordion type="single" collapsible className="bg-white rounded-2xl shadow-card">
              <AccordionItem value="item-1" className="px-6">
                <AccordionTrigger>Kiedy warto regenerować zaciski hamulcowe w Pile?</AccordionTrigger>
                <AccordionContent>
                  Regeneracja jest wskazana gdy zaciski się zacięły, występują wycieki płynu hamulcowego 
                  lub nierównomierne zużycie klocków. W klimacie Piły, solenie dróg zimą przyśpiesza korozję.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="px-6">
                <AccordionTrigger>Czy regenerowane zaciski są bezpieczne?</AccordionTrigger>
                <AccordionContent>
                  Tak, prawidłowo zregenerowane zaciski są w pełni bezpieczne i funkcjonalne. Używamy 
                  oryginalnych uszczelek i tłoczków, a każda regeneracja przechodzi testy szczelności.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <RelatedServices 
              currentSlug="regeneracja-zaciskow"
              parentCategory="hamulce"
            />
          </div>

          <div className="lg:col-span-1">
            <ServiceForm serviceName="Regeneracja zacisków hamulcowych" />
            
            <div className="mt-8 bg-secondary rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Nasze zalety</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Diagnoza GRATIS w 15 min
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  2-letnia gwarancja
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Odbiór auta w Pile
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                  Kontakt SMS/WhatsApp
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

export default RegeneracjaZaciskow;