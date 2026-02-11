import "@/styles/globals.scss";

export const metadata = {
  title: "Budō Matsuri",
  description: "Slavnost bojových umění",
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
