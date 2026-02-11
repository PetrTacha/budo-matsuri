import { notFound } from "next/navigation";
import Image from "next/image";
import ucinkujici from "@/data/ucinkujici.json";
import { Layout } from "@/components/Layout/Layout";
import { removeNewSpace } from "@/utils";
import { getPerformerMdx } from "@/lib/performers-mdx";

// Tato funkce generuje všechny statické stránky při buildu
export function generateStaticParams() {
  return ucinkujici.map((performer) => ({
    slug: performer.url,
  }));
}

// Metadata pro každou stránku
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const performer = ucinkujici.find((p) => p.url === slug);
  
  if (!performer) {
    return {
      title: "Účinkující nenalezen",
    };
  }

  return {
    title: `${removeNewSpace(performer.name)} | Budō Matsuri`,
    description: `Představení ${removeNewSpace(performer.name)} na festivalu Budō Matsuri`,
  };
}

export default async function PerformerPage({ params }) {
  const { slug } = await params;
  
  // Najdeme data účinkujícího v JSON
  const performer = ucinkujici.find((p) => p.url === slug);
  
  if (!performer) {
    notFound();
  }

  // Načteme MDX komponentu
  const MDXContent = getPerformerMdx(slug);

  if (!MDXContent) {
    notFound();
  }

  return (
    <Layout>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
          {/* Header s obrázkem a názvem */}
          <div className="mb-8">
            <div className="relative w-full h-96 mb-6 rounded-2xl overflow-hidden">
              <Image
                src={performer.thumbnail}
                alt={removeNewSpace(performer.name)}
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              {removeNewSpace(performer.name)}
            </h1>
          </div>

          {/* MDX obsah se stylingem z @tailwindcss/typography */}
          <article className="prose prose-lg max-w-none mx-auto">
            <MDXContent />
          </article>

          {/* Logo, pokud existuje */}
          {performer.logo && (
            <div className="mt-12 flex justify-center">
              <div className="relative w-64 h-64">
                <Image
                  src={performer.logo}
                  alt={`Logo ${removeNewSpace(performer.name)}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </main>
      </div>
    </Layout>
  );
}
