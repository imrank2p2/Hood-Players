"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ComicBadge from "@/components/ui/ComicBadge";
import ComicButton from "@/components/ui/ComicButton";
import ComicCard from "@/components/ui/ComicCard";

export default function Hero() {
  const [holders, setHolders] = useState(0);

  useEffect(() => {
    let active = true;

    const loadHolders = async () => {
      try {
        const response = await fetch("/api/activity", { cache: "no-store" });
        const data = await response.json();
        if (active && Number.isFinite(Number(data.holders))) {
          setHolders(Number(data.holders));
        }
      } catch {
        // Keep the displayed holder count at the last known value.
      }
    };

    loadHolders();
    const timer = window.setInterval(loadHolders, 15000);
    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F8D43A]">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-10 pt-16 sm:px-6 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
          <div className="relative z-20 flex flex-col items-start">
            <ComicBadge color="pink" className="-rotate-2">
              ★ GENESIS DROP
            </ComicBadge>

            <h1 className="mt-6 text-[58px] font-black uppercase leading-[0.82] tracking-tight sm:text-7xl lg:text-[92px]">
              HOOD
              <br />
              <span className="text-pink-500">PLAYERS</span>
            </h1>

            <ComicCard
              color="white"
              className="mt-7 max-w-xl p-5 sm:p-6"
            >
              <p className="text-sm font-bold leading-6 sm:text-base sm:leading-7">
                HOOD PLAYERS is a collection of 2,600 pixel players inspired by
                meme culture, internet communities and the financial markets.
              </p>
            </ComicCard>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#mint"><ComicButton variant="pink">Mint on OpenSea</ComicButton></a>
              <a href="https://opensea.io/collection/hood-players" target="_blank" rel="noopener noreferrer"><ComicButton variant="white">View Collection</ComicButton></a>
            </div>
          </div>

          <div className="relative mx-auto flex min-h-[470px] w-full max-w-[620px] items-center justify-center sm:min-h-[570px]">
            <div className="absolute left-0 top-12 -rotate-12 border-4 border-black bg-white p-2 shadow-[7px_7px_0_#000] sm:left-2 sm:p-3">
              <Image
                src="/nft2.png"
                alt="HOOD PLAYERS NFT"
                width={170}
                height={170}
                className="w-[115px] sm:w-[155px]"
              />
            </div>

            <div className="relative z-10 -rotate-2 border-4 border-black bg-sky-300 p-3 shadow-[10px_10px_0_#000] sm:p-5 sm:shadow-[12px_12px_0_#000]">
              <Image
                src="/nft.png"
                alt="HOOD PLAYERS Genesis NFT"
                width={420}
                height={420}
                priority
                className="w-[250px] sm:w-[350px] lg:w-[390px]"
              />
            </div>

            <div className="absolute bottom-12 right-0 rotate-12 border-4 border-black bg-lime-300 p-2 shadow-[7px_7px_0_#000] sm:right-2 sm:p-3">
              <Image
                src="/nft3.png"
                alt="HOOD PLAYERS NFT"
                width={170}
                height={170}
                className="w-[115px] sm:w-[155px]"
              />
            </div>

            <div className="absolute right-0 top-2 rotate-6 border-4 border-black bg-pink-500 px-3 py-2 text-xs font-black uppercase text-white shadow-[5px_5px_0_#000] sm:right-3 sm:px-4 sm:text-sm">
              0.0002 ETH
            </div>

            <div className="absolute bottom-2 left-3 -rotate-3 border-4 border-black bg-white px-3 py-2 text-xs font-black uppercase shadow-[5px_5px_0_#000] sm:left-6 sm:px-5 sm:text-sm">
              #0001 GENESIS
            </div>
          </div>
        </div>

        <div className="mt-8 grid overflow-hidden border-4 border-black shadow-[8px_8px_0_#000] sm:mt-12 md:grid-cols-4">
          <div className="bg-pink-500 p-4 text-center sm:p-6">
            <h2 className="text-3xl font-black sm:text-4xl">2,600</h2>
            <p className="mt-1 text-[10px] font-black uppercase sm:text-xs">
              Collection Size
            </p>
          </div>

          <div className="bg-sky-300 p-4 text-center sm:p-6">
            <h2 className="text-3xl font-black sm:text-4xl">0.0002 ETH</h2>
            <p className="mt-1 text-[10px] font-black uppercase sm:text-xs">
              Mint
            </p>
          </div>

          <div className="bg-lime-300 p-4 text-center sm:p-6">
            <h2 className="text-3xl font-black sm:text-4xl">{holders.toLocaleString()}</h2>
            <p className="mt-1 text-[10px] font-black uppercase sm:text-xs">
              Holders
            </p>
          </div>

          <div className="bg-orange-300 p-4 text-center sm:p-6">
            <h2 className="text-3xl font-black sm:text-4xl">24/7</h2>
            <p className="mt-1 text-[10px] font-black uppercase sm:text-xs">
              Community
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
