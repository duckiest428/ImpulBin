import React from 'react';

const mockPlayers = [
    { name: 'Player Name', type: 'NORMAL', price: '0', updated: '--', trend: '--', trendUp: true, avgPrice: '0', diffPct: '--', diffVal: '--', diffUp: true, tax: '0', afterTax: '0' },
    { name: 'Player Name', type: 'NORMAL', price: '0', updated: '--', trend: '--', trendUp: true, avgPrice: '0', diffPct: '--', diffVal: '--', diffUp: true, tax: '0', afterTax: '0' },
    { name: 'Player Name', type: 'NORMAL', price: '0', updated: '--', trend: '--', trendUp: true, avgPrice: '0', diffPct: '--', diffVal: '--', diffUp: true, tax: '0', afterTax: '0' },
    { name: 'Player Name', type: 'NORMAL', price: '0', updated: '--', trend: '--', trendUp: true, avgPrice: '0', diffPct: '--', diffVal: '--', diffUp: true, tax: '0', afterTax: '0' },
    { name: 'Player Name', type: 'NORMAL', price: '0', updated: '--', trend: '--', trendUp: false, avgPrice: '0', diffPct: '--', diffVal: '--', diffUp: true, tax: '0', afterTax: '0' },
    { name: 'Player Name', type: 'NORMAL', price: '0', updated: '--', trend: '--', trendUp: true, avgPrice: '0', diffPct: '--', diffVal: '--', diffUp: true, tax: '0', afterTax: '0' },
    { name: 'Player Name', type: 'NORMAL', price: '0', updated: '--', trend: '--', trendUp: true, avgPrice: '0', diffPct: '--', diffVal: '--', diffUp: true, tax: '0', afterTax: '0' },
    { name: 'Player Name', type: 'NORMAL', price: '0', updated: '--', trend: '--', trendUp: true, avgPrice: '0', diffPct: '--', diffVal: '--', diffUp: true, tax: '0', afterTax: '0' },
    { name: 'Player Name', type: 'NORMAL', price: '0', updated: '--', trend: '--', trendUp: true, avgPrice: '0', diffPct: '--', diffVal: '--', diffUp: true, tax: '0', afterTax: '0' },
    { name: 'Player Name', type: 'NORMAL', price: '0', updated: '--', trend: '--', trendUp: true, avgPrice: '0', diffPct: '--', diffVal: '--', diffUp: true, tax: '0', afterTax: '0' },
    { name: 'Player Name', type: 'NORMAL', price: '0', updated: '--', trend: '--', trendUp: true, avgPrice: '0', diffPct: '--', diffVal: '--', diffUp: true, tax: '0', afterTax: '0' },
];

