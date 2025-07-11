import { SeoHead } from "@/components/SeoHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/siteConfig";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <SeoHead 
        title={`O nas – ${siteConfig.businessName}`}
        description={`Poznaj zespół ${siteConfig.businessName}. Doświadczeni spawacze, nowoczesne technologie, 3-letnia gwarancja. Od 2018 roku realizujemy projekty stalowe.`}
      />
      <Header />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              O nas – SEB-STAL-SPAW Stara Wiśniewka
            </h1>
            <p className="text-xl text-muted-foreground">
              Twój zaufany partner w realizacji projektów stalowych
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Dlaczego SEB-STAL-SPAW?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                SEB-STAL-SPAW to zespół wyspecjalizowanych, profesjonalnych spawaczy i ślusarzy, 
                którzy z pasją i zaangażowaniem realizują każdy projekt stalowy. W naszym warsztacie 
                pracujemy na nowoczesnym sprzęcie, używając najwyższej jakości stali - czarnej i nierdzewnej. 
                Współpracujemy z renomowanymi dostawcami materiałów, co gwarantuje najwyższą jakość 
                naszych konstrukcji.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                W naszym warsztacie realizujemy projekty stalowe wszelkiego rodzaju. Oferujemy szeroki zakres 
                usług - od prostych balustrad po skomplikowane konstrukcje architektoniczne i meble loft. 
                Każdy z tych elementów składa się na najwyższą jakość obsługi - docenioną przez naszych stałych Klientów. 
                Łączy nas miłość do metalu i precyzji. Naszym celem jest długotrwała 
                współpraca z klientami oparta na zaufaniu i zadowoleniu z naszych realizacji.
              </p>
            </div>
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
              <img 
                src="https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Zespół SEB-STAL-SPAW Stara Wiśniewka"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-foreground mb-4">
                Profesjonalizm, precyzja i trwałość
              </h3>
              <p className="text-muted-foreground">
                W trosce o zadowolenie Klientów i świadczenie usług najwyższej jakości inwestujemy 
                w najnowsze technologie spawalnicze i podnoszenie kwalifikacji zawodowych, dzięki czemu 
                realizujemy nawet najbardziej wymagające projekty stalowe.
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