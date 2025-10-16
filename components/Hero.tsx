import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-52 md:pt-36 md:pb-76 flex items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Spotlight */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_rgba(99,102,241,0.25),_transparent_60%)]" aria-hidden="true"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Top Pill */}
        <div className="mb-6 sm:mb-8 inline-flex items-center bg-black/50 border border-gray-800 rounded-full p-1 backdrop-blur-sm">
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            2025
          </span>
          <span className="ml-3 mr-2 text-sm text-gray-300">
            Next-Gen AI Studio
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-5 sm:mb-6 text-white leading-tight">
          Business Automation<br />Reimagined
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto mb-8 sm:mb-10">
          From chaos to clarity—custom N8N and GHL automations that transform how your business operates.
        </p>

        {/* CTA Button */}
        <button className="bg-gray-200 hover:bg-white text-black font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors duration-300 transform hover:scale-105">
          Book a Demo
        </button>
      </div>

      {/* Bottom decorative element from image */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-indigo-500/70 rounded-full" aria-hidden="true"></div>
    </section>
  );
};

export default Hero;