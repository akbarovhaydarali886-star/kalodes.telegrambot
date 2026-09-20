import React from 'react';
import { Phone, ShieldCheck, CheckCircle2, Droplets, Sparkles, ArrowRight, Clock, Award } from 'lucide-react';
import { CONTACT_INFO, STATS } from '../data/mockData';

export default function Hero({ onOpenOrderModal }) {
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#f8f4ed] via-[#fbf9f6] to-white text-stone-900">
      {/* Background visual gradients and warm wheat lighting effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,119,6,0.12),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-stone-200/50 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4ebd9] border border-[#dfcaa7] text-[#784e1b] text-xs sm:text-sm font-bold mb-6 backdrop-blur-md shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <Droplets className="w-4 h-4 text-amber-700" />
              <span>Профессиональная копка колодцев</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-stone-900">
              Колодцы под Ключ с <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-[#b8860b]">
                Чистой Питьевой Водой
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-stone-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Мастер Акмаль и его опытная бригада обеспечат ваш дом и участок чистой, ледяной питьевой водой. Работаем качественно и по договору!
            </p>

            {/* Key Trust Highlights */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-stone-700 font-semibold">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>ЖБ кольца по ГОСТу</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Точный поиск водоносной жилы</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenOrderModal || scrollToContact}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold text-base sm:text-lg shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Оставить заявку</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={`tel:${CONTACT_INFO.mainPhoneRaw}`}
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white hover:bg-stone-100 text-stone-900 font-bold text-base sm:text-lg border border-stone-300 shadow-md shadow-stone-200/50 transition-all hover:scale-[1.02] active:scale-95"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800">
                  <Phone className="w-4 h-4" />
                </div>
                <span>Позвонить</span>
              </a>
            </div>

          </div>

          {/* Right Visual Card with Badge & Master Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl bg-white border border-stone-200/90 p-6 shadow-xl backdrop-blur-xl">
              
              {/* Image Preview */}
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-stone-200 shadow-inner group">
                <img
                  src="/images/hero.jpg"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80";
                  }}
                  alt="Процесс копки колодца"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">Главный мастер</span>
                    <h3 className="text-lg font-bold">Мастер Акмаль</h3>
                    <p className="text-xs text-stone-200">Профессиональные бригады</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center shadow-lg font-black">
                    10+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Stats Block */}
        <div className="mt-16 sm:mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm border border-stone-200/60 rounded-2xl p-4 sm:p-5 text-center shadow-xs hover:shadow-md transition-shadow hover:border-amber-300"
              >
                <div className="text-2xl sm:text-3xl font-black text-stone-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
                  {stat.label}
                </div>
                <div className="hidden sm:block text-[11px] text-stone-500 leading-relaxed">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
