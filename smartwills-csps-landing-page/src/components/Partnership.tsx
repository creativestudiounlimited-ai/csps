import React from 'react';

export function Partnership() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Title Text */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h3 className="text-[22px] font-bold text-gray-900 leading-tight">
            We're Proud to Partner with<br />Leading Organizations
          </h3>
        </div>

        {/* Divider (Vertical on desktop, horizontal on mobile) */}
        <div className="hidden md:block w-[1px] h-12 bg-gray-300"></div>

        {/* Logos Grid */}
        <div className="flex flex-wrap items-center justify-center gap-10">
          <img src="/images/partner-1.webp" alt="Partner 1" className="h-12 object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" referrerPolicy="no-referrer" />
          <img src="/images/partner-2.webp" alt="Partner 2" className="h-12 object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" referrerPolicy="no-referrer" />
        </div>
        
      </div>
    </section>
  );
}
