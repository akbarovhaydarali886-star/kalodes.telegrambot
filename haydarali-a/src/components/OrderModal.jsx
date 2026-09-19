import React, { useEffect } from 'react';
import { X, Send, Droplets } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

export default function OrderModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-sm bg-white border border-stone-200 rounded-3xl shadow-2xl overflow-hidden z-10 p-6 sm:p-8 animate-in zoom-in-95 duration-200 text-stone-900 flex flex-col items-center text-center">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-xl bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-20 h-20 bg-[#e5f5ff] rounded-full flex items-center justify-center mb-5 shadow-inner mt-2">
          <Send className="w-10 h-10 text-[#2AABEE]" />
        </div>
        
        <h3 className="text-xl sm:text-2xl font-black text-stone-900 mb-3">
          Связаться в Telegram
        </h3>
        
        <p className="text-stone-600 text-sm mb-6 leading-relaxed">
          Свяжитесь с мастером Акмалем напрямую через Telegram. Получите быстрые ответы на все ваши вопросы.
        </p>

        <a
          href={CONTACT_INFO.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-[#2AABEE] hover:bg-[#229ED9] text-white font-bold shadow-md shadow-[#2AABEE]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <Send className="w-4 h-4" />
          <span>Перейти в Telegram-бот</span>
        </a>
        
        <p className="mt-4 text-xs text-stone-500">
          Мастер Акмаль: {CONTACT_INFO.mainPhone}
        </p>

      </div>
    </div>
  );
}
