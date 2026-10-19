import React, { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';

const CHECKOUT_URL = 'https://pay.hotmart.com/X108024310R';

export const MobileStickyCta: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 450px
      if (window.scrollY > 450) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#DED6C7] p-3 sm:hidden shadow-2xl transition-transform duration-300">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="font-serif font-bold text-xs text-[#14261B] truncate max-w-[150px]">
            BALLASTSTOFFE PDF
          </span>
          <span className="font-mono text-xs font-bold text-[#1A3826]">
            27,21 € <span className="text-[10px] text-stone-600 font-sans font-normal">inkl. MwSt.</span>
          </span>
        </div>

        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#1A3826] active:bg-[#12281B] text-white text-xs font-semibold rounded-lg shadow-sm whitespace-nowrap"
        >
          <span>Jetzt sichern</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
