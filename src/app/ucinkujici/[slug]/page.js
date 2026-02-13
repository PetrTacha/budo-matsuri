import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ucinkujici from "@/data/ucinkujici.json";
import { removeNewSpace } from "@/utils";
import { getPerformerMdx } from "@/lib/performers-mdx";
import ArrowLeftIcon from "@/svgs/ArrowLeftIcon";

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
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Levá strana - obrázek (na mobilu nahoře) */}
      <div className="relative w-full md:w-1/2 h-[60vh] md:h-screen md:sticky md:top-0">
        <Image
          src={performer.thumbnail}
          alt={removeNewSpace(performer.name)}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Pravá strana - obsah (na mobilu pod obrázkem) */}
      <main className="w-full md:w-1/2 px-6 md:px-12 py-8 md:py-16 overflow-y-auto">
        {/* Zpětný odkaz */}
        <Link 
          href="/ucinkujici" 
          className="inline-flex items-center gap-2 no-underline text-primary transition-colors mb-6 group"
        >
          <ArrowLeftIcon className="w-3 h-3 group-hover:-translate-x-1 transition-transform mb-1" />
          <span>Zpět na účastníky</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          {removeNewSpace(performer.name)}
        </h1>

        {/* MDX obsah se stylingem z @tailwindcss/typography */}
        <article className="prose prose-lg max-w-none mb-12">
          <MDXContent />
        </article>

        {/* Logo, pokud existuje */}
        {performer.logo && (
          <div className="flex justify-center mt-12">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
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
  );
}
