"use client";

const links = [
  ["About", "#about"],
  ["Gallery", "#gallery"],
  ["Roadmap", "#roadmap"],
  ["FAQ", "#faq"],
];

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="inline-flex h-12 w-12 items-center justify-center border-4 border-white bg-pink-500 text-2xl font-black">
              H
            </div>

            <h2 className="mt-5 text-4xl font-black uppercase leading-none">
              HOOD
              <br />
              <span className="text-pink-500">PLAYERS</span>
            </h2>

            <p className="mt-5 max-w-sm text-sm font-bold leading-6 text-gray-300">
              2,600 pixel players built for the internet, the culture and the
              hood.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase text-[#F8D43A]">
              Navigate
            </h3>

            <nav className="mt-4 flex flex-col gap-3">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="w-fit text-sm font-black uppercase transition hover:text-pink-500"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase text-[#F8D43A]">
              Social
            </h3>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://x.com/GlowPunkNFT" target="_blank" rel="noopener noreferrer"
                className="border-2 border-white px-4 py-2 text-xs font-black uppercase transition hover:bg-white hover:text-black"
              >
                X / Twitter
              </a>
              <a
                href="#"
                className="border-2 border-white px-4 py-2 text-xs font-black uppercase transition hover:bg-white hover:text-black"
              >
                Discord
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t-2 border-white/30 pt-6 text-[10px] font-black uppercase text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 HOOD PLAYERS. All rights reserved.</span>
          <span>Built for the players.</span>
        </div>
      </div>
    </footer>
  );
}
