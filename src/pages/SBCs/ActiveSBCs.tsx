import React from 'react';
import SBCNav from '../../components/SBCNav';
import { getAssetUrl } from '../../utils/assetUrl';

const activeSBCs = [
    { id: 1, title: 'SBC Name', rewardTitle: 'Reward Name', image: '93+', type: 'NEW', expires: '--', repeatable: 'Unlimited', completed: '0 / 2', price: '--', up: '12%', down: '88%', votes: 369 },
    { id: 2, title: 'SBC Name', rewardTitle: 'Reward Name', image: 'EVO', type: 'NEW', expires: '--', repeatable: '0', completed: '0 / 3', price: '--', up: '83%', down: '17%', votes: 357 },
    { id: 3, title: 'SBC Name', rewardTitle: 'Reward Name', image: 'PUZZLE', type: 'NEW', expires: '--', repeatable: '0', completed: '0 / 1', price: '--', up: '28%', down: '72%', votes: 180 },
    { id: 4, title: 'SBC Name', rewardTitle: 'Reward Name', image: '97', type: 'NEW', expires: '--', repeatable: '0', completed: '0 / 4', price: '--', up: '30%', down: '70%', votes: 318 },
    { id: 5, title: 'SBC Name', rewardTitle: 'Reward Name', image: '97', expires: '--', repeatable: '0', completed: '0 / 5', price: '--', up: '82%', down: '18%', votes: 581 },
    { id: 6, title: 'SBC Name', rewardTitle: 'Reward Name', image: '96', expires: '--', repeatable: '0', completed: '0 / 4', price: '--', up: '83%', down: '17%', votes: 452 },
    { id: 7, title: 'SBC Name', rewardTitle: 'Reward Name', image: '85+', expires: '--', repeatable: 'Unlimited', completed: '0 / 1', price: '--', up: '89%', down: '11%', votes: 201 },
    { id: 8, title: 'SBC Name', rewardTitle: 'Reward Name', image: '97', expires: '--', repeatable: '0', completed: '0 / 3', price: '--', up: '90%', down: '10%', votes: 1000 },
    { id: 9, title: 'SBC Name', rewardTitle: 'Reward Name', image: '97', expires: '--', repeatable: '0', completed: '0 / 4', price: '--', up: '75%', down: '25%', votes: 850 }
];

