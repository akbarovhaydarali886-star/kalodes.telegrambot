import React from 'react';
import { 
  Phone, 
  Send, 
  MessageCircle, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Droplets,
  ExternalLink
} from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function ContactAndLead() {
  return (
    <section id="contacts" className="py-20 lg:py-28 bg-[#f8f5ee] text-stone-900 relative border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4ebd9] border border-[#dfcaa7] text-[#784e1b] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            Контакты и Заказ
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-stone-900">
            Получите бесплатную <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-600">
              консультацию по колодцам
            </span>
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg">
            Оставьте заявку или свяжитесь с мастером напрямую через удобный для вас мессенджер.
          </p>
        </div>

        {/* 4 Interactive Contact Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Asosiy Telefon */}
          <a
            href={`tel:${CONTACT_INFO.mainPhoneRaw}`}
            className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all group flex flex-col justify-between shadow-xs"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                Основной
              </span>
            </div>
            <div>
              <p className="text-xs text-stone-500">Основной номер телефона</p>
              <p className="text-base sm:text-lg font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                {CONTACT_INFO.mainPhone}
              </p>
            </div>
          </a>

          {/* Qo'shimcha Telefon */}
          <a
            href={`tel:${CONTACT_INFO.secondPhoneRaw}`}
            className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all group flex flex-col justify-between shadow-xs"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-600 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded-full">
                2-й номер
              </span>
            </div>
            <div>
              <p className="text-xs text-stone-500">Дополнительный номер</p>
              <p className="text-base sm:text-lg font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                {CONTACT_INFO.secondPhone}
              </p>
            </div>
          </a>

          {/* Telegram / WhatsApp */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href={CONTACT_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all group flex flex-col justify-between shadow-xs"
            >
              <div className="w-9 h-9 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                <Send className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-stone-500">Telegram</p>
                <p className="text-xs font-bold text-stone-900 truncate">Чат с мастером</p>
              </div>
            </a>

            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-500 hover:shadow-md transition-all group flex flex-col justify-between shadow-xs"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-stone-500">WhatsApp</p>
                <p className="text-xs font-bold text-stone-900 truncate">Написать</p>
              </div>
            </a>
          </div>

          {/* Instagram */}
          <a
            href={CONTACT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all group flex flex-col justify-between shadow-xs"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-600 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded-full">
                Видео/Фото
              </span>
            </div>
            <div>
              <p className="text-xs text-stone-500">Наш Instagram</p>
              <p className="text-base font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                {CONTACT_INFO.instagramHandle}
              </p>
            </div>
          </a>

        </div>

        {/* Lead Form & Working Hours Block */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Working Info Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-6">
              <h3 className="text-xl font-black text-stone-900 flex items-center gap-2">
                <Droplets className="w-5 h-5 text-amber-700" />
                <span>Время работы и география</span>
              </h3>

              <div className="space-y-4 text-sm text-stone-600">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block">Время работы:</span>
                    <span>{CONTACT_INFO.workingHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block">Территория обслуживания:</span>
                    <span>Москва, Московская область и ближайшие регионы по договоренности.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block">Бесплатная геологическая оценка:</span>
                    <span>Укажите свой район, и мы заранее сообщим примерный уровень воды и необходимый материал.</span>
                  </div>
                </div>
              </div>

              {/* Fast Direct Telegram CTA */}
              <div className="p-4 rounded-2xl bg-[#faf6f0] border border-[#ecdcc8] flex items-center justify-between">
                <div>
                  <p className="text-xs text-amber-900 font-bold">Не любите ждать?</p>
                  <p className="text-xs text-stone-600">Получите ответ в Telegram за 5 минут</p>
                </div>
                <a
                  href={CONTACT_INFO.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold flex items-center gap-1 transition-colors"
                >
                  <span>Написать</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Direct Telegram Lead Block */}
          <div className="lg:col-span-7 bg-white border border-stone-200/90 rounded-3xl p-8 sm:p-12 shadow-lg relative flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 bg-[#e5f5ff] rounded-full flex items-center justify-center mb-6 shadow-inner">
              <Send className="w-12 h-12 text-[#2AABEE]" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black text-stone-900 mb-4">
              Оставить заявку в Telegram
            </h3>
            <p className="text-stone-600 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
              Свяжитесь с нами напрямую через Telegram. Получите быстрые ответы на вопросы по копке колодцев, чистке и другим услугам.
            </p>

            <a
              href={CONTACT_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 rounded-xl bg-[#2AABEE] hover:bg-[#229ED9] text-white font-bold text-lg shadow-lg shadow-[#2AABEE]/25 transition-all transform hover:-translate-y-1 active:translate-y-0"
            >
              <Send className="w-5 h-5" />
              <span>Перейти в Telegram-бот</span>
            </a>
            
            <p className="mt-6 text-xs text-stone-500 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Наши мастера всегда онлайн
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
