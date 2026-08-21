/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Brands() {
  const brandList = [
    { name: 'Demirdöküm', desc: 'Kombi Grubu' },
    { name: 'Baymak', desc: 'Kombi Grubu' },
    { name: 'Bosch', desc: 'Kombi & Beyaz Eşya' },
    { name: 'Siemens', desc: 'Beyaz Eşya Grubu' },
    { name: 'Arçelik', desc: 'Beyaz Eşya Grubu' },
    { name: 'Beko', desc: 'Beyaz Eşya Grubu' },
    { name: 'Vestel', desc: 'Beyaz Eşya Grubu' },
    { name: 'Profilo', desc: 'Beyaz Eşya Grubu' },
    { name: 'Samsung', desc: 'Beyaz Eşya Grubu' },
    { name: 'LG', desc: 'Beyaz Eşya Grubu' },
  ];

  return (
    <section className="relative py-16 bg-white border-t border-slate-100 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title & Explainer */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">SERVİS SUNULAN GENİŞ KAPSAM</p>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">Servis ve Bakım Yapılan Markalar</h3>
          <p className="text-xs text-slate-500">
            Cihazlarınızda tam uyumlu yedek parçalarla onarım sağladığımız bazı temel markalar.
          </p>
        </div>

        {/* Brands Grid - Flat & Elegant Modern Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
          {brandList.map((brand, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-center hover:border-amber-500/30 hover:bg-white transition-all group shadow-sm"
            >
              <p className="text-sm font-extrabold text-slate-800 group-hover:text-amber-600 transition-colors">
                {brand.name}
              </p>
              <p className="text-[10px] font-semibold text-slate-500 mt-1">
                {brand.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer - Emphasizing transparency and honesty */}
        <div className="mt-10 max-w-2xl mx-auto text-center bg-slate-50 border border-slate-100 rounded-xl p-4">
          <p className="text-xs text-slate-500 leading-relaxed font-semibold">
            <span className="text-amber-700 font-bold">⚠️ Şeffaflık Beyanı:</span> Firmamız, yukarıda adı geçen markaların "yetkili servisi" olmayıp, siz değerli müşterilerimize özel teknik servis ve onarım hizmeti sunmaktadır. Kullanılan tüm markalar ve logolar tescilli sahiplerine aittir. Servis ve onarım kapsamı için bizimle iletişime geçebilirsiniz.
          </p>
        </div>

      </div>
    </section>
  );
}
