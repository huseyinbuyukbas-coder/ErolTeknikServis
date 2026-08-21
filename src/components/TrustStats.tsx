/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, Shield, Zap, CheckCircle2 } from 'lucide-react';

export default function TrustStats() {
  const stats = [
    {
      id: 'rating',
      value: '5.0',
      label: 'Google Değerlendirmesi',
      description: 'En yüksek memnuniyet skoru',
      icon: (
        <div className="flex gap-0.5 text-amber-400">
          <Star className="h-4 w-4 fill-amber-400" />
          <Star className="h-4 w-4 fill-amber-400" />
          <Star className="h-4 w-4 fill-amber-400" />
          <Star className="h-4 w-4 fill-amber-400" />
          <Star className="h-4 w-4 fill-amber-400" />
        </div>
      ),
      borderColor: 'border-slate-100',
      bgColor: 'bg-slate-50',
    },
    {
      id: 'reviews',
      value: '93',
      label: 'Google Yorumu',
      description: 'Gerçek, doğrulanmış esnaf puanı',
      icon: <span className="text-sm font-bold text-amber-500">★★★★★</span>,
      borderColor: 'border-slate-100',
      bgColor: 'bg-slate-50',
    },
    {
      id: 'guarantee',
      value: '%100',
      label: 'Garantili İşçilik',
      description: 'Yaptığımız her onarımın arkasındayız',
      icon: <Shield className="h-5 w-5 text-emerald-550 font-bold" />,
      borderColor: 'border-slate-100',
      bgColor: 'bg-slate-50',
    },
    {
      id: 'speed',
      value: '30 Dk.',
      label: 'Hızlı Servis',
      description: 'Aynı gün, yerinde servis güvencesi',
      icon: <Zap className="h-5 w-5 text-amber-500" />,
      borderColor: 'border-slate-100',
      bgColor: 'bg-slate-50',
    },
  ];

  return (
    <section className="relative bg-white py-12 border-y border-slate-100 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`bg-slate-50 border border-slate-100 rounded-2xl p-5 flex flex-col justify-between hover:shadow-md hover:border-amber-500/35 hover:-translate-y-0.5 transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-3">
                {stat.icon}
                <span className="text-slate-400 text-[10px] uppercase font-extrabold tracking-widest">GÜVEN VEREN</span>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-slate-700">{stat.label}</p>
                <p className="text-xs text-slate-550 mt-0.5 leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
