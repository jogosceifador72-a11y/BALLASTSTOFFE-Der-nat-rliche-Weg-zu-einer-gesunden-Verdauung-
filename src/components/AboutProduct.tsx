import React from 'react';
import { BookOpen, Compass, Droplet, Footprints, Clock, ArrowRight } from 'lucide-react';

const CHECKOUT_URL = 'https://pay.hotmart.com/X108024310R';

export const AboutProduct: React.FC = () => {
  return (
    <section id="was-ist-das" className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            1. Was ist das?
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#14261B] tracking-tight mb-4">
            Der praktische 30-Seiten-Leitfaden für Ihre Verdauung
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            <strong>BALLASTSTOFFE</strong> ist kein trockenes Fachbuch mit Hunderten von Seiten. Es ist ein kompakter, handlungsorientierter PDF-Leitfaden, der Ihnen zeigt, wie Sie Ihre Verdauung mit der richtigen Ernährung, ausreichend Wasser und etwas Bewegung natürlich unterstützen.
          </p>
        </div>

        {/* 3 Pillars of the Method */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          
          <div className="luxury-card rounded-2xl p-7 shadow-md hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#E8E1D2] text-[#1A3826] flex items-center justify-center mb-5 border border-[#D5C9B4]">
              <Compass className="w-6 h-6 text-[#1A3826]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#14261B] mb-2">
              1. Die richtige Ernährung
            </h3>
            <p className="text-sm text-stone-700 leading-relaxed">
              Erfahren Sie, welche Alltagslebensmittel die höchste Dichte an wertvollen Pflanzenfasern besitzen und wie Sie diese mühelos in Ihre Lieblingsgerichte integrieren.
            </p>
          </div>

          <div className="luxury-card rounded-2xl p-7 shadow-md hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#E8E1D2] text-[#1A3826] flex items-center justify-center mb-5 border border-[#D5C9B4]">
              <Droplet className="w-6 h-6 text-[#1A3826]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#14261B] mb-2">
              2. Ausreichend Wasser
            </h3>
            <p className="text-sm text-stone-700 leading-relaxed">
              Ballaststoffe wirken wie kleine Schwämme. Mit der einfachen Trink-Formel aus dem Leitfaden quellen die Fasern optimal auf und sorgen für sanften, schmerzfreien Weitertransport.
            </p>
          </div>

          <div className="luxury-card rounded-2xl p-7 shadow-md hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#E8E1D2] text-[#1A3826] flex items-center justify-center mb-5 border border-[#D5C9B4]">
              <Footprints className="w-6 h-6 text-[#1A3826]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#14261B] mb-2">
              3. Sanfte Bewegung
            </h3>
            <p className="text-sm text-stone-700 leading-relaxed">
              Kein schweißtreibendes Marathontraining: Schon 5–10 Minuten gezielte Bewegung oder ein kurzer Verdauungsspaziergang aktivieren den Darmreflex nachhaltig.
            </p>
          </div>

        </div>

        {/* Highlight quote box */}
        <div className="luxury-card-dark text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-2xl relative z-10">
            <div className="flex items-center gap-2 text-emerald-300 text-xs font-mono uppercase tracking-wider mb-2">
              <Clock className="w-4 h-4" />
              Ohne lange Theorie · In Ihrem eigenen Tempo
            </div>
            <p className="text-lg sm:text-xl font-serif italic text-stone-100 leading-relaxed">
              „Ohne lange Theorie bekommen Sie das genaue Vorgehen Schritt für Schritt, um Ihre Verdauung einfach, direkt und in Ihrem eigenen Tempo in Schwung zu bringen."
            </p>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 px-7 py-4 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold rounded-xl text-sm whitespace-nowrap transition-all shadow-md hover:shadow-lg shrink-0 inline-flex items-center gap-2 active:scale-95"
          >
            <span>Jetzt für 27,21 € bestellen</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
