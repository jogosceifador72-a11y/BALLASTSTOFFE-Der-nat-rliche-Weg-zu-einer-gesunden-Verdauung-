import React from 'react';
import appleCoverImg from '../assets/images/book_cover_apple_1792148954365.jpg';

interface BookMockupProps {
  onOpenPreview?: () => void;
}

export const BookMockup: React.FC<BookMockupProps> = ({ onOpenPreview }) => {
  return (
    <div className="relative group max-w-sm sm:max-w-md mx-auto py-2">
      {/* Warm ambient botanical lighting aura */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-[#1A3826]/20 via-[#C28A4A]/15 to-[#336645]/20 rounded-full blur-3xl -z-10 group-hover:opacity-100 transition-opacity duration-700 opacity-80" />

      {/* 3D Floating Book Container */}
      <div 
        onClick={onOpenPreview}
        className="cursor-pointer relative animate-gentle-float transition-all duration-500 ease-out group-hover:scale-[1.02] rounded-r-2xl rounded-l-md bg-[#FAF7F2] overflow-hidden border border-[#D9CEBC]"
        style={{
          boxShadow: '0 25px 50px -12px rgba(20, 40, 26, 0.35), 0 8px 24px -4px rgba(180, 130, 70, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.6) inset',
        }}
      >
        {/* Book Spine Simulation & Highlight strip */}
        <div className="absolute top-0 bottom-0 left-0 w-5 bg-gradient-to-r from-[#8C7E6A]/50 via-[#E8DFD0]/40 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 left-4 w-px bg-[#C8BCAB] z-20 pointer-events-none shadow-sm" />

        {/* Book Cover Face */}
        <div className="relative bg-gradient-to-b from-[#FAF7F2] via-[#F4EFE6] to-[#ECE5D8] p-5 sm:p-7 flex flex-col justify-between aspect-[3/4.25] text-center select-none">
          {/* Subtle noise/stone gradient backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(#C4B59F_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

          {/* Header Typography matching cover */}
          <div className="relative pt-2 sm:pt-4 z-10">
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-[44px] tracking-[0.16em] text-[#14261B] font-bold leading-none mb-3 drop-shadow-sm">
              BALLASTSTOFFE
            </h3>

            {/* Botanical divider */}
            <div className="flex items-center justify-center gap-2 my-2 text-stone-400">
              <span className="w-12 h-px bg-[#BDB09E]" />
              <svg className="w-5 h-5 text-[#254D33]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C7 6 5 11 5 16a7 7 0 0 0 14 0c0-5-2-10-7-14zm0 3.5c3.2 3.3 4.5 7 4.5 10.5 0 2.5-2 4.5-4.5 4.5S7.5 18.5 7.5 16C7.5 12.5 8.8 8.8 12 5.5z"/>
              </svg>
              <span className="w-12 h-px bg-[#BDB09E]" />
            </div>

            <p className="font-serif italic text-base sm:text-lg text-[#253828] font-medium tracking-wide mt-1.5">
              Der natürliche Weg zu einer gesunden Verdauung
            </p>
            <p className="text-xs sm:text-[13px] text-stone-600 font-sans mt-1">
              Ein praktischer Leitfaden für tägliches Wohlbefinden.
            </p>
          </div>

          {/* Center Apple Photography Asset */}
          <div className="relative my-auto py-2 sm:py-3 z-10 overflow-hidden rounded-xl">
            <div className="relative mx-auto max-w-[250px] sm:max-w-[280px] group/img">
              <img
                src={appleCoverImg}
                alt="BALLASTSTOFFE Buchcover - Knackiger roter Apfel auf hellem Naturstein mit Wassertropfen"
                className="w-full object-cover rounded-xl shadow-[0_12px_28px_-6px_rgba(30,50,35,0.3)] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-black/5 pointer-events-none" />
            </div>
          </div>

          {/* Book Footer Info */}
          <div className="relative z-10 border-t border-[#D9CEBC] pt-3 flex items-center justify-between text-xs text-stone-600 font-sans">
            <span className="font-semibold text-[#1A3826] tracking-wide">30-Seitiger Praxis-Leitfaden</span>
            <span className="font-mono text-stone-500 font-medium">PDF · Ausgabe 2026</span>
          </div>
        </div>

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-[#14261B]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] z-30">
          <span className="bg-[#FAF7F2] text-[#14261B] text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform flex items-center gap-2 border border-[#C8BCAB]">
            <svg className="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Klicken für Leseprobe & Vorschau
          </span>
        </div>
      </div>

      {/* Pages thickness illusion under book */}
      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-stone-600 font-medium">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-700 animate-pulse"></span>
        <span>Sofortiger digitaler Download (PDF) · Smartphone, Tablet & PC</span>
      </div>
    </div>
  );
};
