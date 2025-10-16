
import React from 'react';
import { CheckIcon } from './icons/CheckIcon';
import { CodeIcon } from './icons/CodeIcon';

const FhevmIntro: React.FC = () => {
  const features = [
    {
      title: 'On-chain confidentiality',
      description: 'Encrypt data on-chain with homomorphic encryption, ensuring privacy by default.',
    },
    {
      title: 'No performance overhead',
      description: 'AXTHTECH\'s fhEVM brings FHE to Solidity without sacrificing performance or speed.',
    },
    {
      title: 'Seamless integration',
      description: 'The fhEVM is designed for easy integration into any EVM chain as a pre-compile.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Introducing fhEVM: The Confidential Smart Contract Protocol
          </h2>
          <p className="text-lg text-gray-400">
            The fhEVM is an extension of the Ethereum Virtual Machine (EVM) that enables developers to build confidential smart contracts using Fully Homomorphic Encryption (FHE).
          </p>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <CheckIcon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{feature.title}</h4>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-purple-600/20 rounded-full filter blur-3xl"></div>
          <div className="relative space-y-4">
            <div className="bg-[#0D0D11] p-4 rounded-lg border border-gray-700">
              <p className="text-gray-400 text-sm mb-2">Solidity Smart Contract</p>
              <div className="flex items-center gap-2">
                <CodeIcon className="w-6 h-6 text-purple-400" />
                <span className="font-mono text-gray-300">EncryptedState.sol</span>
              </div>
            </div>
             <div className="text-center my-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
            <div className="bg-[#0D0D11] p-4 rounded-lg border border-gray-700">
              <p className="text-gray-400 text-sm mb-2">Zama fhEVM Library</p>
              <div className="flex items-center gap-2">
                 <div className="w-6 h-6 bg-blue-500/20 rounded-md"></div>
                <span className="font-mono text-gray-300">fhe.sol</span>
              </div>
            </div>
             <div className="text-center my-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
            <div className="bg-[#0D0D11] p-4 rounded-lg border border-gray-700">
              <p className="text-gray-400 text-sm mb-2">Any EVM Blockchain</p>
              <div className="flex items-center gap-2">
                 <div className="w-6 h-6 bg-gray-500/20 rounded-md"></div>
                <span className="font-mono text-gray-300">Ethereum, Polygon, etc.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FhevmIntro;