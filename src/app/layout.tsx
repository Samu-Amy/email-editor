import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

// TODO: prevent page reloading (?)
// TODO: trova un modo per mantenere salvato lo stato (cookie o altro (?))
// TODO: controlla i metadata
// TODO: metti disclaimer su compatibilità ecc. (spiega l'utilizzo di MJML)

export const metadata: Metadata = {
  title: "Email Editor",
  description: "Home landing page of the free and open-source visual block editor for emails",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-zinc-100 text-zinc-900")}>{children}</body>
    </html>
  );
}
