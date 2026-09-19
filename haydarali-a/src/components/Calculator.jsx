import React, { useState, useId } from 'react';
import { Calculator as CalcIcon, Check, ArrowRight, Info, Sparkles, Layers, Sliders, Shield } from 'lucide-react';
import { SERVICES_LIST } from '../data/mockData';

export default function Calculator({ selectedServiceId, onOrderWithCalc }) {
  const [depth, setDepth] = useState(25);
  const [serviceType, setServiceType] = useState(selectedServiceId || 'drinking');
  const [soilType, setSoilType] = useState('normal'); 
  const [includePump, setIncludePump] = useState(false);
  const sliderId = useId();

  const soilMultipliers = {
    normal: { name: 'Обычный грунт / суглинок', mult: 1.0, desc: "Стандартная скорость копки" },
    sandy: { name: 'Песок / плывун', mult: 1.15, desc: "Требует специального укрепления" },
    rocky: { name: 'Каменистый грунт / известняк', mult: 1.35, desc: "Использование тяжелой техники и ломов" }
  };

  const currentService = SERVICES_LIST.find((s) => s.id === serviceType) || SERVICES_LIST[0];

  let baseCost = 0;
  if (currentService.unit.includes("кольцо (0.8м)")) {
    const ringsNeeded = Math.ceil(depth / 0.8);
    baseCost = ringsNeeded * currentService.basePricePerMeter;
  } else {
    baseCost = depth * currentService.basePricePerMeter;
  }

  const soilCost = baseCost * (soilMultipliers[soilType].mult - 1);
  const pumpCost = includePump ? 15000 : 0;
  const totalEstimate = Math.round(baseCost + soilCost + pumpCost);

  const getDepthCategory = (d) => {
    if (d < 15) return { text: "Поверхностный слой (техническая и поливочная вода)", color: "text-amber-800 font-bold" };
    if (d <= 40) return { text: "Средний слой (Самая чистая питьевая вода)", color: "text-emerald-700 font-bold" };
    return { text: "Глубокий артезианский слой (Ледяная, минерализованная вода)", color: "text-amber-900 font-bold" };
  };

  const handleOrder = () => {
    const calcData = {
      serviceTitle: currentService.title,
      depth: `${depth} метров`,
      soilName: soilMultipliers[soilType].name,
      includePump: includePump ? "Да (Автоматический погружной насос)" : "Нет",
      estimatedPrice: `${totalEstimate.toLocaleString('ru-RU')} ₽ / СУМ`,
    };

    if (onOrderWithCalc) {
      onOrderWithCalc(calcData);
    } else {
      document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-[#f9f5ed] text-stone-900 relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-stone-300/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4ebd9] border border-[#dfcaa7] text-[#784e1b] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <CalcIcon className="w-4 h-4 text-amber-700" />
            <span>Калькулятор стоимости</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-stone-900">
            Рассчитайте цену копки <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-600">
              буквально за пару кликов
            </span>
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg">
            Выберите параметры вашей земли и получите ориентировочную смету расходов.
          </p>
        </div>

        <div className="mt-14 max-w-5xl mx-auto bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-8">
              
              <div>
                <label className="block text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-700" />
                  <span>1. Выберите тип услуги:</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES_LIST.map((srv) => (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setServiceType(srv.id)}
                      className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                        serviceType === srv.id
                          ? 'bg-[#f5ead7] border-amber-500 shadow-xs'
                          : 'bg-stone-50 border-stone-200 hover:border-stone-300 hover:bg-stone-100'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className={`font-bold text-sm ${serviceType === srv.id ? 'text-stone-950' : 'text-stone-700'}`}>{srv.title}</span>
                        {serviceType === srv.id && (
                          <span className="w-4 h-4 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center text-[10px] font-black">
                            ✓
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-stone-500 font-normal">
                        1 м ~ {srv.basePricePerMeter.toLocaleString('ru-RU')} ₽ / СУМ
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor={sliderId} className="text-sm font-bold text-stone-900 flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-amber-700" />
                    <span>2. Глубина колодца:</span>
                  </label>
                  <div className="px-4 py-1.5 rounded-xl bg-amber-100 border border-amber-300 text-amber-900 font-black text-lg">
                    {depth} <span className="text-xs font-semibold">метров</span>
                  </div>
                </div>

                <input
                  id={sliderId}
                  type="range"
                  min="5"
                  max="100"
                  step="1"
                  value={depth}
                  onChange={(e) => setDepth(Number(e.target.value))}
                  className="w-full h-3 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-500 hover:accent-amber-600 transition-all"
                />
                
                <div className="mt-3 flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <Info className="w-5 h-5 text-stone-400 shrink-0" />
                  <p className="text-xs text-stone-600 leading-relaxed">
                    <span className={getDepthCategory(depth).color}>{getDepthCategory(depth).text}</span>
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-amber-700" />
                  <span>3. Тип грунта:</span>
                </label>
                <div className="space-y-2">
                  {Object.entries(soilMultipliers).map(([key, val]) => (
                    <label
                      key={key}
                      className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                        soilType === key
                          ? 'bg-amber-50 border-amber-400 shadow-xs'
                          : 'bg-white border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${soilType === key ? 'border-amber-500' : 'border-stone-300'}`}>
                          {soilType === key && <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />}
                        </div>
                        <div>
                          <span className={`block text-sm font-bold ${soilType === key ? 'text-stone-900' : 'text-stone-700'}`}>{val.name}</span>
                          <span className="text-[11px] text-stone-500">{val.desc}</span>
                        </div>
                      </div>
                      {val.mult > 1 && (
                        <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded-md">+{Math.round((val.mult - 1) * 100)}% к цене</span>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-stone-200 hover:border-amber-300 transition-colors cursor-pointer" onClick={() => setIncludePump(!includePump)}>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Добавить погружной насос?</h4>
                  <p className="text-[11px] text-stone-500 mt-1">Автоматический насос с установкой</p>
                </div>
                <div className={`w-12 h-6 rounded-full transition-colors flex items-center px-1 ${includePump ? 'bg-amber-500' : 'bg-stone-300'}`}>
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform ${includePump ? 'translate-x-6' : 'translate-x-0'}`} />
                </div>
              </div>

            </div>
            
            {/* Right Results Panel */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-28 bg-[#fdfaf5] border-2 border-amber-200 rounded-3xl p-6 sm:p-8 flex flex-col h-full shadow-lg">
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-stone-900 mb-1">Ваша Смета</h3>
                  <p className="text-xs text-stone-500">Предварительный расчет стоимости</p>
                </div>

                <div className="space-y-4 flex-grow">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-stone-600">{currentService.title} ({depth} м)</span>
                    <span className="font-bold text-stone-900">{baseCost.toLocaleString('ru-RU')}</span>
                  </div>
                  
                  {soilCost > 0 && (
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-stone-600">Сложный грунт ({soilMultipliers[soilType].name})</span>
                      <span className="font-bold text-rose-600">+{soilCost.toLocaleString('ru-RU')}</span>
                    </div>
                  )}

                  {includePump && (
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-stone-600">Насос и установка</span>
                      <span className="font-bold text-stone-900">+{pumpCost.toLocaleString('ru-RU')}</span>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-amber-200">
                  <p className="text-xs text-stone-500 mb-1 font-bold uppercase tracking-wider">Итоговая сумма:</p>
                  <div className="text-3xl sm:text-4xl font-black text-amber-700 tracking-tight">
                    ~ {totalEstimate.toLocaleString('ru-RU')} <span className="text-lg">₽ / СУМ</span>
                  </div>
                  
                  <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-100 flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-stone-600 leading-tight">
                      Это ориентировочная стоимость. Окончательная смета утверждается после бесплатного выезда мастера.
                    </p>
                  </div>
                  
                  <button
                    onClick={handleOrder}
                    className="mt-6 w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Заказать по этой цене</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
