import type { Metadata } from "next";
import {League_Spartan} from "next/font/google";
import "./globals.css";


const league_spartan = League_Spartan ({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Room Homepage",
  description: "Room homepage descriptions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${league_spartan.className} ${league_spartan.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
