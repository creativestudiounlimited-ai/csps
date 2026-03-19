import { useState } from "react";
import { X } from "lucide-react";

const speakers = [
  {
    name: "MR KEON CHEE",
    role: "Founder & Executive Director of Riverside Trustees",
    tagline:
      "Founder & Executive Director of Riverside Trustees",
    paragraphs: [
      "Keon's career spans 30 years, the past 20 of which have been in finance, estate planning and trust services. He is the author of Planning Your Will, Trust, LPA and More in which he collaborated with over 30 practitioners from over 12 countries. He is often sought by the local media for his views on estate planning.",
    ],
    image:
      "/images/speaker-1.webp",
  },
  {
    name: "MS OOI LI SUN",
    role: "Director of Riverside Planning Services",
    tagline: "Director of Riverside Planning Services",
    paragraphs: [
      "Li Sun has vast experience in estate planning. She has handled or overseen over 400 estate and trust cases. She chambered under Messrs Adnan, Sundra and Low and was admitted as an Advocate and Solicitor in the High Court of Malaya then joined Rockwills Singapore (now known as PreceptsGroup) and led their will, Custody and Estate Administration team in 2014 until mid-2024 when she joined Riverside. She's written over 3,000 wills and testamentary trusts for Malaysians, Singaporeans and foreigners.",
    ],
    image:
      "/images/speaker-2.webp",
  },
  {
    name: "MS LOW SEOW LING",
    role: "Founder & MD of Emre Legal LLC · Lawyer · Guest Speaker",
    tagline: "Lawyer · Guest Speaker",
    paragraphs: [
      "Seow Ling specialises in sustainable estate planning for singles, families with special needs, and the elderly. Appointed in the first batch of professionals under the Professional Deputy and Donee scheme in 2018, she is dedicated to supporting individuals without family to act as their proxy decision-maker. With experience in contested estates, mental capacity, divorce, and child custody matters, she brings a deep understanding of sensitive family issues. As an accredited mediator, she advocates for amicable, sustainable resolutions through communication and interest-based negotiation. Fluent in Mandarin, Seow Ling regularly shares her expertise with organisations such as SPED schools, MOM, CPF Board, and SNTC.",
    ],
    image:
      "/images/speaker-3.webp",
  },
  {
    name: "MS JENNY TAN",
    role: "Client Services Director Riverside Trustees Limited",
    tagline:
      "Client Services Director Riverside Trustees Limited",
    paragraphs: [
      "Jenny holds a Bachelor of Law Degree (LLB) from the University of Birmingham and a Bachelor of Business in Banking and Finance (BBA) from Monash University. She is a member of STEP and has attained the Advance Certificate in Trust Services with the Wealth Management Institute. She has accumulated vast experiences in structuring different types of trusts for banking clients since her banking days as a Private Banker. With more than 10 years of experience as a trust manager, and 16 years as a wealth manager, she excels in delivering superior results by providing expert guidance on trust administration, estate planning, compliance and investment management.",
    ],
    image:
      "/images/speaker-4.webp",
  },
];

export function Speakers() {
  const [expandedCard, setExpandedCard] = useState<
    number | null
  >(null);

  const toggleCard = (index: number) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[44px] md:leading-[1.1] font-bold tracking-tight text-[#ab0f0f] mb-6">
            Meet the Experts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your Professional Instructors & Mentors
          </p>
        </div>

        {/* Grid of Speaker Cards */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-6 md:gap-8 pb-8 md:pb-0 -mx-6 px-6 md:mx-auto md:px-0 md:grid-cols-2 max-w-5xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow relative flex flex-col min-w-[85vw] sm:min-w-[350px] md:min-w-0 snap-start"
            >
              {/* Speaker Image - Adjusted height to 400px to look balanced in 4 columns */}
              <div className="h-[400px] w-full overflow-hidden relative">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Expanded Content Overlay */}
                {expandedCard === index && (
                  <div className="absolute inset-0 bg-white bg-opacity-95 backdrop-blur-sm overflow-y-auto p-6 animate-slideDown z-20">
                    <button
                      onClick={() => toggleCard(index)}
                      className="absolute top-4 right-4 w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors z-30"
                    >
                      <X className="w-4 h-4 text-gray-700" />
                    </button>

                    <div className="pr-2">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        {speaker.name}
                      </h3>
                      <p className="text-[#ab0f0f] font-semibold mb-4 text-sm leading-tight">
                        {speaker.role}
                      </p>

                      <div className="space-y-3">
                        {speaker.paragraphs.map(
                          (paragraph, pIndex) => (
                            <p
                              key={pIndex}
                              className="text-gray-700 text-xs leading-relaxed"
                            >
                              {paragraph}
                            </p>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Speaker Info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-1 text-gray-900">
                  {speaker.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm flex-grow">
                  {speaker.role}
                </p>

                {/* MORE Button */}
                <button
                  onClick={() => toggleCard(index)}
                  className="px-6 py-2 border-2 border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-colors font-medium text-xs self-start"
                >
                  {expandedCard === index ? "LESS" : "MORE"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
