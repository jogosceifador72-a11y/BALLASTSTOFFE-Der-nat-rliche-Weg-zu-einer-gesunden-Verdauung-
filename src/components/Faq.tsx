import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../types';

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'In welchem Format erhalte ich den Leitfaden?',
    answer: 'BALLASTSTOFFE ist ein praktisches, 30-seitiges E-Book im universellen PDF-Format. Sie können es direkt auf Ihrem Smartphone, Tablet, PC, Mac oder E-Reader öffnen und lesen – ganz ohne spezielle App. Auf Wunsch lässt es sich auch problemlos ausdrucken.',
  },
  {
    question: 'Wann und wie erhalte ich meinen Zugang?',
    answer: 'Sofort nach erfolgreichem Abschluss der Zahlung bei Hotmart wird Ihnen automatisch eine E-Mail mit Ihrem persönlichen Download-Link zugesendet. Sie können in weniger als 2 Minuten mit dem Lesen beginnen.',
  },
  {
    question: 'Ist der Leitfaden für absolute Einsteiger verständlich?',
    answer: 'Ja, absolut! Das Buch wurde bewusst so verfasst, dass Sie ohne biologische oder medizinische Vorkenntnisse sofort verstehen, worauf es ankommt. Keine langen theoretischen Fachtexte, sondern klare Schritt-für-Schritt-Anleitungen.',
  },
  {
    question: 'Bekomme ich durch mehr Ballaststoffe nicht erst recht Blähungen?',
    answer: 'Das passiert fast immer dann, wenn man die Zufuhr zu schnell erhöht oder zu wenig Wasser trinkt. Genau deshalb enthält dieser Leitfaden den bewährten 3-Wochen-Steigerungsplan: Er gewöhnt Ihre Darmbakterien sanft und beschwerdefrei an das empfohlene 30g-Tagesziel.',
  },
  {
    question: 'Muss ich teure Nahrungsergänzungsmittel oder exotische Superfoods kaufen?',
    answer: 'Nein, überhaupt nicht. Alle im Buch vorgestellten Lebensmittel – wie Haferflocken, Äpfel, Möhren, Hülsenfrüchte, Leinsamen und Brokkoli – finden Sie in jedem normalen Supermarkt oder Discounter zu günstigen Preisen.',
  },
  {
    question: 'Welche Zahlungsmethoden werden akzeptiert?',
    answer: 'Die Abwicklung erfolgt über den zertifizierten Zahlungsanbieter Hotmart. Sie können bequem und geschützt per PayPal, Kreditkarte (Visa, Mastercard, Amex), Klarna / Sofortüberweisung oder weiteren lokalen Zahlungsarten bezahlen.',
  },
  {
    question: 'Was ist, wenn mir der Leitfaden nicht gefällt?',
    answer: 'Sie sind durch unsere 14-tägige Geld-zurück-Garantie vollständig abgesichert. Wenn der Inhalt nicht Ihren Erwartungen entspricht, schreiben Sie einfach eine kurze Nachricht an den Hotmart-Support und Sie erhalten den vollen Kaufpreis von 27,21 € erstattet.',
  },
];

export const Faq: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-[#F5F1E8] via-[#EDE6D9] to-[#F5F1E8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-900 mb-2">
            Häufige Fragen
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#14261B] tracking-tight mb-4">
            Alles, was Sie vor dem Kauf wissen möchten
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            Hier finden Sie schnelle Antworten zu Format, Bestellung, Bezahlung und Umsetzung.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="luxury-card rounded-2xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-[#162C1E] hover:text-emerald-900 transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-800' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
