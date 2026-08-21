/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Star, CheckCircle2, MessageSquare, ExternalLink, X } from 'lucide-react';

interface Review {
  author: string;
  rating: number;
  date: string;
  text: string;
  initials: string;
  tag: 'all' | 'speed' | 'trust' | 'kombi' | 'price';
}

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'speed' | 'trust' | 'kombi' | 'price'>('all');
  const [isReviewsModalOpen, setIsReviewsModalOpen] = useState(false);

  const reviews: Review[] = [
    {
      author: 'Kadir Yılmaz',
      rating: 5,
      date: '1 hafta önce',
      text: 'İşini hakkıyla yapan, her konuda yardımcı olan, yaptığı işe garanti veren Ömer ustamıza çok teşekkür ederim. Kombi arızasını nokta atışı bulup hemen tamir etti.',
      initials: 'KY',
      tag: 'trust',
    },
    {
      author: 'Murat Demir',
      rating: 5,
      date: '2 hafta önce',
      text: 'Tavsiye ederim Esenyurt\'un en iyisi. 5 dakikada eve geldi, kombi arızasını hemen tespit etti ve onardı. Fiyatları da piyasaya göre oldukça uygun.',
      initials: 'MD',
      tag: 'speed',
    },
    {
      author: 'Selim Akın',
      rating: 5,
      date: '3 hafta önce',
      text: 'Profesyonel ve temiz işçiliğiniz için teşekkür ederim. Bulaşık makinesinin su boşaltmama sorununu çözdüler, her yeri tertemiz bıraktılar.',
      initials: 'SA',
      tag: 'speed',
    },
    {
      author: 'Ayşe Karaca',
      rating: 5,
      date: '1 ay önce',
      text: 'Bu devirde beyaz eşya ve kombi tamirinde güvenilir bir usta bulmak gerçekten zor. Ömer Usta hem çok dürüst hem de işinin ehli. Kesinlikle tavsiye ederim.',
      initials: 'AK',
      tag: 'trust',
    },
    {
      author: 'Ahmet Şen',
      rating: 5,
      date: '1 ay önce',
      text: 'Uygun fiyat ve garantili işçilikten dolayı teşekkür ederim. Çamaşır makinemiz gürültü yapıyordu, amortisör değişimi yaparak ilk günkü haline getirdiler.',
      initials: 'AŞ',
      tag: 'price',
    },
    {
      author: 'Fatma Polat',
      rating: 5,
      date: '2 ay önce',
      text: 'Çok hızlı geldiler ve makinemin tüm parçaları kontrol edildi. Elektronik kart arızasını aynı gün onarıp teslim ettiler. Güler yüzlü ve dürüst servis.',
      initials: 'FP',
      tag: 'speed',
    },
    {
      author: 'Bülent Kaya',
      rating: 5,
      date: '2 ay önce',
      text: 'Arızayı nokta atışı bulduğu için teşekkür ederim. Başka bir servisin "komple motor değişmeli" dediği bulaşık makinesini Ömer usta ufak bir parça değişimiyle kurtardı.',
      initials: 'BK',
      tag: 'kombi',
    },
    {
      author: 'Hasan Yurt',
      rating: 5,
      date: '3 ay önce',
      text: 'İşinin ehli, güler yüzlü ve tecrübeli servis. Kombi bakımı ve petek temizliğinden sonra ısınma problemimiz tamamen çözüldü, faturalarımız düştü.',
      initials: 'HY',
      tag: 'kombi',
    },
  ];

  const filterTags = [
    { id: 'all', label: 'Tüm Yorumlar' },
    { id: 'trust', label: 'Güvenilir & Dürüst' },
    { id: 'speed', label: 'Hızlı Servis' },
    { id: 'kombi', label: 'Kombi & Petek' },
    { id: 'price', label: 'Uygun Fiyat' },
  ];

  const filteredReviews = activeFilter === 'all'
    ? reviews
    : reviews.filter(r => r.tag === activeFilter);

  return (
    <section id="comments" className="relative py-20 lg:py-28 bg-white z-10 scroll-mt-20 border-t border-slate-100">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-amber-500/[0.01] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title & Trust Rating Stats Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="bg-amber-100 text-amber-800 border border-amber-200 text-xs font-bold px-3.5 py-1.5 rounded-full inline-block">
              MÜŞTERI MEMNUNİYETİ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
              Müşterilerimiz Ne Diyor?
            </h2>
            <p className="text-base text-slate-600 max-w-2xl">
              5.0 Google İşletme puanımız ve gerçek müşterilerimizin onarım deneyimleri. İşimize duyulan bu güven en büyük gurur kaynağımızdır.
            </p>
          </div>

          <div className="lg:col-span-4 bg-slate-50 border border-slate-100 p-6 rounded-2xl flex items-center justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-4xl font-black text-slate-800">5.0</span>
                <span className="text-sm font-bold text-slate-500">/ 5</span>
              </div>
              <div className="flex text-amber-500 my-1">
                <Star className="h-4.5 w-4.5 fill-amber-500" />
                <Star className="h-4.5 w-4.5 fill-amber-500" />
                <Star className="h-4.5 w-4.5 fill-amber-500" />
                <Star className="h-4.5 w-4.5 fill-amber-500" />
                <Star className="h-4.5 w-4.5 fill-amber-500" />
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">93 Google Yorumu</p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <span className="text-2xl">🏆</span>
            </div>
          </div>

        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filterTags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => setActiveFilter(tag.id as any)}
              className={`text-xs font-bold px-4 py-2.5 rounded-full border transition-all ${
                activeFilter === tag.id
                  ? 'bg-amber-500 border-amber-500 text-slate-950 shadow-md shadow-amber-500/10'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-800 hover:bg-slate-100'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredReviews.map((review, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:border-amber-500/35 transition-all shadow-sm"
            >
              <div className="space-y-4">
                {/* Rating stars inside card */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-semibold">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-sm md:text-base text-slate-700 italic font-medium leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-6">
                <div className="flex items-center gap-3">
                  <div className="bg-amber-100 border border-amber-200 text-amber-800 h-9 w-9 rounded-full flex items-center justify-center font-bold text-xs animate-none">
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">{review.author}</p>
                    <p className="text-[10px] text-emerald-600 font-extrabold tracking-wider uppercase flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" />
                      Doğrulanmış Müşteri
                    </p>
                  </div>
                </div>
                <span className="text-[11px] text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-md font-semibold">
                  Google Maps
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsReviewsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 hover:border-slate-300 font-black px-6 py-3.5 rounded-xl shadow-sm transition-all text-sm"
          >
            <ExternalLink className="h-4 w-4 text-amber-500" />
            <span>Google'da Tüm Yorumları Gör (93+)</span>
          </button>
        </div>

      </div>

      {/* Reviews Modal Overlay */}
      {isReviewsModalOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="border-b border-slate-100 p-5 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <span>Google İşletme Değerlendirmeleri</span>
                  <span className="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-0.5 rounded-full font-bold">5.0 ★</span>
                </h3>
                <p className="text-xs text-slate-500">Erol Teknik - Ömer Usta Müşteri Yorumları</p>
              </div>
              <button
                onClick={() => setIsReviewsModalOpen(false)}
                className="text-slate-400 hover:text-slate-800 p-1 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* List Body */}
            <div className="p-6 overflow-y-auto space-y-6 max-h-[60vh]">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center mb-2">
                <p className="text-2xl font-black text-amber-600 mb-1">★★★★★ 5.0</p>
                <p className="text-xs text-slate-700 font-semibold">93 Müşterinin Tamamı 5 Yıldız Vermiştir.</p>
                <p className="text-[11px] text-slate-400 mt-1">Esenyurt, İstanbul Bölgesel Esnaf Puanı</p>
              </div>

              {reviews.map((rev, index) => (
                <div key={index} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center font-bold text-xs">
                        {rev.initials}
                      </div>
                      <span className="text-sm font-bold text-slate-800">{rev.author}</span>
                    </div>
                    <div className="flex text-amber-500">
                      <Star className="h-3.5 w-3.5 fill-amber-500" />
                      <Star className="h-3.5 w-3.5 fill-amber-500" />
                      <Star className="h-3.5 w-3.5 fill-amber-500" />
                      <Star className="h-3.5 w-3.5 fill-amber-500" />
                      <Star className="h-3.5 w-3.5 fill-amber-500" />
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 italic pl-9">
                    "{rev.text}"
                  </p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-slate-100 p-4 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-semibold text-slate-500">
                Detaylı harita yorumları için Google Haritalar'ı ziyaret edebilirsiniz.
              </span>
              <a
                href="https://maps.google.com/?q=İstiklal,+Platin+Sk.+No:32-34,+34500+Esenyurt+/+İstanbul"
                target="_blank"
                referrerPolicy="no-referrer"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-1"
              >
                <span>Google'da İncele</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
