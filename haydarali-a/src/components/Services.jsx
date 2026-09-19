import React from 'react';
import { Droplets, Sprout, Wrench, ShieldCheck, Check, ArrowRight } from 'lucide-react';
import { SERVICES_LIST } from '../data/mockData';

const iconMap = {
  Droplets,
  Sprout,
  Wrench,
  ShieldCheck,
};

export default function Services({ onOrderService }) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4ebd9] border border-[#dfcaa7] text-[#784e1b] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            Наши услуги
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-stone-900">
            Все виды услуг по <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-600">
              копке и обслуживанию колодцев
            </span>
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg">
            Берем на себя все заботы от поиска воды до сдачи колодца под ключ.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_LIST.map((service) => {
            const Icon = iconMap[service.iconName] || Droplets;
            return (
              <div
                key={service.id}
                className="rounded-3xl bg-[#fafaf9] border border-stone-200 hover:border-amber-400 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 group-hover:bg-amber-500 group-hover:text-stone-950 flex items-center justify-center transition-all duration-300 shadow-xs">
                      <Icon className="w-7 h-7" />
                    </div>
                    {service.badge && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#f4ebd9] text-[#784e1b] border border-[#dfcaa7]">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-black text-stone-900 group-hover:text-amber-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="mt-6 pt-6 border-t border-stone-200">
                    <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">
                      Что входит в услугу:
                    </h4>
                    <ul className="space-y-2.5">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-stone-700 font-medium">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-stone-500 block">От (цена):</span>
                    <span className="text-xl sm:text-2xl font-black text-amber-700">
                      {service.basePricePerMeter.toLocaleString('ru-RU')} ₽
                    </span>
                    <span className="text-xs text-stone-500"> / {service.unit}</span>
                  </div>

                  <button
                    onClick={() => {
                      if (onOrderService) {
                        onOrderService(service.title);
                      } else {
                        document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white hover:bg-amber-500 hover:text-stone-950 text-stone-800 border border-stone-300 font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                  >
                    <span>Заказать услугу</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
