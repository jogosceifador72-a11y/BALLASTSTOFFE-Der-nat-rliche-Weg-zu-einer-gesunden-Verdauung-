import React, { useState } from 'react';
import breakfastImg from '../assets/images/fiber_lifestyle_breakfast_1792148955184.jpg';
import { BookOpen, Calendar, Table, Utensils, Droplets, Check, ArrowRight, FileText } from 'lucide-react';
import { BookChapter } from '../types';

const CHECKOUT_URL = 'https://pay.hotmart.com/X108024310R';

const CHAPTERS: BookChapter[] = [
  {
    number: '01',
    title: 'Das Fundament: Lösliche vs. unlösliche Ballaststoffe',
    subtitle: 'Die Biologie hinter einer funktionierenden Verdauung',
    pages: 'Seite 4 – 9',
    highlights: [
      'Warum Ballaststoff nicht gleich Ballaststoff ist (Quellwirkung vs. Füllstoff)',
      'Wie lösliche Fasern die gesunde Darmflora gezielt nähren',
      'Der natürliche Schutz vor Reizungen und Verstopfung',
    ],
  },
  {
    number: '02',
    title: 'Der 3-Wochen-Steigerungsplan',
    subtitle: 'Sanfte Gewöhnung ohne Völlegefühl und Blähungen',
    pages: 'Seite 10 – 16',
    highlights: [
      'Woche 1: Die ersten 5 Gramm extra ohne spürbare Umstellung',
      'Woche 2: Gezielter Einsatz von Saaten & Vollkorn',
      'Woche 3: Die 30-Gramm-Schwelle stabil und beschwerdefrei erreichen',
    ],
  },
  {
    number: '03',
    title: 'Die große Lebensmitteltabelle',
    subtitle: 'Portionsgrößen & exakter Fasergehalt auf einen Blick',
    pages: 'Seite 17 – 21',
    highlights: [
      'Über 50 Alltagslebensmittel sortiert nach Ballaststoffdichte',
      'Versteckte Ballaststoffbomben, die kaum jemand auf dem Schirm hat',
      'Schnelle Küchenwaagen-Faustregeln für unterwegs',
    ],
  },
  {
    number: '04',
    title: 'Der komplette 7-Tage-Ernährungsplan',
    subtitle: 'Fertige Menüs für morgens, mittags, abends & Zwischendurch',
    pages: 'Seite 22 – 27',
    highlights: [
      'Einfache Rezepte unter 20 Minuten Zubereitung',
      'Keine exotischen Superfoods – alles im normalen Supermarkt erhältlich',
      'Inklusive praktischer Einkaufsliste für die ganze Woche',
    ],
  },
  {
    number: '05',
    title: 'Wasser, Alltagsbewegung & Fehlervermeidung',
    subtitle: 'Die 3 Stellschrauben für dauerhafte Leichtigkeit',
    pages: 'Seite 28 – 30',
    highlights: [
      'Die individuelle Flüssigkeitsformel (ohne Wasser verstopfen Fasern)',
      '2-Minuten-Routinen nach dem Essen zur Darmstimulation',
      'Die 4 häufigsten Gründe, warum Menschen zu früh aufgeben – und wie Sie dranbleiben',
    ],
  },
];

