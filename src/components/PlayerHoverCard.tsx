import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { FIFA17PlayerCardBase } from './FIFA17PlayerCard';

const positionStatsMapping = {
    GK: ['Acceleration', 'SprintSpeed', 'Reactions', 'Jumping', 'Strength'],
    CB: ['Acceleration', 'SprintSpeed', 'Aggression', 'StandingTackle', 'Agility'],
    LB: ['Acceleration', 'SprintSpeed', 'Agility', 'ShortPassing', 'Aggression'],
    RB: ['Acceleration', 'SprintSpeed', 'Agility', 'ShortPassing', 'Aggression'],
    LWB: ['Acceleration', 'SprintSpeed', 'Agility', 'ShortPassing', 'Aggression'],
    RWB: ['Acceleration', 'SprintSpeed', 'Agility', 'ShortPassing', 'Aggression'],
    CDM: ['Acceleration', 'SprintSpeed', 'Aggression', 'Interceptions', 'StandingTackle'],
    CM: ['Acceleration', 'SprintSpeed', 'Aggression', 'ShortPassing', 'Dribbling'],
    CAM: ['Acceleration', 'SprintSpeed', 'LongPassing', 'ShortPassing', 'Dribbling'],
    LM: ['Acceleration', 'SprintSpeed', 'Aggression', 'Agility', 'Dribbling'],
    RM: ['Acceleration', 'SprintSpeed', 'Aggression', 'Agility', 'Dribbling'],
    LW: ['Acceleration', 'SprintSpeed', 'Finishing', 'ShortPassing', 'Dribbling'],
    RW: ['Acceleration', 'SprintSpeed', 'Finishing', 'ShortPassing', 'Dribbling'],
    ST: ['Acceleration', 'SprintSpeed', 'Aggression', 'Finishing', 'Dribbling'],
    CF: ['Acceleration', 'SprintSpeed', 'Aggression', 'Finishing', 'Dribbling'],
};

interface PlayerHoverCardContentProps {
    playerData?: any;
}

import { ChemStyleIconMap } from '../utils/chemstyles';
import { getAssetUrl } from '../utils/assetUrl';
import { ChemStyleIcon } from './ChemStyleIcon';
import { SafeImage } from './SafeImage';

