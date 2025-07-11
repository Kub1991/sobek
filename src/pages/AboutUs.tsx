import { SeoHead } from "@/components/SeoHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/siteConfig";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <SeoHead 
        title={`O nas – ${siteConfig.businessName} ${siteConfig.city}`}
        description={`Poznaj zespół ${siteConfig.businessName} w ${siteConfig.city}. Doświadczeni mechanicy, nowoczesny sprzęt, 2-letnia gwarancja. Od 2015 roku obsługujemy klientów z ${siteConfig.city} i okolic.`}
      />
      <Header />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              O nas – Auto-Expert Piła
            </h1>
            <p className="text-xl text-muted-foreground">
              Twój zaufany partner w naprawach samochodowych
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Dlaczego Serwis FORDZIK?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Serwis FORDZIK to grupa wyspecjalizowanych, profesjonalnych mechaników samochodowych, 
                którzy z pasją i zaangażowaniem podejmują się każdej naprawy Ford. W naszym warsztacie 
                pracujemy na nowoczesnym sprzęcie, korzystając z wybranych przez Klienta części - 
                oryginalnych lub zamiennych. Należymy do sieci ProfiAuto, co daje nam dostęp do ponad 
                250 dostawców części samochodowych.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                W naszym serwisie naprawiamy samochody osobowe marki Ford. Oferujemy szeroki zakres 
                usług - od wymiany filtrów i oleju - przez naprawę silnika po serwis klimatyzacji. 
                Każdy z tych elementów składa się na najwyższą jakość obsługi - docenioną przez naszych stałych Klientów. 
                Łączy nas miłość do motoryzacji. Naszym celem jest długotrwała 
                współpraca z klientami oparta na zaufaniu i zadowoleniu z naszych usług.
              </p>
            </div>
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
              <img 
                src="https://images.unsplash.com/photo-1581092918484-8313aca65fc8?w=600&h=400&fit=crop" 
                alt="Zespół Serwis FORDZIK Piła"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-foreground mb-4">
                Profesjonalizm, pasja i wysoka jakość
              </h3>
              <p className="text-muted-foreground">
                W trosce o zadowolenie Klientów i świadczenie usług najwyższej jakości inwestujemy 
                w podnoszenie kwalifikacji i szkolenia branżowe, dzięki czemu dotrzymujemy kroku 
                ciągle zmieniającej się motoryzacji.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.usp.map((usp, index) => (
              <div key={index} className="text-center p-6 bg-secondary rounded-xl">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <p className="font-semibold text-foreground">{usp}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;