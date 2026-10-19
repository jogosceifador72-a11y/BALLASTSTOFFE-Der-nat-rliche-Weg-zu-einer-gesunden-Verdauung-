import React from 'react';

const CHECKOUT_URL = 'https://pay.hotmart.com/X108024310R';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E5DECE] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Wordmark */}
        <a 
          href="#" 
          className="text-xl sm:text-2xl font-serif font-bold tracking-[0.08em] text-[#14261B] whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
        >
          BALLASTSTOFFE
        </a>

        {/* Zone 2: 4-5 Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-700">
          <a href="#was-ist-das" className="hover:text-[#162C1E] transition-colors whitespace-nowrap shrink-0">
            Was ist das?
          </a>
          <a href="#was-es-loest" className="hover:text-[#162C1E] transition-colors whitespace-nowrap shrink-0">
            Was es löst
          </a>
          <a href="#ballaststoff-rechner" className="hover:text-[#162C1E] transition-colors whitespace-nowrap shrink-0">
            30g-Tagesbedarfs-Check
          </a>
          <a href="#inhalte" className="hover:text-[#162C1E] transition-colors whitespace-nowrap shrink-0">
            Buchinhalte
          </a>
          <a href="#faq" className="hover:text-[#162C1E] transition-colors whitespace-nowrap shrink-0">
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#1A3826] hover:bg-[#12281B] active:scale-95 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>Jetzt sichern</span>
            <span className="hidden sm:inline font-normal text-stone-300">·</span>
            <span className="hidden sm:inline font-mono text-emerald-300 font-bold">27,21 €</span>
          </a>
        </div>
      </div>
    </header>
  );
};
