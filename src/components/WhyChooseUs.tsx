/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { Clock, Crosshair, ShieldCheck, DollarSign, Sparkles, UserCheck } from 'lucide-react';

interface Reason {
  num: string;
  title: string;
  description: string;
  icon: ReactNode;
  iconColor: string;
  bgColor: string;
}

export default function WhyChooseUs() {
  const reasons: Reason[] = [
    {
      num: '01',
      title: 'Hızlı Müdahale',
      description: 'Servis taleplerine mümkün olan en kısa sürede dönüş yapıyor, Esenyurt ve çevresinde dakikalar içinde kapınızda oluyoruz.',
      icon: <Clock className="h-5 w-5" />,
      iconColor: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
    },
    {
      num: '02',
      title: 'Nokta Atışı Arıza Tespiti',
      description: 'Arızanın asıl kaynağını modern ekipmanlarla bularak gereksiz işlem ve parça değişimlerinin, yani boşa harcanan masrafın önüne geçiyoruz.',
      icon: <Crosshair className="h-5 w-5" />,
      iconColor: 'text-sky-400',
      bgColor: 'bg-sky-500/10',
    },
    {
      num: '03',
      title: 'Garantili İşçilik',
      description: 'Yaptığımız onarım ve parça değişimlerinin arkasındayız. Ömer Usta güvencesiyle onarım sonrasında da içiniz rahat etsin.',
      icon: <ShieldCheck className="h-5 w-5" />,
      iconColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
    },
    {
      num: '04',
      title: 'Uygun ve Şeffaf Fiyat',
      description: 'İşleme başlamadan önce müşterimizi arıza sebebi ve net maliyet hakkında detaylı bilgilendiriyoruz. Sürpriz ücretlerle karşılaşmazsınız.',
      icon: <DollarSign className="h-5 w-5" />,
      iconColor: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
    },
    {
      num: '05',
      title: 'Temiz İşçilik',
      description: 'Evlerinizi ve çalışma alanlarını bir misafir hassasiyetiyle koruyoruz. Servis sonrasında çalışma alanını tertemiz bırakıyoruz.',
      icon: <Sparkles className="h-5 w-5" />,
      iconColor: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
    },
    {
      num: '06',
      title: 'Tecrübeli Usta',
      description: 'Uzun yıllara dayanan teknik bilgi ve saha deneyimiyle en zorlu beyaz eşya ve kombi arızalarında dahi güvenli sonuçlar sunuyoruz.',
      icon: <UserCheck className="h-5 w-5" />,
      iconColor: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
    },
  ];

  return (
    <section id="why-us" className="relative py-20 lg:py-28 bg-white z-10 scroll-mt-20 border-y border-slate-100">
      {/* Decorative Glow elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/[0.01] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-amber-800 text-xs font-extrabold uppercase tracking-widest bg-amber-100 px-3.5 py-1.5 rounded-full inline-block">
            NEDEN BİZİ SEÇMELİSİNİZ?
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Neden Erol Teknik?
          </h2>
          <p className="text-base text-slate-600">
            İşimiz sadece cihazınızın arızasını gidermek değil, kurduğumuz şeffaf iletişimle müşterimize tam bir güven aşılamaktır.
          </p>
        </div>

        {/* 6 Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="group relative bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl hover:bg-white hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Upper row: icon and count index */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`${item.bgColor} ${item.iconColor} p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <span className="text-3xl font-black text-amber-500/15 group-hover:text-amber-500/30 transition-colors">
                    {item.num}
                  </span>
                </div>

                {/* Heading and details */}
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Decorative accent corner indicator */}
              <div className="absolute top-0 right-0 w-8 h-8 rounded-tr-2xl rounded-bl-xl border-t border-r border-transparent group-hover:border-amber-500/20 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom trust banner box */}
        <div className="mt-16 bg-gradient-to-r from-amber-500/5 via-slate-50 to-blue-500/5 border border-slate-100 rounded-2xl p-6 md:p-10 text-center space-y-6">
          <p className="text-lg sm:text-xl font-bold text-slate-700">
            "Arızamı doğru tespit edecek, beni gereksiz masrafa sokmayacak bir usta arıyorum." diyorsanız doğru yerdesiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905346920123"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-6 py-3.5 rounded-xl shadow-lg transition-colors text-sm uppercase tracking-wider"
            >
              Ömer Usta'yı Hemen Ara
            </a>
            <a
              href="https://wa.me/905346920123"
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-black px-6 py-3.5 rounded-xl shadow-lg transition-colors text-sm flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <span>WhatsApp Servis Talebi</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
