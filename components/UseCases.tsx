
import React from 'react';
import { DeFiIcon } from './icons/DeFiIcon';
import { DaoIcon } from './icons/DaoIcon';
import { GamingIcon } from './icons/GamingIcon';
import { IdentityIcon } from './icons/IdentityIcon';

interface UseCaseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ icon, title, description }) => (
  <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 transition-all duration-300 hover:border-blue-500/50 hover:-translate-y-1">
    <div className="mb-4 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
        {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const UseCases: React.FC = () => {
  const cases = [
    {
      icon: <DeFiIcon className="w-6 h-6 text-blue-400" />,
      title: 'Confidential DeFi',
      description: 'Prevent front-running and MEV in DeFi with on-chain encrypted transactions and state.',
    },
    {
      icon: <DaoIcon className="w-6 h-6 text-purple-400" />,
      title: 'Confidential DAOs',
      description: 'Enable private voting and governance in DAOs to protect voter privacy and prevent collusion.',
    },
    {
      icon: <GamingIcon className="w-6 h-6 text-green-400" />,
      title: 'Gaming',
      description: 'Build on-chain games with hidden information, such as strategy games or poker.',
    },
    {
      icon: <IdentityIcon className="w-6 h-6 text-red-400" />,
      title: 'Identity',
      description: 'Implement confidential on-chain identity and KYC solutions without revealing user data.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 bg-[#0D0D11]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Build confidential use cases on any EVM blockchain
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((useCase) => (
            <UseCaseCard key={useCase.title} {...useCase} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
