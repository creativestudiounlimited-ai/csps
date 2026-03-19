import React from 'react';
import { motion } from 'motion/react';
import { CountdownTimer } from './CountdownTimer';

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto text-center pt-24 pb-20 px-6">
      <CountdownTimer />
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-8 leading-tight"
      >
        <span className="lg:whitespace-nowrap">Master Estate Planning. Grow Your Income.</span><br />
        <span className="text-[#ab0f0f]">Secure Legacies.</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg md:text-xl text-gray-600 max-w-4xl lg:whitespace-nowrap mx-auto mb-10 leading-relaxed"
      >
        Build a profitable advisory business with our complete will-writing training and support tools.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex justify-center mb-10"
      >
        <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0 w-fit">
          
          {/* Calendar Section */}
          <div className="flex items-center space-x-4">
            <div className="bg-[#fef2f2] p-3 rounded-xl text-[#ab0f0f]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="font-bold text-gray-900 text-lg">Every Friday</span>
          </div>

          {/* Divider */}
          <div className="hidden sm:block h-10 w-[1px] bg-gray-200"></div>
          <div className="sm:hidden w-full h-[1px] bg-gray-200"></div>

          {/* Time Section */}
          <div className="flex items-center space-x-4">
            <div className="bg-[#fef2f2] p-3 rounded-xl text-[#ab0f0f]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-gray-900 text-lg">9:00 PM – 10:00 PM</span>
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">GMT+8 (Singapore Time)</span>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center space-x-4 mb-16"
      >
        <a href="#benefit" className="bg-[#ab0f0f] text-white px-8 py-4 rounded-full border border-transparent font-bold hover:bg-red-900 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200 inline-block">
          Learn More
        </a>
      </motion.div>

    </section>
  );
}
