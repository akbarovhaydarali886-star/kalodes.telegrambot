import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Droplets, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

export default function Navbar({ onOpenOrderModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Главная', href: '#hero' },
    { label: 'О нас', href: '#about' },
    { label: 'Услуги', href: '#services' },
    { label: 'Калькулятор', href: '#calculator' },
    { label: 'Объекты', href: '#portfolio' },
    { label: 'Контакты', href: '#contacts' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-stone-200 py-3'
          : 'bg-gradient-to-b from-stone-100/95 via-[#faf7f2]/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-md shadow-amber-500/25 group-hover:scale-105 transition-transform">
              <Droplets className="w-6 h-6 text-stone-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl text-stone-900 tracking-tight">
                  QUDUQ <span className="text-amber-600">MASTER</span>
                </span>
              </div>
              <p className="text-xs text-stone-600 font-medium">Мастер: Акмаль</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-semibold text-stone-700 hover:text-amber-700 rounded-lg transition-colors hover:bg-stone-100/80"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA & Phone */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${CONTACT_INFO.mainPhoneRaw}`}
              className="flex items-center gap-2 text-sm font-semibold text-stone-800 bg-white hover:bg-stone-100 border border-stone-200 px-3.5 py-2 rounded-xl transition-all shadow-sm group"
            >
              <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>{CONTACT_INFO.mainPhone}</span>
            </a>

            <button
              onClick={() => onOpenOrderModal ? onOpenOrderModal() : document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold text-sm rounded-xl shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <span>Оставить заявку</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Phone & Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${CONTACT_INFO.mainPhoneRaw}`}
              className="p-2.5 rounded-xl bg-amber-500 text-stone-950 shadow-md shadow-amber-500/25 active:scale-95 transition-transform"
              title="Позвонить"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white text-stone-800 border border-stone-200 shadow-sm active:scale-95 transition-transform"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-stone-200 px-5 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-semibold text-stone-800 hover:text-amber-700 hover:bg-stone-100 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-stone-200 flex flex-col gap-2.5 mt-2">
              <a
                href={`tel:${CONTACT_INFO.mainPhoneRaw}`}
                className="flex items-center justify-center gap-2 py-3 bg-stone-100 text-stone-900 font-semibold text-sm rounded-xl border border-stone-200"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span>{CONTACT_INFO.mainPhone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenOrderModal) onOpenOrderModal();
                  else document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-bold text-sm rounded-xl shadow-md shadow-amber-500/25"
              >
                <span>Ariza qoldirish</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
