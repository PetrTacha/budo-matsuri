# Migrace na App Router s MDX - Dokumentace

## 📋 Přehled změn

Projekt byl migrován z **Pages Router** na **App Router** s podporou MDX pro statický export.

### ✅ Co bylo implementováno:

1. **Next.js App Router** pro moderní architekturu
2. **MDX podpora** pomocí `@next/mdx` 
3. **Statické generování** všech stránek účinkujících při buildu
4. **Tailwind Typography** pro automatické stylování obsahu
5. **Dynamické routy** `/ucinkujici/[slug]`

---

## 📁 Struktura projektu

```
budo-matsuri/
├── content/
│   └── performers/          # MDX soubory s obsahem (19 souborů)
│       ├── aikido.mdx
│       ├── kobudo.mdx
│       └── ...
│
├── src/
│   ├── app/                 # App Router (NOVÉ)
│   │   ├── layout.js        # Root layout
│   │   └── ucinkujici/
│   │       ├── page.js      # Seznam účinkujících
│   │       └── [slug]/
│   │           └── page.js  # Detail účinkujícího
│   │
│   ├── lib/                 # Utility funkce
│   │   └── performers-mdx.js  # Statické MDX importy
│   │
│   ├── data/
│   │   └── ucinkujici.json  # Data účinkujících
│   │
│   ├── styles/
│   │   └── Ucinkujici.module.scss  # Sdílené styly
│   │
│   ├── pages/               # Pages Router (STARÉ - lze smazat po migraci)
│   │   ├── index.jsx
│   │   ├── fotogalerie/
│   │   └── ...
│   │
│   └── components/
│       └── Klub/
│           └── Klub.jsx     # Upraveno - odstraněn onClick
│
├── scripts/
│   └── convert-html-to-mdx.js  # Skript pro převod HTML → MDX
│
├── jsconfig.json            # Přidán alias pro @/content/*
├── mdx-components.jsx       # Definice MDX komponent
└── next.config.mjs          # Konfigurace MDX
```

---

## 🚀 Jak to funguje

### 1. Statické generování stránek

V souboru [src/app/ucinkujici/[slug]/page.js](src/app/ucinkujici/[slug]/page.js) je funkce `generateStaticParams()`:

```javascript
export function generateStaticParams() {
  return ucinkujici.map((performer) => ({
    slug: performer.url,
  }));
}
```

**Při buildu** Next.js:
- Načte `ucinkujici.json` (19 účinkujících)
- Pro každý `url` vytvoří statickou HTML stránku
- Vygeneruje: `/out/ucinkujici/aikido.html`, `/out/ucinkujici/kobudo.html`, atd.

### 2. Načítání MDX obsahu (statické importy)

**Pro statický export je nutné použít statické importy!**

Soubor `src/lib/performers-mdx.js`:

```javascript
// Statické importy všech MDX souborů
import Aikido from '@/content/performers/aikido.mdx';
import Kobudo from '@/content/performers/kobudo.mdx';
// ... všechny MDX soubory

// Mapping slug → MDX komponenta
export const performersMdx = {
  'aikido': Aikido,
  'kobudo': Kobudo,
  // ...
};

export function getPerformerMdx(slug) {
  return performersMdx[slug] || null;
}
```

V `[slug]/page.js`:

```javascript
import { getPerformerMdx } from '@/lib/performers-mdx';

export default async function PerformerPage({ params }) {
  const { slug } = await params;
  const MDXContent = getPerformerMdx(slug);
  
  return <article><MDXContent /></article>;
}
```

**Důležité:**
- Import je statický, ale probíhá **při buildu**
- Žádný runtime parsing
- MDX je kompilováno na React komponenty během buildu
- Pro server není potřeba Node.js runtime
- MDX obsah je přímo vygenerovaný v HTML souborech

**Proč ne dynamické importy?**
```javascript
// ❌ NEFUNGUJE s output: "export"
const MDX = await import(`@/content/${slug}.mdx`);

// ✅ FUNGUJE - statický import
const MDX = getPerformerMdx(slug);
```

```javascript
async function getPerformerContent(slug) {
  const MDXContent = (await import(`@/content/performers/${slug}.mdx`)).default;
  return MDXContent;
}
```

**Důležité:**
- Import je dynamický, ale probíhá **při buildu**
- Žádný runtime parsing
- MDX je kompilováno na React komponenty během buildu
- Pro server není potřeba Node.js runtime

### 3. Stylování obsahu

MDX obsah je automaticky stylovaný pomocí `@tailwindcss/typography`:

```jsx
<article className="prose prose-lg max-w-none mx-auto">
  <MDXContent />
</article>
```

