import React from 'react';
import { BookOpen, Globe, Target } from 'lucide-react';

const learningPoints = [
  {
    icon: BookOpen,
    title: "Foundations of Estate & Legacy Planning",
    description:
      "Move beyond simple will writing. Master the essential legal frameworks and distribution logic required to confidently advise High-Net-Worth families across Asia.",
  },
  {
    icon: Globe,
    title: "Trust Structuring & Client-Case Analysis",
    description:
      "Stop guessing and start solving. We dissect real-world case studies (handled by our faculty) to show you exactly how to structure trusts for asset protection and dispute avoidance.",
  },
  {
    icon: Target,
    title: "Incorporating FinTech Tools into Your Advisory",
    description:
      "Future-proof your practice. Learn to integrate the SmartWills digital ecosystem into your workflow to generate documents instantly and scale your service without legal bottlenecks.",
  },
];

export function WhatYouLearn() {
  return (
    <section id="programme" className="py-20 md:py-24 bg-[#ab0f0f]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[44px] md:leading-[1.1] font-bold tracking-tight text-white mb-6">
            The Certified SmartPlanner Programme
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto leading-relaxed">
            What you will learn?
          </p>
        </div>

        {/* Grid of Boxes */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {learningPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-[#ab0f0f] rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[24px] mb-4 font-bold text-gray-900">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center">
          <span className="font-bold text-[#ab0f0f] text-lg mb-2">
            Why It Works:
          </span>
          <p className="text-gray-600 text-base md:text-lg">
            Each module is designed to be practical, instructor-aligned, and
            directly useable in your advisory sessions.
          </p>
        </div>

      </div>
    </section>
  );
}
