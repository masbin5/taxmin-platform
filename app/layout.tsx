import "./globals.css";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main className="pt-6">
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
}
