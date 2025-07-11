import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { siteConfig } from '@/config/siteConfig';

interface SeoHeadProps {
  title?: string;
  description?: string;
  structuredData?: object;
  canonical?: string;
  noIndex?: boolean;
}

export const SeoHead = ({ title, description, structuredData, canonical, noIndex = false }: SeoHeadProps) => {
  const { serviceSlug, citySlug } = useParams();
  
  // Znajdź service i city na podstawie slugów z URL
  const service = serviceSlug ? siteConfig.services.find(s => s.slug === serviceSlug) : null;
  const city = citySlug ? siteConfig.cities.find(c => c.slug === citySlug) : null;
  
  // Generuj dynamiczny title i description jeśli nie zostały przekazane jako propsy
  let generatedTitle = title;
  let generatedDescription = description;
  
  if (!title || !description) {
    if (service && city) {
      // Wzorzec: /[serviceSlug]/[citySlug]
      if (!title) {
        generatedTitle = `${service.name} ${city.name} | ${siteConfig.businessName}`;
      }
      if (!description) {
        generatedDescription = `${service.name} ${city.name}. Projekt, produkcja i montaż – bezpłatny pomiar w promieniu 60 km od ${siteConfig.city}.`;
      }
    } else if (service && !city) {
      // Wzorzec: /[serviceSlug]
      if (!title) {
        generatedTitle = `${service.name} | ${siteConfig.businessName}`;
      }
      if (!description) {
        generatedDescription = `Profesjonalne ${service.name.toLowerCase()} w ${siteConfig.city}. Kompleksowe usługi spawalnicze i ślusarskie z 3-letnią gwarancją.`;
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
  
  const fullTitle = generatedTitle?.includes(siteConfig.businessName) ? generatedTitle : `${generatedTitle} – ${siteConfig.businessName}`;
  
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