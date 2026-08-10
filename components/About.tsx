"use client";

import Image from "next/image";
import ComicButton from "@/components/ui/ComicButton";
import ComicCard from "@/components/ui/ComicCard";
import ComicBadge from "@/components/ui/ComicBadge";

export default function About() {
  return (
    <section
      id="about"
      className="border-y-4 border-black bg-[#F7F1E6]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid items-center gap-28 lg:grid-cols-[1fr_520px]">

          <div>

            <ComicBadge color="pink">
              About
            </ComicBadge>

            <h2 className="mt-8 text-6xl font-black uppercase leading-none">
              WHAT ARE
              <br />
              HOOD PLAYERS?
            </h2>

            <p className="mt-8 text-max-w-xl leading-9 text-gray-700">
              HOOD Players is a collection of 2,600 unique pixel
              players inspired by memes, internet culture and the
              financial markets.
            </p>

            <p className="mt-6 text-max-w-xl leading-9 text-gray-700">
              Every NFT is handcrafted with its own personality,
              rarity and style, creating a fun collection for
              collectors and traders.
            </p>

            <div className="mt-10">
              <ComicButton variant="blue">
                Read More
              </ComicButton>
            </div>

          </div>

          <ComicCard className="relative rotate-2 bg-white p-6">

            <ComicBadge
              color="yellow"
              className="absolute -top-5 left-8 -rotate-6"
            >
              100% UNIQUE
            </ComicBadge>

            <Image
              src="/nft.png"
              alt="NFT"
              width={420}
              height={420}
              className="mx-auto"
            />

            <div className="mt-6 border-t-4 border-black pt-6 text-center">

              <h3 className="text-4xl font-black">
                2,600 NFTs
              </h3>

              <p className="mt-2 font-bold uppercase text-gray-600">
                Genesis Collection
              </p>

            </div>

          </ComicCard>

        </div>

      </div>
    </section>
  );
}