import React, { useState, useEffect, useRef } from 'react';

const AutomationHero: React.FC = () => {
  const text = "Built on innovation, automation, and precision, we create powerful N8N and GHL workflows tailored to your business needs—streamlining operations and saving valuable time.";
  const words = text.split(' ');

  const sectionRef = useRef<HTMLDivElement>(null);
  const [highlightedWordsCount, setHighlightedWordsCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const { top } = sectionRef.current.getBoundingClientRect();
      // The scrollable height is the total height of the section minus one viewport height.
      // This ensures progress goes from 0 to 1 over the course of scrolling through the section.
      const scrollableHeight = sectionRef.current.scrollHeight - window.innerHeight;
      
      // `top` will be 0 when the top of the section hits the top of the viewport. 
      // It becomes negative as we scroll down.
      let progress = -top / scrollableHeight;
      progress = Math.max(0, Math.min(1, progress)); // Clamp progress between 0 and 1

      const wordsToHighlight = Math.floor(progress * words.length);
      setHighlightedWordsCount(wordsToHighlight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once on mount to set initial state based on load position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [words.length]);

  return (
    <section ref={sectionRef} className="relative h-[250vh] bg-black">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-5xl text-center">
          <p className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight text-gray-400">
            {words.map((word, i) => (
              <span
                key={i}
                // Apply 'text-white' to highlighted words, otherwise they inherit gray from the parent.
                className={`transition-colors duration-300 ${i < highlightedWordsCount ? 'text-white' : ''}`}
              >
                {word}{' '}
              </span>
            ))}
          </p>
          <div className="mt-12">
            <button className="bg-gradient-to-r from-[#6D28D9] to-[#4F46E5] hover:opacity-90 text-white font-semibold py-3 px-8 rounded-lg transition-opacity duration-300 transform hover:scale-105">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationHero;
