/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, CheckCircle2, MessageSquare } from 'lucide-react';

export default function KombiSection() {
  const points = [
    'Kombi arıza tespiti',
    'Kombi bakım ve onarım',
    'Su basıncı problemleri',
    'Isıtma problemleri',
    'Sıcak su problemleri',
    'Elektronik kart arızaları',
    'Parça değişimi',
    'Kombi performans kontrolleri',
  ];

  return (
    <section id="kombi" className="relative py-20 lg:py-28 bg-white z-10 scroll-mt-20 border-t border-slate-100">
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Professional Visual of Kombi Work */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Decorative backing */}
              <div className="absolute -inset-2 bg-slate-100 rounded-2xl opacity-80"></div>
              
              <div className="relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
                  alt="Kombi Bakımı ve Arıza Tespiti"
                  className="w-full h-[300px] sm:h-[380px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                
                {/* Visual Label overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 border border-slate-100 p-3 rounded-xl backdrop-blur-sm shadow-md">
                  <p className="text-xs font-bold text-amber-600 uppercase tracking-widest">ÖMER USTA DENEYİMİ</p>
                  <p className="text-sm font-bold text-slate-800">Yıllık Periyodik Bakım & Petek Temizliği</p>
                  <p className="text-xs text-slate-500 mt-1">Kombinizin ömrünü uzatır, doğalgaz faturanızda tasarruf sağlar.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Strong sales copywriting & bullets */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-3">
              <span className="bg-amber-100 text-amber-800 border border-amber-200 text-xs font-bold px-3.5 py-1.5 rounded-full inline-block">
                KOMBİ SERVİSİ
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
                Kombi Arızalarında Nokta Atışı Tespit
              </h2>
            </div>
            
            <p className="text-base text-slate-600 leading-relaxed">
              Kombinizde yaşanan arızanın kaynağını doğru şekilde tespit ediyor, gerekli onarımı profesyonel ekipman ve yüksek usta deneyimiyle gerçekleştiriyoruz. Gereksiz parça değişimine gitmeden en ekonomik çözümü sunuyoruz.
            </p>

            {/* Check list layout in 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-750">{point}</span>
                </div>
              ))}
            </div>

            {/* Quick Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="tel:+905346920123"
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/10 transition-all text-sm tracking-wide uppercase"
              >
                <Phone className="h-4.5 w-4.5 stroke-[2.5]" />
                <span>Kombi Servisi Çağır</span>
              </a>
              
              <a
                href="https://wa.me/905346920123"
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 px-6 py-3.5 rounded-xl transition-all text-sm font-bold uppercase"
              >
                <MessageSquare className="h-4.5 w-4.5 text-emerald-500" />
                <span>Bakım Randevusu Al</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
