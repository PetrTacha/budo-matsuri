# Testování a dokončení migrace

## 🧪 Postup testování

### 1. Ověření MDX konverze

Zkontrolujte jeden z vygenerovaných MDX souborů:

```bash
cat content/performers/aikido.mdx
```

Měl by obsahovat čistý Markdown bez HTML tagů.

### 2. Lokální development server

```bash
npm run dev
```

Navštivte:
- http://localhost:3000/ucinkujici - seznam účinkujících
- http://localhost:3000/ucinkujici/aikido - detail účinkujícího

### 3. Testování statického buildu

```bash
npm run build
```

Zkontrolujte výstup:
- V `.next/` složce by měly být všechny stránky
- Žádné chyby při buildu

### 4. Zkontrolovat vygenerované soubory

Po buildu zkontrolujte `out/` složku:

```bash
ls out/ucinkujici/
```

Měli byste vidět:
- index.html (seznam)
- aikido.html
- kobudo.html
- ... (všech 19 účinkujících)

---

## 📋 Kontrolní seznam před spuštěním

- [ ] Všechny MDX soubory mají správný formát
- [ ] `ucinkujici.json` obsahuje správné URL
- [ ] Build projde bez chyb
- [ ] Všechny stránky se správně zobrazují
- [ ] Odkazy fungují
- [ ] Obrázky se načítají

---

## 🔄 Migrace ostatních stránek (Pages → App Router)

Po úspěšném ověření sekce účinkujících můžete migrovat i ostatní stránky:

### Existující stránky v Pages Router:

```
src/pages/
  ├── index.jsx          → src/app/page.jsx
  ├── fotogalerie/       → src/app/fotogalerie/page.js
  ├── kontakt/           → src/app/kontakt/page.js
  ├── merchandise/       → src/app/merchandise/page.js
  └── vstupenky/         → src/app/vstupenky/page.js
```

### Postup migrace každé stránky:

1. **Vytvořit složku** v `src/app/[nazev-stranky]/`
2. **Vytvořit page.js** s exportem `metadata` a default funkce
3. **Zkopírovat JSX** z Pages Router verze
4. **Upravit importy** (pokud je potřeba)
5. **Odstranit** starou Pages Router verzi

---

## 🎯 Příklad migrace: index.jsx → page.jsx

**Před (Pages Router):**
```jsx
// src/pages/index.jsx
export default function Home() {
  return <div>...</div>;
}
```

**Po (App Router):**
```jsx
// src/app/page.jsx
export const metadata = {
  title: "Budō matsuri",
  description: "...",
};

export default function HomePage() {
  return <div>...</div>;
}
```

---

## 🧹 Cleanup po dokončení migrace

Po úspěšné migraci všech stránek:

### 1. Odstranit Pages Router složku

```bash
rm -rf src/pages
```

### 2. Odstranit nepotřebné komponenty

```bash
rm -rf src/components/Modals/ClubModal
```

### 3. Odstranit HTML soubory (volitelné)

Pokud už nejsou potřeba:

```bash
rm -rf public/texts/*.html
```

Poznámka: Nechte je, pokud je používají jiné části aplikace!

### 4. Aktualizovat package.json

Odstranit nepotřebný script `buildAndExport`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## 🚀 Deployment checklist

Před nasazením na produkci:

- [ ] Build projde bez varování
- [ ] Všechny stránky fungují lokálně
- [ ] SEO metadata jsou správné
- [ ] Obrázky se načítají
- [ ] Odkazy fungují
- [ ] Mobile responsive funguje
- [ ] Performance je dobrá (Lighthouse)

### Testování production buildu lokálně

```bash
npm run build
npx serve out
```

Navštivte http://localhost:3000 a otestujte vše jako produkce.

---

## 🐛 Nejčastější problémy

### Problem: "use client" directive chybí

**Řešení:** Přidat na začátek souboru:
```jsx
"use client";
```

Pouze pokud komponenta používá:
- useState, useEffect
- onClick, onChange
- Browser APIs

### Problem: Import image nefunguje

**Řešení:** Ujistit se, že cesta začíná `/`:
```jsx
<Image src="/photo-square/aikido.jpg" alt="..." />
```

### Problem: CSS moduly nefungují

**Řešení:** App Router automaticky podporuje CSS moduly, zkontrolujte import:
```jsx
import styles from "./Component.module.scss";
```

---

## ✨ Výsledek

Po dokončení migrace budete mít:

✅ Plně statický web  
✅ Moderní App Router architekturu  
✅ MDX obsah pro snadnou správu  
✅ SEO optimalizované stránky  
✅ Rychlé načítání  
✅ Jednoduchou údržbu  

**Žádný server nepotřeba! 🎉**
