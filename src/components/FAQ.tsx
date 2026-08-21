/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQ {
  q: string;
  a: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQ[] = [
    {
      q: 'Kombi arızalarında servis nasıl talep edebilirim?',
      a: 'Web sitemizdeki "Hemen Ara" butonları aracılığıyla bizi doğrudan 0534 692 01 23 numaramızdan arayabilir veya "WhatsApp" butonuyla adres ve arıza bilgisini yazarak saniyeler içinde servis kaydı oluşturabilirsiniz.',
    },
    {
      q: 'Servis ücretiniz ne kadar?',
      a: 'Esenyurt ve yakın servis bölgelerimiz için arıza tespit ve servis ücretlerimiz son derece uygundur. Detaylı ve güncel servis bedeli bilgisi, onarım yapılacak mesafe ve arıza içeriğine göre değişmektedir. Net servis ücretini öğrenmek için bizimle iletişime geçebilirsiniz.',
    },
    {
      q: 'Hangi marka kombilere bakıyorsunuz?',
      a: 'Demirdöküm, Baymak, Bosch, Buderus, Vaillant, E.C.A, Protherm, Alarko, Ferroli ve Viessmann başta olmak üzere piyasada yaygın olarak kullanılan tüm kombi marka ve modellerinde arıza tespiti, parça değişimi, genel bakım ve onarım hizmeti veriyoruz.',
    },
    {
      q: 'Çamaşır makinesi tamiri yapıyor musunuz?',
      a: 'Evet, çamaşır makinelerinde sıklıkla görülen su boşaltmama, kazan dönmeme, aşırı gürültülü sıkma yapma, kapak kilit arızaları ve elektronik kart arızaları gibi tüm mekanik ve elektronik problemleri profesyonel olarak gideriyoruz.',
    },
    {
      q: 'Bulaşık makinesi tamiri yapıyor musunuz?',
      a: 'Evet, bulaşık makinenizin su almaması, ısıtmaması, bulaşıkları kirli bırakması, su sızdırması veya program takılması gibi her türlü arızasını tespit ediyor; yıkama pompası, rezistans ve hortum gibi parça değişimlerini gerçekleştiriyoruz.',
    },
    {
      q: 'Anakart tamiri yapıyor musunuz?',
      a: 'Evet, en büyük uzmanlık alanlarımızdan biri de elektronik kart (anakart) onarımıdır. Yüksek fiyatlı sıfır kart değişimi yerine, özel arıza tespit cihazlarımızla kart üzerindeki bozulan röle, entegre ve direnç gibi parçaları tespit edip ekonomik tamir yolları sunuyoruz.',
    },
    {
      q: 'Servis sonrası garanti veriyor musunuz?',
      a: 'Evet, yaptığımız tüm işçilik ve değiştirdiğimiz orijinal yedek parçalar Ömer Usta güvencesiyle onarım tarihinden itibaren garanti kapsamımızdadır. Detaylı garanti koşulları parça türüne göre değişmektedir ve onarım öncesi size iletilir.',
    },
    {
      q: 'Esenyurt dışındaki bölgelere servis geliyor musunuz?',
      a: 'Esenyurt merkezli olarak çalışmaktayız. Ancak iş yoğunluğumuza ve uygunluğa göre Avcılar, Beylikdüzü, Büyükçekmece, Hadımköy, Bahçeşehir, Başakşehir ve Küçükçekmece gibi yakın komşu bölgelere de hızlı servis hizmeti sunmaktayız.',
    },
    {
      q: 'Arıza tespitinden sonra fiyat bilgisi veriliyor mu?',
      a: 'Kesinlikle. Ustamız cihazınızı yerinde kontrol ettikten sonra arızanın nedenini ve tamir için gereken yedek parça/işçilik maliyetini size şeffaf şekilde açıklar. Sizin onayınız olmadan kesinlikle onarım işlemine başlanmaz.',
    },
    {
      q: 'WhatsApp üzerinden arıza fotoğrafı veya videosu gönderebilir miyim?',
      a: 'Evet, bu yöntem arızayı hızlı anlamamıza büyük katkı sağlar. Cihazınızın göstergesindeki hata kodunu, çıkardığı sesi veya arızalı bölgenin kısa bir videosunu WhatsApp üzerinden göndererek ön bilgi ve yaklaşık maliyet fikri alabilirsiniz.',
    },
  ];

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-20 lg:py-28 bg-white z-10 border-t border-slate-100 scroll-mt-20">
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-amber-500/[0.01] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-amber-800 text-xs font-extrabold uppercase tracking-widest bg-amber-100 px-3.5 py-1.5 rounded-full inline-block">
            SIKÇA SORULAN SORULAR
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Aklınıza Takılan Sorular
          </h2>
          <p className="text-base text-slate-600">
            Kombi ve beyaz eşya servis süreçlerimiz, fiyatlandırma, çalışma bölgelerimiz ve garanti koşulları hakkında detaylı ve şeffaf yanıtlar.
          </p>
        </div>

        {/* Accordion system */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-amber-500/40 shadow-sm' : 'border-slate-200'
                }`}
              >
                {/* Header click bar */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-extrabold text-slate-800 hover:text-amber-600 transition-colors">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isOpen ? 'bg-amber-500 text-slate-950' : 'bg-slate-100 text-slate-500'} shrink-0 transition-colors`}>
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                {/* Collapsible Content */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[500px] border-t border-slate-100' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 sm:p-6 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 font-semibold">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic call to action */}
        <div className="mt-12 text-center bg-slate-50 border border-slate-200 p-6 rounded-2xl">
          <p className="text-sm font-bold text-slate-700 mb-4">
            Sorunuzun cevabını bulamadınız mı? Doğrudan Ömer Usta'ya danışabilirsiniz.
          </p>
          <a
            href="https://wa.me/905346920123"
            target="_blank"
            referrerPolicy="no-referrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 border border-slate-200 text-amber-700 font-black px-5 py-2.5 rounded-xl transition-all text-xs uppercase tracking-wider shadow-sm"
          >
            <span>Ömer Usta'ya Sor</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
