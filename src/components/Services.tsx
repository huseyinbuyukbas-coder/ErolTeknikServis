/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { Flame, WashingMachine, Disc, Wrench, Cpu, Search, CheckCircle } from 'lucide-react';

interface ServiceCard {
  id: string;
  title: string;
  icon: ReactNode;
  description: string;
  buttonText: string;
  badge: string;
  bulletPoints: string[];
}

export default function Services() {
  const serviceList: ServiceCard[] = [
    {
      id: 'kombi',
      title: 'Kombi Servisi',
      icon: <Flame className="h-7 w-7 text-amber-500 animate-pulse" />,
      description: 'Her marka ve model kombide arıza tespiti, bakım, onarım, basınç problemleri çözümü ve parça değişimi.',
      buttonText: 'Kombi Servisi Çağır',
      badge: 'Yüksek Talep',
      bulletPoints: ['Kombi Arıza Giderme', 'Periyodik Bakım', 'Petek Temizliği', 'Elektronik Kart Onarımı'],
    },
    {
      id: 'camasir',
      title: 'Çamaşır Makinesi Servisi',
      icon: <WashingMachine className="h-7 w-7 text-sky-500" />,
      description: 'Çamaşır makinelerinde su almama, gürültü yapma, kazan dönmeme ve elektronik beyin arızalarının onarımı.',
      buttonText: 'Servis Talep Et',
      badge: 'Garantili Tamir',
      bulletPoints: ['Kazan & Rulman Değişimi', 'Pompa & Amortisör', 'Elektronik Kart', 'Sıkma/Isıtma Çözümleri'],
    },
    {
      id: 'bulasik',
      title: 'Bulaşık Makinesi Servisi',
      icon: <Disc className="h-7 w-7 text-teal-400" />,
      description: 'Bulaşık makinesi temiz yıkamama, su boşaltmama ve ısıtmama arızalarının profesyonel şekilde tespiti ve onarımı.',
      buttonText: 'Servis Talep Et',
      badge: 'Hızlı Müdahale',
      bulletPoints: ['Su Sızdırma Çözümleri', 'Rezistans Değişimi', 'Filtre & Motor Onarımı', 'Yıkama Performansı'],
    },
    {
      id: 'beyazesya',
      title: 'Beyaz Eşya Servisi',
      icon: <Wrench className="h-7 w-7 text-purple-400" />,
      description: 'Farklı marka ve modellerde fırın, kurutma makinesi ve diğer beyaz eşyalarınız için yerinde teknik servis.',
      buttonText: 'Servis Talep Et',
      badge: 'Orijinal Yedek Parça',
      bulletPoints: ['Kurutma Makinesi', 'Fırın & Ocak Tamiri', 'Termostat Kontrolü', 'Conta & Kapak Onarımı'],
    },
    {
      id: 'anakart',
      title: 'Anakart Onarımı',
      icon: <Cpu className="h-7 w-7 text-emerald-400" />,
      description: 'Elektronik kart ve anakart kaynaklı arızalarda yüksek maliyetli parça değişimi yerine ekonomik onarım çözümleri.',
      buttonText: 'Servis Talep Et',
      badge: 'Ekonomik Çözüm',
      bulletPoints: ['Elektronik Kart Testi', 'Mikroçip Onarımı', 'Yazılım Güncelleme', '1 Yıl İşçilik Garantisi'],
    },
    {
      id: 'arizatespit',
      title: 'Arıza Tespiti',
      icon: <Search className="h-7 w-7 text-amber-400" />,
      description: 'Arızanın kaynağını modern ekipmanlarla nokta atışı bularak gereksiz parça değişimi ve yüksek masrafın önüne geçiyoruz.',
      buttonText: 'Hızlı Keşif İste',
      badge: 'Nokta Atışı',
      bulletPoints: ['Doğru Ekipmanlar', 'Şeffaf Bilgilendirme', 'Maliyetsiz Çözüm Yolu', 'Tecrübeli Bakış Açısı'],
    },
  ];

  const handleServiceClick = (deviceType: string) => {
    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Auto-select dropdown in form if exists
    const selectElem = document.getElementById('device-select') as HTMLSelectElement;
    if (selectElem) {
      if (deviceType === 'kombi') selectElem.value = 'Kombi';
      else if (deviceType === 'camasir') selectElem.value = 'Çamaşır Makinesi';
      else if (deviceType === 'bulasik') selectElem.value = 'Bulaşık Makinesi';
      else if (deviceType === 'anakart') selectElem.value = 'Anakart / Elektronik Kart';
      else selectElem.value = 'Diğer Beyaz Eşya';

      // Dispatch change event to trigger state update
      selectElem.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-slate-50 z-10 scroll-mt-20 border-b border-slate-100">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-amber-800 text-xs font-extrabold uppercase tracking-widest bg-amber-100 px-3.5 py-1.5 rounded-full inline-block">
            UZMANLIK ALANLARIMIZ
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Kombi ve Beyaz Eşya Servisi
          </h2>
          <p className="text-base text-slate-600">
            Esenyurt genelinde arızalı kombi, çamaşır makinesi, bulaşık makinesi ve elektronik kartlar için hızlı, garantili ve güvenilir usta hizmeti.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {serviceList.map((service) => (
            <div
              key={service.id}
              className="group bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/[0.02] transform hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Header within card */}
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-slate-50 p-3.5 rounded-2xl text-slate-800 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                    {service.icon}
                  </div>
                  <span className="bg-amber-100 text-amber-800 border border-amber-200 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {service.badge}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-extrabold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-8">
                  {service.bulletPoints.map((point, index) => (
                    <li key={index} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleServiceClick(service.id)}
                className="w-full bg-slate-50 text-slate-700 hover:bg-amber-500 hover:text-slate-950 font-black text-sm py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>{service.buttonText}</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
