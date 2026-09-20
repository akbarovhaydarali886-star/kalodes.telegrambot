import React, { useEffect } from 'react';
import { X, MapPin, Layers, Calendar, Clock, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

export default function PortfolioModal({ item, onClose, onOrderThisProject }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Overlay Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-3xl bg-white border border-stone-200 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Modal Header Bar with Close Button */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-stone-200 bg-white/95 sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#f4ebd9] text-[#784e1b] border border-[#dfcaa7]">
              {item.categoryLabel}
            </span>
            <span className="text-xs text-stone-500 hidden sm:inline font-mono">
              Объект ID: #{item.id}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200 transition-colors cursor-pointer"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Main Image */}
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
            <img
              src={item.imageUrl}
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80";
              }}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                {item.title}
              </h3>
            </div>
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                <MapPin className="w-3.5 h-3.5 text-amber-700" />
                <span>Локация:</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-stone-900 truncate">
                {item.location}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Срок:</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-stone-900">
                {item.duration}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                <Calendar className="w-3.5 h-3.5 text-amber-700" />
                <span>Завершено:</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-stone-900">
                {item.date}
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200">
            <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Детали выполненных работ:</span>
            </h4>
            <p className="text-stone-700 text-sm leading-relaxed">
              {item.details}
            </p>
          </div>

          {/* Client Feedback Quote */}
          {item.clientFeedback && (
            <div className="p-4 sm:p-5 rounded-2xl bg-[#fcf8f0] border border-amber-200">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
                    Отзыв заказчика:
                  </h5>
                  <p className="text-sm italic text-stone-800 leading-relaxed">
                    "{item.clientFeedback}"
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 border-t border-stone-200 bg-stone-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-stone-600 text-center sm:text-left">
            Хотите такой же надежный колодец у себя дома?
          </div>
          <button
            onClick={() => {
              onClose();
              if (onOrderThisProject) onOrderThisProject(item);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold text-sm shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>Заказать такой колодец</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