export const BookContents: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState(0);

  return (
    <section id="inhalte" className="py-16 md:py-24 bg-gradient-to-b from-[#F5F1E8] via-[#EDE6D9] to-[#F5F1E8] border-b border-[#DED6C7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-900 mb-2">
            Inhaltsübersicht
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#14261B] tracking-tight mb-4">
            Was Sie auf den 30 Seiten genau erwartet
          </h2>
          <p className="text-stone-700 text-base leading-relaxed">
            Strukturiert wie ein roter Faden: von den biologischen Grundlagen bis zum praxiserprobten 7-Tage-Speiseplan.
          </p>
        </div>

        {/* Interactive Chapters Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Chapter Selector on Left */}
          <div className="lg:col-span-5 space-y-3">
            {CHAPTERS.map((ch, idx) => {
              const isSelected = activeChapter === idx;
              return (
                <button
                  key={ch.number}
                  type="button"
                  onClick={() => setActiveChapter(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all ${
                    isSelected
                      ? 'bg-[#1A3826] text-white border-[#1A3826] shadow-lg scale-[1.01]'
                      : 'luxury-card text-stone-800 hover:border-emerald-700/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs font-mono font-bold tracking-wider ${
                      isSelected ? 'text-emerald-300' : 'text-emerald-900'
                    }`}>
                      KAPITEL {ch.number}
                    </span>
                    <span className={`text-xs ${
                      isSelected ? 'text-stone-300' : 'text-stone-500'
                    }`}>
                      {ch.pages}
                    </span>
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-bold leading-snug">
                    {ch.title}
                  </h4>
                  <p className={`text-xs mt-1 line-clamp-1 ${
                    isSelected ? 'text-stone-200' : 'text-stone-600'
                  }`}>
                    {ch.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Chapter Details & Excerpt Card on Right */}
          <div className="lg:col-span-7 luxury-card rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl">
            <div className="flex items-center justify-between border-b border-[#E2D8C8] pb-4 mb-6">
              <div>
                <span className="text-xs font-mono text-emerald-900 font-bold uppercase tracking-wider block mb-0.5">
                  Kapitel-Detailansicht · {CHAPTERS[activeChapter].pages}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#14261B]">
                  {CHAPTERS[activeChapter].title}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#E8E1D2] border border-[#D5C9B4] flex items-center justify-center text-[#1A3826] shrink-0">
                <FileText className="w-5 h-5" />
              </div>
            </div>

            <p className="text-stone-800 text-sm sm:text-base leading-relaxed mb-6 font-medium">
              {CHAPTERS[activeChapter].subtitle}:
            </p>

            <div className="space-y-3.5 mb-8">
              {CHAPTERS[activeChapter].highlights.map((point, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/90 p-3.5 rounded-xl border border-[#DFD6C6] shadow-xs">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-stone-700 leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Lifestyle Image snippet inside preview */}
            <div className="relative rounded-2xl overflow-hidden mb-6 border border-[#DFD6C6] shadow-sm max-h-56">
              <img
                src={breakfastImg}
                alt="Gesundes, ballaststoffreiches Frühstücks-Setup"
                className="w-full h-56 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-900/85 via-stone-900/40 to-transparent p-4 text-white">
                <span className="text-xs font-semibold block text-emerald-300">
                  Praxis-Tipp aus Kapitel 4
                </span>
                <span className="text-xs text-stone-200">
                  Der 7-Tage-Plan zeigt Ihnen, wie ein 10-Minuten-Haferfrühstück bereits 11 g Ballaststoffe liefert.
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#DFD6C6]">
              <div className="text-xs text-stone-600 font-medium">
                Format: <strong>30-seitiges PDF</strong> · Sofort lesbar
              </div>

              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A3826] hover:bg-[#12281B] active:scale-95 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-md"
              >
                <span>Buch für 27,21 € freischalten</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* 3 Core Tools inside the book */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="luxury-card p-6 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform">
            <div className="w-9 h-9 rounded-lg bg-[#E8E1D2] text-[#1A3826] border border-[#D5C9B4] flex items-center justify-center mb-4">
              <Calendar className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-[#14261B] mb-2">
              Der 3-Wochen-Plan
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Steigert die Zufuhr schrittweise um 5 g pro Woche, damit sich Ihr Mikrobiom ohne Beschwerden anpassen kann.
            </p>
          </div>

          <div className="luxury-card p-6 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform">
            <div className="w-9 h-9 rounded-lg bg-[#E8E1D2] text-[#1A3826] border border-[#D5C9B4] flex items-center justify-center mb-4">
              <Table className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-[#14261B] mb-2">
              Die Lebensmitteltabelle
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Klare Orientierung mit exakten Gramm-Zahlen pro Portionsgröße. Schluss mit dem Nachschlagen auf Google.
            </p>
          </div>

          <div className="luxury-card p-6 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform">
            <div className="w-9 h-9 rounded-lg bg-[#E8E1D2] text-[#1A3826] border border-[#D5C9B4] flex items-center justify-center mb-4">
              <Utensils className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-[#14261B] mb-2">
              Der 7-Tage-Ernährungsplan
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Eine ganze Woche voller einfacher Rezepte für Frühstück, Mittag, Abendessen und Snacks zum direkten Nachmachen.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
