/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MouseEvent } from 'react';
import { Phone, MapPin, Instagram, Wrench, Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
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
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-24 lg:pb-12 z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 items-start">
          
          {/* Column 1: Brand & Desc (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-amber-500 text-slate-950 p-2 rounded-lg font-bold">
                <Wrench className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-base font-extrabold tracking-wider text-white uppercase">
                  EROL TEKNİK
                </span>
                <span className="block text-[11px] font-semibold text-slate-400 tracking-wide">
                  Beyaz Eşya & Kombi Servisi
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-medium">
              Kombi ve beyaz eşya arızalarında güvenilir, hızlı ve çözüm odaklı teknik servis. Ömer Usta güvencesi ile bütçe dostu onarım ve %100 memnuniyet garantisi.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="flex items-center gap-1.5 text-xs text-slate-500 font-bold uppercase">
                <Shield className="h-4 w-4 text-emerald-500" />
                <span>Garantili Hizmet</span>
              </span>
              <span className="text-slate-800">|</span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500 font-bold uppercase">
                <span>Esenyurt Esnafı</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest border-l-2 border-amber-500 pl-2.5">
              Hızlı Erişim
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm font-semibold">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-slate-400 hover:text-amber-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Instagram (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest border-l-2 border-amber-500 pl-2.5">
              İletişim Bilgileri
            </h4>
            
            <div className="space-y-3 text-sm">
              <a href="tel:+905346920123" className="flex items-start gap-2.5 group">
                <Phone className="h-4.5 w-4.5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">TELEFON NUMARASI</p>
                  <p className="text-white font-extrabold group-hover:text-amber-400 transition-colors">0534 692 01 23</p>
                </div>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">SERVİS ATÖLYESİ</p>
                  <p className="text-slate-300 font-semibold leading-relaxed">
                    İstiklal, Platin Sk. No:32-34<br />34500 Esenyurt / İstanbul
                  </p>
                </div>
              </div>

              <a
                href="https://www.instagram.com/erol.teknik"
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center gap-2.5 group pt-1.5"
              >
                <div className="bg-gradient-to-tr from-pink-500 to-amber-500 text-white p-1.5 rounded-lg">
                  <Instagram className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">INSTAGRAM'DA TAKİP ET</p>
                  <p className="text-slate-300 font-extrabold group-hover:text-amber-400 transition-colors">@erol.teknik</p>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left font-medium">
            © {currentYear} Erol Teknik Beyaz Eşya ve Kombi Servisi. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-4 text-xs text-slate-600 font-bold">
            <span>Ömer Usta Güvencesi</span>
            <span>•</span>
            <span>Profesyonel Teknik Servis</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
