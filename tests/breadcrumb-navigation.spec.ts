import { test, expect } from '@playwright/test';

/**
 * Test E2E dla weryfikacji nawigacji breadcrumbs
 * Sprawdza czy kliknięcie w breadcrumb prowadzi do poprawnej strony kategorii
 */

test.describe('Breadcrumb Navigation', () => {
  
  /**
   * Test: Nawigacja z city page do category page przez breadcrumb
   * Scenariusz: /meble-loft/pila → klik "Meble loft" → /meble-loft
   */
  test('Breadcrumb navigation from city page to category page', async ({ page }) => {
    // Przejdź na stronę miasta
    await page.goto('/meble-loft/pila');
    
    // Sprawdź czy strona się załadowała poprawnie
    await expect(page.locator('h1')).toContainText('Meble loft Piła');
    
    // Znajdź breadcrumb "Meble loft" i kliknij
    const breadcrumbLink = page.locator('nav[aria-label="breadcrumb"] a').filter({ hasText: 'Meble loft' });
    await expect(breadcrumbLink).toBeVisible();
    await breadcrumbLink.click();
    
    // Sprawdź czy przekierowano na stronę kategorii
    await expect(page).toHaveURL('/meble-loft');
    
    // Sprawdź czy strona kategorii się załadowała poprawnie (brak 404)
    await expect(page.locator('h1')).toContainText('Meble loft Stara Wiśniewka');
    
    // Sprawdź czy nie ma błędu 404
    await expect(page.locator('text=404')).not.toBeVisible();
    await expect(page.locator('text=Strona nie znaleziona')).not.toBeVisible();
    
    console.log('✅ Breadcrumb navigation: /meble-loft/pila → /meble-loft działa poprawnie');
  });

  /**
   * Test: Nawigacja breadcrumb dla kategorii balustrady
   * Scenariusz: /balustrady/zlotow → klik "Balustrady" → /balustrady
   */
  test('Breadcrumb navigation for balustrady category', async ({ page }) => {
    // Przejdź na stronę miasta
    await page.goto('/balustrady/zlotow');
    
    // Sprawdź czy strona się załadowała poprawnie
    await expect(page.locator('h1')).toContainText('Balustrady Złotów');
    
    // Znajdź breadcrumb "Balustrady" i kliknij
    const breadcrumbLink = page.locator('nav[aria-label="breadcrumb"] a').filter({ hasText: 'Balustrady' });
    await expect(breadcrumbLink).toBeVisible();
    await breadcrumbLink.click();
    
    // Sprawdź czy przekierowano na stronę kategorii
    await expect(page).toHaveURL('/balustrady');
    
    // Sprawdź czy strona kategorii się załadowała poprawnie
    await expect(page.locator('h1')).toContainText('Balustrady Stara Wiśniewka');
    
    // Sprawdź czy nie ma błędu 404
    await expect(page.locator('text=404')).not.toBeVisible();
    
    console.log('✅ Breadcrumb navigation: /balustrady/zlotow → /balustrady działa poprawnie');
  });

  /**
   * Test: Nawigacja breadcrumb dla kategorii konstrukcje
   * Scenariusz: /konstrukcje-stalowe/chojnice → klik "Konstrukcje stalowe" → /konstrukcje-stalowe
   */
  test('Breadcrumb navigation for konstrukcje-stalowe category', async ({ page }) => {
    // Przejdź na stronę miasta
    await page.goto('/konstrukcje-stalowe/chojnice');
    
    // Sprawdź czy strona się załadowała poprawnie
    await expect(page.locator('h1')).toContainText('Konstrukcje stalowe Chojnice');
    
    // Znajdź breadcrumb "Konstrukcje stalowe" i kliknij
    const breadcrumbLink = page.locator('nav[aria-label="breadcrumb"] a').filter({ hasText: 'Konstrukcje stalowe' });
    await expect(breadcrumbLink).toBeVisible();
    await breadcrumbLink.click();
    
    // Sprawdź czy przekierowano na stronę kategorii
    await expect(page).toHaveURL('/konstrukcje-stalowe');
    
    // Sprawdź czy strona kategorii się załadowała poprawnie
    await expect(page.locator('h1')).toContainText('Konstrukcje stalowe Stara Wiśniewka');
    
    // Sprawdź czy nie ma błędu 404
    await expect(page.locator('text=404')).not.toBeVisible();
    
    console.log('✅ Breadcrumb navigation: /konstrukcje-stalowe/chojnice → /konstrukcje-stalowe działa poprawnie');
  });

  /**
   * Test: Sprawdzenie wszystkich głównych kategorii
   * Weryfikuje czy wszystkie strony kategorii są dostępne
   */
  test('All main category pages are accessible', async ({ page }) => {
    const categories = [
      { slug: 'balustrady', name: 'Balustrady' },
      { slug: 'ogrodzenia', name: 'Ogrodzenia i bramy' },
      { slug: 'konstrukcje-stalowe', name: 'Konstrukcje stalowe' },
      { slug: 'meble-loft', name: 'Meble loft' },
      { slug: 'uslugi-spawalnicze', name: 'Usługi spawalnicze' }
    ];

    for (const category of categories) {
      await page.goto(`/${category.slug}`);
      
      // Sprawdź czy strona się załadowała
      await expect(page.locator('h1')).toContainText(category.name);
      
      // Sprawdź czy nie ma błędu 404
      await expect(page.locator('text=404')).not.toBeVisible();
      await expect(page.locator('text=Strona nie znaleziona')).not.toBeVisible();
      
      console.log(`✅ Category page /${category.slug} is accessible`);
    }
  });
});

/**
 * Test Suite Summary:
 * 
 * 🎯 Test 1: /meble-loft/pila → breadcrumb "Meble loft" → /meble-loft
 * 🎯 Test 2: /balustrady/zlotow → breadcrumb "Balustrady" → /balustrady  
 * 🎯 Test 3: /konstrukcje-stalowe/chojnice → breadcrumb "Konstrukcje stalowe" → /konstrukcje-stalowe
 * 🎯 Test 4: Weryfikacja dostępności wszystkich stron kategorii
 * 
 * Wszystkie testy sprawdzają:
 * - Poprawne załadowanie strony źródłowej
 * - Widoczność breadcrumb linku
 * - Poprawne przekierowanie po kliknięciu
 * - Brak błędów 404 na stronie docelowej
 */