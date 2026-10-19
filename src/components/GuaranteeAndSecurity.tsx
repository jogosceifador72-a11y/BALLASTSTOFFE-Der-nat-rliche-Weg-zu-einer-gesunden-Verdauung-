import React from 'react';
import { ShieldCheck, MailCheck, Smartphone, Lock, Award, Clock } from 'lucide-react';

export const GuaranteeAndSecurity: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#F5F1E8] via-[#EDE6D9] to-[#F5F1E8] border-b border-[#DED6C7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Guarantee Banner */}
        <div className="max-w-4xl mx-auto luxury-card border-2 border-emerald-800/30 rounded-3xl p-8 sm:p-12 mb-14 text-center relative overflow-hidden shadow-xl">
          
          <div className="w-16 h-16 rounded-2xl bg-[#E8E1D2] text-[#1A3826] border border-[#D5C9B4] flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Award className="w-9 h-9 text-[#1A3826]" />
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#14261B] mb-3">
            100% Zufriedenheit · 14 Tage Geld-zurück-Garantie
          </h3>

          <p className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6">
            Testen Sie den 30-seitigen Leitfaden in aller Ruhe. Sollten Sie innerhalb von 14 Tagen feststellen, dass der Inhalt nicht Ihren Erwartungen entspricht, genügt eine kurze Nachricht und Sie erhalten den vollen Kaufbetrag von 27,21 € erstattet. Ohne Wenn und Aber.
          </p>

          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1A3826] bg-[#E8E1D2] border border-[#D5C9B4] px-4 py-2 rounded-full shadow-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-800" />
            <span>Kauf komplett ohne Risiko über den Hotmart-Käuferschutz</span>
          </div>
        </div>

        {/* 3 Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex gap-4 items-start luxury-card p-5 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-[#E8E1D2] border border-[#D5C9B4] flex items-center justify-center text-[#1A3826] shrink-0">
              <MailCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#14261B] mb-1">
                Sofortige E-Mail-Zustellung
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Keine Wartezeit auf die Post. Direkt nach der Bestätigung der Zahlung erhalten Sie den Download-Link in Ihr E-Mail-Postfach.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start luxury-card p-5 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-[#E8E1D2] border border-[#D5C9B4] flex items-center justify-center text-[#1A3826] shrink-0">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#14261B] mb-1">
                Auf jedem Gerät lesbar
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Das PDF ist optimiert für Smartphones (iPhone & Android), Tablets (iPad), PCs, Macs oder kann nach Wunsch ausgedruckt werden.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start luxury-card p-5 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-[#E8E1D2] border border-[#D5C9B4] flex items-center justify-center text-[#1A3826] shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#14261B] mb-1">
                Sichere Bezahlung (Hotmart)
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                256-Bit SSL-verschlüsselte Bezahlung. Sie können bequem und sicher per PayPal, Kreditkarte, Klarna oder Sofort bezahlen.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
