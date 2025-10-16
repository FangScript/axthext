import React from 'react';
import { PowerIcon } from './icons/PowerIcon';
import { ClayLogo } from './logos/integrations/ClayLogo';
import { ElevenLabsLogo } from './logos/integrations/ElevenLabsLogo';
import { GmailLogo } from './logos/integrations/GmailLogo';
import { VapiLogo } from './logos/integrations/VapiLogo';
import { WhatsappLogo } from './logos/integrations/WhatsappLogo';
import { AirtableLogo } from './logos/integrations/AirtableLogo';
import { NotionLogo } from './logos/integrations/NotionLogo';
import { SlackLogo } from './logos/integrations/SlackLogo';
import { TelegramLogo } from './logos/integrations/TelegramLogo';
import { ShopifyLogo } from './logos/integrations/ShopifyLogo';


const icons = [
  { component: ClayLogo, name: 'Clay', dark: false },
  { component: GmailLogo, name: 'Gmail', dark: false },
  { component: VapiLogo, name: 'Vapi', dark: true },
  { component: ElevenLabsLogo, name: 'ElevenLabs', dark: false },
  { component: WhatsappLogo, name: 'Whatsapp', dark: false },
  { component: AirtableLogo, name: 'Airtable', dark: false },
  { component: NotionLogo, name: 'Notion', dark: true },
  { component: SlackLogo, name: 'Slack', dark: false },
  { component: TelegramLogo, name: 'Telegram', dark: false },
  { component: ShopifyLogo, name: 'Shopify', dark: false },
  { component: SlackLogo, name: 'Slack2', dark: false },
];

const IconCard: React.FC<{ icon: React.ElementType, isDark: boolean, name: string }> = ({ icon: Icon, isDark, name }) => {
  return (
    <div className={`
      w-full h-full rounded-2xl flex items-center justify-center p-4
      transition-all duration-300 ease-in-out
      ${isDark 
        ? 'bg-black/80 border border-white/10' 
        : 'bg-white/90 border border-black/5'
      }
      backdrop-blur-sm shadow-xl
    `}>
      <Icon className="w-full h-full object-contain" aria-label={name} />
    </div>
  )
}

const Integrations: React.FC = () => {
  const radius = 380; // pixels
  const arc = 220; // degrees
  const startAngle = -arc / 2;

  return (
    <section className="relative w-full py-48 flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-purple-900/40 rounded-full blur-3xl" />

      {/* Rotating Arc */}
      <div className="absolute top-1/2 left-1/2 w-0 h-0" style={{ perspective: '1200px' }}>
          <div className="relative w-[1px] h-[1px] animate-arc-rotate">
              {icons.map((icon, index) => {
                  const angle = startAngle + (index / (icons.length - 1)) * arc;
                  const style: React.CSSProperties = {
                      transform: `
                          rotate(${angle}deg) 
                          translateY(-${radius}px) 
                          rotate(${-angle}deg)
                          rotateX(65deg)
                          rotateZ(-10deg)
                      `,
                  };

                  return (
                      <div
                          key={icon.name}
                          className="absolute top-0 left-0 w-24 h-24 -ml-12 -mt-12"
                          style={style}
                      >
                         <IconCard icon={icon.component} isDark={icon.dark} name={icon.name} />
                      </div>
                  );
              })}
          </div>
      </div>
      
      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <div className="w-3 h-3 bg-white rounded-full mb-8 shadow-2xl shadow-white/50" />
        <div className="inline-flex items-center gap-2 bg-[#1E1B29] border border-[#3A3258] rounded-full py-1 pl-2 pr-4 mb-6 backdrop-blur-sm shadow-md">
          <div className="bg-gradient-to-br from-[#6D28D9] to-[#4F46E5] p-1.5 rounded-full">
            <PowerIcon className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-medium text-gray-200">Features</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Seamless Integrations.
        </h2>
        <p className="max-w-md text-gray-400 mb-8 text-lg">
          N8N and GHL connects with the tools you already use—automating workflows across hundreds of apps.
        </p>
        <button className="bg-gradient-to-r from-[#6D28D9] to-[#4F46E5] text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transition-opacity transform hover:scale-105 duration-300">
          Book an Appointment
        </button>
      </div>
    </section>
  );
};

export default Integrations;