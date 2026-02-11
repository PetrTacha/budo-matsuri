# Budō Matsuri - Next.js App Router + MDX

> **✅ KOMPLETNÍ MIGRACE DOKONČENA!** Veškerý projekt je nyní na App Router.

## 🎯 Přehled projektu

- **Framework:** Next.js 14 (App Router) ✅ 100%
- **Obsah:** MDX soubory (19 účinkujících)
- **Styling:** Tailwind CSS + SCSS moduly
- **Export:** Statický (`output: "export"`)
- **Stránky:** 28 staticky generovaných
- **Hosting:** Libovolný statický server

## 🚀 Quick Start

### 1. Instalace

```bash
npm install
```

### 2. Development

```bash
npm run dev
```

Otevřete [http://localhost:3000](http://localhost:3000)

### 3. Build pro produkci

```bash
npm run build
```

Vygeneruje statický web do `out/` složky.

### 4. Testování production buildu

```bash
npx serve out
```

## 📁 Struktura projektu

```
├── content/
│   └── performers/              # MDX soubory s obsahem účinkujících
│       ├── aikido.mdx
│       ├── kobudo.mdx
│       └── ... (19 souborů)
│
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── layout.js            # Root layout
│   │   └── ucinkujici/
│   │       ├── page.js          # Seznam účinkujících
│   │       └── [slug]/
│   │           └── page.js      # Detail účinkujícího (dynamická stránka)
│   │
│   ├── components/              # React komponenty
│   │   ├── Klub/
│   │   ├── Header/
│   │   ├── Layout/
│   │   └── ...
│   │
│   ├── pages/                   # Staré Pages Router stránky
│   │   └── ucinkujici/
│   │       └── ucinkujici.json  # Data účinkujících
│   │
│   ├── styles/                  # Globální styly
│   └── utils/                   # Pomocné funkce
│
├── public/                      # Statické soubory
│   ├── photo-square/            # Thumbnaily účinkujících
│   ├── logos/                   # Loga
│   └── texts/                   # Původní HTML soubory (lze smazat)
│
├── scripts/
│   └── convert-html-to-mdx.js   # Skript pro konverzi HTML → MDX
│
├── mdx-components.jsx           # Definice MDX komponent
├── next.config.mjs              # Next.js konfigurace s MDX
├── tailwind.config.js           # Tailwind + Typography plugin
│
├── MIGRATION.md                 # Detailní dokumentace migrace
└── TESTING.md                   # Návod na testování
```

## 📝 MDX obsah

Každý účinkující má vlastní MDX soubor v `content/performers/`:

```mdx
# content/performers/aikido.mdx

Aikidō 合気道 patří mezi ty mladší japonská bojová umění...

Odkaz: [www.aikido-kenkyukai-praha.cz](https://www.aikido-kenkyukai-praha.cz)
```

### Přidání nového účinkujícího

1. Vytvořit `content/performers/novy-ucinkujici.mdx`
2. Přidat do `src/pages/ucinkujici/ucinkujici.json`:

```json
{
  "name": "Nový účinkující",
  "url": "novy-ucinkujici",
  "thumbnail": "/photo-square/novy-ucinkujici.jpg",
  "description": "/texts/novy-ucinkujici.html"
}
```

3. Spustit `npm run build`

Stránka `/ucinkujici/novy-ucinkujici` se automaticky vygeneruje!

## 🔧 Konfigurace

### Next.js (next.config.mjs)

```javascript
import createMDX from '@next/mdx';

const nextConfig = {
  output: 'export',              // Statický export
  images: { unoptimized: true }, // Nutné pro static export
  pageExtensions: ['js', 'jsx', 'mdx'],
};

export default withMDX(nextConfig);
```

### Tailwind (tailwind.config.js)

```javascript
module.exports = {
  plugins: [
    require('@tailwindcss/typography'),  // Pro prose styling
  ],
};
```

## 🎨 Stylování MDX obsahu

MDX obsah je automaticky stylován pomocí Tailwind Typography:

```jsx
<article className="prose prose-lg max-w-none">
  <MDXContent />
</article>
```

Vlastní komponenty (nadpisy, odkazy) jsou definované v `mdx-components.jsx`.

## 📦 Závislosti

### Produkční

```json
{
  "@headlessui/react": "^1.7.18",
  "@mdx-js/loader": "^3.1.0",
  "@mdx-js/react": "^3.1.0",
  "@next/mdx": "^15.1.6",
  "@tailwindcss/typography": "^0.5.16",
  "next": "14.1.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```

## 🏗️ Build proces

### Co se děje při `npm run build`:

1. **Načtení dat** - `ucinkujici.json` (19 účinkujících)
2. **generateStaticParams()** - vygeneruje parametry pro všechny stránky
3. **Kompilace MDX** - MDX soubory → React komponenty
4. **Statické generování** - vytvoření HTML pro každou stránku
5. **Export** - uložení do `out/` složky

### Výstup:

```
out/
├── ucinkujici/
│   ├── index.html           # Seznam účinkujících
│   ├── aikido.html          # Detail: Aikidō
│   ├── kobudo.html          # Detail: Kobudō
│   └── ... (19 stránek)
├── _next/                   # Next.js assety
└── ...
```

## 🚀 Deployment

### Netlify

```bash
# netlify.toml
[build]
  command = "npm run build"
  publish = "out"
```

### Vercel

Automatická detekce Next.js projektu s `output: "export"`.

### GitHub Pages

```bash
npm run build
# Nahrát out/ složku do gh-pages branch
```

### Klasický web hosting

```bash
npm run build
# Nahrát obsah out/ složky na server přes FTP/SFTP
```

## 📚 Dokumentace

- [MIGRATION.md](MIGRATION.md) - Detailní dokumentace migrace na App Router + MDX
- [TESTING.md](TESTING.md) - Testování a dokončení migrace

## ✅ Výhody tohoto řešení

✅ **100% statické** - žádný server-side kód  
✅ **Rychlé** - pre-renderované HTML  
✅ **SEO friendly** - statický obsah  
✅ **Snadná údržba** - MDX formát  
✅ **Levný hosting** - statické soubory  
✅ **Type-safe** - TypeScript ready  
✅ **Modern** - Next.js 14 App Router  

## ❌ Omezení

- ❌ Nelze používat Server Components s fetchem
- ❌ Nelze používat API routes
- ❌ Nelze používat Server Actions
- ❌ Nelze používat ISR (revalidate)
- ❌ Nelze používat middleware

Vše musí být staticky generované při buildu.

## 🛠️ Utility

### Konverze HTML → MDX

```bash
node scripts/convert-html-to-mdx.js
```

Převede všechny HTML soubory z `public/texts/` na MDX v `content/performers/`.

## 📖 Další zdroje

- [Next.js App Router](https://nextjs.org/docs/app)
- [MDX dokumentace](https://mdxjs.com/)
- [@next/mdx](https://nextjs.org/docs/pages/building-your-application/configuring/mdx)
- [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin)
- [Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

## 📄 Licence

Budō Matsuri © 2026

---

**Vytvořeno s ❤️ pro Slavnosti bojových umění**
