import { useState } from "react";

const faqs = [
  {
    question: "Czy oferujecie odbiór auta w dzielnicy Górne?",
    answer: "Tak! Odbieramy i zwracamy samochody w całej Pile, w tym w dzielnicy Górne. Usługa jest bezpłatna w promieniu miasta."
  },
  {
    question: "Ile kosztuje diagnoza komputerowa?",
    answer: "Podstawowa diagnoza jest GRATIS i trwa około 15 minut. W przypadku bardziej zaawansowanej diagnostyki informujemy o kosztach przed rozpoczęciem."
  },
  {
    question: "Czy naprawiacie wszystkie marki samochodów?",
    answer: "Tak, naprawiamy wszystkie marki - od popularnych jak VW, Opel, Ford, po premium jak BMW, Audi, Mercedes. Mamy odpowiedni sprzęt diagnostyczny."
  },
  {
    question: "Jak długo trwa wymiana oleju?",
    answer: "Standardowa wymiana oleju to około 30-45 minut. Jeśli chcesz poczekać, przygotowujemy kawę. Możesz też zostawić auto i odebrać później."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Często zadawane pytania
          </h2>
          <p className="text-muted-foreground">
            Odpowiedzi na najczęstsze pytania naszych klientów z Piły
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue focus:ring-opacity-50 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-foreground">{faq.question}</h3>
                  <span className={`text-blue transform transition-transform ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}>
                    +
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};