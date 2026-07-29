import React from 'react';
import { PlayerHoverWrapper } from '../../components/PlayerHoverCard';

export interface PriceRangeChangeItem {
    id: string;
    name: string;
    rating: string;
    position: string;
    version: string;
    oldMin: string;
    oldMax: string;
    newMin: string;
    newMax: string;
    addedOn: string;
}

const mockPriceChanges: PriceRangeChangeItem[] = Array.from({ length: 12 }).map((_, index) => ({
    id: `placeholder-${index + 1}`,
    name: 'Player Name',
    rating: '--',
    position: '---',
    version: '---',
    oldMin: '--',
    oldMax: '--',
    newMin: '--',
    newMax: '--',
    addedOn: '-- / -- / ----',
}));

export default function PriceRanges() {
    return (
        <div className="w-full min-h-screen bg-[#1a1a1a] text-white pt-24 px-4 pb-16 relative">
            {/* Background Overlay */}
            <div className="absolute inset-0 top-16 h-[50vh] bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a] z-0 overflow-hidden pointer-events-none">
                <div className="w-full h-full opacity-5 flex items-center justify-center text-9xl font-black italic select-none">
                    MARKET
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
                {/* Header */}
                <div>
                    <div className="text-sm text-gray-400 mb-1 flex items-center gap-2">
                        Home <span>›</span> Players <span>›</span> Price Ranges
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-1">FIFA 17 Price Range Changes</h1>
                    <div className="text-gray-400 text-sm mb-4">FUT 17 Price Range Updates</div>
                    <button className="bg-[#111] hover:bg-[#222] border border-[#333] text-sm py-1.5 px-3 rounded flex items-center gap-2 transition-colors w-max font-bold">
                        <span>↺</span> FIFA 17
                    </button>
                </div>

                {/* Search & Filters */}
                <div className="flex flex-col gap-4 mb-2">
                    <div className="relative w-full md:w-80">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                            🔍
                        </div>
                        <input
                            type="text"
                            placeholder="Player name"
                            className="bg-[#0a0a0a] border border-[#333] rounded pl-9 pr-3 py-2 text-sm w-full text-white placeholder-gray-500 focus:outline-none focus:border-[#00e575]"
                        />
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm font-bold py-1.5 px-4 rounded transition-colors">
                            Version
                        </button>
                        <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm font-bold py-1.5 px-4 rounded transition-colors">
                            Positions
                        </button>
                        <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm font-bold py-1.5 px-4 rounded transition-colors">
                            Leagues
                        </button>
                        <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm font-bold py-1.5 px-4 rounded transition-colors">
                            Nations
                        </button>
                        <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm font-bold py-1.5 px-4 rounded transition-colors">
                            Clubs
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="w-full bg-[#1e1e1e] rounded-lg border border-[#333] overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[900px]">
                        <thead>
                            <tr className="bg-[#111] text-[11px] font-bold text-gray-300 tracking-wider border-b border-[#333]">
                                <th className="p-3.5 uppercase">NAME</th>
                                <th className="p-3.5 uppercase text-center">RATING</th>
                                <th className="p-3.5 uppercase text-center">POSITION</th>
                                <th className="p-3.5 uppercase text-center">VERSION</th>
                                <th className="p-3.5 uppercase text-center text-red-400">OLD MIN</th>
                                <th className="p-3.5 uppercase text-center text-green-400">OLD MAX</th>
                                <th className="p-3.5 uppercase text-center text-red-400">NEW MIN</th>
                                <th className="p-3.5 uppercase text-center text-green-400">NEW MAX</th>
                                <th className="p-3.5 uppercase text-right">ADDED ON</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {mockPriceChanges.map((player) => (
                                <tr key={player.id} className="border-b border-[#2d2d2d] hover:bg-[#252525] transition-colors">
                                    <td className="p-3.5">
                                        <div className="flex items-center gap-3">
                                            <PlayerHoverWrapper position="ST">
                                                <div className="w-10 h-12 bg-[#252525] rounded border border-[#333] flex-shrink-0 flex items-center justify-center text-gray-500 font-mono text-xs">
                                                    --
                                                </div>
                                            </PlayerHoverWrapper>
                                            <span className="font-bold text-gray-400">{player.name}</span>
                                        </div>
                                    </td>
                                    <td className="p-3.5 text-center">
                                        <span className="bg-[#252525] border border-[#333] text-gray-400 px-2.5 py-0.5 rounded text-xs font-mono font-bold">
                                            {player.rating}
                                        </span>
                                    </td>
                                    <td className="p-3.5 text-center">
                                        <span className="bg-[#222] border border-[#333] text-gray-400 px-2 py-0.5 rounded text-xs font-mono">
                                            {player.position}
                                        </span>
                                    </td>
                                    <td className="p-3.5 text-center">
                                        <span className="bg-[#222] border border-[#333] text-gray-400 px-2.5 py-0.5 rounded text-xs font-mono">
                                            {player.version}
                                        </span>
                                    </td>
                                    <td className="p-3.5 text-center font-medium text-gray-500 font-mono">
                                        <span className="inline-flex items-center gap-1">
                                            {player.oldMin}
                                            <span className="w-3.5 h-3.5 bg-[#ffb800]/50 text-black text-[9px] font-extrabold rounded-full inline-flex items-center justify-center">C</span>
                                        </span>
                                    </td>
                                    <td className="p-3.5 text-center font-medium text-gray-500 font-mono">
                                        <span className="inline-flex items-center gap-1">
                                            {player.oldMax}
                                            <span className="w-3.5 h-3.5 bg-[#ffb800]/50 text-black text-[9px] font-extrabold rounded-full inline-flex items-center justify-center">C</span>
                                        </span>
                                    </td>
                                    <td className="p-3.5 text-center font-medium text-gray-500 font-mono">
                                        <span className="inline-flex items-center gap-1">
                                            {player.newMin}
                                            <span className="w-3.5 h-3.5 bg-[#ffb800]/50 text-black text-[9px] font-extrabold rounded-full inline-flex items-center justify-center">C</span>
                                        </span>
                                    </td>
                                    <td className="p-3.5 text-center font-medium text-gray-500 font-mono">
                                        <span className="inline-flex items-center gap-1">
                                            {player.newMax}
                                            <span className="w-3.5 h-3.5 bg-[#ffb800]/50 text-black text-[9px] font-extrabold rounded-full inline-flex items-center justify-center">C</span>
                                        </span>
                                    </td>
                                    <td className="p-3.5 text-right text-gray-500 text-xs font-mono">
                                        {player.addedOn}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