export function PlayerHoverCardContent({ playerData }: PlayerHoverCardContentProps) {
    const isPlaceholder = !playerData || playerData.isPlaceholder || playerData.rating === '--' || !playerData.rating;
    const position = isPlaceholder ? '' : (playerData?.position || 'ST');
    const previewStats = positionStatsMapping[position as keyof typeof positionStatsMapping] || positionStatsMapping['ST'];
    const topChemstyle = isPlaceholder ? '---' : (playerData?.topChemstyle || 'Basic');
    const chemIconChar = ChemStyleIconMap[topChemstyle] || null;

    const ratingBase = typeof playerData?.rating === 'number' ? playerData.rating : null;
    const playerStats: Record<string, number | string> = playerData?.stats || (isPlaceholder ? {
        PAC: '--', SHO: '--', PAS: '--', DRI: '--', DEF: '--', PHY: '--'
    } : {
        PAC: Math.min(99, Math.max(50, (ratingBase || 85) + 1)),
        SHO: Math.min(99, Math.max(50, (ratingBase || 85) - 2)),
        PAS: Math.min(99, Math.max(50, (ratingBase || 85) - 1)),
        DRI: Math.min(99, Math.max(50, (ratingBase || 85) + 2)),
        DEF: Math.min(99, Math.max(50, (ratingBase || 85) - 25)),
        PHY: Math.min(99, Math.max(50, (ratingBase || 85) - 4)),
    });

    const statMap: Record<string, string> = {
        Acceleration: 'PAC',
        SprintSpeed: 'PAC',
        Finishing: 'SHO',
        LongPassing: 'PAS',
        ShortPassing: 'PAS',
        Dribbling: 'DRI',
        StandingTackle: 'DEF',
        Interceptions: 'DEF',
        Reactions: 'DRI',
        Jumping: 'PHY',
        Strength: 'PHY',
        Aggression: 'PHY',
        Agility: 'DRI',
    };

    const smVal = isPlaceholder ? '-' : (playerData?.sm ?? playerData?.skillMoves ?? '-');
    const wfVal = isPlaceholder ? '-' : (playerData?.wf ?? playerData?.weakFoot ?? '-');
    const footVal = isPlaceholder ? '-' : (playerData?.foot || 'R');
    const priceVal = isPlaceholder ? '---' : (playerData?.price || playerData?.crossPrice || '---');

    const cardStatsProp = isPlaceholder ? undefined : {
        stat1: { label: 'PAC', value: playerStats.PAC },
        stat2: { label: 'DRI', value: playerStats.DRI },
        stat3: { label: 'SHO', value: playerStats.SHO },
        stat4: { label: 'DEF', value: playerStats.DEF },
        stat5: { label: 'PAS', value: playerStats.PAS },
        stat6: { label: 'PHY', value: playerStats.PHY },
    };

    return (
        <div className="w-[320px] bg-[#1c1e22] rounded-lg border border-[#333] shadow-[0_10px_40px_rgba(0,0,0,0.8)] flex flex-col font-sans text-white z-[9999]">
            {/* Top Bar */}
            <div className="flex justify-end items-center px-3 py-1.5 border-b border-[#333] bg-[#1a1c20] rounded-t-lg">
                <div className="flex items-center gap-1.5">
                    <SafeImage src={'https://cdn.futbin.com/design/img/coins_bin.png'} fallbackType="coin" className="w-3.5 h-3.5" alt="coins" />
                    <span className="font-bold text-[13px] font-mono tracking-tight text-gray-300">{priceVal}</span>
                </div>
            </div>

            {/* Main Body */}
            <div className="flex p-3 gap-3 border-b border-[#333]">
                {/* Left Side: Card Render Placeholder */}
                <div className="w-[95px] shrink-0 flex flex-col items-center justify-center [@container]">
                    <FIFA17PlayerCardBase 
                        name={isPlaceholder ? "" : (playerData?.name || "")} 
                        rating={isPlaceholder ? "--" : (playerData?.rating || "--")} 
                        position={position}
                        cardBackgroundUrl={playerData?.cardBackgroundUrl}
                        playerImageUrl={playerData?.playerImageUrl}
                        nationFlagUrl={playerData?.nationFlagUrl}
                        clubCrestUrl={playerData?.clubCrestUrl}
                        stats={cardStatsProp}
                    />
                </div>

                {/* Right Side: Metadata */}
                <div className="flex-1 flex flex-col justify-between py-0.5">
                    <div className="grid grid-cols-3 gap-1 text-center">
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-gray-200 font-bold text-[11px] mb-0.5">SM</span>
                            <span className="text-[#ffb800] font-bold text-[12px] flex items-center justify-center gap-1">
                                <SafeImage src={getAssetUrl('assets/icons/0_starskills.svg')} className="w-3.5 h-3.5 object-contain inline-block" alt="SM" />
                                <span className="text-gray-200 font-mono">{smVal}</span>
                            </span>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-gray-200 font-bold text-[11px] mb-0.5">WF</span>
                            <span className="text-[#ffb800] font-bold text-[12px] flex items-center justify-center gap-1">
                                <SafeImage src={getAssetUrl('assets/icons/0_weakfoot.svg')} className="w-2.5 h-3.5 object-contain inline-block" alt="WF" />
                                <span className="text-gray-200 font-mono">{wfVal}</span>
                            </span>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-gray-200 font-bold text-[11px] mb-0.5">Foot</span>
                            <span className="font-bold text-gray-200 text-[12px] font-mono">{footVal}</span>
                        </div>
                    </div>
                    
                    <div className="text-center text-[10px] text-gray-400 font-semibold border-b border-[#333] pb-2 pt-2">
                        {isPlaceholder ? '---cm | -\'--" / --kg / ---' : `${playerData?.height || '182cm'} | ${playerData?.heightImperial || '6\'0"'} / ${playerData?.weight || '78kg'} / ${playerData?.workRates || 'H/M'}`}
                    </div>

                    <div className="flex flex-col flex-1 border-b border-[#333] pb-2 pt-2">
                        <span className="text-center text-gray-100 font-bold text-[11px] mb-1.5">Specialities / Traits</span>
                        <div className="flex flex-wrap justify-center gap-1">
                            {isPlaceholder ? (
                                <>
                                    <span className="bg-[#252525] border border-[#444] px-1.5 py-0.5 rounded text-[9px] text-gray-500 font-mono">----------</span>
                                    <span className="bg-[#252525] border border-[#444] px-1.5 py-0.5 rounded text-[9px] text-gray-500 font-mono">----------</span>
                                    <span className="bg-[#252525] border border-[#444] px-1.5 py-0.5 rounded text-[9px] text-gray-500 font-mono">----------</span>
                                </>
                            ) : playerData?.traits || playerData?.playstyles ? (playerData.traits || playerData.playstyles).slice(0, 3).map((trait: string, idx: number) => (
                                <span key={idx} className="bg-[#252525] border border-[#444] px-1.5 py-0.5 rounded text-[9px] text-gray-300 font-mono">{trait}</span>
                            )) : (
                                <>
                                    <span className="bg-[#252525] border border-[#444] px-1.5 py-0.5 rounded text-[9px] text-gray-400 font-mono">Dribbler</span>
                                    <span className="bg-[#252525] border border-[#444] px-1.5 py-0.5 rounded text-[9px] text-gray-400 font-mono">Acrobat</span>
                                    <span className="bg-[#252525] border border-[#444] px-1.5 py-0.5 rounded text-[9px] text-gray-400 font-mono">Speedster</span>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center justify-between px-0.5 pt-2">
                        <div className="flex items-center gap-1.5"> 
                             <div className="w-5 h-5 bg-[#252525] rounded border border-[#444] flex items-center justify-center text-[10px] text-gray-400">🛡️</div>
                             <span className="text-[10px] font-bold text-gray-400 font-mono truncate w-12">{isPlaceholder ? '---' : (playerData?.club || 'Club')}</span>
                        </div>
                        <div className="flex items-center gap-1.5"> 
                             <div className="w-5 h-3 bg-[#252525] rounded-sm border border-[#444] flex items-center justify-center text-[9px] text-gray-400">🏁</div>
                             <span className="text-[10px] font-bold text-gray-400 font-mono truncate w-10">{isPlaceholder ? '---' : (playerData?.nation || 'Nation')}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lower Section */}
            <div className="flex">
                {/* Left Column: 5 Stats */}
                <div className="flex-1 p-3 border-r border-[#333] flex flex-col gap-2.5 justify-center">
                    {previewStats.map((stat, idx) => {
                        const statKey = statMap[stat] || stat.substring(0, 3).toUpperCase();
                        const val = isPlaceholder ? '--' : (playerStats[statKey] ?? playerStats[stat] ?? ratingBase ?? '--');
                        const numVal = typeof val === 'number' ? val : 0;
                        return (
                            <div key={idx} className="flex flex-col">
                                <div className="flex justify-between items-end mb-1">
                                    <span className="text-gray-100 text-[11px] font-semibold">{stat}</span>
                                    <span className="text-gray-200 font-bold text-[11px] font-mono">{val}</span>
                                </div>
                                <div className="w-full h-1 bg-[#333] rounded-full overflow-hidden">
                                    <div className={`h-full ${numVal > 85 ? 'bg-[#00e575]' : numVal > 75 ? 'bg-[#00c565]' : numVal > 65 ? 'bg-[#ffb800]' : numVal > 0 ? 'bg-[#ff3333]' : 'bg-[#444]'}`} style={{ width: `${Math.min(100, Math.max(0, numVal))}%` }}></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* Right Column: Chemstyle & Totals */}
                <div className="w-[100px] shrink-0 p-3 flex flex-col text-center justify-between">
                    <div className="mb-1.5 border-b border-[#333] pb-3 pt-0.5">
                        <span className="text-gray-100 font-bold text-[11px] block mb-1.5">Top Chemstyle</span>
                        <div className="text-center min-h-[24px] flex items-center justify-center">
                            {!isPlaceholder && topChemstyle !== '---' ? (
                                <ChemStyleIcon name={topChemstyle} className="w-5 h-5 mx-auto flex items-center justify-center text-[#00e575]" size="1.25rem" />
                            ) : (
                                <span className="text-gray-500 font-mono text-[11px]">---</span>
                            )}
                        </div>
                        <span className="text-gray-400 text-[10px] font-bold font-mono uppercase mt-1 block">{topChemstyle}</span>
                    </div>
                    <div className="mb-1.5 border-b border-[#333] pb-3 pt-0.5">
                        <span className="text-gray-100 font-bold text-[11px] block mb-1">Total Stats</span>
                        <span className="text-gray-400 font-bold text-[13px] font-mono">{isPlaceholder ? '---' : (ratingBase ? ratingBase * 5 : '---')}</span>
                    </div>
                    <div className="pt-0.5">
                        <span className="text-gray-100 font-bold text-[11px] block mb-1">Total IGS</span>
                        <span className="text-gray-400 font-bold text-[13px] font-mono">{isPlaceholder ? '-,---' : (playerData?.igs || (ratingBase ? ratingBase * 25 : '-,---'))}</span>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="px-3 py-2 border-t border-[#333] text-[9.5px] text-gray-500 text-left bg-[#1a1c20] rounded-b-lg">
                *Prices are cached, visit player page for the latest data
            </div>
        </div>
    );
}

export interface PlayerHoverWrapperProps { position?: string;
    children: ReactNode;
    playerData?: any;
}

export const PlayerHoverWrapper: React.FC<PlayerHoverWrapperProps> = ({ children, playerData }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [showHoverCard, setShowHoverCard] = useState(false);
    const [cardPosition, setCardPosition] = useState<'right' | 'left'>('right');
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isHovered) {
            timeoutRef.current = setTimeout(() => {
                if (containerRef.current) {
                    const rect = containerRef.current.getBoundingClientRect();
                    // if it's too close to the right edge (e.g., within 350px, hover card is ~330px wide)
                    if (window.innerWidth - rect.right < 350) {
                        setCardPosition('left');
                    } else {
                        setCardPosition('right');
                    }
                }
                setShowHoverCard(true);
            }, 600); // 600ms hover delay
        } else {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setShowHoverCard(false);
        }

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [isHovered]);

    return (
        <div 
            ref={containerRef}
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
            {showHoverCard && (
                <div className={`absolute top-1/2 -translate-y-1/2 z-[9999] pointer-events-none ${cardPosition === 'right' ? 'left-[105%] ml-2' : 'right-[105%] mr-2'}`}>
                    <PlayerHoverCardContent playerData={playerData} />
                </div>
            )}
        </div>
    );
}
