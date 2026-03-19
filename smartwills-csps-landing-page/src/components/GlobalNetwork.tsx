import React from 'react';
import { Globe2, Network, Lightbulb, Compass } from 'lucide-react';

const networkItems = [
  {
    id: 1,
    title: 'Cross-Border Opportunities',
    icon: Globe2,
  },
  {
    id: 2,
    title: 'Global Referral Network',
    icon: Network,
  },
  {
    id: 3,
    title: 'Exchange Proven Strategies',
    icon: Lightbulb,
  },
  {
    id: 4,
    title: 'Elevate Your Perspective',
    icon: Compass,
  },
];

export function GlobalNetwork() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[44px] md:leading-[1.1] font-bold tracking-tight text-[#ab0f0f] mb-6">
            Network Globally. Expand Your Reach.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join a thriving international community of Certified Smart Planners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {networkItems.map((item) => {
            const Icon = item.icon;
            
            return (
              <div key={item.id} className="text-center flex flex-col items-center py-8 md:py-0 md:px-6">
                <div className="bg-[#fef2f2] p-4 rounded-2xl text-[#ab0f0f] mb-6 w-fit mx-auto">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
