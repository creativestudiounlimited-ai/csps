import React from 'react';

export function GPLA() {
  return (
    <section id="gpla" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          
          {/* Left Column: Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-[44px] md:leading-[1.1] font-bold tracking-tight text-[#ab0f0f] mb-6">
              Complete the Cycle with Estate Administration
            </h2>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Go beyond the initial setup. Equip your practice to handle the final execution of your clients' estates when they need you most.
            </p>

          {/* List Points */}
          <div className="space-y-10">
            {/* Point 1 */}
            <div className="pb-8 border-b border-gray-200">
              <h4 className="font-bold text-xl mb-3 text-gray-900"><span className="text-[#ab0f0f]">Smart GP</span> - Grant of Probate Application</h4>
              <p className="text-gray-500">Close the loop on your estate planning. Ensure families can legally and swiftly unlock assets exactly as the will intended.</p>
            </div>

            {/* Point 2 */}
            <div className="pb-8 border-b border-gray-200">
              <h4 className="font-bold text-xl mb-3 text-gray-900"><span className="text-[#ab0f0f]">Smart LA</span> - Letters of Administration Application</h4>
              <p className="text-gray-500">Provide the ultimate safety net. Guide vulnerable families through complex court applications to secure assets when no will exists.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="w-full relative min-h-[300px] lg:min-h-0 order-1 lg:order-2">
          <div className="absolute inset-0 bg-gray-100 rounded-3xl overflow-hidden">
            <img src="/images/estate-admin.webp" alt="Estate Administration" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
