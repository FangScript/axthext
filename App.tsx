import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Integrations from './components/Integrations';
import TrustedBy from './components/TrustedBy';
import FhevmIntro from './components/FhevmIntro';
import UseCases from './components/UseCases';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#0D0D11] text-white font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Integrations />
        <TrustedBy />
        <FhevmIntro />
        <UseCases />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;