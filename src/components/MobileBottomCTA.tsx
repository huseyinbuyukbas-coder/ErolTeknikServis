/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, MessageSquare } from 'lucide-react';

export default function MobileBottomCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl px-4 py-3.5 flex gap-3 items-center justify-between">
      
      {/* 📞 HEMEN ARA Button */}
      <a
        href="tel:+905346920123"
        className="flex-1 flex items-center justify-center gap-2 bg-amber-500 active:bg-amber-600 text-slate-950 font-black text-sm py-3.5 rounded-xl shadow-lg uppercase tracking-wide"
      >
        <Phone className="h-4.5 w-4.5 stroke-[2.5]" />
        <span>HEMEN ARA</span>
      </a>

      {/* 💬 WHATSAPP'TAN YAZ Button */}
      <a
        href="https://wa.me/905346920123"
        target="_blank"
        referrerPolicy="no-referrer"
        className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 active:bg-emerald-600 text-white font-black text-sm py-3.5 rounded-xl shadow-lg uppercase tracking-wide"
      >
        <MessageSquare className="h-4.5 w-4.5 text-emerald-200 stroke-[2.5]" />
        <span>WHATSAPP</span>
      </a>

    </div>
  );
}
