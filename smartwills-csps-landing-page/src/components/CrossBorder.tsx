import React from 'react';
import { Globe, Shield, TrendingDown, RefreshCw } from 'lucide-react';

export function CrossBorder() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-[44px] md:leading-[1.1] lg:whitespace-nowrap font-bold tracking-tight text-[#ab0f0f] mb-6">
            Draft Cross-Border Wills. Capture Global Wealth.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Go borderless. SmartWills provides the legal frameworks to seamlessly structure estates across Singapore, Malaysia, Hong Kong, and beyond.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Feature 1: Master Jurisdictions */}
          <div className="text-center bg-white p-8 rounded-2xl border border-[#E5E7EB] shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <div className="w-12 h-12 mb-6 mx-auto flex items-center justify-center bg-gray-50 rounded-xl border border-gray-100">
              <Globe className="w-6 h-6 text-[#ab0f0f]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Master Jurisdictions</h3>
            <p className="text-gray-500 leading-relaxed text-base">Navigate complex legal frameworks across borders with absolute confidence.</p>
          </div>

          {/* Feature 2: Protect Global Assets */}
          <div className="text-center bg-white p-8 rounded-2xl border border-[#E5E7EB] shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <div className="w-12 h-12 mb-6 mx-auto flex items-center justify-center bg-gray-50 rounded-xl border border-gray-100">
              <Shield className="w-6 h-6 text-[#ab0f0f]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Protect Global Assets</h3>
            <p className="text-gray-500 leading-relaxed text-base">Secure overseas properties, foreign bank accounts, and international investments.</p>
          </div>

          {/* Feature 3: Minimize Tax Impact */}
          <div className="text-center bg-white p-8 rounded-2xl border border-[#E5E7EB] shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <div className="w-12 h-12 mb-6 mx-auto flex items-center justify-center bg-gray-50 rounded-xl border border-gray-100">
              <TrendingDown className="w-6 h-6 text-[#ab0f0f]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Minimize Tax Impact</h3>
            <p className="text-gray-500 leading-relaxed text-base">Structure wealth transfers to avoid unnecessary foreign estate taxes.</p>
          </div>

          {/* Feature 4: Ensure Seamless Transfer */}
          <div className="text-center bg-white p-8 rounded-2xl border border-[#E5E7EB] shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <div className="w-12 h-12 mb-6 mx-auto flex items-center justify-center bg-gray-50 rounded-xl border border-gray-100">
              <RefreshCw className="w-6 h-6 text-[#ab0f0f]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Ensure Seamless Transfer</h3>
            <p className="text-gray-500 leading-relaxed text-base">Guarantee beneficiaries receive offshore assets without costly legal delays.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
