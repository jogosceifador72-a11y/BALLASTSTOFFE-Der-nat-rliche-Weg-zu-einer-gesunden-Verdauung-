import React from 'react';
import { ArrowRight, ShieldCheck, Download, CheckCircle2 } from 'lucide-react';
import appleCoverImg from '../assets/images/book_cover_apple_1792148954365.jpg';

const CHECKOUT_URL = 'https://pay.hotmart.com/X108024310R';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#14261B] text-white relative overflow-hidden">
      {/* Decorative ambient lights */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-emerald-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#1A3826] border border-emerald-800/60 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl text-center">
          
          <span className="inline-block text-xs uppercase tracking-widest text-emerald-300 font-semibold mb-3">
            30 Seiten PDF-Praxisleitfaden · Sofortiger Download
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4 max-w-3xl mx-auto">
            Bringen Sie Ihre Verdauung noch heute natürlich in Schwung
          </h2>

          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Schluss mit Völlegefühl, Trägheit und ständigem Rätselraten bei Lebensmitteln. Sichern Sie sich jetzt das praxiserprobte System und starten Sie direkt in Ihren ersten Schritt.
          </p>

          {/* Pricing highlight badge */}
          <div className="inline-flex flex-col items-center justify-center p-6 bg-[#12281A] rounded-2xl border border-emerald-900/80 mb-8 max-w-sm w-full">
            <span className="text-xs uppercase tracking-wider text-stone-400 mb-1">
              Einmaliger Festpreis
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-mono font-bold text-white tabular-nums">
                27,21 €
              </span>
              <span className="text-stone-400 text-xs">inkl. MwSt.</span>
            </div>
            <span className="text-[11px] text-emerald-400 mt-1">
              Kein Abonnement · Kein Risiko (14 Tage Garantie)
            </span>
          </div>

          <div>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              <span>Jetzt Leitfaden auf Hotmart sichern</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-stone-300">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Sichere 256-Bit SSL-Zahlung
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              14 Tage Geld-zurück-Garantie
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Download className="w-4 h-4 text-emerald-400" />
              Sofort-Zugang per E-Mail
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
