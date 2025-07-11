import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Rozwiązanie problemu __dirname w ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import konfiguracji (symulujemy importowanie z TypeScript)
const siteConfig = {
  services: [
    {
      slug: "balustrady",
      name: "Balustrady",
      group: "Balustrady",
      subservices: [
        { slug: "balustrady-schodowe-wewnetrzne", name: "Balustrady schodowe wewnętrzne" },
        { slug: "balustrady-schodowe-zewnetrzne", name: "Balustrady schodowe zewnętrzne" },
        { slug: "balustrady-balkonowe", name: "Balustrady balkonowe" },
        { slug: "balustrady-tarasowe", name: "Balustrady tarasowe" }
      ]
    },
    {
      slug: "ogrodzenia",
      name: "Ogrodzenia i bramy",
      group: "Ogrodzenia",
      subservices: [
        { slug: "bramy-jednoskrzydlowe", name: "Bramy wjazdowe jednoskrzydłowe" },
        { slug: "bramy-dwuskrzydlowe", name: "Bramy wjazdowe dwuskrzydłowe" },
        { slug: "bramy-przesuwne", name: "Bramy przesuwne i rozsuwane" },
        { slug: "furtki-ogrodowe", name: "Furtki ogrodowe" },
        { slug: "przesla-ogrodzeniowe", name: "Przęsła ogrodzeniowe" }
      ]
    },
    {
      slug: "konstrukcje-stalowe",
      name: "Konstrukcje stalowe",
      group: "Konstrukcje",
      subservices: [
        { slug: "schody-stalowe", name: "Konstrukcje stalowe schodów" },
        { slug: "antresole", name: "Platformy i antresole" },
        { slug: "zadaszenia-wiaty", name: "Zadaszenia i wiaty" },
        { slug: "pergole-altany", name: "Pergole i altany" }
      ]
    },
    {
      slug: "meble-loft",
      name: "Meble loft",
      group: "Meble",
      subservices: [
        { slug: "stoly", name: "Stoły loft" },
        { slug: "krzesla", name: "Krzesła loft" },
        { slug: "polki", name: "Półki loft" },
        { slug: "dekoracje", name: "Elementy dekoracyjne" }
      ]
    },
    {
      slug: "uslugi-spawalnicze",
      name: "Usługi spawalnicze",
      group: "Spawanie",
      subservices: [
        { slug: "spawanie-konstrukcji", name: "Spawanie konstrukcji stalowych (TIG/MIG)" },
        { slug: "naprawy-renowacje", name: "Naprawa i renowacja elementów metalowych" },
        { slug: "montaz", name: "Montaż i instalacja" }
      ]
    }
  ],
  cities: [
    { slug: "zlotow", name: "Złotów" },
    { slug: "pila", name: "Piła" },
    { slug: "zakrzewo", name: "Zakrzewo" },
    { slug: "okonek", name: "Okonek" },
    { slug: "debrzno", name: "Debrzno" },
    { slug: "chojnice", name: "Chojnice" },
    { slug: "krajenka", name: "Krajenka" },
    { slug: "jastrowie", name: "Jastrowie" },
    { slug: "ledyczek", name: "Lędyczek" },
    { slug: "walcz", name: "Wałcz" }
  ]
};

const BASE_URL = 'https://lovable.dev/projects/bd8cc29f-bd4c-4124-a94a-b6f1cf67be39';

function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD
  
  let urls = [];
  
  // Główne strony
  urls.push({
    loc: BASE_URL,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '1.0'
  });
  
  urls.push({
    loc: `${BASE_URL}/uslugi`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.9'
  });
  
  urls.push({
    loc: `${BASE_URL}/o-nas`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.7'
  });
  
  urls.push({
    loc: `${BASE_URL}/kontakt`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.8'
  });
  
  // Strony kategorii usług (główne /:serviceSlug)
  siteConfig.services.forEach(service => {
    urls.push({
      loc: `${BASE_URL}/${service.slug}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    });
  });
  
  // Strony usług dla miast (/:serviceSlug/:citySlug)
  siteConfig.services.forEach(service => {
    siteConfig.cities.forEach(city => {
      urls.push({
        loc: `${BASE_URL}/${service.slug}/${city.slug}`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: '0.6'
      });
    });
  });
  
  // Generowanie XML
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const urlsetClose = '</urlset>';
  
  let xmlContent = xmlHeader + urlsetOpen;
  
  urls.forEach(url => {
    xmlContent += '  <url>\n';
    xmlContent += `    <loc>${url.loc}</loc>\n`;
    xmlContent += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xmlContent += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xmlContent += `    <priority>${url.priority}</priority>\n`;
    xmlContent += '  </url>\n';
  });
  
  xmlContent += urlsetClose;
  
  // Zapisywanie do pliku
  const publicDir = path.join(__dirname, '..', 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  
  // Upewnienie się, że folder public istnieje
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(sitemapPath, xmlContent, 'utf8');
  
  console.log(`✅ Sitemap generated successfully!`);
  console.log(`📍 Location: ${sitemapPath}`);
  console.log(`📊 Total URLs: ${urls.length}`);
  console.log(`🔗 Base URL: ${BASE_URL}`);
  
  return xmlContent;
}

// Uruchomienie generatora
generateSitemap();