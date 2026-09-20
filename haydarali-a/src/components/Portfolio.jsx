import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/mockData';
import { MapPin, Layers, Calendar, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import PortfolioModal from './PortfolioModal';

export default function Portfolio({ onOrderProject }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filterTabs = [
    { key: 'all', label: 'Все работы' },
    { key: 'drinking', label: 'Питьевые колодцы' },
    { key: 'cleaning', label: 'Чистка' },
    { key: 'rings', label: 'Монтаж колец' },
  ];

  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#f4f5f7] text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4ebd9] border border-[#dfcaa7] text-[#784e1b] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            Портфолио и Галерея
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-stone-900">
            Готовые объекты <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-600">
              Мастера Акмаля
            </span>
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg">
            Каждый проект — это источник чистой воды и доверие благодарных клиентов.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === tab.key
                  ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20 scale-105'
                  : 'bg-white text-stone-700 hover:text-stone-900 hover:bg-stone-50 border border-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-stone-200 rounded-3xl overflow-hidden hover:border-amber-400 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group"
            >
              {/* Card Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.imageUrl}
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80";
                  }}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-amber-800 border border-stone-200 shadow-xs">
                    {item.categoryLabel}
                  </span>
                </div>

              </div>

              {/* Card Info Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-amber-800 font-semibold mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors mb-2 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                {/* Meta details & Batafsil button */}
                <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-stone-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-amber-500 hover:text-stone-950 text-stone-800 text-xs font-bold border border-stone-200 flex items-center gap-1.5 transition-all cursor-pointer shadow-xs group/btn"
                  >
                    <span>Подробнее</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Modal display */}
        {selectedItem && (
          <PortfolioModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
            onOrderThisProject={(item) => {
              if (onOrderProject) onOrderProject(item);
              document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        )}

      </div>
    </section>
  );
}
