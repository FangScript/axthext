import React from 'react';

export const ElevenLabsLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 120 25" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="0" y="20" fontFamily="Satoshi, sans-serif" fontSize="18" fontWeight="bold" fill="#111827">
            <tspan fillOpacity="0.3">|||</tspan> ElevenLabs
        </text>
    </svg>
);