"use client";

import WalletButton from "@/components/WalletButton";

import Link from "next/link";
import ComicButton from "@/components/ui/ComicButton";

const links = [
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "FAQ", href: "#faq" },
  { name: "Future", href: "/future" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-black bg-[#38BDF8]">

      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="flex items-center gap-4"
        >

          <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-black bg-pink-500 text-2xl font-black text-white shadow-[5px_5px_0_#000]">
            HP
          </div>

          <div>

            <h1 className="text-2xl font-black uppercase leading-none">
              HOOD
            </h1>

            <p className="text-sm font-black uppercase">
              PLAYERS
            </p>

          </div>

        </Link>

        <nav className="hidden items-center gap-10 lg:flex">

          {links.map((link) => (

            <Link
              key={link.name}
              href={link.href}
              className="font-black uppercase transition hover:scale-105"
            >
              {link.name}
            </Link>

          ))}

          <WalletButton />
        </nav>

        <ComicButton variant="yellow">
          Mint Now
        </ComicButton>

      </div>

    </header>
  );
}