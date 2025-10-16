import React from 'react';
import { TwitterIcon } from './icons/TwitterIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { GithubIcon } from './icons/GithubIcon';
import { DiscordIcon } from './icons/DiscordIcon';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-white transition-colors">
      {children}
    </a>
  </li>
);

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-gray-500 hover:text-white transition-colors">{children}</a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0E] border-t border-gray-800 pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold mb-4">AXTHTECH</h2>
            <p className="text-gray-400 max-w-xs">
              Open source cryptography to make the internet private.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Solutions</h4>
            <ul className="space-y-3">
              <FooterLink href="#">fhEVM</FooterLink>
              <FooterLink href="#">TFHE-rs</FooterLink>
              <FooterLink href="#">Concrete</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Developers</h4>
            <ul className="space-y-3">
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">Github</FooterLink>
              <FooterLink href="#">Bug Bounty</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Contact us</FooterLink>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} AXTHTECH. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <SocialIcon href="#"><TwitterIcon className="w-5 h-5" /></SocialIcon>
            <SocialIcon href="#"><LinkedInIcon className="w-5 h-5" /></SocialIcon>
            <SocialIcon href="#"><GithubIcon className="w-5 h-5" /></SocialIcon>
            <SocialIcon href="#"><DiscordIcon className="w-5 h-5" /></SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;