import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check, AlertCircle } from 'lucide-react';

const CHECKOUT_URL = 'https://pay.hotmart.com/X108024310R';

interface SwapOption {
  meal: string;
  standard: { name: string; fiber: number; detail: string };
  optimized: { name: string; fiber: number; detail: string };
}

const SWAP_DATA: SwapOption[] = [
  {
    meal: 'Frühstück',
    standard: {
      name: '2 Scheiben Toastbrot mit Marmelade & Kaffee',
      fiber: 2.2,
      detail: 'Kaum Ballaststoffe, schneller Blutzuckeranstieg',
    },
    optimized: {
      name: 'Hafer-Porridge mit 1/2 Apfel, Beeren & 1 EL Chiasamen',
      fiber: 10.8,
      detail: 'Reich an löslichen Quellstoffen & Beta-Glucan',
    },
  },
  {
    meal: 'Mittagessen',
    standard: {
      name: 'Normale helle Pasta mit einfacher Tomatensauce',
      fiber: 3.4,
      detail: 'Isolierte Kohlenhydrate ohne nennenswerte Faserstoffe',
    },
    optimized: {
      name: 'Vollkornpasta mit gedämpftem Brokkoli & Linsen-Bolognese',
      fiber: 12.5,
      detail: 'Perfekte Kombination aus löslichen und unlöslichen Fasern',
    },
  },
  {
    meal: 'Nachmittags-Snack',
    standard: {
      name: '1 Schokoriegel oder Gebäckteilchen',
      fiber: 0.8,
      detail: 'Trägt praktisch nichts zur Darmgesundheit bei',
    },
    optimized: {
      name: '1 ganzer frischer Apfel mit Schale & eine Handvoll Mandeln',
      fiber: 6.4,
      detail: 'Pektin aus dem Apfel + unlösliche Fasern aus Mandeln',
    },
  },
  {
    meal: 'Abendessen',
    standard: {
      name: 'Graubrot mit Wurst oder Käseaufschnitt',
      fiber: 2.8,
      detail: 'Sehr geringes Stuhlvolumen, fördert Trägheit',
    },
    optimized: {
      name: 'Bunter Rohkost-Salat mit Kichererbsen & Kürbiskernen',
      fiber: 9.6,
      detail: 'Nährt nützliche Darmbakterien über Nacht',
    },
  },
];

