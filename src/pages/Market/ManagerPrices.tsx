import React, { useState } from 'react';
import { SafeImage } from '../../components/SafeImage';
import { getAssetUrl } from '../../utils/assetUrl';

const mockManagers = [
    { country: 'Portugal', flag: 'https://flagcdn.com/w40/pt.png', bronze: '--', silver: '--', gold: '--' },
    { country: 'Spain', flag: 'https://flagcdn.com/w40/es.png', bronze: '--', silver: '--', gold: '--' },
    { country: 'Albania', flag: 'https://flagcdn.com/w40/al.png', bronze: '--', silver: '--', gold: '--' },
    { country: 'Algeria', flag: 'https://flagcdn.com/w40/dz.png', bronze: '--', silver: '--', gold: '--' },
    { country: 'Australia', flag: 'https://flagcdn.com/w40/au.png', bronze: '--', silver: '--', gold: '--' },
    { country: 'Austria', flag: 'https://flagcdn.com/w40/at.png', bronze: '--', silver: '--', gold: '--' },
    { country: 'Azerbaijan', flag: 'https://flagcdn.com/w40/az.png', bronze: '--', silver: '--', gold: '--' },
    { country: 'Bolivia', flag: 'https://flagcdn.com/w40/bo.png', bronze: '--', silver: '--', gold: '--' },
    { country: 'Bosnia and Herzegovina', flag: 'https://flagcdn.com/w40/ba.png', bronze: '--', silver: '--', gold: '--' },
    { country: 'Bulgaria', flag: 'https://flagcdn.com/w40/bg.png', bronze: '--', silver: '--', gold: '--' },
    { country: 'Burkina Faso', flag: 'https://flagcdn.com/w40/bf.png', bronze: '--', silver: '--', gold: '--' },
    { country: 'Cameroon', flag: 'https://flagcdn.com/w40/cm.png', bronze: '--', silver: '--', gold: '--' },
    { country: 'Canada', flag: 'https://flagcdn.com/w40/ca.png', bronze: '--', silver: '--', gold: '--' },
    { country: 'Cape Verde Islands', flag: 'https://flagcdn.com/w40/cv.png', bronze: '--', silver: '--', gold: '--' },
    { country: 'Chile', flag: 'https://flagcdn.com/w40/cl.png', bronze: '--', silver: '--', gold: '--' },
    { country: 'China PR', flag: 'https://flagcdn.com/w40/cn.png', bronze: '--', silver: '--', gold: '--' },
    { country: 'Colombia', flag: 'https://flagcdn.com/w40/co.png', bronze: '--', silver: '--', gold: '--' },
    { country: 'Congo DR', flag: 'https://flagcdn.com/w40/cd.png', bronze: '--', silver: '--', gold: '--' },
    { country: 'Costa Rica', flag: 'https://flagcdn.com/w40/cr.png', bronze: '--', silver: '--', gold: '--' },
    { country: 'Croatia', flag: 'https://flagcdn.com/w40/hr.png', bronze: '--', silver: '--', gold: '--' },
    { country: 'Cyprus', flag: 'https://flagcdn.com/w40/cy.png', bronze: '--', silver: '--', gold: '--' },
    { country: 'Czechia', flag: 'https://flagcdn.com/w40/cz.png', bronze: '--', silver: '--', gold: '--' },
    { country: 'Côte d\'Ivoire', flag: 'https://flagcdn.com/w40/ci.png', bronze: '--', silver: '--', gold: '--' },
    { country: 'Denmark', flag: 'https://flagcdn.com/w40/dk.png', bronze: '--', silver: '--', gold: '--' },
    { country: 'Ecuador', flag: 'https://flagcdn.com/w40/ec.png', bronze: '--', silver: '--', gold: '--' },
    { country: 'Egypt', flag: 'https://flagcdn.com/w40/eg.png', bronze: '--', silver: '--', gold: '--' }
];

export default function ManagerPrices() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredManagers = mockManagers.filter(m => 
        m.country.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
                            <SafeImage src={getAssetUrl('assets/icons/search.svg')} alt="Search" className="w-4 h-4 text-gray-400 shrink-0" />
                        </div>
                        <input 
                            type="text" 
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-[#0a0a0a] border border-[#333] rounded pl-9 pr-3 py-2 text-sm w-full text-white placeholder-gray-500 focus:outline-none focus:border-[#00e575]"
                        />
                    </div>

                    {/* Table */}
                    <div className="w-full md:w-4/5 bg-[#1e1e1e]/80 rounded-lg border border-[#333] overflow-hidden mt-4 shadow-2xl backdrop-blur-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#0a0a0a] text-[10px] font-bold text-white tracking-widest border-b border-[#333]">
                                    <th className="p-4 uppercase w-1/2">COUNTRY</th>
                                    <th className="p-4 text-center w-1/6">
                                        <SafeImage src={getAssetUrl('assets/cards/0_bronze.webp')} fallbackType="card" className="h-8 w-auto mx-auto object-contain drop-shadow" alt="Bronze Manager Card" />
                                    </th>
                                    <th className="p-4 text-center w-1/6">
                                        <SafeImage src={getAssetUrl('assets/cards/0_silver.webp')} fallbackType="card" className="h-8 w-auto mx-auto object-contain drop-shadow" alt="Silver Manager Card" />
                                    </th>
                                    <th className="p-4 text-center w-1/6">
                                        <SafeImage src={getAssetUrl('assets/cards/0_gold.webp')} fallbackType="card" className="h-8 w-auto mx-auto object-contain drop-shadow" alt="Gold Manager Card" />
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-sm font-semibold">
                                {filteredManagers.map((m, i) => (
                                    <tr key={i} className="border-b border-[#2d2d2d] hover:bg-[#252525] transition-colors">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <img src={m.flag} alt={m.country} className="w-6 h-auto shadow-sm rounded-sm" />
                                                <span className="text-white">{m.country}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-center text-gray-300">
                                            <div className="flex items-center justify-center gap-1">
                                                <span>{m.bronze}</span>
                                                <SafeImage src="https://cdn.futbin.com/design/img/coins_bin.png" fallbackType="coin" className="w-3.5 h-3.5 inline shrink-0" alt="coins" />
                                            </div>
                                        </td>
                                        <td className="p-4 text-center text-gray-300">
                                            <div className="flex items-center justify-center gap-1">
                                                <span>{m.silver}</span>
                                                <SafeImage src="https://cdn.futbin.com/design/img/coins_bin.png" fallbackType="coin" className="w-3.5 h-3.5 inline shrink-0" alt="coins" />
                                            </div>
                                        </td>
                                        <td className="p-4 text-center text-gray-300">
                                            <div className="flex items-center justify-center gap-1">
                                                <span>{m.gold}</span>
                                                <SafeImage src="https://cdn.futbin.com/design/img/coins_bin.png" fallbackType="coin" className="w-3.5 h-3.5 inline shrink-0" alt="coins" />
                                            </div>
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
