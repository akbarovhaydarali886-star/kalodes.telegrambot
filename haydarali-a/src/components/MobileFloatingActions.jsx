import React from 'react';
import { Phone, Send } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

export default function MobileFloatingActions() {
  return (
    <aside aria-label="Быстрая мобильная связь" className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-lg border-t border-stone-200 px-4 py-2.5 shadow-2xl">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${CONTACT_INFO.mainPhoneRaw}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 active:from-amber-600 active:to-amber-700 text-stone-950 font-black text-sm shadow-md shadow-amber-500/25 transition-transform active:scale-95"
        >
          <Phone className="w-4 h-4 fill-current" />
          <span>Позвонить</span>
        </a>

        {/* Telegram Button */}
        <a
          href={CONTACT_INFO.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-stone-900 active:bg-stone-800 text-white font-bold text-sm shadow-md transition-transform active:scale-95"
        >
          <Send className="w-4 h-4 text-amber-400" />
          <span>Telegram</span>
        </a>
      </div>
    </aside>
  );
}
