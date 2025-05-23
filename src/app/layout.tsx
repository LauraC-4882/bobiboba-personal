import type { Metadata } from "next";
import { Rajdhani, Orbitron } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import CyberBackground from "@/components/CyberBackground";

const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-rajdhani',
});

const orbitron = Orbitron({
  weight: ['400', '700', '900'],
  subsets: ["latin"],
  variable: '--font-orbitron',
});

export const metadata: Metadata = {
  title: "Die (Laura) Chen - Portfolio",
  description: "Computer Science + Data Science student at NYU, Web Development specialist",
  keywords: ["Die Chen", "Laura Chen", "NYU", "Computer Science", "Data Science", "Web Development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${orbitron.variable}`}>
      <body className="font-body antialiased">
        <CyberBackground />
        <Navigation />
        <main className="relative z-10 pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
