import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vixrola — AI Tools for Writing, PDFs & More",
  description: "A modern AI tools hub for humanizing, detecting, rewriting, summarizing and working with documents.",
  metadataBase: new URL("https://vixrola.com"),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}