import { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    name: "Marcin K.",
    rating: 5,
    text: "Szybka diagnoza, uczciwe ceny i profesjonalna obsługa. Polecam Serwis FORDZIK każdemu kierowcy w Pile!",
    service: "Wymiana klocków hamulcowych",
    imageUrl: "https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Anna W.", 
    rating: 5,
    text: "Odbiór auta z domu i zwrot po naprawie - mega wygodne! Klimatyzacja działa jak nowa.",
    service: "Odgrzybianie klimatyzacji",
    imageUrl: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Piotr S.",
    rating: 5,
    text: "2 lata gwarancji na wszystkie części! Takiej pewności siebie w swojej pracy szukałem.",
    service: "Naprawa alternatora",
    imageUrl: "https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Katarzyna M.",
    rating: 5,
    text: "Stały kontakt SMS podczas naprawy - zawsze wiedziałam co się dzieje z moim autem.",
    service: "Diagnostyka komputerowa",
    imageUrl: "https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Tomasz L.",
    rating: 5,
    text: "Darmowa diagnoza w 15 minut! Szybko znaleźli problem i naprawili w tym samym dniu.",
    service: "Wymiana oleju",
    imageUrl: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  }
];

export const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-2xl">★</span>
      ))}
    </div>
  );

  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Nasze realizacje i opinie klientów
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Zobacz efekty naszej pracy i poznaj opinie zadowolonych klientów z Piły
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-6">
                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Zdjęcie realizacji */}
                      <div className="relative h-80 lg:h-auto">
                        <img 
                          src={review.imageUrl} 
                          alt={`${review.service} - realizacja w Serwisie FORDZIK`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg">
                          <p className="text-sm font-medium">{review.service}</p>
                        </div>
                      </div>
                      
                      {/* Opinia klienta */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <StarRating rating={review.rating} />
                        
                        <blockquote className="text-xl lg:text-2xl text-foreground mb-8 italic leading-relaxed">
                          "{review.text}"
                        </blockquote>
                        
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-foreground text-lg">{review.name}</p>
                            <p className="text-blue text-sm font-medium">Klient z Piły</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue scale-110 shadow-lg' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-hero text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Dołącz do grona zadowolonych klientów!</h3>
            <p className="text-lg mb-6 opacity-90">
              Umów wizytę już dziś i przekonaj się o jakości naszych usług
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Umów wizytę online
              </button>
              <a 
                href="tel:67-123-45-67" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue transition-colors"
              >
                Zadzwoń: 67-123-45-67
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};