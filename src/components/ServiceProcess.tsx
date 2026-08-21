/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { PhoneCall, Info, ShieldAlert, CheckCircle } from 'lucide-react';

interface Step {
  num: string;
  title: string;
  description: string;
  icon: ReactNode;
  colorClass: string;
}

export default function ServiceProcess() {
  const steps: Step[] = [
    {
      num: '01',
      title: 'Bize Ulaşın',
      description: 'Telefon veya WhatsApp üzerinden bizimle irtibata geçerek servis talebinizi iletin.',
      icon: <PhoneCall className="h-6 w-6" />,
      colorClass: 'text-amber-600 bg-amber-50 border-amber-100',
    },
    {
      num: '02',
      title: 'Arıza Bilgisi',
      description: 'Cihazınızda yaşadığınız problem ve modeli hakkında ustamızdan ilk ön bilgileri ve fikirleri alın.',
      icon: <Info className="h-6 w-6" />,
      colorClass: 'text-sky-600 bg-sky-50 border-sky-100',
    },
    {
      num: '03',
      title: 'Arıza Tespiti',
      description: 'Ömer Usta adresinize gelip profesyonel araçlarla arızayı yerinde ve nokta atışı tespit etsin.',
      icon: <ShieldAlert className="h-6 w-6" />,
      colorClass: 'text-red-600 bg-red-50 border-red-100',
    },
    {
      num: '04',
      title: 'Hızlı Onarım',
      description: 'Sizin onayınızın hemen ardından orijinal ve garantili yedek parçalarla onarım tamamlansın.',
      icon: <CheckCircle className="h-6 w-6" />,
      colorClass: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
  ];

  const handleCreateRequest = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 lg:py-28 bg-slate-50 z-10 border-t border-slate-100">
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/[0.01] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-amber-800 text-xs font-extrabold uppercase tracking-widest bg-amber-100 px-3.5 py-1.5 rounded-full inline-block">
            4 ADIMDA KOLAY ÇÖZÜM
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Servis Sürecimiz Nasıl İşler?
          </h2>
          <p className="text-base text-slate-600">
            Arızalı cihazınızı Ömer Usta güvencesiyle aynı gün içinde tekrar ilk günkü performansına kavuşturuyoruz. İşte işleyiş adımlarımız:
          </p>
        </div>

        {/* Timeline representation */}
        <div className="relative">
          {/* Centered line in Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-12 bottom-12 w-0.5 bg-slate-200"></div>

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col lg:flex-row items-center">
                  
                  {/* Left Column (Desktop) */}
                  <div className={`w-full lg:w-1/2 flex justify-end lg:pr-12 ${isEven ? 'lg:order-1' : 'lg:order-2 lg:justify-start lg:pl-12'}`}>
                    <div className="bg-white border border-slate-100 p-6 md:p-8 rounded-2xl w-full max-w-md shadow-sm hover:border-slate-350 transition-all">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-xl border ${step.colorClass} shadow-sm`}>
                          {step.icon}
                        </div>
                        <span className="text-4xl font-black text-slate-200">{step.num}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Centered Number Indicator (Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-slate-200 items-center justify-center font-bold text-xs text-slate-700 z-10 shadow-md">
                    {step.num}
                  </div>

                  {/* Right Column Spacer (Desktop) */}
                  <div className={`hidden lg:block w-full lg:w-1/2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}></div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-16 text-center">
          <button
            onClick={handleCreateRequest}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-8 py-4 rounded-xl shadow-lg transition-all text-base uppercase tracking-wider"
          >
            Servis Talebi Oluştur
          </button>
        </div>

      </div>
    </section>
  );
}
