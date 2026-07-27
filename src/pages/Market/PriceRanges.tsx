import React from 'react';

const mockPriceChanges = [
    { name: 'Player Name', rating: '99', position: 'LM', version: 'Summer Stars Winners', oldMin: '--', oldMax: '--', newMin: '--', newMax: '--', updatedOn: '2026-07-27', img: 'https://placehold.co/48x64/1e1e1e/444' },
    { name: 'Player Name', rating: '99', position: 'LW', version: 'Futties', oldMin: '--', oldMax: '--', newMin: '--', newMax: '--', updatedOn: '2026-07-27', img: 'https://placehold.co/48x64/1e1e1e/444' },
    { name: 'Player Name', rating: '99', position: 'CAM', version: 'Summer Stars Winners', oldMin: '--', oldMax: '--', newMin: '--', newMax: '--', updatedOn: '2026-07-27', img: 'https://placehold.co/48x64/1e1e1e/444' },
    { name: 'Player Name', rating: '99', position: 'CAM', version: 'FUTTIES Icon', oldMin: '--', oldMax: '--', newMin: '--', newMax: '--', updatedOn: '2026-07-27', img: 'https://placehold.co/48x64/1e1e1e/444' },
    { name: 'Player Name', rating: '99', position: 'CB', version: 'Summer Stars Winners', oldMin: '--', oldMax: '--', newMin: '--', newMax: '--', updatedOn: '2026-07-27', img: 'https://placehold.co/48x64/1e1e1e/444' },
    { name: 'Player Name', rating: '99', position: 'CM', version: 'Summer Stars Winners', oldMin: '--', oldMax: '--', newMin: '--', newMax: '--', updatedOn: '2026-07-27', img: 'https://placehold.co/48x64/1e1e1e/444' },
    { name: 'Player Name', rating: '99', position: 'ST', version: 'Summer Stars Winners', oldMin: '--', oldMax: '--', newMin: '--', newMax: '--', updatedOn: '2026-07-27', img: 'https://placehold.co/48x64/1e1e1e/444' },
];

export default function PriceRanges() {
    return (
        <div className="w-full min-h-screen bg-[#1a1a1a] text-white pt-24 px-4 pb-16 relative">
            
            {/* Background Overlay Mock */}
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

                {/* Filters */}
                <div className="flex flex-col gap-4 mb-2">
                    <div className="relative w-full md:w-80">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-white text-sm font-bold">🔍</span>
                        </div>
                        <input 
                            type="text" 
                            placeholder="Player name"
                            className="bg-[#0a0a0a] border border-transparent rounded pl-9 pr-3 py-2 text-sm w-full text-white placeholder-gray-500 focus:outline-none focus:border-[#333]"
                        />
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm font-bold py-1.5 px-4 rounded transition-colors flex items-center gap-2">
                            <span>🛡️</span> Version
                        </button>
                        <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm font-bold py-1.5 px-4 rounded transition-colors flex items-center gap-2">
                            <span>⚑</span> Positions
                        </button>
                        <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm font-bold py-1.5 px-4 rounded transition-colors flex items-center gap-2">
                            <span>🏆</span> Leagues
                        </button>
                        <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm font-bold py-1.5 px-4 rounded transition-colors flex items-center gap-2">
                            <span>🌍</span> Nations
                        </button>
                        <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm font-bold py-1.5 px-4 rounded transition-colors flex items-center gap-2">
                            <span>⚽</span> Clubs
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="w-full bg-[#1e1e1e]/60 rounded-lg border border-[#333] overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#111] text-[10px] font-bold text-white tracking-widest border-b border-[#333]">
                                <th className="p-4 uppercase">NAME</th>
                                <th className="p-4 uppercase text-center">RATING</th>
                                <th className="p-4 uppercase text-center">POSITION</th>
                                <th className="p-4 uppercase text-center">VERSION</th>
                                <th className="p-4 uppercase text-center text-red-500 flex items-center justify-center gap-1"><span>⏬</span> OLD MIN</th>
                                <th className="p-4 uppercase text-center text-green-500"><span>⏫</span> OLD MAX</th>
                                <th className="p-4 uppercase text-center text-red-500"><span>⏬</span> NEW MIN</th>
                                <th className="p-4 uppercase text-center text-green-500"><span>⏫</span> NEW MAX</th>
                                <th className="p-4 uppercase text-right">📅 UPDATED ON</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {mockPriceChanges.map((player, i) => (
                                <tr key={i} className="border-b border-[#2d2d2d] hover:bg-[#252525] transition-colors">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-16 bg-[#2a2a2a] rounded overflow-hidden flex-shrink-0 border border-purple-500/30 relative">
                                                {/* Player Card Placeholder */}
                                                <div className="absolute top-1 left-1 text-[10px] font-black">{player.rating}</div>
                                            </div>
                                            <span className="font-bold text-white">{player.name}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-center">
                                        <span className="bg-purple-900/50 border border-purple-500 text-purple-200 px-2 py-1 rounded text-xs font-bold">
                                            {player.rating}
                                        </span>
                                    </td>
                                    <td className="p-4 text-center font-medium text-gray-300">{player.position}</td>
                                    <td className="p-4 text-center text-gray-300">{player.version}</td>
                                    <td className="p-4 text-center font-medium">
                                        {player.oldMin} <span className="text-[#ffb800] text-[10px]">F</span>
                                    </td>
                                    <td className="p-4 text-center font-medium">
                                        {player.oldMax} <span className="text-[#ffb800] text-[10px]">F</span>
                                    </td>
                                    <td className="p-4 text-center font-bold text-white">
                                        {player.newMin} <span className="text-[#ffb800] text-[10px]">F</span>
                                    </td>
                                    <td className="p-4 text-center font-bold text-white">
                                        {player.newMax} <span className="text-[#ffb800] text-[10px]">F</span>
                                    </td>
                                    <td className="p-4 text-right text-gray-400 text-xs">
                                        {player.updatedOn}
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
