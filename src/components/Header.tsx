/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Ana Sayfa', href: '#home' },
    { name: 'Hizmetlerimiz', href: '#services' },
    { name: 'Kombi Servisi', href: '#kombi' },
    { name: 'Beyaz Eşya Servisi', href: '#beyazesya' },
    { name: 'Neden Biz?', href: '#why-us' },
    { name: 'Yorumlar', href: '#comments' },
    { name: 'İletişim', href: '#contact' },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg py-3'
          : 'bg-slate-900/70 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center space-x-3 group">
            <div className="bg-amber-500 text-slate-950 p-2 rounded-xl font-bold shadow-md shadow-amber-500/20 group-hover:bg-amber-400 transition-colors">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <span className="block text-lg font-extrabold tracking-wider text-amber-500 uppercase group-hover:text-amber-400 transition-colors">
                EROL TEKNİK
              </span>
              <span className="block text-xs font-medium text-slate-400 tracking-wide uppercase">
                Beyaz Eşya & Kombi Servisi
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative py-2 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:+905346920123"
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5 py-2.5 rounded-full shadow-lg shadow-amber-500/20 transform hover:-translate-y-0.5 transition-all text-sm tracking-wide"
            >
              <Phone className="h-4 w-4" />
              <span>0534 692 01 23</span>
            </a>
          </div>

          {/* Mobile Hamburguer button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2 focus:outline-none"
              aria-label="Menüyü Aç/Kapat"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 animate-fadeIn">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="block px-3 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t border-slate-800 px-3 flex flex-col gap-3">
              <a
                href="tel:+905346920123"
                className="flex items-center justify-center gap-2 bg-amber-500 text-slate-950 font-black py-3 rounded-xl shadow-lg transition-colors text-base"
              >
                <Phone className="h-5 w-5" />
                <span>Hemen Ara: 0534 692 01 23</span>
              </a>
              <a
                href="https://wa.me/905346920123"
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3 rounded-xl shadow-lg transition-colors text-base"
              >
                <MessageSquare className="h-5 w-5" />
                <span>WhatsApp Servis Hattı</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