Vlastní komponenty jsou definované v [mdx-components.jsx](mdx-components.jsx):
- `<h1>`, `<h2>`, `<h3>` - nadpisy s vlastními styly
- `<p>` - odstavce
- `<a>` - odkazy (automaticky `target="_blank"`)
- `<ul>`, `<ol>`, `<li>` - seznamy

---

## 🔧 Konfigurace

### next.config.mjs

```javascript
import createMDX from '@next/mdx';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',              // ← Statický export
  images: { unoptimized: true }, // ← Nutné pro export
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],  // MDX pluginy
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
```

### tailwind.config.js

```javascript
module.exports = {
  plugins: [
    require('@tailwindcss/typography'),  // ← Typography plugin
  ],
};
```

---

## 📝 MDX soubory

### Formát MDX souboru

```mdx
Aikidō 合気道 patří mezi ty mladší japonská bojová umění...

Odkaz na web: [www.aikido-kenkyukai-praha.cz](https://www.aikido-kenkyukai-praha.cz)

Více informací naleznete v dalších odstavcích...
```

**Výhody MDX:**
- Čistý, čitelný formát
- Automatické stylování
- Podpora Markdown syntaxe
- Možnost vkládat React komponenty

---

## 🔄 Převod HTML na MDX

### Automatický převod

Pro převod všech HTML souborů na MDX:

```bash
node scripts/convert-html-to-mdx.js
```

Skript:
- Načte všechny HTML z `public/texts/`
- Převede HTML tagy na Markdown syntaxi
- Uloží jako `.mdx` do `content/performers/`

### Ruční úpravy

Po automatickém převodu může být potřeba:
1. Zkontrolovat formátování odkazů
2. Přidat nadpisy (# H1, ## H2)
3. Upravit seznamy na Markdown syntaxi
4. Přidat vizuální prvky (citace, zvýraznění)

---

## 🏗️ Build a deployment

### Lokální build

```bash
npm run build
```

Výstup v `out/` složce:
```
out/
├── ucinkujici/
│   ├── aikido.html
│   ├── kobudo.html
│   └── ...
└── ...
```

### Deployment

Nahrát celou `out/` složku na statický hosting:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Libovolný web server

**Není potřeba:**
- Node.js runtime
- Server-side rendering
- API
- Databáze

---

## ✅ Kontrolní seznam kompatibility

✅ **Povoleno (používáme):**
- Static export (`output: "export"`)
- generateStaticParams() pro SSG
- Client komponenty
- Dynamic imports (při buildu)
- MDX (@next/mdx)
- Image optimalizace vypnuta

❌ **Zakázáno (nepoužíváme):**
- Server components s fetchem
- API routes
- Server actions
- Middleware
- ISR (revalidate)
- Dynamic rendering

---

## 🎯 Výhody tohoto řešení

1. **100% statické** - žádná závislost na serveru
2. **Rychlé načítání** - pre-renderované HTML
3. **SEO optimalizované** - statický HTML obsah
4. **Snadná údržba** - čistý MDX formát
5. **Type-safe** - TypeScript podpora (volitelně)
6. **Levný hosting** - statické soubory

---

## 📚 Přidání nového účinkujícího

### 1. Vytvořit MDX soubor

```bash
# content/performers/novy-ucinkujici.mdx
```

### 2. Přidat do JSON

```json
{
  "name": "Nový účinkující",
  "url": "novy-ucinkujici",
  "thumbnail": "/photo-square/novy-ucinkujici.jpg",
  "description": "/texts/novy-ucinkujici.html"
}
```

### 3. Build

```bash
npm run build
```

Stránka `/ucinkujici/novy-ucinkujici` se automaticky vygeneruje!

---

## 🐛 Řešení problémů

### Chyba: "Module not found" při buildu

**Problém:** MDX soubor neexistuje pro nějaký slug

**Řešení:** 
1. Zkontrolovat, že všechny `url` v `ucinkujici.json` mají odpovídající `.mdx` soubor
2. Názvy souborů musí přesně odpovídat `url` hodnotám

### Build projde, ale stránka je prázdná

**Problém:** MDX soubor je prázdný nebo má špatný formát

**Řešení:**
1. Zkontrolovat obsah MDX souboru
2. Ujistit se, že obsahuje text (ne pouze metadata)

### Styly se neaplikují

**Problém:** Tailwind Typography není správně nakonfigurován

**Řešení:**
1. Ověřit, že `prose` třída je v JSX
2. Zkontrolovat `tailwind.config.js` - plugin musí být přidán

---

## 📖 Další zdroje

- [Next.js App Router dokumentace](https://nextjs.org/docs/app)
- [MDX dokumentace](https://mdxjs.com/)
- [@next/mdx](https://nextjs.org/docs/pages/building-your-application/configuring/mdx)
- [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin)

---

## 🎉 Hotovo!

Projekt je plně připravený pro statický export s MDX obsahem. Všechny stránky účinkujících jsou staticky generované a připravené k hostování.
