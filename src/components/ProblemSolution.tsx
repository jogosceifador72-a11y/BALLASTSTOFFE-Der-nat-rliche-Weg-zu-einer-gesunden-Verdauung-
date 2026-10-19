import React from 'react';
import fiberIngredientsImg from '../assets/images/fiber_rich_ingredients_1792148954950.jpg';
import { Activity, Compass, AlertOctagon, Sparkles, Check, ArrowRight } from 'lucide-react';

const CHECKOUT_URL = 'https://pay.hotmart.com/X108024310R';

export const ProblemSolution: React.FC = () => {
  return (
    <section id="was-es-loest" className="py-16 md:py-24 bg-gradient-to-b from-[#F5F1E8] via-[#EFE9DC] to-[#F5F1E8] border-y border-[#DED6C7] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-900 mb-2">
            Praxis statt graue Theorie
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#14261B] tracking-tight mb-4">
            Was dieses E-Book konkret für Sie löst
          </h2>
          <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
            Die meisten Menschen wissen, dass Ballaststoffe gesund sind – doch im Alltag scheitern viele an Blähungen, falschen Mengen oder Ratlosigkeit beim Einkaufen. Dieser Leitfaden beseitigt die 4 größten Hürden:
          </p>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Träge Verdauung */}
          <div className="luxury-card rounded-2xl p-7 hover:border-emerald-700/50 hover:shadow-xl transition-all duration-300 group">
            <div className="w-11 h-11 rounded-xl bg-[#1A3826] text-white flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-sm">
              <Activity className="w-6 h-6 text-emerald-300" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wide text-emerald-900 mb-1">
              Hürde 1 überwunden
            </div>
            <h3 className="text-xl font-serif font-bold text-[#162C1E] mb-3">
              Träge Verdauung & Verstopfung natürlich beenden
            </h3>
            <p className="text-stone-700 text-sm leading-relaxed mb-4">
              Oft wird einfach „mehr Vollkorn" empfohlen – doch das führt ohne das richtige Wissen oft zu Krämpfen. Der Leitfaden zeigt Ihnen das exakte Zusammenspiel aus <strong>löslichen</strong> (quellen auf, füttern die Darmflora) und <strong>unlöslichen</strong> Ballaststoffen (erhöhen das Stuhlvolumen), damit der Darm wieder wie ein Schweizer Uhrwerk arbeitet.
            </p>
            <div className="pt-3 border-t border-[#DFD6C6] flex items-center gap-2 text-xs font-medium text-emerald-950">
              <Check className="w-4 h-4 text-emerald-800" />
              Sanfter Transport im Darm ohne Quälerei
            </div>
          </div>

          {/* Card 2: Unsicherheit bei Lebensmitteln */}
          <div className="luxury-card rounded-2xl p-7 hover:border-emerald-700/50 hover:shadow-xl transition-all duration-300 group">
            <div className="w-11 h-11 rounded-xl bg-[#1A3826] text-white flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-sm">
              <Compass className="w-6 h-6 text-emerald-300" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wide text-emerald-900 mb-1">
              Hürde 2 überwunden
            </div>
            <h3 className="text-xl font-serif font-bold text-[#162C1E] mb-3">
              Schluss mit Unsicherheit bei Mengen & Lebensmitteln
            </h3>
            <p className="text-stone-700 text-sm leading-relaxed mb-4">
              Wie viel Gramm Ballaststoffe stecken in einem Apfel, in Haferflocken oder Linsen? Durch den <strong>3-Wochen-Steigerungsplan</strong>, übersichtliche <strong>Lebensmitteltabellen</strong> und einen <strong>7-Tage-Ernährungsplan</strong> wissen Sie auf einen Blick, was auf den Teller gehört.
            </p>
            <div className="pt-3 border-t border-[#DFD6C6] flex items-center gap-2 text-xs font-medium text-emerald-950">
              <Check className="w-4 h-4 text-emerald-800" />
              Kein mühsames Ausrechnen oder Kalorientracken
            </div>
          </div>

          {/* Card 3: Typische Anfängerfehler */}
          <div className="luxury-card rounded-2xl p-7 hover:border-emerald-700/50 hover:shadow-xl transition-all duration-300 group">
            <div className="w-11 h-11 rounded-xl bg-[#1A3826] text-white flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-sm">
              <AlertOctagon className="w-6 h-6 text-emerald-300" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wide text-emerald-900 mb-1">
              Hürde 3 überwunden
            </div>
            <h3 className="text-xl font-serif font-bold text-[#162C1E] mb-3">
              Die typischen Fehler sofort vermeiden
            </h3>
            <p className="text-stone-700 text-sm leading-relaxed mb-4">
              Wer von heute auf morgen von 15 g auf 35 g springt oder zu wenig Wasser trinkt, erlebt Frust und Völlegefühl. Der Leitfaden schützt Sie vor diesen klassischen Fallen: Er zeigt Ihnen die Trink-Faustformel und das richtige Tempo, damit Sie nicht vorzeitig aufgeben.
            </p>
            <div className="pt-3 border-t border-[#DFD6C6] flex items-center gap-2 text-xs font-medium text-emerald-950">
              <Check className="w-4 h-4 text-emerald-800" />
              Angenehme Gewöhnung ohne schmerzhaftes Völlegefühl
            </div>
          </div>

          {/* Card 4: Das konkrete Endergebnis */}
          <div className="luxury-card rounded-2xl p-7 hover:border-emerald-700/50 hover:shadow-xl transition-all duration-300 group">
            <div className="w-11 h-11 rounded-xl bg-[#1A3826] text-white flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-sm">
              <Sparkles className="w-6 h-6 text-emerald-300" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wide text-emerald-900 mb-1">
              Hürde 4 überwunden
            </div>
            <h3 className="text-xl font-serif font-bold text-[#162C1E] mb-3">
              Das Endergebnis: 30 g pro Tag mühelos erreichen
            </h3>
            <p className="text-stone-700 text-sm leading-relaxed mb-4">
              Nach dem Lesen dieses 30-seitigen Leitfadens beherrschen Sie die einfachen Hebel für Ihren Alltag: Sie erreichen die von Experten empfohlenen 30 g Ballaststoffe täglich wie von selbst und spüren tagtägliches Wohlbefinden und Leichtigkeit.
            </p>
            <div className="pt-3 border-t border-[#DFD6C6] flex items-center gap-2 text-xs font-medium text-emerald-950">
              <Check className="w-4 h-4 text-emerald-800" />
              Dauerhafte Vitalität und ein entspannter Darm
            </div>
          </div>

        </div>

        {/* Visual Proof Section with Image & Action */}
        <div className="luxury-card-dark text-white rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch border border-emerald-900/50">
          <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
            <img
              src={fiberIngredientsImg}
              alt="Auswahl ballaststoffreicher Lebensmittel aus dem Leitfaden"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#162C1E] via-transparent to-transparent lg:hidden" />
          </div>

          <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
            <div className="text-xs uppercase tracking-widest text-emerald-300 font-semibold mb-2">
              Direkt umsetzbar · Ohne Küchenstress
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
              Alles, was Sie wissen müssen – zusammengefasst auf den Punkt
            </h3>
            <p className="text-stone-200 text-sm sm:text-base leading-relaxed mb-6">
              Keine 400-Seiten-Bücher, keine biochemischen Fachchinesisch-Abhandlungen. Nur klare Empfehlungen, konkrete Lebensmitteltabellen und der bewährte 3-Wochen-Plan, den Sie heute noch starten können.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold rounded-xl text-sm transition-all shadow-md hover:shadow-lg whitespace-nowrap active:scale-95"
              >
                <span>Jetzt für 27,21 € bestellen</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs text-stone-300">
                PDF-Sofortversand per E-Mail nach Kauf
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
