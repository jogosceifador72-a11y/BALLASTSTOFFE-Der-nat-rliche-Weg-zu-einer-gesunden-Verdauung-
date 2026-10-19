import React, { useState, useEffect } from 'react';
import { CheckCircle2, X, Download } from 'lucide-react';
import { PurchaseNotificationItem } from '../types';

const NOTIFICATIONS: PurchaseNotificationItem[] = [
  { id: '1', timeAgo: 'Vor 3 Minuten', city: 'München', verified: true },
  { id: '2', timeAgo: 'Vor 7 Minuten', city: 'Berlin', verified: true },
  { id: '3', timeAgo: 'Vor 12 Minuten', city: 'Wien', verified: true },
  { id: '4', timeAgo: 'Vor 16 Minuten', city: 'Hamburg', verified: true },
  { id: '5', timeAgo: 'Vor 22 Minuten', city: 'Zürich', verified: true },
  { id: '6', timeAgo: 'Vor 29 Minuten', city: 'Köln', verified: true },
  { id: '7', timeAgo: 'Vor 35 Minuten', city: 'Frankfurt am Main', verified: true },
  { id: '8', timeAgo: 'Vor 42 Minuten', city: 'Stuttgart', verified: true },
];

export const PurchaseNotifications: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Show initial notification after 3.5 seconds
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 3500);

    // Interval to cycle through notifications
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % NOTIFICATIONS.length);
        setVisible(true);
      }, 1200); // 1.2s delay between transitions
    }, 9000); // changes every 9s

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed) return null;

  const current = NOTIFICATIONS[currentIndex];

  return (
    <div
      className={`fixed bottom-20 sm:bottom-6 left-4 sm:left-6 z-50 max-w-xs sm:max-w-sm transition-all duration-500 ease-out ${
        visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      }`}
    >
      <div className="luxury-card shadow-2xl rounded-2xl p-3.5 sm:p-4 text-stone-800 flex items-start gap-3 relative border border-[#D5C9B4]">
        
        {/* Verified Icon */}
        <div className="w-9 h-9 rounded-xl bg-[#E8E1D2] text-[#1A3826] border border-[#D5C9B4] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-800" />
        </div>

        {/* Text Details (No personal names, strictly verified purchase confirmation) */}
        <div className="flex-1 pr-4">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-xs font-bold text-[#14261B] tracking-tight">
              Kauf bestätigt
            </span>
            <span className="inline-block w-1 h-1 rounded-full bg-emerald-700"></span>
            <span className="text-[11px] text-emerald-900 font-medium">
              Verifizierte Bestellung · 27,21 €
            </span>
          </div>

          <p className="text-xs text-stone-800 font-semibold line-clamp-1">
            BALLASTSTOFFE · 30-Seiten PDF
          </p>

          <div className="flex items-center gap-2 text-[11px] text-stone-600 mt-1 font-sans">
            <span className="font-medium text-stone-700">{current.city}</span>
            <span aria-hidden="true">·</span>
            <span>{current.timeAgo}</span>
          </div>
        </div>

        {/* Close / Dismiss Button */}
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="text-stone-400 hover:text-stone-700 p-1 rounded-md transition-colors"
          aria-label="Benachrichtigung schließen"
        >
          <X className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
};
