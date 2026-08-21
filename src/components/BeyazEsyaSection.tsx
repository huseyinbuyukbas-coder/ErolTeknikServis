/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { WashingMachine, Disc, Cpu, Search, CheckSquare, Wrench, ArrowRight } from 'lucide-react';

interface BeyazEsyaItem {
  title: string;
  description: string;
  icon: ReactNode;
  details: string[];
}

export default function BeyazEsyaSection() {
  const categories: BeyazEsyaItem[] = [
    {
      title: 'Çamaşır Makinesi',
      description: 'Gürültülü sıkma, kazan dönmeme, su boşaltmama ve kapak kilit arızalarında yerinde hızlı onarım.',
      icon: <WashingMachine className="h-6 w-6 text-sky-400" />,
      details: ['Kazan rulman değişimi', 'Amortisör ve yay değişimi', 'Elektronik kart tamiri'],
    },
    {
      title: 'Bulaşık Makinesi',
      description: 'Yetersiz temizlik, ısıtmama, su almama veya sürekli su boşaltma sorunlarına profesyonel çözümler.',
      icon: <Disc className="h-6 w-6 text-teal-400" />,
      details: ['Rezistans değişimi', 'Yıkama motoru revizyonu', 'Ventil ve hortum değişimi'],
    },
    {
      title: 'Beyaz Eşya',
      description: 'Farklı ev ve mutfak cihazlarında meydana gelen elektrik, mekanik ve soğutma arızalarının tamiri.',
      icon: <Wrench className="h-6 w-6 text-amber-500" />,
      details: ['Kurutma makineleri', 'Fırın ve ocak grupları', 'Rezistans & termostat değişimi'],
    },
    {
      title: 'Elektronik Kart / Anakart',
      description: 'Yüksek maliyetli sıfır kart değişimi yerine, özel cihazlarla arızalı parça tespiti ve lehim onarımı.',
      icon: <Cpu className="h-6 w-6 text-emerald-400" />,
      details: ['Yüksek akım koruma', 'Entegre ve röle değişimi', 'Sinyal ve akım testleri'],
    },
    {
      title: 'Arıza Tespiti',
      description: 'Doğru ölçüm ve tecrübeli gözlem ile asıl bozulan parçayı bulur, gereksiz parça değişimini önleriz.',
      icon: <Search className="h-6 w-6 text-amber-400" />,
      details: ['Ölçü aletiyle kontrol', 'Mekanik aşınma analizi', 'Şeffaf fiyat teklifi'],
    },
    {
      title: 'Parça Değişimi',
      description: 'Sadece cihazınızın modeline birebir uyumlu, yüksek kaliteli ve dayanıklı yedek parçalar kullanıyoruz.',
      icon: <CheckSquare className="h-6 w-6 text-purple-400" />,
      details: ['1 Yıl parça garantisi', 'Sıfır kutulu yedek parça', 'Marka uyumluluk testi'],
    },
  ];

  const handleActionClick = (title: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }

    const selectElem = document.getElementById('device-select') as HTMLSelectElement;
    if (selectElem) {
      if (title.includes('Çamaşır')) selectElem.value = 'Çamaşır Makinesi';
      else if (title.includes('Bulaşık')) selectElem.value = 'Bulaşık Makinesi';
      else if (title.includes('Kart')) selectElem.value = 'Anakart / Elektronik Kart';
      else selectElem.value = 'Diğer Beyaz Eşya';

      selectElem.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  return (
    <section id="beyazesya" className="relative py-20 lg:py-28 bg-slate-50 z-10 scroll-mt-20 border-t border-slate-100">
      <div className="absolute bottom-1/4 left-10 w-[250px] h-[250px] bg-sky-500/5 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <span className="bg-sky-100 text-sky-850 border border-sky-200 text-xs font-bold px-3.5 py-1.5 rounded-full inline-block">
              BEYAZ EŞYA SERVİSİ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
              Beyaz Eşyalarınız İçin Profesyonel Servis
            </h2>
            <p className="text-base text-slate-600">
              Çamaşır makinesi, bulaşık makinesi ve diğer beyaz eşyalarınızda arızayı doğru tespit ediyor, mümkün olan durumlarda onarım yoluyla ekonomik ve kalıcı çözümler sunuyoruz.
            </p>
          </div>
          <button
            onClick={() => handleActionClick('Genel')}
            className="shrink-0 flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-black text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
          >
            <span>Hemen Servis Talep Et</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((item, index) => (
            <div
              key={index}
              onClick={() => handleActionClick(item.title)}
              className="group bg-white border border-slate-100 p-6 rounded-2xl hover:border-sky-500/30 hover:bg-white/90 cursor-pointer transform hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              {/* Card top elements */}
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-slate-50 p-3 rounded-xl text-slate-800 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-sky-600 transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Little bullet point list inside card */}
              <div className="border-t border-slate-100 pt-3 space-y-1.5">
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0"></span>
                    <span>{detail}</span>
                  </p>
                ))}
              </div>

              {/* Hover indicator link */}
              <div className="flex items-center gap-1 text-xs text-sky-600 font-bold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Servis Seç</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
