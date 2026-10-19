import React, { useState } from 'react';
import { X, ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, Download } from 'lucide-react';
import appleCoverImg from '../assets/images/book_cover_apple_1792148954365.jpg';

const CHECKOUT_URL = 'https://pay.hotmart.com/X108024310R';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SamplePage {
  title: string;
  tag: string;
  pageNumber: number;
  content: React.ReactNode;
}

export const PreviewModal: React.FC<PreviewModalProps> = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);

  if (!isOpen) return null;

  const samplePages: SamplePage[] = [
    {
      title: 'Deckblatt & Vorwort',
      tag: 'Seite 1–3',
      pageNumber: 1,
      content: (
        <div className="flex flex-col items-center text-center p-4 sm:p-8 bg-[#F9F7F3] rounded-xl h-full justify-center">
          <img
            src={appleCoverImg}
            alt="Buchcover Vorschau"
            className="w-36 sm:w-44 rounded-lg shadow-md mb-4 border border-stone-200"
          />
          <h3 className="font-serif text-2xl font-bold text-[#162C1E] tracking-wider mb-1">
            BALLASTSTOFFE
          </h3>
          <p className="font-serif italic text-sm text-stone-700 mb-2">
            Der natürliche Weg zu einer gesunden Verdauung
          </p>
          <p className="text-xs text-stone-500 max-w-sm">
            „Ein funktionierender Darm braucht keine komplizierten Diäten – sondern das richtige Zusammenspiel aus Nahrung, Wasser und Alltagsgewohnheiten."
          </p>
        </div>
      ),
    },
    {
      title: 'Das Duo: Lösliche vs. unlösliche Fasern',
      tag: 'Kapitel 1 · Seite 6',
      pageNumber: 6,
      content: (
        <div className="p-4 sm:p-6 bg-white rounded-xl h-full flex flex-col justify-between">
          <div>
            <div className="text-[11px] font-mono text-emerald-800 font-bold uppercase mb-1">
              KAPITEL 1 // GRUNDLAGEN
            </div>
            <h4 className="font-serif text-xl font-bold text-[#14261B] mb-3">
              Das mechanische Zusammenspiel im Darm
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              Warum scheitern so viele Menschen, wenn sie einfach nur Weizenkleie löffeln? Weil Weizenkleie fast nur unlösliche Fasern enthält. Ohne lösliche Quellstoffe entsteht im Darm ein zäher Pfropfen statt eines geschmeidigen Transports.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-4 text-left">
              <div className="p-3 bg-emerald-50/70 border border-emerald-200/60 rounded-lg">
                <span className="text-[11px] font-bold text-emerald-900 block mb-1">
                  1. Lösliche Ballaststoffe
                </span>
                <p className="text-[11px] text-stone-600">
                  Bilden mit Wasser ein weiches Gel. Füttern gezielt Bifido- und Laktobakterien. Enthalten in: Hafer, Äpfeln, Leinsamen, Hülsenfrüchten.
                </p>
              </div>

              <div className="p-3 bg-amber-50/70 border border-amber-200/60 rounded-lg">
                <span className="text-[11px] font-bold text-amber-900 block mb-1">
                  2. Unlösliche Ballaststoffe
                </span>
                <p className="text-[11px] text-stone-600">
                  Erhöhen das Stuhlvolumen und regen die Darmperistaltik mechanisch an. Enthalten in: Vollkorn, Nüssen, Gemüseschalen.
                </p>
              </div>
            </div>
          </div>

          <div className="p-2.5 bg-stone-100 rounded-lg text-[11px] text-stone-600 italic">
            Merksatz aus Seite 8: „Erst das Verhältnis 1:2 bis 1:3 aus löslichen und unlöslichen Fasern bringt die ersehnte Regelmäßigkeit."
          </div>
        </div>
      ),
    },
    {
      title: 'Auszug: Der 3-Wochen-Steigerungsplan',
      tag: 'Kapitel 2 · Seite 12',
      pageNumber: 12,
      content: (
        <div className="p-4 sm:p-6 bg-white rounded-xl h-full flex flex-col justify-between">
          <div>
            <div className="text-[11px] font-mono text-emerald-800 font-bold uppercase mb-1">
              KAPITEL 2 // DER 3-WOCHEN-PLAN
            </div>
            <h4 className="font-serif text-xl font-bold text-[#14261B] mb-2">
              Woche 1: Die sanfte Aktivierung
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              Das Ziel dieser ersten 7 Tage ist eine Erhöhung der täglichen Zufuhr um exakt 5 Gramm – völlig unbemerkt für Ihren Magen.
            </p>

            <div className="space-y-2.5 text-xs text-stone-700">
              <div className="p-2.5 bg-stone-50 border border-stone-200 rounded-lg flex items-center justify-between">
                <span><strong>Schritt 1:</strong> 1 Esslöffel geschrotete Leinsamen ins Müsli oder Joghurt</span>
                <span className="font-mono text-emerald-800 font-bold shrink-0 ml-2">+ 3,0 g</span>
              </div>
              <div className="p-2.5 bg-stone-50 border border-stone-200 rounded-lg flex items-center justify-between">
                <span><strong>Schritt 2:</strong> 1 kleiner Apfel am Nachmittag mit Schale verzehren</span>
                <span className="font-mono text-emerald-800 font-bold shrink-0 ml-2">+ 2,5 g</span>
              </div>
              <div className="p-2.5 bg-stone-50 border border-stone-200 rounded-lg flex items-center justify-between">
                <span><strong>Trink-Check:</strong> 1 großes Glas stilles Wasser direkt zum Leinsamen</span>
                <span className="text-[11px] text-emerald-700 font-semibold shrink-0 ml-2">Pflicht!</span>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-stone-500 mt-3 pt-2 border-t border-stone-200">
            Im vollständigen Leitfaden finden Sie die detaillierten Pläne für Woche 2 (10 g) und Woche 3 (30 g Vollziel).
          </div>
        </div>
      ),
    },
    {
      title: 'Die Alltags-Lebensmitteltabelle',
      tag: 'Kapitel 3 · Seite 18',
      pageNumber: 18,
      content: (
        <div className="p-4 sm:p-6 bg-white rounded-xl h-full flex flex-col justify-between">
          <div>
            <div className="text-[11px] font-mono text-emerald-800 font-bold uppercase mb-1">
              KAPITEL 3 // NACHSCHLAGEWERK
            </div>
            <h4 className="font-serif text-xl font-bold text-[#14261B] mb-2">
              Ballaststoff-Hitliste (Auszug)
            </h4>
            <p className="text-xs text-stone-600 mb-3">
              Verlässliche Angaben pro typischer Haushaltsportion:
            </p>

            <div className="border border-stone-200 rounded-lg overflow-hidden text-xs">
              <table className="w-full text-left">
                <thead className="bg-stone-100 text-stone-700 font-semibold border-b border-stone-200 text-[11px]">
                  <tr>
                    <th className="py-1.5 px-3">Lebensmittel</th>
                    <th className="py-1.5 px-3">Portion</th>
                    <th className="py-1.5 px-3 text-right">Ballaststoffe</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-700">
                  <tr>
                    <td className="py-1.5 px-3 font-medium">Chiasamen</td>
                    <td className="py-1.5 px-3 text-stone-500">2 EL (20 g)</td>
                    <td className="py-1.5 px-3 text-right font-mono font-bold text-emerald-800">6,8 g</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-3 font-medium">Linsen (gekocht)</td>
                    <td className="py-1.5 px-3 text-stone-500">1 Tasse (150 g)</td>
                    <td className="py-1.5 px-3 text-right font-mono font-bold text-emerald-800">11,2 g</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-3 font-medium">Haferflocken</td>
                    <td className="py-1.5 px-3 text-stone-500">50 g (Müsli)</td>
                    <td className="py-1.5 px-3 text-right font-mono font-bold text-emerald-800">5,0 g</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-3 font-medium">Brokkoli (gedämpft)</td>
                    <td className="py-1.5 px-3 text-stone-500">150 g</td>
                    <td className="py-1.5 px-3 text-right font-mono font-bold text-emerald-800">4,5 g</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-[11px] text-stone-500 mt-2">
            Insgesamt umfasst Kapitel 3 über 50 alltägliche Lebensmittel mit schnellen Kombinations-Tricks.
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#FAF8F5] border border-stone-300 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-white">
          <div>
            <span className="text-xs font-mono font-bold text-emerald-800 uppercase">
              Interaktiver Einblick · {samplePages[currentPage].tag}
            </span>
            <h3 className="font-serif text-lg font-bold text-[#14261B]">
              {samplePages[currentPage].title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-800 hover:bg-stone-100 rounded-lg transition-colors"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Sample Page */}
        <div className="p-4 sm:p-6 flex-1 overflow-y-auto min-h-[340px]">
          {samplePages[currentPage].content}
        </div>

        {/* Modal Footer Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 bg-white border-t border-stone-200">
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={currentPage === 0}
              onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
              className="p-2 border border-stone-200 rounded-lg text-stone-600 hover:bg-stone-100 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
              aria-label="Vorherige Seite"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-stone-500 font-mono">
              Beispiel {currentPage + 1} von {samplePages.length}
            </span>
            <button
              type="button"
              disabled={currentPage === samplePages.length - 1}
              onClick={() => setCurrentPage(p => Math.min(samplePages.length - 1, p + 1))}
              className="p-2 border border-stone-200 rounded-lg text-stone-600 hover:bg-stone-100 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
              aria-label="Nächste Seite"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1A3826] hover:bg-[#12281B] active:scale-95 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md transition-all"
          >
            <span>Vollständige 30 Seiten für 27,21 € freischalten</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
