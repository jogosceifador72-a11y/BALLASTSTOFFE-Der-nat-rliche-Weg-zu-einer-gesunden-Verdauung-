import React from 'react';
import { Check, X, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';

const CHECKOUT_URL = 'https://pay.hotmart.com/X108024310R';

export const TargetAudience: React.FC = () => {
  return (
    <section id="fuer-wen" className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            Ehrliche Orientierung
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#14261B] tracking-tight mb-4">
            Ist dieser Leitfaden der richtige für Sie?
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            Wir möchten sicherstellen, dass Sie genau das bekommen, was Sie suchen. Hier ist eine offene Gegenüberstellung:
          </p>
        </div>

        {/* 2 Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          
          {/* Card: Für Sie geeignet */}
          <div className="luxury-card border-2 border-emerald-800/40 rounded-3xl p-7 sm:p-9 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#1A3826] text-white text-[11px] font-bold px-4 py-1 rounded-bl-xl tracking-wider uppercase">
              Ideal für Sie
            </div>

            <div className="w-10 h-10 rounded-xl bg-[#E8E1D2] text-[#1A3826] flex items-center justify-center mb-6 border border-[#D5C9B4]">
              <Sparkles className="w-5 h-5 text-emerald-800" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#14261B] mb-2">
              Dieser Leitfaden ist für Sie, wenn:
            </h3>
            <p className="text-xs text-stone-500 mb-6">
              Sie eine praktische, alltagstaugliche und sanfte Lösung für Ihre Verdauung suchen.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-stone-700 leading-relaxed">
                  Sie Ihre <strong>Verdauung natürlich und ohne Komplikationen</strong> dauerhaft in Schwung bringen möchten.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-stone-700 leading-relaxed">
                  Sie <strong>Einsteiger sind und klare, unkomplizierte Orientierung</strong> statt verwirrender Fachbegriffe brauchen.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-stone-700 leading-relaxed">
                  Sie eine <strong>praktische Methode suchen, die Sie sofort heute</strong> im eigenen Tempo anwenden können.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-stone-700 leading-relaxed">
                  Sie Wert auf fertige Pläne (3-Wochen-Plan & 7-Tage-Ernährungsplan) mit normalen Lebensmitteln legen.
                </span>
              </li>
            </ul>
          </div>

          {/* Card: Nicht für Sie geeignet */}
          <div className="luxury-card border border-[#DED6C7] rounded-3xl p-7 sm:p-9 shadow-md relative">
            <div className="w-10 h-10 rounded-xl bg-[#E8E1D2] text-stone-700 flex items-center justify-center mb-6 border border-[#D5C9B4]">
              <ShieldAlert className="w-5 h-5 text-stone-700" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-stone-800 mb-2">
              Dieser Leitfaden ist NICHT für Sie, wenn:
            </h3>
            <p className="text-xs text-stone-500 mb-6">
              Bitte kaufen Sie den Leitfaden nicht, falls folgende Punkte zutreffen:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-stone-600 leading-relaxed">
                  Sie <strong>„Wunderergebnisse" erwarten</strong>, ohne selbst auch nur kleine Alltagsgewohnheiten umzusetzen.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-stone-600 leading-relaxed">
                  Sie <strong>lange, theoretische Fachtexte</strong> und biochemische Abhandlungen einem kompakten Praxisleitfaden vorziehen.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-stone-600 leading-relaxed">
                  Sie nach teuren Wunderpillen oder künstlichen Abführmitteln suchen statt nach gesunder, natürlicher Ernährung.
                </span>
              </li>
            </ul>

            <div className="mt-8 p-4 rounded-xl bg-[#EFE9DC]/70 border border-[#DDD5C7] text-xs text-stone-600">
              Hinweis: Dieser Leitfaden ersetzt keine medizinische Diagnose bei akuten chronisch-entzündlichen Darmerkrankungen.
            </div>
          </div>

        </div>

        {/* Action strip */}
        <div className="text-center">
          <p className="text-stone-700 text-sm font-medium mb-4">
            Bereit, Ihre Verdauung sanft und ohne Rätselraten zu unterstützen?
          </p>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#1A3826] hover:bg-[#12281B] active:scale-95 text-white font-semibold rounded-xl text-base shadow-md hover:shadow-xl transition-all"
          >
            <span>Jetzt Zugang für 27,21 € freischalten</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
