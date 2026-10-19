import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';

const CHECKOUT_URL = 'https://pay.hotmart.com/X108024310R';

interface SocialContact {
  name: string;
  label: string;
  url: string;
  icon: (props: { className?: string }) => React.ReactElement;
  bgColorHover: string;
}

const SOCIAL_CONTACTS: SocialContact[] = [
  {
    name: 'Instagram',
    label: '@karinzeit',
    url: 'https://www.instagram.com/karinzeit?stkn=NmZiY2VzaW1leXlo',
    bgColorHover: 'hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45] hover:text-white hover:border-transparent',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    label: 'Profil',
    url: 'https://www.facebook.com/share/1c8J76URqe/',
    bgColorHover: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    label: 'Seite',
    url: 'https://www.facebook.com/share/1DzZyfFWRL/ ',
    bgColorHover: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    label: '@karinzeit',
    url: 'https://www.tiktok.com/@karinzeit',
    bgColorHover: 'hover:bg-black hover:text-white hover:border-black',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    label: '@karinzeit',
    url: 'https://youtube.com/@karinzeit?si=prrRmxwtRBUQ0sit',
    bgColorHover: 'hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Threads',
    label: '@karinzeit',
    url: 'https://www.threads.com/@karinzeit',
    bgColorHover: 'hover:bg-stone-900 hover:text-white hover:border-stone-900',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.186 24C5.503 24 0 18.598 0 12.034 0 5.47 5.503.067 12.186.067c6.683 0 12.186 5.403 12.186 11.967 0 .809-.074 1.62-.218 2.417h-4.37c.08-.432.12-.873.12-1.317 0-4.225-3.46-7.658-7.718-7.658-4.258 0-7.718 3.433-7.718 7.658 0 4.226 3.46 7.658 7.718 7.658 2.378 0 4.502-1.077 5.922-2.775l3.238 2.428C19.167 22.84 15.877 24 12.186 24zm2.148-11.455c-.215-.09-.452-.14-.702-.14-.99 0-1.794.804-1.794 1.794 0 .99.804 1.794 1.794 1.794.707 0 1.317-.412 1.606-1.008h2.09c-.452 1.748-2.037 3.037-3.928 3.037-2.25 0-4.076-1.826-4.076-4.076 0-2.25 1.826-4.076 4.076-4.076 1.794 0 3.324 1.164 3.865 2.775h-2.131c-.183-.347-.533-.586-.938-.586-.605 0-1.096.491-1.096 1.096 0 .17.039.331.109.474l.219-.09z" />
      </svg>
    ),
  },
  {
    name: 'Kwai',
    label: '@kariningrid673',
    url: 'https://k.kwai.com/u/@kariningrid673/NxhDbbCg',
    bgColorHover: 'hover:bg-[#FF5000] hover:text-white hover:border-[#FF5000]',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5v-7l6 3.5-6 3.5z" />
      </svg>
    ),
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F5F1E8] border-t border-[#DED6C7] pt-14 pb-12 text-stone-700 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Part: Brand and Quick Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#DED6C7]">
          <div className="text-center md:text-left">
            <span className="font-serif text-xl font-bold tracking-wider text-[#162C1E] block mb-1">
              BALLASTSTOFFE
            </span>
            <p className="text-stone-600 max-w-sm">
              Der 30-seitige Leitfaden für eine natürliche Verdauung durch einfache Alltagsgewohnheiten.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-stone-700 font-medium">
            <a href="#was-ist-das" className="hover:text-stone-900 transition-colors">
              Über den Leitfaden
            </a>
            <a href="#was-es-loest" className="hover:text-stone-900 transition-colors">
              Vorteile
            </a>
            <a href="#ballaststoff-rechner" className="hover:text-stone-900 transition-colors">
              30g-Simulator
            </a>
            <a href="#inhalte" className="hover:text-stone-900 transition-colors">
              Buchinhalte
            </a>
            <a href="#faq" className="hover:text-stone-900 transition-colors">
              Fragen & Antworten
            </a>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#1A3826] hover:underline"
            >
              Hotmart-Checkout (27,21 €)
            </a>
          </div>
        </div>

        {/* Contacts & Social Media Buttons Section */}
        <div className="py-10 border-b border-stone-200/80">
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold block mb-1">
              Kontakt & Soziale Netzwerke
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#14261B]">
              Folgen Sie Karin Ingrid & bleiben Sie in Verbindung
            </h4>
            <p className="text-stone-500 text-xs mt-1">
              Tägliche Inspiration, Tipps zu Ernährung und Verdauung sowie direkter Kontakt:
            </p>
          </div>

          {/* Social Media Buttons Grid */}
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {SOCIAL_CONTACTS.map((contact, i) => {
              const IconComponent = contact.icon;
              return (
                <a
                  key={i}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-stone-200/90 text-stone-700 shadow-sm transition-all duration-200 active:scale-95 ${contact.bgColorHover}`}
                  title={`${contact.name} - ${contact.label}`}
                >
                  <IconComponent className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />
                  <div className="flex items-center gap-1.5 text-xs font-semibold">
                    <span>{contact.name}</span>
                    <span className="font-normal text-[11px] opacity-75">
                      {contact.label}
                    </span>
                  </div>
                  <ExternalLink className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity ml-0.5" />
                </a>
              );
            })}
          </div>

          {/* Support Email Direct Box */}
          <div className="mt-6 flex items-center justify-center">
            <a
              href="mailto:kariningrid1970@gmail.com"
              className="inline-flex items-center gap-2 text-xs font-medium text-stone-600 hover:text-[#1A3826] bg-stone-100 hover:bg-stone-200/80 px-4 py-2 rounded-lg transition-colors border border-stone-200/60"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-700" />
              <span>E-Mail-Support: <strong>kariningrid1970@gmail.com</strong></span>
            </a>
          </div>
        </div>

        {/* Legal & Hotmart disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-stone-500 text-[11px] text-center md:text-left">
          <p>
            © {new Date().getFullYear()} BALLASTSTOFFE. Alle Rechte vorbehalten. Die Zahlungsabwicklung und Bereitstellung erfolgt über Hotmart BV.
          </p>
          
          <div className="flex items-center gap-4">
            <span>Sicherer 256-Bit SSL-Schutz</span>
            <span aria-hidden="true">·</span>
            <span>14 Tage Rückgaberecht</span>
          </div>
        </div>

        {/* Health Disclaimer */}
        <div className="mt-4 text-[10px] text-stone-400 text-center md:text-left max-w-3xl leading-relaxed">
          Rechtlicher Hinweis: Die in diesem E-Book bereitgestellten Informationen dienen ausschließlich Informations- und Bildungszwecken und stellen keine medizinische Beratung, Diagnose oder Behandlung dar. Bei bestehenden Erkrankungen oder Beschwerden konsultieren Sie bitte einen Arzt oder Ernährungsberater.
        </div>
      </div>
    </footer>
  );
};

