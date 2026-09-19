import React from 'react';
import { Droplets, Phone, Send, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 pt-16 pb-24 md:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-stone-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-md shadow-amber-500/25">
                <Droplets className="w-6 h-6 text-stone-950" />
              </div>
              <div>
                <span className="font-black text-xl text-white tracking-tight">
                  QUDUQ <span className="text-amber-400">MASTER</span>
                </span>
                <p className="text-xs text-stone-400 font-medium">Мастер: Акмаль</p>
              </div>
            </a>
            
            <p className="text-sm text-stone-400 leading-relaxed">
              Профессиональная копка, чистка, углубление колодцев и монтаж железобетонных колец. Более 10 лет опыта работы и 100% гарантия чистой воды!
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CONTACT_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-stone-800 hover:bg-amber-500 text-stone-300 hover:text-stone-950 border border-stone-700 flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-stone-800 hover:bg-emerald-500 text-stone-300 hover:text-stone-950 border border-stone-700 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-stone-800 hover:bg-pink-500 text-stone-300 hover:text-stone-950 border border-stone-700 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Навигация
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors">Главная</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">О нас</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">Наши услуги</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">Калькулятор цен</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-amber-400 transition-colors">Выполненные работы</a>
              </li>
              <li>
                <a href="#contacts" className="hover:text-amber-400 transition-colors">Контакты и Заявка</a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Виды услуг
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">Питьевые колодцы</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">Углубление колодцев</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">Очистка от ила и песка</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">Монтаж ЖБ колец</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">Монтаж септиков</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Контакты
            </h4>
            <div className="space-y-3 text-sm">
              <a href={`tel:${CONTACT_INFO.mainPhoneRaw}`} className="block hover:text-white transition-colors">
                <span className="text-xs text-stone-400 block">Основной:</span>
                <span className="font-bold text-white text-xs sm:text-sm">{CONTACT_INFO.mainPhone}</span>
              </a>
              <a href={`tel:${CONTACT_INFO.secondPhoneRaw}`} className="block hover:text-white transition-colors">
                <span className="text-xs text-stone-400 block">Дополнительный:</span>
                <span className="font-bold text-white text-xs sm:text-sm">{CONTACT_INFO.secondPhone}</span>
              </a>
              <div>
                <span className="text-xs text-stone-400 block">Instagram:</span>
                <a
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-amber-400 hover:underline text-xs"
                >
                  {CONTACT_INFO.instagramHandle}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright and to top button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Quduq Master. Все права защищены.</p>
          
          <div className="flex items-center gap-6">
            <span>Мастер: Акмаль</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-amber-400 transition-colors cursor-pointer"
            >
              <span>Наверх</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
