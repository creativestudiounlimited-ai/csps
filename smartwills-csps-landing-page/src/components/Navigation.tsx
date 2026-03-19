import React from 'react';
import { Shield } from 'lucide-react';

export function Navigation() {
  return (
    <header className="z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto flex items-center justify-center py-4 px-6">
        {/* Logo Area */}
        <div className="flex items-center justify-center">
          <img 
            src="/images/logo.webp" 
            alt="Smart Wills Logo" 
            className="h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling;
              if (fallback) fallback.classList.remove('hidden');
            }}
          />
          <div className="hidden flex items-center space-x-2">
            <div className="bg-[#ab0f0f] text-white p-2 rounded-lg">
               <Shield className="w-6 h-6" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-[#ab0f0f]">Smart Wills</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
