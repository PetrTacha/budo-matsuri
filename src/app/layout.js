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
      </head>
      <body>{children}</body>
    </html>
  );
}
