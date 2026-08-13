"use client";

import Image from "next/image";
import ComicBadge from "@/components/ui/ComicBadge";
import ComicButton from "@/components/ui/ComicButton";
import ComicCard from "@/components/ui/ComicCard";

const items = [
  { id: 1, image: "/nft1.png", rarity: "Common" },
  { id: 2, image: "/nft2.png", rarity: "Rare" },
  { id: 3, image: "/nft3.png", rarity: "Epic" },
  { id: 4, image: "/nft4.png", rarity: "Legendary" },
  { id: 5, image: "/nft5.png", rarity: "Rare" },
  { id: 6, image: "/nft6.png", rarity: "Common" },
];

export default function Collection() {
  return (
    <section id="gallery" className="border-y-4 border-black bg-[#F8D43A]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mb-10 flex items-end justify-between gap-6 sm:mb-14">
          <div>
            <ComicBadge color="blue">Gallery</ComicBadge>

            <h2 className="mt-5 text-5xl font-black uppercase leading-[0.88] sm:text-6xl lg:text-7xl">
              Meet The
              <br />
              Players
            </h2>
          </div>

          <a href="https://opensea.io/collection/hood-players" target="_blank" rel="noopener noreferrer" className="hidden sm:block">
            <a href="https://opensea.io/collection/hood-players" target="_blank" rel="noopener noreferrer"><ComicButton variant="pink">View All</ComicButton></a>
          </a>
        </div>

        <div className="mb-8 sm:hidden">
          <a href="https://opensea.io/collection/hood-players" target="_blank" rel="noopener noreferrer"><ComicButton variant="pink">View All</ComicButton></a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <ComicCard
              key={item.id}
              className="group overflow-hidden bg-white transition duration-200 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden border-b-4 border-black bg-sky-300 p-3 sm:p-4">
                <ComicBadge
                  color="green"
                  className="absolute right-3 top-3 z-10 scale-75 origin-top-right sm:right-4 sm:top-4"
                >
                  {index === 3 ? "1/1" : "0.0002 ETH"}
                </ComicBadge>

                <div className="overflow-hidden border-2 border-black bg-lime-300">
                  <Image
                    src={item.image}
                    alt={`HOOD PLAYERS #${item.id}`}
                    width={600}
                    height={600}
                    className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="text-2xl font-black uppercase sm:text-3xl">
                  HOOD #{String(item.id).padStart(2, "0")}
                </h3>

                <p className="mt-1 text-[10px] font-black uppercase tracking-wide text-gray-500 sm:text-xs">
                  Genesis Collection
                </p>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <ComicBadge color="yellow">{item.rarity}</ComicBadge>

                  <a href="https://opensea.io/collection/hood-players" target="_blank" rel="noopener noreferrer">
                    <ComicButton variant="pink" className="min-w-[82px] px-4 py-2 text-sm sm:min-w-[90px] sm:px-5 sm:py-3 sm:text-base">
                      Mint
                    </ComicButton>
                  </a>
                </div>
              </div>
            </ComicCard>
          ))}
        </div>
      </div>
    </section>
  );
}
