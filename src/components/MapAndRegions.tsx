/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Navigation, Compass, Globe } from 'lucide-react';

export default function MapAndRegions() {
  const activeNeighborhoods = [
    'İstiklal Mahallesi',
    'Mehterçeşme',
    'Güzelyurt',
    'Akçaburgaz',
    'Piri Reis',
    'Cumhuriyet',
    'Atatürk Mahallesi',
    'Yeşilkent',
    'Kıraç',
    'Saadetdere',
    'Örnek Mahallesi',
    'Osmangazi',
    'Barbaros Hayrettin Paşa',
    'Fatih Mahallesi',
    'Sülaymaniye',
  ];

  const surroundingDistricts = [
    'Beylikdüzü',
    'Avcılar',
    'Büyükçekmece',
    'Başakşehir',
    'Bahçeşehir',
    'Hadımköy',
    'Küçükçekmece',
  ];

  const mapDirectionUrl = "https://maps.google.com/?q=%C4%B0stiklal%20Platin%20Sk.%20No%3A32-34%20Esenyurt%20%C4%B0stanbul";

  return (
    <section className="relative py-20 lg:py-28 bg-white z-10 border-t border-slate-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-sky-500/[0.01] rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Local Copy & Area List */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-center lg:text-left">
              <span className="bg-sky-100 text-sky-850 border border-sky-200 text-xs font-bold px-3.5 py-1.5 rounded-full inline-block">
                GENİŞ HİZMET BÖLGESİ
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
                Esenyurt ve Çevresinde Teknik Servis
              </h2>
              <p className="text-base text-slate-600">
                Ömer Usta liderliğindeki mobil teknik ekibimiz, Esenyurt merkezli olmak üzere tüm mahallelerine ve İstanbul Avrupa Yakası'ndaki komşu ilçelere tam donanımlı servis araçlarıyla ulaşmaktadır.
              </p>
            </div>

            {/* Neighborhoods Tags */}
            <div className="space-y-4 bg-slate-50 border border-slate-100 p-6 rounded-2xl">
              <div>
                <p className="text-xs font-black text-amber-700 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-amber-600" />
                  <span>ESENYURT AKTİF MAHALLELERİ</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeNeighborhoods.map((area, idx) => (
                    <span
                      key={idx}
                      className="bg-white text-slate-700 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-200 hover:border-amber-500/20 hover:text-slate-900 transition-colors shadow-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <p className="text-xs font-black text-sky-850 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <Globe className="h-4 w-4 text-sky-600" />
                  <span>DİĞER HİZMET VERİLEN İLÇELER</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {surroundingDistricts.map((district, idx) => (
                    <span
                      key={idx}
                      className="bg-white/70 text-slate-600 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-200"
                    >
                      {district}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={mapDirectionUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold text-sm px-6 py-3.5 rounded-xl transition-all uppercase tracking-wider"
              >
                <Navigation className="h-4 w-4 text-amber-500 stroke-[2.5]" />
                <span>Yol Tarifi Al</span>
              </a>
              <a
                href="tel:+905346920123"
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm px-6 py-3.5 rounded-xl transition-all uppercase tracking-wider"
              >
                <span>Servis Bölgesi Sorgula</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Map Embed */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Decorative accent glow */}
              <div className="absolute -inset-1.5 bg-slate-100 rounded-2xl blur-lg opacity-75"></div>

              {/* Map Iframe */}
              <div className="relative bg-slate-50 border border-slate-150 p-2 rounded-2xl shadow-xl overflow-hidden h-[350px] sm:h-[450px]">
                <iframe
                  title="Erol Teknik Servis Konumu"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.66!2d28.6811!3d41.0289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAxJzQ0LjEiTiAyOMKwNDAnNTIuMCJF!5e0!3m2!1str!2str!4v1629555555555!5m2!1str!2str"
                  className="w-full h-full rounded-xl border-0"
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>

                {/* Floating Map Details Address */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 border border-slate-150 p-4 rounded-xl shadow-md backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-amber-600 uppercase tracking-wider">ADRES BİLGİSİ</p>
                      <p className="text-sm font-extrabold text-slate-800 mt-0.5">Erol Teknik Servis Atölyesi</p>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        İstiklal, Platin Sk. No:32-34, 34500 Esenyurt / İstanbul
                      </p>
                    </div>
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
