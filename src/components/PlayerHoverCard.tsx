import React, { useState, useEffect, useRef, ReactNode } from 'react';

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
    position?: string;
}

export function PlayerHoverCardContent({ position = 'ST' }: PlayerHoverCardContentProps) {
    const previewStats = positionStatsMapping[position as keyof typeof positionStatsMapping] || positionStatsMapping['ST'];

    return (
        <div className="w-[320px] bg-[#1c1e22] rounded-lg border border-[#333] shadow-[0_10px_40px_rgba(0,0,0,0.8)] flex flex-col font-sans text-white z-[9999]">
            {/* Top Bar */}
            <div className="flex justify-end items-center px-3 py-1.5 border-b border-[#333] bg-[#1a1c20] rounded-t-lg">
                <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 bg-[#ffb800] text-black text-[9px] font-extrabold rounded-full inline-flex items-center justify-center">C</span>
                    <span className="font-bold text-[13px] font-mono tracking-tight text-gray-400">---</span>
                </div>
            </div>

            {/* Main Body */}
            <div className="flex p-3 gap-3 border-b border-[#333]">
                {/* Left Side: Card Render Placeholder */}
                <div className="w-[95px] shrink-0 flex flex-col items-center">
                    <div className="w-full aspect-[2/3] bg-[#222] border border-[#333] rounded-lg flex items-center justify-center text-gray-600 font-mono text-[10px] shadow-inner overflow-hidden relative">
                        <span className="absolute text-[9px] top-1.5 left-1.5 text-gray-500">--</span>
                        <span className="absolute text-[9px] top-4 left-1.5 text-gray-500">---</span>
                        -- CARD --
                        <div className="absolute bottom-1.5 flex gap-1 items-center justify-center w-full">
                            <div className="w-3 h-3 bg-[#111] rounded-[2px]"></div>
                            <div className="w-3 h-2.5 bg-[#111] rounded-[2px]"></div>
                            <div className="w-3 h-3 bg-[#111] rounded-[2px]"></div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Metadata */}
                <div className="flex-1 flex flex-col justify-between py-0.5">
                    <div className="grid grid-cols-3 gap-1 text-center">
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-gray-200 font-bold text-[11px] mb-0.5">SM</span>
                            <span className="text-[#ffb800] font-bold text-[12px]">★ <span className="text-gray-500 font-mono">-</span></span>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-gray-200 font-bold text-[11px] mb-0.5">WF</span>
                            <span className="text-[#ffb800] font-bold text-[12px]">★ <span className="text-gray-500 font-mono">-</span></span>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-gray-200 font-bold text-[11px] mb-0.5">Foot</span>
                            <span className="font-bold text-gray-500 text-[12px] font-mono">---</span>
                        </div>
                    </div>
                    
                    <div className="text-center text-[10px] text-gray-400 font-semibold border-b border-[#333] pb-2 pt-2">
                        ---cm | -'-" / --kg / ---
                    </div>

                    <div className="flex flex-col flex-1 border-b border-[#333] pb-2 pt-2">
                        <span className="text-center text-gray-100 font-bold text-[11px] mb-1.5">Specialities / Traits</span>
                        <div className="flex flex-wrap justify-center gap-1">
                            <span className="bg-[#252525] border border-[#444] px-1.5 py-0.5 rounded text-[9px] text-gray-500 font-mono">----------</span>
                            <span className="bg-[#252525] border border-[#444] px-1.5 py-0.5 rounded text-[9px] text-gray-500 font-mono">----------</span>
                            <span className="bg-[#252525] border border-[#444] px-1.5 py-0.5 rounded text-[9px] text-gray-500 font-mono">----------</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between px-0.5 pt-2">
                        <div className="flex items-center gap-1.5">
                             <div className="w-5 h-5 bg-[#252525] rounded border border-[#444]"></div>
                             <span className="text-[10px] font-bold text-gray-500 font-mono truncate w-10">-------</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                             <div className="w-6 h-4 bg-[#252525] rounded-sm border border-[#444]"></div>
                             <span className="text-[10px] font-bold text-gray-500 font-mono truncate w-6">----</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                             <div className="w-5 h-5 bg-[#252525] rounded border border-[#444]"></div>
                             <span className="text-[10px] font-bold text-gray-500 font-mono truncate w-10">-------</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lower Section */}
            <div className="flex">
                {/* Left Column: 5 Stats */}
                <div className="flex-1 p-3 border-r border-[#333] flex flex-col gap-2.5 justify-center">
                    {previewStats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col">
                            <div className="flex justify-between items-end mb-1">
                                <span className="text-gray-100 text-[11px] font-semibold">{stat}</span>
                                <span className="text-gray-500 font-bold text-[11px] font-mono">--</span>
                            </div>
                            <div className="w-full h-1 bg-[#333] rounded-full overflow-hidden">
                                <div className="h-full bg-[#444] w-0"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Column: Chemstyle & Totals */}
                <div className="w-[100px] shrink-0 p-3 flex flex-col text-center justify-between">
                    <div className="mb-1.5 border-b border-[#333] pb-3 pt-0.5">
                        <span className="text-gray-100 font-bold text-[11px] block mb-1.5">Top Chemstyle</span>
                        <div className="w-8 h-5 mx-auto bg-[#252525] rounded my-0.5 border border-[#444]"></div>
                        <span className="text-gray-500 text-[10px] font-bold font-mono uppercase mt-1 block">------</span>
                    </div>
                    <div className="mb-1.5 border-b border-[#333] pb-3 pt-0.5">
                        <span className="text-gray-100 font-bold text-[11px] block mb-1">Total Stats</span>
                        <span className="text-gray-500 font-bold text-[13px] font-mono">---</span>
                    </div>
                    <div className="pt-0.5">
                        <span className="text-gray-100 font-bold text-[11px] block mb-1">Total IGS</span>
                        <span className="text-gray-500 font-bold text-[13px] font-mono">-,---</span>
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

interface PlayerHoverWrapperProps {
    children: ReactNode;
    position?: string;
}

export function PlayerHoverWrapper({ children, position = 'ST' }: PlayerHoverWrapperProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [showHoverCard, setShowHoverCard] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isHovered) {
            timeoutRef.current = setTimeout(() => {
                setShowHoverCard(true);
            }, 2000);
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
                <div className="absolute top-1/2 left-full -translate-y-1/2 ml-4 z-[9999] pointer-events-none">
                    <PlayerHoverCardContent position={position} />
                </div>
            )}
        </div>
    );
}
