import type { Metadata } from "next";
import { Big_Shoulders, Instrument_Sans } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const display = Big_Shoulders({
  weight: "700",
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AUL — African University League",
  description: "La plateforme officielle du sport universitaire africain — football, basketball masculin et basketball féminin.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
