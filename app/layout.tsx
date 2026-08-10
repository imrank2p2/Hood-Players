import type { Metadata } from "next";
import { Bangers, Inter } from "next/font/google";
import "./globals.css";

const bangers = Bangers({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Hood Players",
  description:
    "Hood Players is a collection of 2,600 unique pixel traders built for collectors, traders and meme lovers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bangers.variable} ${inter.variable} overflow-x-hidden bg-[#F8D43A] text-black`}
      >
        {children}
      </body>
    </html>
  );
}