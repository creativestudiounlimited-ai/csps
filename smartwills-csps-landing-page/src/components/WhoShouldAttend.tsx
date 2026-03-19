import React from 'react';
import { LineChart, Flower2, Home, Users, Landmark, Shield, Calculator, Briefcase, CheckCircle2 } from 'lucide-react';

export function WhoShouldAttend() {
  const points: { title: string; icon: any; subtitle?: string }[] = [
    {
      title: "Financial Planners",
      icon: LineChart,
    },
    {
      title: "Funeral Agents",
      icon: Flower2,
    },
    {
      title: "Property Agents",
      icon: Home,
    },
    {
      title: "Career Switch",
      icon: Users,
    },
    {
      title: "Bankers",
      icon: Landmark,
    },
    {
      title: "Insurance Agents",
      icon: Shield,
    },
    {
      title: "Accountants",
      icon: Calculator,
    },
    {
      title: "Consultants",
      icon: Briefcase,
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <div>
              <h2 className="text-3xl md:text-[44px] md:leading-[1.1] font-bold tracking-tight text-[#ab0f0f] mb-6">
                Who Should Attend
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Take your advisory business to the next level by adding comprehensive legacy planning to your expertise.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-8">
              {points.map((point, index) => {
                const IconComponent =
                  point.icon || CheckCircle2;

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    {/* Red Icon Square */}
                    <div className="w-24 h-24 bg-[#ab0f0f] rounded-[1rem] flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 shadow-md group-hover:shadow-lg">
                      <IconComponent className="w-10 h-10 text-white stroke-[1.5]" />
                    </div>

                    {/* Title Text */}
                    <h3 className="text-gray-900 font-bold text-center text-sm sm:text-base">
                      {point.title}
                    </h3>

                    {/* Subtitle Text */}
                    {point.subtitle && (
                      <p className="text-gray-500 text-xs text-center mt-0 font-medium">
                        {point.subtitle}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
