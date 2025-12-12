import "./globals.css";
import Navbar from "@/components/Navbar";
import TransitionProvider from "@/components/TransitionProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-[#FAF3E1] text-[#222]">
        {/* Navbar fixed */}
        <Navbar />

        {/* Main content */}
        <main className="pt-24">
          <TransitionProvider>
            {children}
          </TransitionProvider>
        </main>
      </body>
    </html>
  );
}
