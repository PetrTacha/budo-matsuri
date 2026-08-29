import "@/styles/globals.scss";

export const metadata = {
  metadataBase: new URL("https://slavnostibudo.japan.cz"),
  title: "Budō matsuri",
  description: "Slavnost bojových umění",
  openGraph: {
    title: "Budō matsuri",
    description: "Slavnost bojových umění",
    siteName: "Budō matsuri",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/iyu1hws.css" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
