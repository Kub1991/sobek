import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Rozwiązanie problemu __dirname w ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Uproszczona struktura URL - dwupoziomowy silos
const siteConfig = {
  // Główne kategorie usług (poziom 1)
  services: [
    {
      slug: "balustrady",
      name: "Balustrady",
      priority: "0.9",
      changefreq: "weekly"
    },
    {
      slug: "ogrodzenia", 
      name: "Ogrodzenia",
      priority: "0.9",
      changefreq: "weekly"
    },
    {
      slug: "konstrukcje-stalowe",
      name: "Konstrukcje stalowe", 
      priority: "0.8",
      changefreq: "weekly"
    },
    {
      slug: "meble-loft",
      name: "Meble loft",
      priority: "0.7", 
      changefreq: "monthly"
    },
    {
      slug: "uslugi-spawalnicze",
      name: "Usługi spawalnicze",
      priority: "0.8",
      changefreq: "weekly"
    }
  ],
  
  // Obsługiwane miasta (poziom 2)
  cities: [
    // Główne miasta - wyższy priorytet
    { slug: "zlotow", name: "Złotów", priority: "0.7", changefreq: "weekly" },
    { slug: "pila", name: "Piła", priority: "0.7", changefreq: "weekly" },
    { slug: "zakrzewo", name: "Zakrzewo", priority: "0.6", changefreq: "weekly" },
    
    // Pozostałe miasta - niższy priorytet
    { slug: "okonek", name: "Okonek", priority: "0.5", changefreq: "monthly" },
    { slug: "debrzno", name: "Debrzno", priority: "0.5", changefreq: "monthly" },
    { slug: "chojnice", name: "Chojnice", priority: "0.5", changefreq: "monthly" },
    { slug: "krajenka", name: "Krajenka", priority: "0.5", changefreq: "monthly" },
    { slug: "jastrowie", name: "Jastrowie", priority: "0.5", changefreq: "monthly" },
    { slug: "ledyczek", name: "Lędyczek", priority: "0.4", changefreq: "monthly" },
    { slug: "walcz", name: "Wałcz", priority: "0.4", changefreq: "monthly" }
  ]
};

const BASE_URL = 'https://sebstalspaw.netlify.app';

function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD
  
  let urls = [];
  
  // ═══════════════════════════════════════════════════════════════
  // POZIOM 0: Strony główne (najwyższy priorytet)
  // ═══════════════════════════════════════════════════════════════
  
  urls.push({
    loc: BASE_URL,
    lastmod: currentDate,
    changefreq: 'daily',
    priority: '1.0'
  });
  
  urls.push({
    loc: `${BASE_URL}/uslugi`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.9'
  });
  
  urls.push({
    loc: `${BASE_URL}/kontakt`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.8'
  });
  
  urls.push({
    loc: `${BASE_URL}/o-nas`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.7'
  });
  
  // ═══════════════════════════════════════════════════════════════
  // POZIOM 1: Kategorie usług (/kategoria)
  // ═══════════════════════════════════════════════════════════════
  
  siteConfig.services.forEach(service => {
    urls.push({
      loc: `${BASE_URL}/${service.slug}`,
      lastmod: currentDate,
      changefreq: service.changefreq,
      priority: service.priority
    });
  });
  
  // ═══════════════════════════════════════════════════════════════
  // POZIOM 2: Usługi w miastach (/kategoria/miasto)
  // ═══════════════════════════════════════════════════════════════
  
  siteConfig.services.forEach(service => {
    siteConfig.cities.forEach(city => {
      // Priorytet kombinowany: średnia z priorytetu usługi i miasta
      const servicePriority = parseFloat(service.priority);
      const cityPriority = parseFloat(city.priority);
      const combinedPriority = ((servicePriority + cityPriority) / 2).toFixed(1);
      
      // Częstotliwość: bierz bardziej konserwatywną (monthly jeśli którakolwiek jest monthly)
      const combinedChangefreq = (service.changefreq === 'monthly' || city.changefreq === 'monthly') 
        ? 'monthly' 
        : 'weekly';
      
      urls.push({
        loc: `${BASE_URL}/${service.slug}/${city.slug}`,
        lastmod: currentDate,
        changefreq: combinedChangefreq,
        priority: combinedPriority
      });
    });
  });
  
  // ═══════════════════════════════════════════════════════════════
  // Sortowanie URL według priorytetu (malejąco)
  // ═══════════════════════════════════════════════════════════════
  
  urls.sort((a, b) => parseFloat(b.priority) - parseFloat(a.priority));
  
  // ═══════════════════════════════════════════════════════════════
  // Generowanie XML
  // ═══════════════════════════════════════════════════════════════
  
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
  
  // ═══════════════════════════════════════════════════════════════
  // Zapisywanie do pliku
  // ═══════════════════════════════════════════════════════════════
  
  const publicDir = path.join(__dirname, '..', 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  
  // Upewnienie się, że folder public istnieje
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(sitemapPath, xmlContent, 'utf8');
  
  // ═══════════════════════════════════════════════════════════════
  // Raport generowania
  // ═══════════════════════════════════════════════════════════════
  
  console.log(`✅ Sitemap generated successfully!`);
  console.log(`📍 Location: ${sitemapPath}`);
  console.log(`📊 Total URLs: ${urls.length}`);
  console.log(`🔗 Base URL: ${BASE_URL}`);
  console.log(`\n📋 URL Structure Summary:`);
  console.log(`   • Main pages: 4 URLs (priority 0.7-1.0)`);
  console.log(`   • Service categories: ${siteConfig.services.length} URLs (priority 0.7-0.9)`);
  console.log(`   • Service + city combinations: ${siteConfig.services.length * siteConfig.cities.length} URLs (priority 0.4-0.8)`);
  console.log(`\n🎯 Priority Distribution:`);
  console.log(`   • 1.0: Homepage`);
  console.log(`   • 0.9: Services page, top categories`);
  console.log(`   • 0.8: Contact, mid categories`);
  console.log(`   • 0.7: About, main cities`);
  console.log(`   • 0.4-0.6: City combinations`);
  
  return xmlContent;
}

// Uruchomienie generatora
generateSitemap();