import { test, expect } from '@playwright/test';

/**
 * Testy E2E dla weryfikacji JSON-LD schema.org
 * Sprawdzają poprawność generowania strukturalnych danych dla różnych scenariuszy routingu
 */

// Helper function do pobierania i parsowania JSON-LD
async function getJsonLdSchema(page: any, schemaType: string = 'Service') {
  const scriptContent = await page.locator('script[type="application/ld+json"]').textContent();
  expect(scriptContent).toBeTruthy();
  
  const schema = JSON.parse(scriptContent);
  
  // Sprawdź czy to pojedynczy obiekt czy tablica
  if (Array.isArray(schema)) {
    const serviceSchema = schema.find(s => s['@type'] === schemaType);
    expect(serviceSchema).toBeTruthy();
    return serviceSchema;
  } else {
    expect(schema['@type']).toBe(schemaType);
    return schema;
  }
}

test.describe('JSON-LD Schema Validation', () => {
  
  /**
   * SCENARIUSZ A: Strona kategoria+miasto z lokalnym opisem
   * Path: /balustrady/zlotow
   * Oczekiwane: localDesc z siteConfig.services[].localDesc['zlotow']
   */
  test('Scenariusz A: Balustrady Złotów - lokalny opis z siteConfig', async ({ page }) => {
    await page.goto('/balustrady/zlotow');
    
    // Pobierz i sparsuj JSON-LD
    const schema = await getJsonLdSchema(page, 'Service');
    
    // Weryfikacja @type
    expect(schema['@type']).toBe('Service');
    
    // Weryfikacja name - powinno zawierać "Balustrady Złotów"
    expect(schema.name).toContain('Balustrady');
    expect(schema.name).toContain('Złotów');
    
    // Weryfikacja description - powinno pochodzić z localDesc['zlotow']
    expect(schema.description).toBeTruthy();
    expect(schema.description.length).toBeGreaterThan(100); // Lokalny opis jest długi
    expect(schema.description).toContain('Złotów'); // Zawiera nazwę miasta
    expect(schema.description).toContain('SEB-STAL-SPAW'); // Zawiera nazwę firmy
    
    // Weryfikacja areaServed
    expect(schema.areaServed).toBe('Złotów');
    
    // Weryfikacja provider (LocalBusiness)
    expect(schema.provider).toBeTruthy();
    expect(schema.provider['@type']).toBe('LocalBusiness');
    expect(schema.provider.name).toBe('SEB-STAL-SPAW');
    expect(schema.provider.telephone).toBe('+48 786 618 536');
    
    // Weryfikacja serviceType
    expect(schema.serviceType).toBeTruthy();
    
    console.log('✅ Scenariusz A: Schema dla Balustrady Złotów jest poprawna');
  });

  /**
   * SCENARIUSZ B: Strona kategoria+miasto bez wpisu w localDesc
   * Path: /meble-loft/ledyczek
   * Oczekiwane: fallback description (rozbudowany opis)
   */
  test('Scenariusz B: Meble Loft Lędyczek - fallback description', async ({ page }) => {
    await page.goto('/meble-loft/ledyczek');
    
    // Pobierz i sparsuj JSON-LD
    const schema = await getJsonLdSchema(page, 'Service');
    
    // Weryfikacja @type
    expect(schema['@type']).toBe('Service');
    
    // Weryfikacja name
    expect(schema.name).toContain('Meble loft');
    expect(schema.name).toContain('Lędyczek');
    
    // Weryfikacja description - powinno być fallback (nie localDesc)
    expect(schema.description).toBeTruthy();
    expect(schema.description).toContain('Lędyczek'); // Zawiera nazwę miasta
    expect(schema.description).toContain('SEB-STAL-SPAW'); // Zawiera nazwę firmy
    expect(schema.description).toContain('bezpłatnym pomiarem'); // Zawiera USP
    expect(schema.description).toContain('3-letnią gwarancją'); // Zawiera gwarancję
    
    // Weryfikacja areaServed
    expect(schema.areaServed).toBe('Lędyczek');
    
    // Weryfikacja provider
    expect(schema.provider).toBeTruthy();
    expect(schema.provider['@type']).toBe('LocalBusiness');
    expect(schema.provider.name).toBe('SEB-STAL-SPAW');
    
    console.log('✅ Scenariusz B: Schema dla Meble Loft Lędyczek (fallback) jest poprawna');
  });

  /**
   * SCENARIUSZ C: Strona głównej kategorii bez miasta
   * Path: /konstrukcje-stalowe
   * Oczekiwane: fallback "Stara Wiśniewka"
   */
  test('Scenariusz C: Konstrukcje stalowe - kategoria główna bez miasta', async ({ page }) => {
    await page.goto('/konstrukcje-stalowe');
    
    // Pobierz i sparsuj JSON-LD
    const schema = await getJsonLdSchema(page, 'Service');
    
    // Weryfikacja @type
    expect(schema['@type']).toBe('Service');
    
    // Weryfikacja name - powinno zawierać "Konstrukcje stalowe Stara Wiśniewka"
    expect(schema.name).toContain('Konstrukcje stalowe');
    expect(schema.name).toContain('Stara Wiśniewka');
    
    // Weryfikacja description - fallback dla kategorii głównej
    expect(schema.description).toBeTruthy();
    expect(schema.description).toContain('Stara Wiśniewka'); // Zawiera miasto główne
    expect(schema.description).toContain('SEB-STAL-SPAW'); // Zawiera nazwę firmy
    expect(schema.description).toContain('3-letnią gwarancją'); // Zawiera gwarancję
    
    // Weryfikacja areaServed - powinno być "Stara Wiśniewka"
    expect(schema.areaServed).toBe('Stara Wiśniewka');
    
    // Weryfikacja provider
    expect(schema.provider).toBeTruthy();
    expect(schema.provider['@type']).toBe('LocalBusiness');
    expect(schema.provider.name).toBe('SEB-STAL-SPAW');
    
    console.log('✅ Scenariusz C: Schema dla Konstrukcje stalowe (kategoria główna) jest poprawna');
  });

  /**
   * DODATKOWY TEST: Weryfikacja HomePage FAQPage schema
   */
  test('Dodatkowy: HomePage - FAQPage schema', async ({ page }) => {
    await page.goto('/');
    
    // Pobierz i sparsuj JSON-LD (może być tablica z FAQ)
    const scriptContent = await page.locator('script[type="application/ld+json"]').textContent();
    expect(scriptContent).toBeTruthy();
    
    const schemas = JSON.parse(scriptContent);
    
    // Sprawdź czy to tablica
    expect(Array.isArray(schemas)).toBeTruthy();
    
    // Znajdź FAQPage schema
    const faqSchema = schemas.find(s => s['@type'] === 'FAQPage');
    expect(faqSchema).toBeTruthy();
    
    // Weryfikacja FAQPage
    expect(faqSchema['@type']).toBe('FAQPage');
    expect(faqSchema.mainEntity).toBeTruthy();
    expect(Array.isArray(faqSchema.mainEntity)).toBeTruthy();
    expect(faqSchema.mainEntity.length).toBeGreaterThan(0);
    
    // Sprawdź pierwszą FAQ
    const firstFaq = faqSchema.mainEntity[0];
    expect(firstFaq['@type']).toBe('Question');
    expect(firstFaq.name).toBeTruthy();
    expect(firstFaq.acceptedAnswer).toBeTruthy();
    expect(firstFaq.acceptedAnswer['@type']).toBe('Answer');
    expect(firstFaq.acceptedAnswer.text).toBeTruthy();
    
    console.log('✅ Dodatkowy: HomePage FAQPage schema jest poprawna');
  });

  /**
   * DODATKOWY TEST: Weryfikacja Contact Page schema
   */
  test('Dodatkowy: Contact Page - ContactPage schema', async ({ page }) => {
    await page.goto('/kontakt');
    
    // Pobierz i sparsuj JSON-LD
    const schema = await getJsonLdSchema(page, 'ContactPage');
    
    // Weryfikacja ContactPage
    expect(schema['@type']).toBe('ContactPage');
    expect(schema.mainEntity).toBeTruthy();
    expect(schema.mainEntity['@type']).toBe('LocalBusiness');
    expect(schema.mainEntity.name).toBe('SEB-STAL-SPAW');
    expect(schema.mainEntity.telephone).toBe('+48 786 618 536');
    expect(schema.mainEntity.address).toBeTruthy();
    expect(schema.mainEntity.address.addressLocality).toBe('Stara Wiśniewka');
    
    console.log('✅ Dodatkowy: Contact Page schema jest poprawna');
  });
});

/**
 * Test Suite Summary:
 * 
 * 🎯 SCENARIUSZ A: /balustrady/zlotow
 *    - Weryfikuje lokalny opis z siteConfig.services[].localDesc['zlotow']
 *    - Sprawdza name: "Balustrady Złotów"
 *    - Sprawdza areaServed: "Złotów"
 * 
 * 🎯 SCENARIUSZ B: /meble-loft/ledyczek  
 *    - Weryfikuje fallback description (brak localDesc)
 *    - Sprawdza name: "Meble loft Lędyczek"
 *    - Sprawdza areaServed: "Lędyczek"
 * 
 * 🎯 SCENARIUSZ C: /konstrukcje-stalowe
 *    - Weryfikuje fallback dla kategorii głównej
 *    - Sprawdza name: "Konstrukcje stalowe Stara Wiśniewka"
 *    - Sprawdza areaServed: "Stara Wiśniewka"
 * 
 * 🎯 DODATKOWE: HomePage, Contact
 *    - Weryfikuje FAQPage i ContactPage schemas
 */