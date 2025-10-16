import React from 'react';
import { IncoLogo } from './logos/IncoLogo';
import { FhenixLogo } from './logos/FhenixLogo';
import { FairmathLogo } from './logos/FairmathLogo';
import { ShibaLogo } from './logos/ShibaLogo';
import { MindNetworkLogo } from './logos/MindNetworkLogo';

const logos = [
  { component: IncoLogo, name: 'Inco' },
  { component: FhenixLogo, name: 'Fhenix' },
  { component: FairmathLogo, name: 'Fairmath' },
  { component: ShibaLogo, name: 'Shiba' },
  { component: MindNetworkLogo, name: 'Mind Network' },
];

const TrustedBy: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4">
      <div className="container mx-auto text-center">
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-12">
          Trusted by the best
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-12 sm:gap-x-16 gap-y-10">
          {logos.map(({ component: Logo, name }) => (
            <div key={name} className="h-8 text-gray-500 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Logo className="h-full w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
