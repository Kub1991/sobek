import { Button } from "./Button";
import { siteConfig } from "@/config/siteConfig";
import heroImage from "@/assets/hero-workshop.jpg";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-white py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Auto-Expert warsztat samochodowy Piła"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Serwis Ford Piła – {siteConfig.businessName}
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Specjalistyczny serwis Ford w Pile. Doświadczenie, pasja i najwyższa jakość.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {siteConfig.usp.map((usp, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>{usp}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="secondary"
                className="bg-white text-blue hover:bg-gray-100 flex-1"
              >
                Umów wizytę online
              </Button>
              <a href={`tel:${siteConfig.phone}`} className="flex-1">
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue w-full"
                >
                  Zadzwoń: {siteConfig.phone}
                </Button>
              </a>
            </div>
          </div>

          <div className="relative">
            {/* Zdjęcie samochodów w tle karty */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Samochody Ford w serwisie - tło"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-800/90"></div>
            </div>
            
            {/* Karta formularza */}
            <div className="relative backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Umów wizytę w 60 sekund</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Marka i model
                  </label>
                  <input
                    type="text"
                    placeholder="np. Ford Focus"
                    className="w-full px-4 py-3 rounded-lg text-black"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Opisz problem
                  </label>
                  <textarea
                    placeholder="Jakie objawy zauważasz?"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg text-black resize-none"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Preferowana data
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-lg text-black"
                  />
                </div>

                <Button 
                  type="submit"
                  variant="secondary"
                  className="w-full bg-white text-blue hover:bg-gray-100"
                >
                  Wyślij zgłoszenie
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};