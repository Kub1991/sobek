# 🔍 Manual QA Checklist - JSON-LD Schema Validation

## Instrukcja weryfikacji manualnej w DevTools

### 🛠️ Kroki weryfikacji:

1. **Otwórz stronę w przeglądarce**
2. **Otwórz DevTools (F12)**
3. **Przejdź do zakładki Elements/Elementy**
4. **Znajdź `<script type="application/ld+json">` w sekcji `<head>`**
5. **Skopiuj zawartość JSON i wklej do JSON validator (np. jsonlint.com)**
6. **Sprawdź wymagane pola według checklisty poniżej**

---

## 📋 Checklist dla każdego scenariusza:

### ✅ **SCENARIUSZ A: /balustrady/zlotow**
**Oczekiwane:** Lokalny opis z `siteConfig.services[].localDesc['zlotow']`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Balustrady Złotów", // ✓ Zawiera usługę + miasto
  "description": "Profesjonalne balustrady Złotów realizowane przez SEB-STAL-SPAW...", // ✓ Długi lokalny opis
  "areaServed": "Złotów", // ✓ Nazwa miasta
  "provider": {
    "@type": "LocalBusiness",
    "name": "SEB-STAL-SPAW",
    "telephone": "+48 786 618 536"
  },
  "serviceType": "Balustrady" // ✓ Typ usługi
}
```

**Sprawdź:**
- [ ] `@type === "Service"`
- [ ] `name` zawiera "Balustrady" i "Złotów"
- [ ] `description` jest długie (>200 znaków) i zawiera lokalny kontekst
- [ ] `areaServed === "Złotów"`
- [ ] `provider.name === "SEB-STAL-SPAW"`

---

### ✅ **SCENARIUSZ B: /meble-loft/ledyczek**
**Oczekiwane:** Fallback description (brak wpisu w localDesc)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Meble loft Lędyczek", // ✓ Zawiera usługę + miasto
  "description": "Profesjonalne meble loft w Lędyczek. SEB-STAL-SPAW oferuje...", // ✓ Fallback z USP
  "areaServed": "Lędyczek", // ✓ Nazwa miasta
  "provider": {
    "@type": "LocalBusiness",
    "name": "SEB-STAL-SPAW",
    "telephone": "+48 786 618 536"
  },
  "serviceType": "Meble" // ✓ Typ usługi
}
```

**Sprawdź:**
- [ ] `@type === "Service"`
- [ ] `name` zawiera "Meble loft" i "Lędyczek"
- [ ] `description` zawiera "bezpłatnym pomiarem" i "3-letnią gwarancją"
- [ ] `areaServed === "Lędyczek"`
- [ ] `provider.name === "SEB-STAL-SPAW"`

---

### ✅ **SCENARIUSZ C: /konstrukcje-stalowe**
**Oczekiwane:** Fallback "Stara Wiśniewka" (kategoria główna)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Konstrukcje stalowe Stara Wiśniewka", // ✓ Zawiera usługę + miasto główne
  "description": "Profesjonalne konstrukcje stalowe w Stara Wiśniewka...", // ✓ Fallback dla kategorii
  "areaServed": "Stara Wiśniewka", // ✓ Miasto główne
  "provider": {
    "@type": "LocalBusiness",
    "name": "SEB-STAL-SPAW",
    "telephone": "+48 786 618 536"
  },
  "serviceType": "Steel Structures" // ✓ Typ usługi
}
```

**Sprawdź:**
- [ ] `@type === "Service"`
- [ ] `name` zawiera "Konstrukcje stalowe" i "Stara Wiśniewka"
- [ ] `description` zawiera "3-letnią gwarancją"
- [ ] `areaServed === "Stara Wiśniewka"`
- [ ] `provider.name === "SEB-STAL-SPAW"`

---

## 🚀 **Szybka weryfikacja w konsoli przeglądarki:**

```javascript
// Wklej w konsoli DevTools na dowolnej stronie
const jsonLdScript = document.querySelector('script[type="application/ld+json"]');
if (jsonLdScript) {
  const schema = JSON.parse(jsonLdScript.textContent);
  console.log('📋 Schema Type:', schema['@type']);
  console.log('🏷️ Name:', schema.name);
  console.log('📝 Description:', schema.description?.substring(0, 100) + '...');
  console.log('📍 Area Served:', schema.areaServed);
  console.log('🏢 Provider:', schema.provider?.name);
} else {
  console.log('❌ Brak JSON-LD schema na tej stronie');
}
```

---

## 📊 **Podsumowanie testów:**

| Scenariusz | URL | Oczekiwany name | Oczekiwany areaServed | Źródło description |
|------------|-----|-----------------|----------------------|-------------------|
| A | `/balustrady/zlotow` | "Balustrady Złotów" | "Złotów" | `localDesc['zlotow']` |
| B | `/meble-loft/ledyczek` | "Meble loft Lędyczek" | "Lędyczek" | Fallback z USP |
| C | `/konstrukcje-stalowe` | "Konstrukcje stalowe Stara Wiśniewka" | "Stara Wiśniewka" | Fallback kategorii |

**🎯 Wszystkie testy powinny przejść pomyślnie po implementacji zindywidualizowanych opisów!**