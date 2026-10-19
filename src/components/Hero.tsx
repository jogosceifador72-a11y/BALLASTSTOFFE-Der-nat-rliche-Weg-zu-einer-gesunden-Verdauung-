import React from 'react';
import { BookMockup } from './BookMockup';
import { ShieldCheck, Download, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

const CHECKOUT_URL = 'https://pay.hotmart.com/X108024310R';

interface HeroProps {
  onOpenPreview: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPreview }) => {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Decorative botanical & sunlit ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[420px] h-[420px] bg-emerald-700/10 rounded-full blur-[90px] -z-10 pointer-events-none" />
      <div className="absolute top-1/4 left-5 w-[380px] h-[380px] bg-amber-600/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
      <div className="absolute bottom-5 right-10 w-[320px] h-[320px] bg-emerald-900/10 rounded-full blur-[80px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Conversion */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Clean unboxed metadata kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-[#1A3826] uppercase mb-4">
              <span className="inline-flex items-center gap-1.5 text-emerald-900 bg-[#E8E1D2]/80 border border-[#D5C9B4] rounded-lg px-3 py-1 shadow-xs">
                <Download className="w-3.5 h-3.5 text-emerald-800" />
                30-Seiten PDF-Praxisleitfaden
              </span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span className="text-stone-700 font-medium">Sofortiger digitaler Zugang</span>
            </div>

            {/* Main Title & Subtitle */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-serif font-bold text-[#14261B] tracking-tight leading-[1.15] mb-4 text-balance">
              BALLASTSTOFFE
              <span className="block font-normal italic text-2xl sm:text-3xl md:text-[34px] text-stone-700 mt-2">
                Der natürliche Weg zu einer gesunden Verdauung
              </span>
            </h1>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl mb-6">
              Ohne lange Theorie bekommen Sie das genaue Vorgehen Schritt für Schritt: Bringen Sie Ihre Verdauung mit der richtigen Ernährung, ausreichend Wasser und einfachen Alltagsgewohnheiten in Schwung – direkt und im eigenen Tempo.
            </p>

            {/* Key Outcomes Checklist */}
            <div className="space-y-3 mb-8 text-stone-800 text-sm sm:text-base">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                <span>
                  <strong>Schluss mit träger Verdauung:</strong> Verstehen, wie lösliche und unlösliche Ballaststoffe zusammenwirken.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                <span>
                  <strong>Kein Rätselraten mehr:</strong> Mit 3-Wochen-Steigerungsplan, Lebensmitteltabellen und 7-Tage-Ernährungsplan.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                <span>
                  <strong>Typische Fehler vermeiden:</strong> Warum zu schnelles Steigern oder zu wenig Wasser oft scheitern lässt.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                <span>
                  <strong>Dauerhaftes Ergebnis:</strong> Mühelos jeden Tag auf die empfohlenen 30 g Ballaststoffe kommen.
                </span>
              </div>
            </div>

            {/* Pricing & CTA Card */}
            <div className="luxury-card rounded-2xl p-6 sm:p-7 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-5 border-b border-[#E0D7C7]">
                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold block mb-0.5">
                    Einmalige Investition · Lebenslanger Zugriff
                  </span>
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-3xl sm:text-4xl font-mono font-bold text-[#14261B] tabular-nums">
                      27,21 €
                    </span>
                    <span className="text-xs text-stone-600 font-medium">inkl. MwSt. · Kein Abonnement</span>
                  </div>
                </div>

                <div className="text-left sm:text-right sm:border-l sm:border-[#E0D7C7] sm:pl-4">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-900">
                    <Zap className="w-4 h-4 text-amber-600 fill-amber-500" />
                    <span>Sofort-Freischaltung</span>
                  </div>
                  <span className="text-[11px] text-stone-500 block mt-0.5">Direkter E-Mail-Download</span>
                </div>
              </div>

              {/* Main Primary Button */}
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group inline-flex items-center justify-center gap-3 px-7 py-4 text-base sm:text-lg font-semibold text-white bg-[#1A3826] hover:bg-[#12281B] active:scale-[0.99] rounded-xl shadow-md hover:shadow-xl transition-all duration-200 text-center"
              >
                <span>Jetzt Leitfaden für 27,21 € sichern</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </a>

              {/* Security & Guarantee Line */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-stone-600">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-800" />
                  Sichere Hotmart-Verschlüsselung
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                  14 Tage Geld-zurück-Garantie
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <Download className="w-4 h-4 text-emerald-800" />
                  PDF (Handy, Tablet, PC)
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Book Mockup & Interactive Preview Trigger */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <BookMockup onOpenPreview={onOpenPreview} />
            
            <button
              onClick={onOpenPreview}
              type="button"
              className="mt-6 text-xs sm:text-sm font-semibold text-[#1A3826] hover:text-emerald-900 underline underline-offset-4 flex items-center gap-1.5 transition-colors"
            >
              <span>Vorschau der Kapitel & Pläne ansehen</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
