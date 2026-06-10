import "@/styles/globals.scss";

export const metadata = {
  title: "Budō Matsuri",
  description: "Slavnost bojových umění",
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
