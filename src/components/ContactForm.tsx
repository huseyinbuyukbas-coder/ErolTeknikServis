/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ChangeEvent, FormEvent } from 'react';
import { Phone, MessageSquare, Clock, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    device: 'Kombi',
    issue: '',
    address: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [waLink, setWaLink] = useState('');

  const devices = [
    'Kombi',
    'Çamaşır Makinesi',
    'Bulaşık Makinesi',
    'Anakart / Elektronik Kart',
    'Diğer Beyaz Eşya',
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.issue) {
      alert('Lütfen gerekli alanları doldurunuz.');
      return;
    }

    // Generate WhatsApp text message template exactly as requested:
    const messageText = `Merhaba Erol Teknik, servis hizmeti almak istiyorum.

Ad Soyad: ${formData.fullName}
Telefon: ${formData.phone}
Cihaz: ${formData.device}
Arıza: ${formData.issue}
Adres: ${formData.address || 'Belirtilmedi'}`;

    // Encode text for URL
    const encodedText = encodeURIComponent(messageText);
    const generatedUrl = `https://wa.me/905346920123?text=${encodedText}`;
    
    setWaLink(generatedUrl);
    setIsSubmitted(true);

    // Attempt direct redirection
    setTimeout(() => {
      window.location.href = generatedUrl;
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      device: 'Kombi',
      issue: '',
      address: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-slate-50 z-10 scroll-mt-20 border-t border-slate-100">
      <div className="absolute top-1/4 right-10 w-[300px] h-[300px] bg-amber-500/[0.01] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-amber-800 text-xs font-extrabold uppercase tracking-widest bg-amber-100 px-3.5 py-1.5 rounded-full inline-block">
            İLETİŞİM VE RANDEVU
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Servis Talebiniz İçin Bize Ulaşın
          </h2>
          <p className="text-base text-slate-600">
            Formu doldurarak arıza kaydınızı oluşturun, bilgileriniz anında WhatsApp üzerinden Ömer Usta'ya iletilsin ve hızlı servis planlansın.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Telefon Card */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex items-start gap-4">
              <div className="bg-amber-50 border border-amber-100 text-amber-600 p-3.5 rounded-xl shrink-0">
                <Phone className="h-6 w-6 stroke-[2.5]" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">DOĞRUDAN ARA</p>
                <p className="text-lg font-extrabold text-slate-800">0534 692 01 23</p>
                <p className="text-xs text-slate-600">Tek tıkla Ömer Usta ile doğrudan görüşün.</p>
                <a
                  href="tel:+905346920123"
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors pt-2"
                >
                  <span>Hemen Ara</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex items-start gap-4">
              <div className="bg-emerald-50 border border-emerald-100 text-emerald-600 p-3.5 rounded-xl shrink-0">
                <MessageSquare className="h-6 w-6 stroke-[2.5]" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">ANLIK MESAJLAŞMA</p>
                <p className="text-lg font-extrabold text-slate-800">WhatsApp Destek Hattı</p>
                <p className="text-xs text-slate-600">Arızalı parçanın fotoğrafını veya videosunu iletin.</p>
                <a
                  href="https://wa.me/905346920123"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors pt-2"
                >
                  <span>WhatsApp'tan Yaz</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Çalışma Saatleri */}
            <div className="bg-slate-100/60 border border-slate-200 p-6 rounded-2xl space-y-4">
              <p className="text-xs font-black text-slate-600 uppercase tracking-widest flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-amber-600" />
                <span>ÇALIŞMA SAATLERİ</span>
              </p>
              
              <div className="space-y-2.5 text-sm">
                <div className="flex items-center justify-between font-medium">
                  <span className="text-slate-600">Pazartesi - Pazar</span>
                  <span className="text-slate-800 font-bold">08:30 - 21:30</span>
                </div>
                <div className="flex items-center justify-between font-medium">
                  <span className="text-slate-600">Haftalık Durum</span>
                  <span className="text-emerald-700 font-extrabold bg-emerald-100 px-2.5 py-0.5 rounded-full text-xs">
                    Her Gün Açık / Aktif
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed pt-2 border-t border-slate-200">
                * Acil durumlarda mesai saatleri dışından da sesli servis kaydı oluşturabilirsiniz.
              </p>
            </div>

          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-6 sm:p-10 rounded-2xl shadow-md relative">
            
            {isSubmitted ? (
              // Success feedback screen with custom action trigger
              <div className="text-center py-10 space-y-6 animate-fadeIn">
                <div className="bg-emerald-50 text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                  <CheckCircle2 className="h-10 w-10 stroke-[2]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-slate-850">Servis Bilgileri Hazırlandı!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Arıza kayıt bilgileriniz WhatsApp formatına başarıyla dönüştürüldü. Otomatik yönlendirme gerçekleşmezse aşağıdaki butona tıklayarak gönderebilirsiniz.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-left max-w-md mx-auto">
                  <pre className="text-xs text-slate-600 font-mono whitespace-pre-wrap">
                    {`Merhaba Erol Teknik, servis hizmeti almak istiyorum.\n\nAd Soyad: ${formData.fullName}\nTelefon: ${formData.phone}\nCihaz: ${formData.device}\nArıza: ${formData.issue}\nAdres: ${formData.address}`}
                  </pre>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <a
                    href={waLink}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-black px-6 py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                  >
                    <MessageSquare className="h-4.5 w-4.5 fill-current" />
                    <span>WhatsApp ile Gönderimi Tamamla</span>
                  </a>
                  
                  <button
                    onClick={handleReset}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-6 py-3.5 rounded-xl text-sm uppercase tracking-wider"
                  >
                    Yeni Talep Oluştur
                  </button>
                </div>
              </div>
            ) : (
              // Standard Active Form
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 2 Inputs in a Row on Desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-xs font-extrabold text-slate-500 uppercase tracking-widest">
                      Ad Soyad <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="Örn: Ahmet Yılmaz"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-amber-500 focus:outline-none focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition-colors"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-xs font-extrabold text-slate-500 uppercase tracking-widest">
                      Telefon Numarası <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      required
                      placeholder="Örn: 0534 692 01 23"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-amber-500 focus:outline-none focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Device Selector */}
                <div className="space-y-2">
                  <label htmlFor="device-select" className="block text-xs font-extrabold text-slate-500 uppercase tracking-widest">
                    Cihaz Türü <span className="text-amber-600">*</span>
                  </label>
                  <select
                    id="device-select"
                    name="device"
                    value={formData.device}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-amber-500 focus:outline-none focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-800 transition-colors cursor-pointer"
                  >
                    {devices.map((device, idx) => (
                      <option key={idx} value={device} className="bg-white text-slate-800">
                        {device}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Fault field */}
                <div className="space-y-2">
                  <label htmlFor="issue" className="block text-xs font-extrabold text-slate-500 uppercase tracking-widest">
                    Arıza / Sorun Detayı <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="issue"
                    name="issue"
                    required
                    placeholder="Örn: Kombi sıcak su vermiyor"
                    value={formData.issue}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-amber-500 focus:outline-none focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition-colors"
                  />
                </div>

                {/* Address field */}
                <div className="space-y-2">
                  <label htmlFor="address" className="block text-xs font-extrabold text-slate-500 uppercase tracking-widest">
                    Adres / Mahalle <span className="text-slate-400 font-semibold">(Önerilir)</span>
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows={3}
                    placeholder="Esenyurt İstiklal Mahallesi, Platin Sokak..."
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-amber-500 focus:outline-none focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-black py-4 rounded-xl shadow-lg transition-all text-sm flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                >
                  <Send className="h-4.5 w-4.5" />
                  <span>Servis Talebi Gönder (WhatsApp ile)</span>
                </button>

                {/* Safe secure badge */}
                <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5 text-amber-500" />
                  <span>Kişisel verileriniz kaydedilmez, doğrudan güvenli iletişim hattına gönderilir.</span>
                </p>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