export const FiberCalculator: React.FC = () => {
  // tracks whether each meal is using standard (false) or optimized (true)
  const [swaps, setSwaps] = useState<boolean[]>([false, true, true, false]);

  const totalFiber = SWAP_DATA.reduce((sum, item, idx) => {
    return sum + (swaps[idx] ? item.optimized.fiber : item.standard.fiber);
  }, 0);

  const roundedTotal = Math.round(totalFiber * 10) / 10;
  const target = 30.0;
  const percentage = Math.min(100, Math.round((roundedTotal / target) * 100));

  const toggleSwap = (index: number) => {
    setSwaps(prev => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const setAllOptimized = () => {
    setSwaps([true, true, true, true]);
  };

  const setAllStandard = () => {
    setSwaps([false, false, false, false]);
  };

  return (
    <section id="ballaststoff-rechner" className="py-16 md:py-24 bg-gradient-to-b from-[#F5F1E8] via-[#ECE5D8] to-[#F5F1E8] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-900 mb-2">
            Interaktiver Alltags-Simulator
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#14261B] tracking-tight mb-4">
            Wie nah sind Sie den empfohlenen 30 g Ballaststoffen am Tag?
          </h2>
          <p className="text-stone-700 text-base leading-relaxed">
            In Deutschland erreichen Erwachsene im Schnitt nur 16–18 g pro Tag. Testen Sie hier die alltagstauglichen Tausch-Tricks aus unserem 30-seitigen Leitfaden:
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="luxury-card rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl max-w-4xl mx-auto">
          
          {/* Quick presets */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-6 border-b border-stone-200">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Schnellauswahl:
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={setAllStandard}
                className="px-3.5 py-1.5 text-xs font-medium rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-100 transition-colors"
              >
                Typischer Standard-Tag (ca. 9 g)
              </button>
              <button
                type="button"
                onClick={setAllOptimized}
                className="px-3.5 py-1.5 text-xs font-medium rounded-lg bg-[#1A3826] text-white hover:bg-[#12281B] transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                BALLASTSTOFFE-Plan (39 g)
              </button>
            </div>
          </div>

          {/* Meal Swaps List */}
          <div className="space-y-4 mb-8">
            {SWAP_DATA.map((item, index) => {
              const isOpt = swaps[index];
              const currentChoice = isOpt ? item.optimized : item.standard;

              return (
                <div
                  key={item.meal}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                    isOpt 
                      ? 'bg-emerald-50/50 border-emerald-300/80' 
                      : 'bg-stone-50/70 border-stone-200'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                          {item.meal}
                        </span>
                        <span className={`text-[11px] px-2 py-0.5 rounded font-medium ${
                          isOpt ? 'bg-emerald-200/60 text-emerald-900' : 'bg-stone-200 text-stone-700'
                        }`}>
                          {isOpt ? 'Leitfaden-Variante' : 'Herkömmliche Mahlzeit'}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-stone-900">
                        {currentChoice.name}
                      </p>
                      <p className="text-xs text-stone-500 mt-0.5">
                        {currentChoice.detail}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 shrink-0 sm:self-center">
                      <div className="text-right">
                        <div className="font-mono text-lg font-bold text-[#14261B] tabular-nums">
                          +{currentChoice.fiber.toFixed(1)} g
                        </div>
                        <span className="text-[11px] text-stone-500">Ballaststoffe</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleSwap(index)}
                        className={`px-3.5 py-2 text-xs font-semibold rounded-xl border transition-all ${
                          isOpt
                            ? 'bg-white text-emerald-800 border-emerald-400 hover:bg-emerald-100/60'
                            : 'bg-[#1A3826] text-white border-transparent hover:bg-[#12281B]'
                        }`}
                      >
                        {isOpt ? 'Zurücksetzen' : 'Mit E-Book tauschen'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Gauge / Result Bar */}
          <div className="p-6 bg-[#162C1E] text-white rounded-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold block mb-1">
                  Ihr aktuelles Tagesergebnis:
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-3xl sm:text-4xl font-bold tabular-nums text-white">
                    {roundedTotal.toFixed(1)} g
                  </span>
                  <span className="text-stone-300 text-sm">von 30,0 g empfohlenem Tagesziel</span>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full ${
                  roundedTotal >= 30 
                    ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/30' 
                    : 'bg-amber-400/20 text-amber-200 border border-amber-400/30'
                }`}>
                  {roundedTotal >= 30 ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      Ziel erreicht! Perfekt für die Darmgesundheit
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-3.5 h-3.5" />
                      Noch {(30 - roundedTotal).toFixed(1)} g unter der Empfehlung
                    </>
                  )}
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-stone-800 rounded-full h-3.5 overflow-hidden mb-3">
              <div 
                className={`h-full transition-all duration-500 rounded-full ${
                  roundedTotal >= 30 ? 'bg-emerald-400' : 'bg-gradient-to-r from-amber-400 to-emerald-400'
                }`}
                style={{ width: `${percentage}%` }}
              />
            </div>

            <p className="text-xs text-stone-300">
              Im 30-seitigen PDF-Leitfaden <strong>BALLASTSTOFFE</strong> erhalten Sie den genauen 3-Wochen-Plan, mit dem Ihr Körper diese 30 g sanft und ohne Völlegefühl integriert.
            </p>
          </div>

          {/* CTA under calculator */}
          <div className="mt-8 text-center">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#1A3826] hover:bg-[#12281B] active:scale-95 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <span>Den genauen 3-Wochen-Plan im E-Book freischalten</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="text-xs text-stone-600 font-medium mt-2.5">
              Einmalig nur 27,21 € · Sofortige Freischaltung per E-Mail
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
