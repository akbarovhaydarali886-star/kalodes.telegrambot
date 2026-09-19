import React from 'react';
import { WORK_STEPS } from '../data/mockData';
import { PhoneCall, Search, HardHat, Droplet, ArrowRight } from 'lucide-react';

const icons = [PhoneCall, Search, HardHat, Droplet];

export default function WorkSteps() {
  return (
    <section className="py-20 lg:py-24 bg-white text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4ebd9] border border-[#dfcaa7] text-[#784e1b] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            Процесс работы
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-stone-900">
            Как мы строим колодец <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-600">
              Понятный порядок действий
            </span>
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg">
            От вашей заявки до чистой воды из колодца — всего 4 простых и надежных шага.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORK_STEPS.map((step, idx) => {
            const Icon = icons[idx] || HardHat;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-3xl bg-[#fafaf9] border border-stone-200 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-lg group"
              >
                {/* Step Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-stone-300 group-hover:text-amber-600 transition-colors font-mono">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 group-hover:bg-amber-500 group-hover:text-stone-950 flex items-center justify-center transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Progress bar line indicator */}
                <div className="mt-6 pt-4 border-t border-stone-200">
                  <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-amber-400 to-amber-600 h-full rounded-full transition-all duration-500"
                      style={{ width: `${(idx + 1) * 25}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
