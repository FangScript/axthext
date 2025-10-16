
import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
       <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(124,58,237,0.1),_transparent_50%)]"></div>
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 max-w-3xl mx-auto">
          Ready to build the future of blockchain?
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
          Join our community of developers and start building confidential dApps today.
        </p>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Get started
          </button>
          <button className="bg-transparent border-2 border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
            Talk to an expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
