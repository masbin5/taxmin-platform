import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "TAXMIN",
  description: "Trust and Verify",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FAF3E1] text-[#222]">
        <Navbar />
        <main className="pt-6">{children}</main>
      </body>
    </html>
  );
}
