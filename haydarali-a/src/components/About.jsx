import React from 'react';
import { ShieldCheck, Compass, Award, CheckCircle, Wrench, Clock, Users, HeartHandshake } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

export default function About() {
  const advantages = [
    {
      icon: Compass,
      title: "Точный поиск воды",
      desc: "Работаем не вслепую, а с использованием глубоких геологических знаний и современных методов для точного нахождения чистой водоносной жилы."
    },
    {
      icon: ShieldCheck,
      title: "ЖБ Кольца ГОСТ",
      desc: "Используем только армированные кольца марки М300, изготовленные методом вибропрессования. Они не портят вкус воды и служат десятки лет."
    },
    {
      icon: HeartHandshake,
      title: "Прозрачные цены",
      desc: "Точная смета составляется до начала работ. Никаких скрытых платежей, непредвиденных наценок или переплат в процессе копки."
    },
    {
      icon: Award,
      title: "Официальная гарантия",
      desc: "На все выполненные работы по копке, углублению и монтажу колодцев предоставляется официальная гарантия качества."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#f4f5f7] text-stone-900 relative overflow-hidden">
      {/* Background soft warm glow */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-stone-300/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4ebd9] border border-[#dfcaa7] text-[#784e1b] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            О нас
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-stone-900">
            Команда мастеров <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-600">
              с опытом более 10 лет
            </span>
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            "Quduq Master" — это настоящие профессионалы своего дела под руководством мастера Акмаля. Мы считаем своей почетной обязанностью обеспечить каждый дом и хозяйство чистой, целебной и ледяной водой.
          </p>
        </div>

        {/* Content Story Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Interactive Image Story with Floating Highlights */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-stone-200 shadow-xl bg-white group">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80"
                alt="Процесс работы и команда"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
              
              {/* Clean Top Right Trust Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md border border-stone-200 rounded-2xl py-2 px-3.5 shadow-md flex items-center gap-2.5 z-10">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
                <div>
                  <p className="text-[10px] text-stone-500 font-medium">Честный труд</p>
                  <p className="text-xs font-bold text-stone-900">500+ довольных клиентов</p>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200 text-stone-900 flex items-center gap-4 shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 font-bold">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-stone-900">Мастер Акмаль:</h4>
                    <p className="text-xs text-stone-600">
                      "Каждый колодец — это радость семьи на десятки лет. Мы делаем свою работу с такой же душой, как для своего собственного дома."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Detailed Explanation */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black text-stone-900">
              Почему доверяют именно нам?
            </h3>
            
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Копка колодца — это не просто вырыть глубокую яму. Это искусство знания характеристик подземных слоев, правильной оценки объема и качества воды, а главное — идеальной герметизации стыков бетонных колец.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Наша команда предлагает лучшие решения для частных домов, дач, фермерских хозяйств и производственных объектов. Мы работаем аккуратно и чисто, не нанося ущерба ландшафту вашего участка.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-stone-200 shadow-xs">
                <Wrench className="w-5 h-5 text-amber-700" />
                <span className="text-xs sm:text-sm font-semibold text-stone-800">Современное и компактное оборудование</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-stone-200 shadow-xs">
                <Clock className="w-5 h-5 text-amber-700" />
                <span className="text-xs sm:text-sm font-semibold text-stone-800">Быстро и точно в срок</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Advantage Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white hover:bg-white border border-stone-200/90 hover:border-amber-400 shadow-xs hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 group-hover:bg-amber-500 text-amber-800 group-hover:text-stone-950 flex items-center justify-center transition-colors mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">
                  {adv.title}
                </h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
