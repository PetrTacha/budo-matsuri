// Tento soubor musí být v root složce projektu pro @next/mdx
// Definuje vlastní React komponenty pro MDX elementy

export function useMDXComponents(components) {
  return {
    // Vlastní styling pro HTML elementy v MDX
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mb-4 mt-8">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mb-3 mt-6">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold mb-2 mt-4">{children}</h3>
    ),
    p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
    a: ({ href, children }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => <ul className="list-disc ml-6 mb-4">{children}</ul>,
    ol: ({ children }) => (
      <ol className="list-decimal ml-6 mb-4">{children}</ol>
    ),
    li: ({ children }) => <li className="mb-1">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
    ...components,
  };
}
