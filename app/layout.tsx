import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond, Alex_Brush } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-handwriting",
  display: "swap",
});

const heartIcon =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50,88.5 C48,86.5 12,56 12,32 C12,18.7 22.7,8 36,8 C43.8,8 50,13.5 50,13.5 C50,13.5 56.2,8 64,8 C77.3,8 88,18.7 88,32 C88,56 52,86.5 50,88.5 Z' fill='%23713C46'/%3E%3C/svg%3E";

export const metadata: Metadata = {
  title: "A Letter I Owe You",
  description: "A little corner of the internet dedicated to one sincere apology.",
  icons: {
    icon: heartIcon,
    shortcut: heartIcon,
    apple: heartIcon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={heartIcon} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={heartIcon} />
      </head>
      <body className={`${sans.variable} ${cormorant.variable} ${alexBrush.variable}`}>
        {children}
      </body>
    </html>
  );
}
