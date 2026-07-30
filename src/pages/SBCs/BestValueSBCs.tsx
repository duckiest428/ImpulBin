import React from 'react';
import SBCNav from '../../components/SBCNav';
import { getAssetUrl } from '../../utils/assetUrl';
import { SafeImage } from '../../components/SafeImage';

export interface BestValueSBCItem {
    id: string;
    set: string;
    challenge: string;
    price: string;
    reward: string;
    rewardType: string;
    value: string;
    vfc: string;
}

const mockSBCs: BestValueSBCItem[] = Array.from({ length: 8 }).map((_, idx) => ({
    id: `best-sbc-${idx + 1}`,
    set: 'Set Name',
    challenge: 'Challenge Name',
    price: '--',
    reward: 'Reward Name',
    rewardType: '---',
    value: '--',
    vfc: '--',
}));

export default function BestValueSBCs() {
    return (
        <div className="w-full min-h-screen bg-[#1a1a1a] text-white pt-24 px-4 pb-16">
            <div className="max-w-7xl mx-auto flex flex-col gap-6">
                {/* Header */}
                <div>
                    <div className="text-sm text-gray-400 mb-1 flex items-center gap-2">
                        Home <span>›</span> SBC Challenges
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-1 flex items-center gap-2"><img src={getAssetUrl('assets/icons/main-sbcs.svg')} className="w-[28px] h-[28px]" alt="SBCs" />Best SBC's</h1>
                    <div className="text-gray-400 text-sm mb-4">List of all active challenges</div>
                    <button className="bg-[#2a2a2a] hover:bg-[#333] border border-[#333] text-sm py-1.5 px-3 rounded flex items-center gap-2 transition-colors w-max">
                        <span className="text-xs">↺</span> FIFA 17
                    </button>
                </div>

                <SBCNav />

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                    <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm py-1.5 px-4 rounded transition-colors font-medium">Categories</button>
                    <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm py-1.5 px-4 rounded transition-colors font-medium">Challenges</button>
                    <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm py-1.5 px-4 rounded transition-colors font-medium">Pack Rewards</button>
                    <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm py-1.5 px-4 rounded transition-colors font-medium">Reward Type</button>
                    <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-[#ffb800] text-sm py-1.5 px-4 rounded transition-colors font-medium flex items-center gap-2">
                        <SafeImage src={getAssetUrl('assets/icons/coins_bin-2.png.webp')} fallbackType="coin" className="w-3.5 h-3.5 inline" alt="coins" /> Price
                    </button>
                    <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-[#ffb800] text-sm py-1.5 px-4 rounded transition-colors font-medium flex items-center gap-2">
                        <span className="text-xs">🎁</span> Reward Value
                    </button>
                </div>

                {/* Table */}
                <div className="w-full bg-[#1e1e1e] rounded border border-[#2d2d2d] overflow-hidden">
                    <table className="w-full text-center border-collapse">
                        <thead>
                            <tr className="bg-[#111] text-xs font-bold text-white tracking-wider border-b border-[#333]">
                                <th className="p-4 uppercase">Set</th>
                                <th className="p-4 uppercase">Challenge</th>
                                <th className="p-4 uppercase">Cheapest Solution Price</th>
                                <th className="p-4 uppercase">Reward</th>
                                <th className="p-4 uppercase">Reward Value</th>
                                <th className="p-4 uppercase">VFC</th>
                                <th className="p-4 uppercase">Last 7 Days Graph</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {mockSBCs.map((sbc) => (
                                <tr key={sbc.id} className="border-b border-[#2d2d2d] hover:bg-[#252525] transition-colors">
                                    <td className="p-4">
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="w-10 h-12 bg-[#252525] rounded border border-[#333] flex items-center justify-center text-gray-500 font-mono text-xs">
                                                --
                                            </div>
                                            <span className="font-semibold text-gray-400 whitespace-nowrap">{sbc.set}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="w-10 h-12 bg-[#252525] rounded border border-[#333] flex items-center justify-center text-gray-500 font-mono text-xs">
                                                --
                                            </div>
                                            <span className="font-semibold text-gray-400 whitespace-nowrap">{sbc.challenge}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className="font-bold text-gray-500 font-mono flex items-center justify-center gap-1">
                                            {sbc.price}
                                            <SafeImage src={getAssetUrl('assets/icons/coins_bin-2.png.webp')} fallbackType="coin" className="w-3.5 h-3.5 inline" alt="coins" />
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex flex-col items-center gap-1">
                                            <div className="w-10 h-12 bg-[#252525] rounded border border-[#333] flex items-center justify-center text-gray-500 font-mono text-xs">
                                                --
                                            </div>
                                            <span className="font-medium text-gray-400">{sbc.reward}</span>
                                            <span className="text-xs font-semibold text-gray-500">
                                                ({sbc.rewardType})
                                            </span>
                                        </div>
                                    </td>
                                    <td className="p-4 font-bold text-gray-500 font-mono">{sbc.value}</td>
                                    <td className="p-4 font-bold text-gray-500 font-mono">{sbc.vfc}</td>
                                    <td className="p-4">
                                        <div className="w-24 h-6 bg-[#252525] border border-[#333] rounded mx-auto flex items-center justify-center text-gray-600 font-mono text-[10px]">
                                            -- GRAPH --
                                        </div>
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
