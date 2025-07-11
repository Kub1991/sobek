import { SeoHead } from "@/components/SeoHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { siteConfig } from "@/config/siteConfig";

const Contact = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": siteConfig.businessName,
      "telephone": siteConfig.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ul. Przemysłowa 12",
        "addressLocality": siteConfig.city,
        "postalCode": "64-920",
        "addressCountry": "PL"
      }
    }
  };

  return (
    <div className="min-h-screen">
      <SeoHead 
        title={`Kontakt – ${siteConfig.businessName} ${siteConfig.city}`}
        description={`Skontaktuj się z ${siteConfig.businessName} w ${siteConfig.city}. Tel: ${siteConfig.phone}, ul. Przemysłowa 12. Formularz kontaktowy, mapa dojazdu. Pon-Pt: 8:00-17:00, Sob: 8:00-14:00.`}
        structuredData={contactSchema}
      />
      <Header />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Kontakt – Serwis FORDZIK Piła
            </h1>
            <p className="text-xl text-muted-foreground">
              Skontaktuj się z nami - chętnie pomożemy!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Dane kontaktowe
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                    <span className="text-white">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Telefon</p>
                    <a href={`tel:${siteConfig.phone}`} className="text-blue hover:underline">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                    <span className="text-white">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Adres</p>
                    <p className="text-muted-foreground">ul. Przemysłowa 12</p>
                    <p className="text-muted-foreground">64-920 Piła</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                    <span className="text-white">🕒</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Godziny otwarcia</p>
                    <p className="text-muted-foreground">Pon-Pt: 8:00-17:00</p>
                    <p className="text-muted-foreground">Sob: 8:00-14:00</p>
                    <p className="text-muted-foreground">Nie: nieczynne</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-2xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Formularz kontaktowy
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Imię i nazwisko
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent"
                      placeholder="Twoje imię i nazwisko"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent"
                      placeholder="Numer telefonu"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Wiadomość
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent resize-none"
                      placeholder="Opisz swoją sprawę..."
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full">
                    Wyślij wiadomość
                  </Button>
                </form>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Jak nas znaleźć
              </h2>
              <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2394.123456789!2d16.123456!3d53.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDA3JzI0LjQiTiAxNsKwMDcnMjQuNCJF!5e0!3m2!1spl!2spl!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '1rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Auto-Expert Piła - lokalizacja"
                />
              </div>
              
              <div className="bg-gradient-card rounded-2xl p-6 shadow-card">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Dojazd i parking
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>• Dogodny dojazd z centrum Piły</p>
                  <p>• Bezpłatny parking dla klientów</p>
                  <p>• Możliwość odbioru i zwrotu auta</p>
                  <p>• Dostęp komunikacją miejską</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;