export default function MarketPlayerList() {
    return (
        <div className="w-full min-h-screen bg-[#1a1a1a] text-white pt-24 px-4 pb-16 relative">
            
            {/* Background Overlay Mock */}
            <div className="absolute inset-0 top-0 h-[60vh] bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a] z-0 overflow-hidden pointer-events-none">
                <div className="w-full h-full opacity-[0.03] bg-[url('https://placehold.co/1920x1080/1a1a1a/2d2d2d')] bg-cover bg-center"></div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
                
                {/* Header */}
                <div>
                    <div className="text-sm text-gray-400 mb-1 flex items-center gap-2">
                        Home <span>›</span> Market <span>›</span> Market player list
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-2">FIFA 17 Market player list</h1>
                    <p className="text-gray-400 text-sm max-w-2xl leading-relaxed mb-6">
                        IB Market Player List helps you keep updated with player price trends, price updates and also Average prices to help you make more coins in Ultimate Team.
                    </p>
                </div>

                {/* Search */}
                <div className="relative w-full md:w-[400px]">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-white text-sm font-bold">🔍</span>
                    </div>
                    <input 
                        type="text" 
                        placeholder="Player name"
                        className="bg-[#0a0a0a] border border-[#333] rounded-md pl-9 pr-3 py-2 text-sm w-full text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
                    />
                </div>

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                    <button className="bg-[#111] border border-[#333] hover:bg-[#222] text-white text-sm font-bold py-1.5 px-4 rounded-md transition-colors flex items-center gap-2">
                        <span>↕</span> Sort by
                    </button>
                    <button className="bg-[#111] border border-[#333] hover:bg-[#222] text-white text-sm font-bold py-1.5 px-4 rounded-md transition-colors flex items-center gap-2">
                        Version
                    </button>
                    <button className="bg-[#111] border border-[#333] hover:bg-[#222] text-white text-sm font-bold py-1.5 px-4 rounded-md transition-colors flex items-center gap-2">
                        <span>⚑</span> Positions
                    </button>
                    <button className="bg-[#111] border border-[#333] hover:bg-[#222] text-white text-sm font-bold py-1.5 px-4 rounded-md transition-colors flex items-center gap-2">
                        <span>🏆</span> Leagues
                    </button>
                    <button className="bg-[#111] border border-[#333] hover:bg-[#222] text-white text-sm font-bold py-1.5 px-4 rounded-md transition-colors flex items-center gap-2">
                        Nations
                    </button>
                    <button className="bg-[#111] border border-[#333] hover:bg-[#222] text-white text-sm font-bold py-1.5 px-4 rounded-md transition-colors flex items-center gap-2">
                        Clubs
                    </button>
                    <button className="bg-[#111] border border-[#333] hover:bg-[#222] text-[#ffb800] text-sm font-bold py-1.5 px-4 rounded-md transition-colors flex items-center gap-2">
                        <span className="bg-[#ffb800] text-black rounded-full w-4 h-4 flex items-center justify-center text-[10px]">F</span> Price
                    </button>
                </div>

                {/* Table */}
                <div className="w-full bg-[#1e1e1e]/60 rounded-lg border border-[#333] overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[900px]">
                            <thead>
                                <tr className="bg-[#0a0a0a] text-[10px] font-bold text-white tracking-widest border-b border-[#333]">
                                    <th className="p-4 uppercase">PLAYER</th>
                                    <th className="p-4 uppercase text-center w-28">PRICE<br/><span className="text-[9px] text-gray-500 font-normal">(FUTBIN PRICE)</span></th>
                                    <th className="p-4 uppercase text-center w-28">UPDATED</th>
                                    <th className="p-4 uppercase text-center w-28">TREND</th>
                                    <th className="p-4 uppercase text-center w-28">AVERAGE</th>
                                    <th className="p-4 uppercase text-center w-28">DIFFERENCE</th>
                                    <th className="p-4 uppercase text-center w-28">TAX</th>
                                    <th className="p-4 uppercase text-center w-28">AFTER TAX</th>
                                    <th className="p-4 uppercase text-center w-24">HISTORY</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm font-semibold">
                                {mockPlayers.map((player, i) => (
                                    <tr key={i} className="border-b border-[#2d2d2d] hover:bg-[#252525] transition-colors">
                                        <td className="p-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-14 bg-[#2a2a2a] rounded relative border border-[#333]">
                                                    <img src={`https://placehold.co/40x56/1e1e1e/444`} alt="Player" className="w-full h-full object-cover rounded" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-white mb-1">{player.name}</span>
                                                    <div className="flex items-center gap-1 mb-1">
                                                        <div className="w-4 h-4 bg-red-600 rounded-sm"></div>
                                                        <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
                                                        <div className="w-4 h-4 bg-blue-800 rounded-sm"></div>
                                                    </div>
                                                    <span className="text-[10px] text-gray-400 font-normal">{player.type}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 text-center">
                                            <div className="flex items-center justify-center gap-1 text-white font-bold">
                                                {player.price} <span className="text-[#ffb800] text-[10px]">F</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-center text-gray-300 font-normal">{player.updated}</td>
                                        <td className="p-4 text-center">
                                            <span className={`font-bold ${player.trendUp ? 'text-[#00e575]' : 'text-gray-400'}`}>
                                                {player.trendUp ? '📈' : '-'} {player.trend}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <div className="flex items-center justify-center gap-1 text-white font-bold">
                                                {player.avgPrice} <span className="text-[#ffb800] text-[10px]">F</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-center">
                                            <div className="flex flex-col items-center justify-center">
                                                <span className={`font-bold text-[11px] ${player.diffUp ? 'text-[#00e575]' : 'text-red-500'}`}>
                                                    {player.diffUp ? '📈' : '📉'} {player.diffPct}
                                                </span>
                                                <div className="flex items-center justify-center gap-1 text-gray-300 font-normal mt-0.5">
                                                    {player.diffVal} <span className="text-[#ffb800] text-[10px]">F</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 text-center">
                                            <div className="flex items-center justify-center gap-1 text-white font-bold">
                                                {player.tax} <span className="text-[#ffb800] text-[10px]">F</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-center">
                                            <div className="flex items-center justify-center gap-1 text-white font-bold">
                                                {player.afterTax} <span className="text-[#ffb800] text-[10px]">F</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-center">
                                            <button className="text-[#00e575] hover:text-[#00ff73] text-xs font-bold transition-colors flex items-center justify-center gap-1 mx-auto">
                                                <span>⇅</span> Sales
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}
