const steps = [
  {
    number: "01",
    title: "Rezerwacja",
    description: "Umów się online w 60 sekund lub zadzwoń. Opisz problem - pomożemy ocenić pilność naprawy."
  },
  {
    number: "02", 
    title: "Diagnoza",
    description: "GRATIS diagnoza w 15 minut. Dokładnie sprawdzamy auto i informujemy o wszystkich usterkach."
  },
  {
    number: "03",
    title: "Naprawa z gwarancją",
    description: "Profesjonalna naprawa z 2-letnią gwarancją na części i robociznę. Stały kontakt SMS/WhatsApp."
  }
];

export const ProcessSteps = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Jak to działa?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proces naprawy w 3 prostych krokach
          </p>
        </div>

        <div className="relative">
          {/* Desktop: Horizontal layout with arrows */}
          <div className="hidden md:flex items-center justify-center">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                {/* Step Card */}
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 max-w-sm">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-gradient-hero text-white font-bold text-lg rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="text-center pt-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="flex items-center mx-8">
                    <div className="flex flex-col items-center">
                      {/* Animated Arrow */}
                      <div className="relative">
                        <svg 
                          width="60" 
                          height="20" 
                          viewBox="0 0 60 20" 
                          className="text-blue animate-pulse"
                        >
                          <defs>
                            <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="hsl(210, 100%, 52%)" stopOpacity="0.3"/>
                              <stop offset="100%" stopColor="hsl(210, 100%, 52%)" stopOpacity="1"/>
                            </linearGradient>
                          </defs>
                          <path 
                            d="M5 10 L45 10 M40 5 L45 10 L40 15" 
                            stroke="url(#arrowGradient)" 
                            strokeWidth="2" 
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      
                      {/* Progress dots */}
                      <div className="flex space-x-1 mt-2">
                        <div className="w-2 h-2 bg-blue rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                        <div className="w-2 h-2 bg-blue rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                        <div className="w-2 h-2 bg-blue rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: Vertical layout */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 mx-4">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-8">
                    <div className="w-10 h-10 bg-gradient-hero text-white font-bold text-sm rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Vertical connector */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-blue to-blue/30"></div>
                      <svg width="20" height="20" viewBox="0 0 20 20" className="text-blue">
                        <path 
                          d="M10 5 L10 15 M5 10 L10 15 L15 10" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};