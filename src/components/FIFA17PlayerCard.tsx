import React from 'react';
import { PlayerHoverWrapper } from './PlayerHoverCard';
import { getAssetUrl } from '../utils/assetUrl';

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
  const isPlaceholder = rating === '--' || !rating;
  const bgUrl = cardBackgroundUrl || getAssetUrl('assets/cards/placeholder.png');

  return (
      <div className="relative w-full aspect-[3/4] font-sans text-[#222] group [container-type:inline-size]">
        {/* LAYER 1 (Base - Z-Index 10): Card Frame Asset */}
        <div className="absolute inset-0 z-10 flex items-center justify-center drop-shadow-lg">
          <img src={bgUrl} className="w-full h-full object-contain" alt="Card Background" />
        </div>

        {/* ONLY RENDER DATA IF NOT A PLACEHOLDER */}
        {!isPlaceholder && (
            <>
                {/* LAYER 2 (Player Render - Z-Index 20): Dynamic Cutout */}
                <div 
                    className="absolute z-20 flex items-end justify-center pointer-events-none"
                    style={{ top: '15%', left: '50%', transform: 'translateX(-50%)', width: '60%', height: '40%' }}
                >
                    {playerImageUrl ? (
                        <img src={playerImageUrl} alt={name} className="w-full h-full object-contain object-bottom drop-shadow-md" />
                    ) : (
                        <svg className="w-[75%] h-[85%] opacity-30 text-[#444] object-bottom" viewBox="0 0 100 100" fill="currentColor" preserveAspectRatio="xMidYMax meet">
                        {/* Head */}
                        <circle cx="50" cy="30" r="18" />
                        {/* Body / Shoulders */}
                        <path d="M25 100 C 25 70, 35 60, 50 60 C 65 60, 75 70, 75 100 Z" />
                        </svg>
                    )}
                </div>

                {/* LAYER 3 (Card Metadata & Icons - Z-Index 30): Badges & Stat Overlay */}
                <div className="absolute inset-0 z-30 pointer-events-none">
                    
                    {/* Top Left Stack */}
                    <div className="absolute flex flex-col items-center w-[25%]" style={{ top: '8%', left: '8%' }}>
                        <span className="font-bold leading-none tracking-tighter" style={{ fontSize: '18cqi' }}>{rating}</span>
                        <span className="font-medium leading-none mb-1 uppercase" style={{ fontSize: '8cqi' }}>{position}</span>
                        
                        {nationFlagUrl ? (
                            <img src={nationFlagUrl} className="w-[50%] h-auto mb-1 shadow-sm" alt="nation" />
                        ) : (
                            <div className="w-[50%] aspect-[3/2] bg-black/20 mb-1" />
                        )}
                        
                        {clubCrestUrl ? (
                            <img src={clubCrestUrl} className="w-[50%] h-auto shadow-sm" alt="club" />
                        ) : (
                            <div className="w-[50%] aspect-square rounded-full bg-black/20" />
                        )}
                    </div>

                    {/* Name Banner */}
                    <div className="absolute flex justify-center items-center" style={{ top: '55%', left: '10%', width: '80%' }}>
                        <span className="font-bold uppercase tracking-wide truncate w-full text-center" style={{ fontSize: '9cqi' }}>
                            {name}
                        </span>
                    </div>

                    {/* Stat Matrix */}
                    <div className="absolute flex justify-center" style={{ top: '66%', left: '7.5%', width: '85%' }}>
                        <div className="grid grid-cols-2 gap-x-2 gap-y-[1px] font-semibold w-full" style={{ fontSize: '7.5cqi' }}>
                            {/* Vertical Divider */}
                            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#222]/30 -translate-x-1/2"></div>
                            
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
                </div>
            </>
        )}
      </div>
  );
}

export function FIFA17PlayerCard(props: FIFA17PlayerCardProps) {
  return (
    <PlayerHoverWrapper playerData={props}>
      <div className="w-[110px] sm:w-[125px] md:w-[135px] hover:-translate-y-1 transition-transform duration-200 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-lg relative group [@container]">
        <FIFA17PlayerCardBase {...props} />
        {/* LAYER 4 (Hover Target & Interactive Mask - Z-Index 40) */}
        <div className="absolute inset-0 z-40 bg-white/0 group-hover:bg-white/10 transition-colors duration-200 pointer-events-none rounded-lg" />
      </div>
    </PlayerHoverWrapper>
  );
}
