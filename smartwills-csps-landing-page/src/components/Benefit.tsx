import React from 'react';
import { Award, TrendingUp, Users, Shield } from 'lucide-react';

export function Benefit() {
  return (
    <section id="benefit" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          
          {/* Image & Testimonial Overlay Section */}
          <div className="relative h-full">
            {/* Placeholder Image */}
            <div className="h-full bg-gray-200 rounded-3xl overflow-hidden">
              <img src="/images/benefit-team.webp" alt="Team Discussion" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>

          {/* Content & Value Proposition */}
          <div>
            <h2 className="text-3xl md:text-[44px] md:leading-[1.1] font-bold tracking-tight text-[#ab0f0f] mb-6">
              Why Elite Advisors Are<br />Pivoting to Legacy Planning
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Stay ahead of industry shifts by mastering the final, most critical piece of the wealth management puzzle.
            </p>

          {/* Values List */}
          <div className="flex flex-col">
            <div className="flex gap-4 border-b border-gray-200 pb-8 mb-8">
              <div className="bg-[#ab0f0f] text-white p-3 h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Unlock High-Net-Worth Clients</h4>
                <p className="text-gray-500">Move beyond standard portfolios. Offer the comprehensive legacy solutions required to attract and retain high-tier clients.</p>
              </div>
            </div>

            <div className="flex gap-4 border-b border-gray-200 pb-8 mb-8">
              <div className="bg-[#ab0f0f] text-white p-3 h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Deepen Client Relationships</h4>
                <p className="text-gray-500">Transform from a transactional financial advisor into a trusted, lifelong confidant for the entire family.</p>
              </div>
            </div>

            <div className="flex gap-4 border-b border-gray-200 pb-8 mb-8">
              <div className="bg-[#ab0f0f] text-white p-3 h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Secure Intergenerational Wealth</h4>
                <p className="text-gray-500">Prevent capital flight. Ensure assets transfer smoothly so you retain AUM (Assets Under Management) across generations.</p>
              </div>
            </div>

            <div className="flex gap-4 border-b border-gray-200 pb-8">
              <div className="bg-[#ab0f0f] text-white p-3 h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Future-Proof Your Career</h4>
                <p className="text-gray-500">Shield your practice from industry commoditization by providing irreplaceable, end-to-end wealth structuring.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
