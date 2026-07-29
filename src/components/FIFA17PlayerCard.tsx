import React from 'react';
import { PlayerHoverWrapper } from './PlayerHoverCard';

export interface FIFA17PlayerCardProps {
  name: string;
  rating: number | string;
  position: string;
  cardBackgroundUrl?: string;
  playerImageUrl?: string;
  nationFlagUrl?: string;
  clubCrestUrl?: string;
  stats?: {
    stat1: { label: string; value: number | string };
    stat2: { label: string; value: number | string };
    stat3: { label: string; value: number | string };
    stat4: { label: string; value: number | string };
    stat5: { label: string; value: number | string };
    stat6: { label: string; value: number | string };
  };
  isLoading?: boolean;
}

const defaultStats = {
    stat1: { label: 'PAC', value: '--' },
    stat2: { label: 'DRI', value: '--' },
    stat3: { label: 'SHO', value: '--' },
    stat4: { label: 'DEF', value: '--' },
    stat5: { label: 'PAS', value: '--' },
    stat6: { label: 'PHY', value: '--' },
};

import { blankCardDataUri } from './BlankCardSvg';

export const defaultBgImage = blankCardDataUri;

export function FIFA17PlayerCardBase({
  name,
  rating,
  position,
  cardBackgroundUrl,
  playerImageUrl,
  nationFlagUrl,
  clubCrestUrl,
  stats = defaultStats,
  isLoading
}: FIFA17PlayerCardProps) {
  return (
      <div className="relative w-full aspect-[2/3] font-sans text-[#222] rounded-lg overflow-hidden group">
        {/* LAYER 1 (Base - Z-Index 10): Card Frame Asset */}
        <div 
          className="absolute inset-0 z-10 bg-center bg-cover bg-no-repeat rounded-lg"
          style={{ backgroundImage: `url(${cardBackgroundUrl || defaultBgImage})`, backgroundColor: '#e2e2e2' }}
        />

        {/* LAYER 2 (Player Render - Z-Index 20): Dynamic Cutout */}
        <div className="absolute top-[12%] left-[15%] right-[5%] bottom-[45%] z-20 flex items-end justify-center overflow-hidden">
           {playerImageUrl ? (
             <img src={playerImageUrl} alt={name} className="w-full h-auto object-bottom" />
           ) : (
             <svg className="w-[85%] h-[90%] opacity-20 object-bottom" viewBox="0 0 100 100" fill="currentColor" preserveAspectRatio="xMidYMax meet">
               <path d="M50 10 A 20 20 0 0 0 50 50 A 20 20 0 0 0 50 10 Z M20 100 A 30 30 0 0 1 80 100 Z" />
             </svg>
           )}
        </div>

        {/* LAYER 3 (Card Metadata & Icons - Z-Index 30): Badges & Stat Overlay */}
        <div className="absolute inset-0 z-30 flex flex-col pointer-events-none">
            {/* Top Left Stack */}
            <div className="absolute top-[15%] left-[10%] flex flex-col items-center w-[25%]">
                <span className="text-[16cqw] font-bold leading-none tracking-tighter">{rating}</span>
                <span className="text-[8cqw] font-medium leading-none mb-1">{position}</span>
                {nationFlagUrl ? <img src={nationFlagUrl} className="w-[12cqw] h-auto mb-1 shadow-sm" alt="nation" /> : <div className="w-[12cqw] h-[8cqw] bg-black/20 mb-1" />}
                {clubCrestUrl ? <img src={clubCrestUrl} className="w-[12cqw] h-auto shadow-sm" alt="club" /> : <div className="w-[12cqw] h-[12cqw] rounded-full bg-black/20" />}
            </div>

            {/* Name Banner */}
            <div className="absolute top-[52%] w-full flex justify-center items-center px-1">
                <span className="font-bold text-[9cqw] uppercase tracking-wide truncate max-w-[90%] text-center px-1">
                    {name}
                </span>
            </div>

            {/* Stat Matrix */}
            <div className="absolute top-[63%] w-full flex justify-center px-2">
                <div className="grid grid-cols-2 gap-x-1 gap-y-[1px] text-[7cqw] font-semibold w-full max-w-[90%] mx-auto relative">
                    {/* Vertical Divider */}
                    <div className="absolute left-1/2 top-[5%] bottom-[5%] w-[1px] bg-[#222]/30 -translate-x-1/2"></div>
                    
                    {/* Left Column */}
                    <div className="flex justify-between pr-2">
                        <span className="font-bold">{stats.stat1.value}</span>
                        <span className="font-medium text-[#222]/80">{stats.stat1.label}</span>
                    </div>
                    {/* Right Column */}
                    <div className="flex justify-between pl-2">
                        <span className="font-bold">{stats.stat2.value}</span>
                        <span className="font-medium text-[#222]/80">{stats.stat2.label}</span>
                    </div>
                    <div className="flex justify-between pr-2">
                        <span className="font-bold">{stats.stat3.value}</span>
                        <span className="font-medium text-[#222]/80">{stats.stat3.label}</span>
                    </div>
                    <div className="flex justify-between pl-2">
                        <span className="font-bold">{stats.stat4.value}</span>
                        <span className="font-medium text-[#222]/80">{stats.stat4.label}</span>
                    </div>
                    <div className="flex justify-between pr-2">
                        <span className="font-bold">{stats.stat5.value}</span>
                        <span className="font-medium text-[#222]/80">{stats.stat5.label}</span>
                    </div>
                    <div className="flex justify-between pl-2">
                        <span className="font-bold">{stats.stat6.value}</span>
                        <span className="font-medium text-[#222]/80">{stats.stat6.label}</span>
                    </div>
                </div>
            </div>

            {/* Bottom divider element (visual separator for chemistry) */}
            <div className="absolute bottom-[9%] w-[15%] h-[1px] bg-[#222]/30 left-1/2 -translate-x-1/2"></div>
        </div>
      </div>
  );
}

export function FIFA17PlayerCard(props: FIFA17PlayerCardProps) {
  return (
    <PlayerHoverWrapper position={props.position}>
      <div className="w-[110px] sm:w-[125px] md:w-[135px] hover:-translate-y-1 transition-transform duration-200 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-lg relative group [@container]">
        <FIFA17PlayerCardBase {...props} />
        {/* LAYER 4 (Hover Target & Interactive Mask - Z-Index 40) */}
        <div className="absolute inset-0 z-40 bg-white/0 group-hover:bg-white/10 transition-colors duration-200 pointer-events-none rounded-lg" />
      </div>
    </PlayerHoverWrapper>
  );
}
