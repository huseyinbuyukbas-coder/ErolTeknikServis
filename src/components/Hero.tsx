/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, MessageSquare, ShieldCheck, Zap, Crosshair, HelpCircle, Award } from 'lucide-react';

export default function Hero() {
  const badges = [
    { text: 'Garantili İşçilik', icon: <ShieldCheck className="h-4 w-4 text-emerald-400" /> },
    { text: 'Hızlı Servis', icon: <Zap className="h-4 w-4 text-amber-400" /> },
    { text: 'Nokta Atışı Arıza Tespiti', icon: <Crosshair className="h-4 w-4 text-sky-400" /> },
    { text: 'Uygun Fiyat', icon: <Award className="h-4 w-4 text-amber-500" /> },
    { text: 'Profesyonel Hizmet', icon: <ShieldCheck className="h-4 w-4 text-purple-400" /> },
  ];

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-slate-900 border-b border-slate-800 overflow-hidden">
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -top-10 left-10 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Title and Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust Badges Bar */}
            <div className="inline-flex flex-wrap gap-2 justify-center lg:justify-start">
              <span className="bg-slate-800/80 border border-slate-700/50 backdrop-blur-sm text-slate-300 text-xs px-3.5 py-1.5 rounded-full font-bold flex items-center gap-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Esenyurt & Avrupa Yakası Aktif Servis
              </span>
              <span className="bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs px-3.5 py-1.5 rounded-full font-bold flex items-center gap-1.5 shadow-sm">
                ★★★★★ 5.0 Google Puanı (Ömer Usta)
              </span>
            </div>

            {/* Display Typography */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Kombi ve Beyaz Eşya Arızalarında{' '}
              <span className="text-amber-500 underline decoration-slate-700 underline-offset-8">
                Hızlı ve Güvenilir
              </span>{' '}
              Teknik Servis
            </h1>

            {/* Support Copy */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Esenyurt ve çevresinde kombi, çamaşır makinesi, bulaşık makinesi ve beyaz eşya arızalarına profesyonel servis hizmeti sunuyoruz. İşinin ehli Ömer Usta ile garantili tamir!
            </p>

            {/* Two High-Conversion CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a
                href="tel:+905346920123"
                className="flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm px-8 py-4 rounded-xl shadow-lg shadow-amber-500/20 transform hover:-translate-y-0.5 transition-all w-full sm:w-auto tracking-wide uppercase"
              >
                <Phone className="h-5 w-5 stroke-[2.5]" />
                <span>Hemen Servis Çağır</span>
              </a>

              <a
                href="https://wa.me/905346920123"
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/20 transform hover:-translate-y-0.5 transition-all w-full sm:w-auto tracking-wide uppercase"
              >
                <MessageSquare className="h-5 w-5 stroke-[2.5]" />
                <span>WhatsApp'tan Ulaş</span>
              </a>
            </div>

            {/* Quick Badges display */}
            <div className="pt-6 border-t border-slate-800/60 max-w-md mx-auto lg:mx-0">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">HİZMET GÜVENCELERİMİZ</p>
              <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
                {badges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 bg-[#0f172a]/95 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300 text-xs font-medium"
                  >
                    {badge.icon}
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Component with Trust Cards */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              
              {/* Outer Decorative Box */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/30 to-blue-600/30 rounded-2xl blur-lg opacity-75"></div>
              
              {/* Real, High-Quality Professional Service Image */}
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800"
                  alt="Ömer Usta Kombi ve Beyaz Eşya Teknik Servisi"
                  className="w-full h-[320px] sm:h-[400px] object-cover object-center filter brightness-95 hover:scale-105 transition-transform duration-700"
                />
                
                {/* Visual Accent Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                {/* Trust Floater 1: Active Badge */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-lg">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute"></div>
                  <span className="text-xs font-bold text-white">7/24 Acil Servis</span>
                </div>

                {/* Trust Floater 2: Ömer Usta Profile */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-md border border-slate-800 p-3.5 rounded-xl flex items-center gap-3 shadow-lg">
                  <div className="bg-amber-500 text-slate-950 h-10 w-10 rounded-lg flex items-center justify-center font-bold text-lg shrink-0">
                    ÖU
                  </div>
                  <div>
                    <p className="text-xs font-bold text-amber-400">YETKİLİ USTA</p>
                    <p className="text-sm font-extrabold text-white">Ömer Usta</p>
                    <p className="text-[11px] text-slate-400">Esenyurt Kombi & Beyaz Eşya Uzmanı</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
