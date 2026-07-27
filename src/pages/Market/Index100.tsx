import React from 'react';

const mockGainers = [
    { name: 'Wolte...', rating: '80', pos: 'RWB', change: '+700.00%', price: '--' },
    { name: 'Livaković', rating: '80', pos: 'GK', change: '+669.23%', price: '--' },
    { name: 'Fowler', rating: '87', pos: 'ST', change: '+600.00%', price: '--' },
    { name: 'Karcha...', rating: '88', pos: 'LW', change: '+574.16%', price: '--' },
];

const mockLosers = [
    { name: 'Javi Ga...', rating: '80', pos: 'LB', change: '-94.00%', price: '--' },
    { name: 'Fortou...', rating: '80', pos: 'CAM', change: '-91.01%', price: '--' },
    { name: 'Savinho', rating: '82', pos: 'RW', change: '-87.67%', price: '--' },
    { name: 'Marad...', rating: '95', pos: 'CAM', change: '-80.90%', price: '--' },
];

export default function Index100() {
    return (
        <div className="w-full min-h-screen bg-[#1a1a1a] text-white pt-24 px-4 pb-16 relative">
            <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
                
                {/* Header */}
                <div>
                    <div className="text-sm text-gray-400 mb-1 flex items-center gap-2">
                        Home <span>›</span> Market <span>›</span> Index 100
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-4">Index 100</h1>
                </div>

                <div className="flex flex-col gap-6">
                    
                    {/* Main Chart Area */}
                    <div className="flex flex-col gap-6">
                        {/* Chart Container */}
                        <div className="bg-[#1e1e1e] border border-[#2d2d2d] rounded-lg p-6 flex flex-col h-[400px] relative overflow-hidden">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-2 bg-[#111] border border-[#333] p-1 rounded">
                                    <span className="text-xs font-bold text-white px-3 py-1 bg-[#333] rounded cursor-pointer">Live</span>
                                    <span className="text-xs font-bold text-gray-400 px-3 py-1 hover:text-white cursor-pointer">Daily</span>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center gap-2 justify-end">
                                        <span className="text-green-500 text-xl">▲</span>
                                        <span className="text-2xl font-bold text-white">184.08</span>
                                    </div>
                                    <span className="text-green-500 font-bold text-sm">+1.61%</span>
                                </div>
                                <div className="text-right text-xs flex flex-col gap-1">
                                    <span className="text-gray-400">Open: 181.16</span>
                                    <span className="text-red-500">Lowest: 181.16</span>
                                    <span className="text-green-500">Highest: 184.08</span>
                                </div>
                            </div>
                            
                            {/* Mock Chart Area */}
                            <div className="flex-1 border-l border-b border-[#333] relative overflow-hidden">
                                <div className="absolute inset-0 flex flex-col justify-between py-2 text-[10px] text-gray-500 -ml-6">
                                    <span>220</span><span>200</span><span>180</span><span>160</span><span>140</span><span>120</span><span>100</span>
                                </div>
                                <div className="w-full h-full border-b border-[#00e575] border-t border-transparent relative opacity-70">
                                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100" style={{ overflow: 'hidden' }}>
                                        <polyline points="0,70 10,70 10,40 25,40 25,45 35,45 35,30 50,30 50,75 60,75 60,20 80,20 80,30 100,30" fill="none" stroke="#f2553b" strokeWidth="1" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Top Gainers / Losers */}
                        <div className="bg-[#1e1e1e] border border-[#2d2d2d] border-t-4 border-t-[#00e575] rounded-lg p-6">
                            <div className="flex items-center gap-4 border-b border-[#333] pb-4 mb-4">
                                <span className="font-bold text-sm text-gray-400 uppercase">SWITCH TIMESPAN</span>
                                <button className="bg-[#333] text-white text-xs font-bold px-3 py-1.5 rounded">24 Hours</button>
                                <button className="text-gray-400 hover:text-white text-xs font-bold px-3 py-1.5 transition-colors">4 Hours</button>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                                {/* Gainers */}
                                <div>
                                    <h3 className="text-white mb-4">Top Gainers</h3>
                                    <div className="grid grid-cols-4 gap-2">
                                        {mockGainers.map((g, i) => (
                                            <div key={i} className="flex flex-col items-center gap-1">
                                                <div className="w-16 h-20 bg-[#694212] border border-[#b47a32] rounded relative mb-2"></div>
                                                <span className="text-[#00ff73] font-bold text-xs">{g.change}</span>
                                                <span className="text-white font-bold text-xs flex items-center gap-1">
                                                    <span className="text-[#3b82f6] text-[10px]">■</span> {g.price}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Losers */}
                                <div>
                                    <h3 className="text-white mb-4">Top Losers</h3>
                                    <div className="grid grid-cols-4 gap-2">
                                        {mockLosers.map((l, i) => (
                                            <div key={i} className="flex flex-col items-center gap-1">
                                                <div className="w-16 h-20 bg-[#161f2e] border border-[#2a3a50] rounded relative mb-2"></div>
                                                <span className="text-[#ff3b3b] font-bold text-xs">{l.change}</span>
                                                <span className="text-white font-bold text-xs flex items-center gap-1">
                                                    <span className="text-[#3b82f6] text-[10px]">■</span> {l.price}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Index List - Now part of the main section */}
                            <div className="bg-[#111] border border-[#2d2d2d] rounded overflow-hidden mt-8 w-full">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-black text-[11px] font-bold text-white border-b border-[#333]">
                                            <th className="p-3 uppercase">NAME</th>
                                            <th className="p-3 uppercase text-right">LAST</th>
                                            <th className="p-3 text-right uppercase">CHANGE %</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm font-semibold">
                                        {[
                                            { name: 'Index 100', last: 184.09, chg: '+1.62%', color: 'text-[#00ff73]', isGreen: true },
                                            { name: 'Index 86', last: 2.74, chg: '-3.86%', color: 'text-[#ff3b3b]', isGreen: false },
                                            { name: 'Index 85', last: 17.93, chg: '+2.75%', color: 'text-[#00ff73]', isGreen: true },
                                            { name: 'Index 84', last: 33.94, chg: '-15.32%', color: 'text-[#ff3b3b]', isGreen: false },
                                            { name: 'Index 83', last: 83.64, chg: '+0.08%', color: 'text-[#00ff73]', isGreen: true },
                                            { name: 'Index 82', last: 280.95, chg: '+4.79%', color: 'text-[#00ff73]', isGreen: true },
                                            { name: 'Index 81', last: 236.52, chg: '-3.72%', color: 'text-[#ff3b3b]', isGreen: false },
                                            { name: 'Index Icons', last: 22.41, chg: '-0.22%', color: 'text-[#ff3b3b]', isGreen: false },
                                        ].map((row, i) => (
                                            <tr key={i} className={`border-b border-[#222] ${i === 0 ? 'bg-[#1a1a1a]' : 'hover:bg-[#1a1a1a]'} transition-colors cursor-pointer`}>
                                                <td className="p-3 flex items-center gap-2">
                                                    <div className="w-3 h-4 bg-yellow-600 rounded-sm"></div>
                                                    <span className="text-white font-bold">{row.name}</span>
                                                </td>
                                                <td className="p-3 text-white text-right font-bold">{row.last.toFixed(2)}</td>
                                                <td className={`p-3 text-right font-bold ${row.color}`}>
                                                    {row.isGreen ? '▲' : '▼'} {row.chg.replace(/[+-]/g, '')}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
