/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Partnership } from './components/Partnership';
import { Benefit } from './components/Benefit';
import { WhatYouLearn } from './components/WhatYouLearn';
import { CrossBorder } from './components/CrossBorder';
import { GlobalNetwork } from './components/GlobalNetwork';
import { GPLA } from './components/GPLA';
import { WhoShouldAttend } from './components/WhoShouldAttend';
import { Speakers } from './components/Speakers';
import { FAQ } from './components/FAQ';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#ab0f0f] selection:text-white">
      <Navigation />
      <Hero />
      <Partnership />
      <Benefit />
      <WhatYouLearn />
      <CrossBorder />
      <GPLA />
      <GlobalNetwork />
      <WhoShouldAttend />
      <Speakers />
      <FAQ />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-[#ab0f0f] text-white p-3 rounded-full shadow-lg hover:bg-red-900 transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ab0f0f]"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
