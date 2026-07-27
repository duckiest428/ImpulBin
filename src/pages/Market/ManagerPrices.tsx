import React from 'react';

const mockManagers = [
    { country: 'Portugal', flag: '🇵🇹', bronze: '--', silver: '--', gold: '--' },
    { country: 'Spain', flag: '🇪🇸', bronze: '--', silver: '--', gold: '--' },
    { country: 'Albania', flag: '🇦🇱', bronze: '--', silver: '--', gold: '--' },
    { country: 'Algeria', flag: '🇩🇿', bronze: '--', silver: '--', gold: '--' },
    { country: 'Australia', flag: '🇦🇺', bronze: '--', silver: '--', gold: '--' },
    { country: 'Austria', flag: '🇦🇹', bronze: '--', silver: '--', gold: '--' },
    { country: 'Azerbaijan', flag: '🇦🇿', bronze: '--', silver: '--', gold: '--' },
    { country: 'Bolivia', flag: '🇧🇴', bronze: '--', silver: '--', gold: '--' },
    { country: 'Bosnia and Herzegovina', flag: '🇧🇦', bronze: '--', silver: '--', gold: '--' },
    { country: 'Bulgaria', flag: '🇧🇬', bronze: '--', silver: '--', gold: '--' },
    { country: 'Burkina Faso', flag: '🇧🇫', bronze: '--', silver: '--', gold: '--' },
    { country: 'Cameroon', flag: '🇨🇲', bronze: '--', silver: '--', gold: '--' },
    { country: 'Canada', flag: '🇨🇦', bronze: '--', silver: '--', gold: '--' },
    { country: 'Cape Verde Islands', flag: '🇨🇻', bronze: '--', silver: '--', gold: '--' },
    { country: 'Chile', flag: '🇨🇱', bronze: '--', silver: '--', gold: '--' },
    { country: 'China PR', flag: '🇨🇳', bronze: '--', silver: '--', gold: '--' },
    { country: 'Colombia', flag: '🇨🇴', bronze: '--', silver: '--', gold: '--' },
    { country: 'Congo DR', flag: '🇨🇩', bronze: '--', silver: '--', gold: '--' },
    { country: 'Costa Rica', flag: '🇨🇷', bronze: '--', silver: '--', gold: '--' },
    { country: 'Croatia', flag: '🇭🇷', bronze: '--', silver: '--', gold: '--' },
    { country: 'Cyprus', flag: '🇨🇾', bronze: '--', silver: '--', gold: '--' },
    { country: 'Czechia', flag: '🇨🇿', bronze: '--', silver: '--', gold: '--' },
    { country: 'Côte d\'Ivoire', flag: '🇨🇮', bronze: '--', silver: '--', gold: '--' },
    { country: 'Denmark', flag: '🇩🇰', bronze: '--', silver: '--', gold: '--' },
    { country: 'Ecuador', flag: '🇪🇨', bronze: '--', silver: '--', gold: '--' },
    { country: 'Egypt', flag: '🇪🇬', bronze: '--', silver: '--', gold: '--' }
];

export default function ManagerPrices() {
    return (
        <div className="w-full min-h-screen bg-[#1a1a1a] text-white pt-24 px-4 pb-16 relative">
            
            {/* Background Overlay Mock */}
            <div className="absolute inset-0 top-0 h-full bg-gradient-to-b from-[#1a1a1a]/40 to-[#1a1a1a] z-0 overflow-hidden pointer-events-none">
                <div className="w-full h-[60vh] opacity-20 bg-[url('https://placehold.co/1920x1080/1a1a1a/2d2d2d')] bg-cover bg-center"></div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 relative z-10">
                
                {/* Left Content Area */}
                <div className="flex-1 flex flex-col gap-6">
                    {/* Header */}
                    <div>
                        <div className="text-sm text-gray-400 mb-1 flex items-center gap-2">
                            Home <span>›</span> Managers
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-1">FIFA 17 Manager Prices</h1>
                        <div className="text-gray-400 text-sm mb-6">FUT 17 Manager Prices from each country</div>
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-80">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-white text-sm font-bold">🔍</span>
                        </div>
                        <input 
                            type="text" 
                            placeholder="Search"
                            className="bg-[#0a0a0a] border border-transparent rounded pl-9 pr-3 py-2 text-sm w-full text-white placeholder-gray-500 focus:outline-none focus:border-[#333]"
                        />
                    </div>

                    {/* Table */}
                    <div className="w-full md:w-4/5 bg-[#1e1e1e]/80 rounded-lg border border-[#333] overflow-hidden mt-4 shadow-2xl backdrop-blur-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#0a0a0a] text-[10px] font-bold text-white tracking-widest border-b border-[#333]">
                                    <th className="p-4 uppercase w-1/2">COUNTRY</th>
                                    <th className="p-4 text-center">
                                        <div className="w-4 h-5 bg-orange-700/50 border border-orange-500 rounded-sm mx-auto"></div>
                                    </th>
                                    <th className="p-4 text-center">
                                        <div className="w-4 h-5 bg-gray-400/50 border border-gray-300 rounded-sm mx-auto"></div>
                                    </th>
                                    <th className="p-4 text-center">
                                        <div className="w-4 h-5 bg-yellow-600/50 border border-yellow-400 rounded-sm mx-auto"></div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-sm font-semibold">
                                {mockManagers.map((m, i) => (
                                    <tr key={i} className="border-b border-[#2d2d2d] hover:bg-[#252525] transition-colors">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <span className="text-xl">{m.flag}</span>
                                                <span className="text-white">{m.country}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-center text-gray-300">
                                            {m.bronze !== '-' ? <>{m.bronze} <span className="text-[#ffb800] text-[10px]">F</span></> : '-'}
                                        </td>
                                        <td className="p-4 text-center text-gray-300">
                                            {m.silver !== '-' ? <>{m.silver} <span className="text-[#ffb800] text-[10px]">F</span></> : '-'}
                                        </td>
                                        <td className="p-4 text-center text-gray-300">
                                            {m.gold !== '-' ? <>{m.gold} <span className="text-[#ffb800] text-[10px]">F</span></> : '-'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Right Ad Sidebar */}
                <div className="hidden lg:flex w-72 flex-col gap-6 pt-24 items-center">
                    <div className="w-full h-96 border border-gray-600/30 flex items-center justify-center text-gray-600 text-sm">
                        Advertisement
                    </div>
                </div>

            </div>
        </div>
    );
}
