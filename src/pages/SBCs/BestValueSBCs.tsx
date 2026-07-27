import React from 'react';
import SBCNav from '../../components/SBCNav';

const mockSBCs = [
    { set: 'Intro to Player SBCs', challenge: 'Pride of the Nation', image1: '111', image2: '222', price: '700', reward: '1 x Gold Pack', rewardType: 'Untradeable', value: '5,000', vfc: '7.14' },
    { set: 'Intro to SBCs', challenge: 'A Brace', image1: '111', image2: '222', price: '400', reward: '1 x Silver Pack', rewardType: 'Untradeable', value: '2,500', vfc: '6.25' },
    { set: 'Throwback Marquee Matchups', challenge: 'Lombardia FC v Milano FC', image1: '111', image2: '222', price: '3,650', reward: '1 x Prime Electrum Players Pack', rewardType: 'Tradeable', value: '20,000', vfc: '5.48' },
    { set: 'Throwback Marquee Matchups', challenge: 'Arsenal v Tottenham Hotspur', image1: '111', image2: '222', price: '4,600', reward: '1 x Premium Gold Players Pack', rewardType: 'Tradeable', value: '25,000', vfc: '5.43' },
    { set: 'Throwback Marquee Matchups', challenge: 'Borussia Dortmund v VfB Stuttgart', image1: '111', image2: '222', price: '2,500', reward: '1 x Gold Players Pack', rewardType: 'Tradeable', value: '12,500', vfc: '5.00' },
    { set: 'Intro to Player SBCs', challenge: 'League Leader', image1: '111', image2: '222', price: '550', reward: '1 x Silver Pack', rewardType: 'Untradeable', value: '2,500', vfc: '4.55' },
    { set: 'Throwback Marquee Matchups', challenge: 'FC Barcelona v Athletic Club', image1: '111', image2: '222', price: '3,300', reward: '1 x Jumbo Premium Gold Pack', rewardType: 'Tradeable', value: '15,000', vfc: '4.55' },
];

export default function BestValueSBCs() {
    return (
        <div className="w-full min-h-screen bg-[#1a1a1a] text-white pt-24 px-4 pb-16">
            <div className="max-w-7xl mx-auto flex flex-col gap-6">
                
                {/* Header */}
                <div>
                    <div className="text-sm text-gray-400 mb-1 flex items-center gap-2">
                        Home <span>›</span> SBC Challenges
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-1">Best SBC's</h1>
                    <div className="text-gray-400 text-sm mb-4">List of all active challenges</div>
                    <button className="bg-[#2a2a2a] hover:bg-[#333] border border-[#333] text-sm py-1.5 px-3 rounded flex items-center gap-2 transition-colors w-max">
                        <span className="text-xs">↺</span> FC 26
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
                        <span>💰</span> Price
                    </button>
                    <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-[#ffb800] text-sm py-1.5 px-4 rounded transition-colors font-medium flex items-center gap-2">
                        <span>🎁</span> Reward Value
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
                            {mockSBCs.map((sbc, i) => (
                                <tr key={i} className="border-b border-[#2d2d2d] hover:bg-[#252525] transition-colors">
                                    <td className="p-4">
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="w-8 h-8 bg-blue-900 border border-blue-500 rounded overflow-hidden"></div>
                                            <span className="font-semibold text-white whitespace-nowrap">{sbc.set}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-cyan-900 border border-cyan-500 overflow-hidden flex items-center justify-center text-xs">⚽</div>
                                            <span className="font-semibold text-white whitespace-nowrap">{sbc.challenge}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className="font-bold text-gray-200">{sbc.price} <span className="text-[#ffb800] text-xs">F</span></span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex flex-col items-center gap-1">
                                            <div className="w-10 h-12 bg-yellow-900 border border-yellow-600 rounded"></div>
                                            <span className="font-medium text-white">{sbc.reward}</span>
                                            <span className={`text-xs font-semibold ${sbc.rewardType === 'Untradeable' ? 'text-red-500' : 'text-green-500'}`}>
                                                ({sbc.rewardType})
                                            </span>
                                        </div>
                                    </td>
                                    <td className="p-4 font-bold text-white">{sbc.value}</td>
                                    <td className="p-4 font-bold text-white">{sbc.vfc}</td>
                                    <td className="p-4">
                                        <div className="w-24 h-8 bg-[#3b82f6] mx-auto opacity-50 rounded"></div>
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
