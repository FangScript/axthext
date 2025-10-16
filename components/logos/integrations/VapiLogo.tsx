import React from 'react';

export const VapiLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="vapiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22D3EE" />
                <stop offset="100%" stopColor="#0E7490" />
            </linearGradient>
        </defs>
        <text x="50" y="28" fontFamily="Satoshi, sans-serif" fontSize="28" fontWeight="bold" fill="url(#vapiGradient)" textAnchor="middle">VAPI</text>
    </svg>
);
