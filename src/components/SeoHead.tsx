import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { siteConfig } from '@/config/siteConfig';

interface SeoHeadProps {
  title?: string;
  description?: string;
  schemaType?: 'service' | 'localBusiness' | 'faq' | 'contactPage' | 'custom';
  serviceData?: any; // Service object from siteConfig.services
  cityData?: any; // City object from siteConfig.cities
  customStructuredData?: object; // For custom schemas like FAQ, ContactPage
  canonical?: string;
  noIndex?: boolean;
  location?: string;
}

export const SeoHead = ({ 
  title, 
  description, 
  schemaType, 
  serviceData, 
  cityData, 
  customStructuredData,
  canonical, 
  noIndex = false, 
  location 
}: SeoHeadProps) => {
  const { serviceSlug, citySlug } = useParams();
  
  // Znajdź service i city na podstawie slugów z URL
  const service = serviceSlug ? siteConfig.services.find(s => s.slug === serviceSlug) : null;
  const city = citySlug ? siteConfig.cities.find(c => c.slug === citySlug) : null;
  
  // Dynamiczne generowanie structuredData na podstawie schemaType
  const generateStructuredData = () => {
    if (!schemaType) return null;
    
    const currentService = serviceData || service;
    const currentCity = cityData || city;
    
    switch (schemaType) {
      case 'service':
        if (!currentService) return null;
        
        const serviceName = currentCity 
          ? `${currentService.name} ${currentCity.name}`
          : `${currentService.name} ${siteConfig.city}`;
          
        const serviceDescription = currentCity
          ? `Profesjonalne ${currentService.name.toLowerCase()} w ${currentCity.name}. ${siteConfig.businessName} oferuje kompleksowe usługi spawalnicze z bezpłatnym pomiarem.`
          : `Profesjonalne ${currentService.name.toLowerCase()} w ${siteConfig.city}. ${siteConfig.businessName} oferuje kompleksowe usługi spawalnicze.`;
          
        const areaServed = currentCity ? currentCity.name : siteConfig.city;
        
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": serviceName,
          "description": serviceDescription,
          "provider": {
            "@type": "LocalBusiness",
            "name": siteConfig.businessName,
            "telephone": siteConfig.phone,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": areaServed
            }
          },
          "areaServed": areaServed,
          "serviceType": currentService.group || currentService.name,
          "offers": {
            "@type": "Offer",
            "availability": "http://schema.org/InStock",
            "priceRange": "$$"
          }
        };
        
      case 'localBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": siteConfig.businessName,
          "description": `Profesjonalne usługi spawalnicze i ślusarskie w ${siteConfig.city}. Projekt, produkcja i montaż konstrukcji stalowych, balustrad, bram i mebli loftowych.`,
          "url": "https://sebstalspaw.netlify.app",
          "telephone": siteConfig.phone,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ul. Główna 15",
            "addressLocality": siteConfig.city,
            "postalCode": "89-113",
            "addressCountry": "PL"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "53.2516",
            "longitude": "17.8380"
          },
          "openingHours": [
            "Mo-Fr 08:00-17:00",
            "Sa 08:00-14:00"
          ],
          "priceRange": "$$"
        };
        
      case 'contactPage':
        return {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": siteConfig.businessName,
            "telephone": siteConfig.phone,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ul. Główna 15",
              "addressLocality": siteConfig.city,
              "postalCode": "89-113",
              "addressCountry": "PL"
            }
          }
        };
        
      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Czy oferujecie bezpłatny pomiar w promieniu 60 km?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak! Oferujemy bezpłatny pomiar i wycenę w promieniu 60 km od naszej siedziby w Starej Wiśniewce. Po tym dystansie naliczamy symboliczną opłatę za dojazd."
              }
            },
            {
              "@type": "Question",
              "name": "Ile kosztuje wycena projektu?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Wycena standardowych projektów jest GRATIS. W przypadku bardziej skomplikowanych konstrukcji na zamówienie informujemy o koszcie projektu przed rozpoczęciem prac."
              }
            }
          ]
        };
        
      case 'custom':
        return customStructuredData;
        
      default:
        return null;
    }
  };
  
  const structuredData = generateStructuredData();
  
  // Generuj dynamiczny title i description jeśli nie zostały przekazane jako propsy
  let generatedTitle = title;
  let generatedDescription = description;
  
  if (!title || !description) {
    if (service && city) {
      // Wzorzec: /[serviceSlug]/[citySlug]
      if (!title) {
        // Optymalizowane Meta Title dla kluczowych miast
        const keywordOptimizedTitles = {
          'balustrady-zlotow': `Balustrady Złotów - Balkonowe i Schodowe | ${siteConfig.businessName}`,
          'balustrady-pila': `Balustrady Piła - Stalowe na Wymiar | ${siteConfig.businessName}`,
          'balustrady-chojnice': `Balustrady Chojnice - Projekt i Montaż | ${siteConfig.businessName}`,
          'balustrady-okonek': `Balustrady Okonek - Stal Nierdzewna | ${siteConfig.businessName}`,
          'balustrady-jastrowie': `Balustrady Jastrowie - Malowanie RAL | ${siteConfig.businessName}`,
          'ogrodzenia-zlotow': `Ogrodzenia Złotów - Posesyjne i Bramy | ${siteConfig.businessName}`,
          'ogrodzenia-pila': `Ogrodzenia Piła - Stalowe z Automatyką | ${siteConfig.businessName}`,
          'ogrodzenia-chojnice': `Ogrodzenia Chojnice - Projekt i Montaż | ${siteConfig.businessName}`,
          'ogrodzenia-okonek': `Ogrodzenia Okonek - Stal Nierdzewna | ${siteConfig.businessName}`,
          'ogrodzenia-jastrowie': `Ogrodzenia Jastrowie - Malowanie RAL | ${siteConfig.businessName}`
        };
        
        const pageKey = `${service.slug}-${city.slug}`;
        generatedTitle = keywordOptimizedTitles[pageKey] || `${service.name} ${city.name} | ${siteConfig.businessName}`;
      }
      if (!description) {
        // Optymalizowane Meta Description dla kluczowych miast
        const keywordOptimizedDescriptions = {
          'balustrady-zlotow': `Balustrady Złotów ⭐ Balkonowe, schodowe, tarasowe. Stal czarna i nierdzewna, malowanie RAL. Bezpłatny pomiar, 3-letnia gwarancja. Tel: ${siteConfig.phone}`,
          'balustrady-pila': `Balustrady Piła ⭐ Projekt 3D GRATIS, montaż w 7-14 dni. Stal nierdzewna, malowanie proszkowe. Bezpłatny dojazd. Tel: ${siteConfig.phone}`,
          'balustrady-chojnice': `Balustrady Chojnice ⭐ Balkonowe i schodowe na wymiar. Projekt, produkcja, montaż. 3-letnia gwarancja na spawy. Tel: ${siteConfig.phone}`,
          'balustrady-okonek': `Balustrady Okonek ⭐ Stal nierdzewna i czarna. Bezpłatny pomiar w promieniu 60km. Profesjonalny montaż. Tel: ${siteConfig.phone}`,
          'balustrady-jastrowie': `Balustrady Jastrowie ⭐ Malowanie proszkowe RAL, stal nierdzewna. Projekt 3D, montaż z gwarancją. Tel: ${siteConfig.phone}`,
          'ogrodzenia-zlotow': `Ogrodzenia Złotów ⭐ Posesyjne, bramy przesuwne z automatyką. Stal czarna/nierdzewna. Bezpłatny pomiar. Tel: ${siteConfig.phone}`,
          'ogrodzenia-pila': `Ogrodzenia Piła ⭐ Bramy automatyczne, przęsła stalowe. Projekt, montaż, serwis. 3-letnia gwarancja. Tel: ${siteConfig.phone}`,
          'ogrodzenia-chojnice': `Ogrodzenia Chojnice ⭐ Posesyjne z elementami ozdobnymi. Projekt, produkcja, montaż. Bezpłatny dojazd. Tel: ${siteConfig.phone}`,
          'ogrodzenia-okonek': `Ogrodzenia Okonek ⭐ Stal nierdzewna, malowanie RAL. Bramy, furtki, przęsła. Profesjonalny montaż. Tel: ${siteConfig.phone}`,
          'ogrodzenia-jastrowie': `Ogrodzenia Jastrowie ⭐ Malowanie proszkowe, automatyka bram. Bezpłatny pomiar w 60km. Tel: ${siteConfig.phone}`
        };
        
        const pageKey = `${service.slug}-${city.slug}`;
        generatedDescription = keywordOptimizedDescriptions[pageKey] || `${service.name} ${city.name}. Projekt, produkcja i montaż – bezpłatny pomiar w promieniu 60 km.`;
      }
    } else if (service && !city) {
      // Wzorzec: /[serviceSlug]
      if (!title) {
        generatedTitle = `${service.name} | ${siteConfig.businessName}`;
      }
      if (!description) {
        generatedDescription = `Profesjonalne ${service.name.toLowerCase()}. Kompleksowe usługi spawalnicze i ślusarskie z 3-letnią gwarancją.`;
      }
    } else {
      // Pozostałe ścieżki - użyj wartości domyślnych
      if (!title) {
        generatedTitle = siteConfig.seoDefault.title;
      }
      if (!description) {
        generatedDescription = siteConfig.seoDefault.description;
      }
    }
  }
  
  // Dodaj location suffix tylko jeśli został przekazany
  let titleWithLocation = generatedTitle;
  if (location && !generatedTitle?.includes(location)) {
    titleWithLocation = `${generatedTitle} ${location}`;
  }
  
  const fullTitle = titleWithLocation?.includes(siteConfig.businessName) ? titleWithLocation : `${titleWithLocation} – ${siteConfig.businessName}`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={generatedDescription} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={generatedDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={generatedDescription} />
      {canonical && <link rel="canonical" href={canonical} />}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};