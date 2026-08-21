/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, MessageSquare } from 'lucide-react';

export default function QuickCTA() {
  return (
    <section className="relative py-20 bg-slate-900 overflow-hidden z-10 border-y border-slate-950">
      {/* Decorative ambient backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/[0.03] rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Eyebrow info */}
        <span className="bg-amber-500/10 text-amber-400 border border-amber-500/25 text-xs font-bold px-3.5 py-1.5 rounded-full inline-block">
          ACİL TEKNİK DESTEK HAKKI
        </span>
        
        {/* Headings */}
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Kombiniz mi Arızalandı?
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-slate-300">
            Çamaşır veya bulaşık makineniz çalışmıyor mu?
          </p>
        </div>

        {/* Core display text */}
        <p className="text-2xl sm:text-3xl font-black text-amber-400 tracking-wide pt-2">
          "Bir telefon kadar uzağınızdayız."
        </p>

        <p className="text-sm text-slate-400 max-w-2xl mx-auto">
          Esenyurt başta olmak üzere İstanbul Avrupa Yakası'nın tamamına aynı gün servis araçlarımızla ulaşıyoruz. Sorunu hızlıca tespit edip garantili çözüyoruz.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="tel:+905346920123"
            className="flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-base sm:text-lg px-8 py-4.5 rounded-xl shadow-2xl transition-all uppercase tracking-wide"
          >
            <Phone className="h-5.5 w-5.5 stroke-[2.5]" />
            <span>ÖMER USTA'YI ARA: 0534 692 01 23</span>
          </a>

          <a
            href="https://wa.me/905346920123"
            target="_blank"
            referrerPolicy="no-referrer"
            className="flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-base sm:text-lg px-8 py-4.5 rounded-xl shadow-2xl transition-all uppercase tracking-wide"
          >
            <MessageSquare className="h-5.5 w-5.5 text-emerald-200 stroke-[2.5]" />
            <span>WhatsApp'tan Servis Talep Et</span>
          </a>
        </div>

        <div className="flex justify-center gap-6 text-xs text-slate-400 font-bold pt-4">
          <span>✓ Hızlı Çözüm</span>
          <span>✓ Orijinal Yedek Parça</span>
          <span>✓ Şeffaf & Uygun Fiyat</span>
        </div>

      </div>
    </section>
  );
}
