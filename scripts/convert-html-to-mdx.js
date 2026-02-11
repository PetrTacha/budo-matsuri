// Pomocný Node.js skript pro převod HTML souborů na MDX
// Spustit pomocí: node scripts/convert-html-to-mdx.js

const fs = require('fs');
const path = require('path');

const textsDir = path.join(__dirname, '../public/texts');
const outputDir = path.join(__dirname, '../content/performers');

// Ujistíme se, že výstupní složka existuje
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Funkce pro čištění a převod HTML na MDX
function convertHtmlToMdx(html) {
  let mdx = html;
  
  // Odstraníme <p> a </p> tagy (MDX je přidá automaticky)
  mdx = mdx.replace(/<p>/g, '');
  mdx = mdx.replace(/<\/p>/g, '\n\n');
  
  // Převedeme <br> na nové řádky
  mdx = mdx.replace(/<br\s*\/?>/gi, '\n\n');
  
  // Převedeme odkazy
  mdx = mdx.replace(/<a\s+href=['"]([^'"]+)['"]\s+tabindex=['"]-1['"]\s+target=['"]_blank['"]>([^<]+)<\/a>/gi, '[$2]($1)');
  mdx = mdx.replace(/<a\s+href=['"]([^'"]+)['"]\s+target=['"]_blank['"]\s+tabindex=['"]-1['"]>([^<]+)<\/a>/gi, '[$2]($1)');
  mdx = mdx.replace(/<a\s+href=['"]([^'"]+)['"]\s+target=['"]_blank['"]>([^<]+)<\/a>/gi, '[$2]($1)');
  mdx = mdx.replace(/<a\s+href=['"]([^'"]+)['"]>([^<]+)<\/a>/gi, '[$2]($1)');
  
  // Očistíme nadměrné prázdné řádky
  mdx = mdx.replace(/\n{3,}/g, '\n\n');
  
  // Očistíme mezery na začátku a konci
  mdx = mdx.trim();
  
  return mdx;
}

// Načteme všechny HTML soubory
fs.readdirSync(textsDir).forEach(file => {
  if (path.extname(file) === '.html') {
    const htmlPath = path.join(textsDir, file);
    const mdxFileName = path.basename(file, '.html') + '.mdx';
    const mdxPath = path.join(outputDir, mdxFileName);
    
    // Načteme HTML obsah
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
    
    // Převedeme na MDX
    const mdxContent = convertHtmlToMdx(htmlContent);
    
    // Uložíme MDX soubor
    fs.writeFileSync(mdxPath, mdxContent, 'utf-8');
    
    console.log(`✓ Převedeno: ${file} → ${mdxFileName}`);
  }
});

console.log('\n✅ Konverze dokončena!');
console.log(`📁 MDX soubory uloženy v: ${outputDir}`);
