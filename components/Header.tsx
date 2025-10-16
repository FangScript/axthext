import React, { useState } from 'react';
import { UseCaseIcon } from './icons/UseCaseIcon';
import { SolutionIcon } from './icons/SolutionIcon';
import { DocsIcon } from './icons/DocsIcon';
import { GithubIcon } from './icons/GithubIcon';
import { CommunityIcon } from './icons/CommunityIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

interface DropdownItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ icon, title, description, href = "#" }) => (
  <a href={href} className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-800/50 transition-colors">
    <div className="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
      {icon}
    </div>
    <div className="ml-4">
      <p className="text-base font-bold text-white">{title}</p>
      <p className="mt-1 text-sm text-gray-400">{description}</p>
    </div>
  </a>
);

const NavLink: React.FC<{item: NavItem; openMenu: string | null; setOpenMenu: (name: string | null) => void;}> = ({ item, openMenu, setOpenMenu }) => {
  const isOpen = openMenu === item.name;

  return (
    <div 
      className="relative"
      onMouseEnter={() => item.dropdown && setOpenMenu(item.name)}
      onMouseLeave={() => item.dropdown && setOpenMenu(null)}
    >
      <a href={item.href || '#'} className="text-gray-400 hover:text-white transition-colors py-2">
        {item.name}
      </a>
      {item.dropdown && isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-screen max-w-md">
          <div className="bg-[#0D0D11]/80 backdrop-blur-lg border border-gray-800 rounded-xl shadow-lg overflow-hidden animate-fade-in-scale">
            <div className="p-4 space-y-1">
              {item.dropdown.map((dropdownItem) => (
                <DropdownItem key={dropdownItem.title} {...dropdownItem} />
              ))}
            </div>
             {item.footerLink && (
              <div className="p-4 bg-gray-900/50">
                <a href={item.footerLink.href} className="group flex items-center justify-between text-sm text-blue-400 hover:text-blue-300">
                  <span>{item.footerLink.text}</span>
                  <ArrowRightIcon className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

interface NavItem {
  name: string;
  href?: string;
  dropdown?: DropdownItemProps[];
  footerLink?: { text: string; href: string; };
}

const navItems: NavItem[] = [
  {
    name: "Use cases",
    dropdown: [
      { icon: <UseCaseIcon className="w-5 h-5 text-blue-400"/>, title: "Confidential DeFi", description: "Prevent front-running and MEV." },
      { icon: <UseCaseIcon className="w-5 h-5 text-purple-400"/>, title: "Confidential DAOs", description: "Enable private voting and governance." },
      { icon: <UseCaseIcon className="w-5 h-5 text-green-400"/>, title: "On-chain Gaming", description: "Build games with hidden information." },
    ],
    footerLink: { text: "See all use cases", href: "#" }
  },
  {
    name: "Solutions",
    dropdown: [
      { icon: <SolutionIcon className="w-5 h-5 text-indigo-400"/>, title: "fhEVM", description: "Confidential smart contracts for EVM chains." },
      { icon: <SolutionIcon className="w-5 h-5 text-pink-400"/>, title: "TFHE-rs", description: "High-performance FHE library in Rust." },
      { icon: <SolutionIcon className="w-5 h-5 text-yellow-400"/>, title: "Concrete", description: "FHE compiler for data scientists." },
    ]
  },
  {
    name: "Developers",
    dropdown: [
        { icon: <DocsIcon className="w-5 h-5 text-gray-300" />, title: "Documentation", description: "Start building with our official docs." },
        { icon: <GithubIcon className="w-5 h-5 text-gray-300" />, title: "Github", description: "Explore our open-source repositories." },
        { icon: <CommunityIcon className="w-5 h-5 text-gray-300" />, title: "Community", description: "Join our Discord for help and discussion." },
    ]
  },
  { name: "Company", href: "#" },
  { name: "Blog", href: "#" },
];


const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 py-4 px-4 sm:px-8 bg-[#0D0D11]/80 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">AXTHTECH</h1>
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink key={item.name} item={item} openMenu={openMenu} setOpenMenu={setOpenMenu} />
          ))}
        </nav>
        <div className="flex items-center">
            <button className="block lg:hidden text-gray-400 hover:text-white" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
        </div>
      </div>
       {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 pt-4 border-t border-gray-800">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a key={item.name} href={item.href || '#'} className="text-gray-300 hover:text-white px-2 py-1 rounded-md">
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;