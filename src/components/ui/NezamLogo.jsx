import React from 'react';

export const NezamLogo = ({ className, size = 48 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 40 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <rect x="4" y="4" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" />
    <rect x="4" y="4" width="32" height="32" transform="rotate(45 20 20)" fill="none" stroke="currentColor" strokeWidth="2.5" />
    <path d="M13 27V13H17.5L22.5 21V13H27V27H22.5L17.5 19V27H13Z" fill="currentColor" />
  </svg>
);

export default NezamLogo;
