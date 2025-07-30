import { SeoHead } from "@/components/SeoHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServicesGrid } from "@/components/ServicesGrid";
import { siteConfig } from "@/config/siteConfig";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <SeoHead
        title="Usługi – SEB-STAL-SPAW | Balustrady, bramy, konstrukcje"
        description="Pełna lista naszych usług: balustrady balkonowe i schodowe, bramy i furtki, konstrukcje stalowe, meble loft. Umów pomiar online."
        canonical="/uslugi"
        schemaType="localBusiness"
      />
      <Header />
      <main className="py-16">
        <nav className="bg-white border-b border-gray-200 -mt-16 pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <a href="/" className="hover:text-blue transition-colors">Strona główna</a>
              <span>›</span>
              <span className="font-medium text-foreground">Usługi</span>
            </div>
          </div>
        </nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Usługi – {siteConfig.businessName}
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Nasza firma w Starej Wiśniewce specjalizuje się w kompleksowej realizacji projektów 
              z zakresu spawalnictwa i ślusarstwa. Oferujemy projektowanie, produkcję i montaż 
              balustrad balkonowych i schodowych, bram przesuwnych i dwuskrzydłowych, konstrukcji 
              stalowych, zadaszenia, pergoli oraz mebli w stylu loft. Każdy projekt realizujemy 
              od podstaw, używając najwyższej jakości stali czarnej i nierdzewnej oraz oferujemy 
              malowanie proszkowe w dowolnym kolorze RAL. Klientom zapewniamy trzyletnią gwarancję 
              na spawy i powłoki, a także bezpłatny pomiar w promieniu 60 km. Pracujemy od 
              poniedziałku do soboty, a termin możesz umówić online w 60 sekund. Sprawdź pełną 
              listę usług poniżej i umów pomiar – obsługujemy klientów ze Starej Wiśniewki, 
              Iławy oraz całych Warmii i Mazur.
            </p>
          </div>

          <div className="mb-16">
            <ServicesGrid variant="catalog" />
          </div>

          <div className="bg-secondary rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Dlaczego wybrać {siteConfig.businessName}?
              </h2>
              <p className="text-muted-foreground">
                Realizujemy projekty stalowe od podstaw, łącząc tradycyjne techniki spawalnicze z nowoczesnymi technologiami
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {siteConfig.usp.map((usp, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="font-semibold text-foreground">{usp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;