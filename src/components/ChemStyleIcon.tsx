import React from 'react';
import { ChemStyleIconMap } from '../utils/chemstyles';

interface ChemStyleIconProps {
  name: string;
  className?: string;
  size?: number | string;
}

export function ChemStyleIcon({ name, className = "w-6 h-6", size }: ChemStyleIconProps) {
  const iconChar = ChemStyleIconMap[name];

  if (iconChar) {
    return (
      <span 
        className={`chem-icon inline-flex items-center justify-center font-normal leading-none select-none text-[#00e575] ${className}`}
        style={size ? { fontSize: typeof size === 'number' ? `${size}px` : size } : undefined}
      >
        {iconChar}
      </span>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#1A1A1A" stroke="#00E575" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="4" fill="#00E575"/>
    </svg>
  );
}
