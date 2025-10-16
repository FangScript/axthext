import React from 'react';

export const GmailLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M32 6v20c0 1.135-.865 2-2 2h-2V10.723L16 22 4 10.723V28H2c-1.135 0-2-.865-2-2V6c0-.4.135-.784.4-.108L16 18l15.6-12.108c.265-.203.4-.595.4-.984z" fill="#eee"/>
        <path d="M29.988 4H2.012C.9 4 0 4.9 0 6v.41l16 12.31L32 6.41V6c0-1.1-.9-2-2.012-2z" fill="#CF3E34"/>
        <path d="M0 6.41V26c0 .73.405 1.378 1.027 1.729L13.667 18z" fill="#EA9189"/>
        <path d="M32 6.41L18.333 18l12.64-9.859C31.595 7.788 32 7.14 32 6.41z" fill="#E2574C"/>
    </svg>
);