export default function ActiveSBCs() {
    return (
        <div className="w-full min-h-screen bg-[#1a1a1a] text-white pt-24 px-4 pb-16">
            <div className="max-w-7xl mx-auto flex flex-col gap-6">
                
                {/* Header */}
                <div>
                    <div className="text-sm text-gray-400 mb-1 flex items-center gap-2">
                        Home <span>›</span> Squad Building Challenges
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
                        <img src={getAssetUrl('assets/icons/main-sbcs.svg')} className="w-[28px] h-[28px]" alt="SBCs" />
                        FIFA 17 Squad Building Challenges & Solutions
                    </h1>
                    <div className="text-gray-400 text-sm mb-4"></div>
                    <button className="bg-[#2a2a2a] hover:bg-[#333] border border-[#333] text-sm py-1.5 px-3 rounded flex items-center gap-2 transition-colors w-max">
                        <span className="text-xs">↺</span> FIFA 17
                    </button>
                </div>

                <SBCNav />

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                    <button className="bg-[#00e575] text-black font-semibold text-sm py-1.5 px-3 rounded">All | 51</button>
                    <button className="bg-[#2a2a2a] hover:bg-[#333] text-white text-sm py-1.5 px-3 rounded transition-colors">Expiring Soon | 3</button>
                    <button className="bg-[#2a2a2a] hover:bg-[#333] text-white text-sm py-1.5 px-3 rounded transition-colors">Players | 7</button>
                    <button className="bg-[#2a2a2a] hover:bg-[#333] text-white text-sm py-1.5 px-3 rounded transition-colors">Upgrades | 16</button>
                    <button className="bg-[#2a2a2a] hover:bg-[#333] text-white text-sm py-1.5 px-3 rounded transition-colors">Challenges | 3</button>
                    <button className="bg-[#2a2a2a] hover:bg-[#333] text-white text-sm py-1.5 px-3 rounded transition-colors">Icons | 3</button>
                    <button className="bg-[#2a2a2a] hover:bg-[#333] text-white text-sm py-1.5 px-3 rounded transition-colors">Foundations | 4</button>
                    <button className="bg-[#2a2a2a] hover:bg-[#333] text-white text-sm py-1.5 px-3 rounded transition-colors">Swaps | 18</button>
                </div>

                {/* Search & Sort */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div className="relative w-full md:w-64">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-400 text-sm">🔍</span>
                        </div>
                        <input 
                            type="text" 
                            placeholder="Search..."
                            className="bg-[#111] border border-[#333] rounded pl-9 pr-3 py-1.5 text-sm w-full text-white placeholder-gray-500 focus:outline-none focus:border-[#00e575]"
                        />
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm py-1.5 px-4 rounded transition-colors flex items-center gap-2">
                            <span>⏳</span> Expiry
                        </button>
                        <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm py-1.5 px-4 rounded transition-colors flex items-center gap-2">
                            <span>🎁</span> Reward
                        </button>
                        <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm py-1.5 px-4 rounded transition-colors flex items-center gap-2">
                            <span>↻</span> Repeatable
                        </button>
                        <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm py-1.5 px-4 rounded transition-colors flex items-center gap-2">
                            <span>↕</span> Sorting
                        </button>
                        <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm py-1.5 px-3 rounded transition-colors flex items-center gap-2">
                            <span className="text-red-500 font-bold">0</span> <span className="text-[#ffb800]">★</span>
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {activeSBCs.map(sbc => (
                        <div key={sbc.id} className="bg-[#1e1e1e] rounded-lg border border-[#333] overflow-hidden flex flex-col">
                            {/* Card Header */}
                            <div className="bg-[#2a2a2a] p-3 flex justify-between items-center border-b border-[#333]">
                                <h3 className="font-bold text-sm truncate pr-2">{sbc.title}</h3>
                                <div className="flex items-center gap-2 shrink-0">
                                    {sbc.type && <span className="bg-[#00e575] text-black text-[10px] font-bold px-2 py-0.5 rounded-sm">NEW</span>}
                                    <span className="text-gray-400 hover:text-white cursor-pointer">★</span>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-4 flex-1 flex flex-col">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-16 h-20 bg-[#111] border border-[#333] rounded flex items-center justify-center shrink-0 text-xl font-bold text-[#ffb800]">
                                        {sbc.image}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400 font-semibold mb-1 uppercase tracking-wider">Reward</span>
                                        <span className="text-sm font-medium">{sbc.rewardTitle}</span>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-400 mb-4 line-clamp-2">
                                    {`Earn ${sbc.rewardTitle} by completing this challenge.`}
                                </p>
                                
                                <div className="mt-auto grid grid-cols-4 gap-2 text-center text-xs bg-[#111] rounded p-2 border border-[#333]">
                                    <div className="flex flex-col border-r border-[#333]">
                                        <span className="text-gray-500 uppercase text-[10px] mb-1">Expires</span>
                                        <span className="font-semibold text-white">{sbc.expires}</span>
                                    </div>
                                    <div className="flex flex-col border-r border-[#333]">
                                        <span className="text-gray-500 uppercase text-[10px] mb-1">Repeatable</span>
                                        <span className="font-semibold text-white">{sbc.repeatable}</span>
                                    </div>
                                    <div className="flex flex-col border-r border-[#333]">
                                        <span className="text-gray-500 uppercase text-[10px] mb-1">Completed</span>
                                        <span className="font-semibold text-white">{sbc.completed}</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <span className="text-gray-500 uppercase text-[10px] mb-1">■</span>
                                        <span className="font-semibold text-[#ffb800] text-[11px]">{sbc.price}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="p-3 bg-[#111] border-t border-[#333] flex items-center justify-between text-xs">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-1 bg-[#222] px-2 py-1 rounded text-green-500">
                                        <span>👍</span> <span>{sbc.up}</span>
                                    </div>
                                    <div className="flex items-center gap-1 bg-[#222] px-2 py-1 rounded text-red-500">
                                        <span>👎</span> <span>{sbc.down}</span>
                                    </div>
                                </div>
                                <span className="text-gray-500">{sbc.votes} Votes</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
