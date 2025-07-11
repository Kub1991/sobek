import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/config/siteConfig';

interface SeoHeadProps {
  title: string;
  description: string;
  structuredData?: object;
  canonical?: string;
  noIndex?: boolean;
}

export const SeoHead = ({ title, description, structuredData, canonical, noIndex = false }: SeoHeadProps) => {
  const fullTitle = title.includes(siteConfig.businessName) ? title : `${title} – ${siteConfig.businessName}`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};