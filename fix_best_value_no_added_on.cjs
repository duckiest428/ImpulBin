const fs = require('fs');

const content = `import React from 'react';
import SBCNav from '../../components/SBCNav';

export interface BestValueSBCItem {
    id: string;
    set: string;
    challenge: string;
    setImg: string;
    challengeImg: string;
    rewardImg: string;
    price: string;
    reward: string;
    rewardType: 'Tradeable' | 'Untradeable';
    value: string;
    vfc: string;
    graphImg: string;
}

const mockSBCs: BestValueSBCItem[] = [
    { id: '1', set: 'Intro to Player SBCs', challenge: 'Pride of the Nation', setImg: 'https://placehold.co/40x50/2c3e50/white?text=Set', challengeImg: 'https://placehold.co/40x50/0f172a/white?text=Chall', rewardImg: 'https://placehold.co/40x50/332200/white?text=Pack', price: '700', reward: '1 x Gold Pack', rewardType: 'Untradeable', value: '5,000', vfc: '7.14', graphImg: 'https://placehold.co/100x40/1e1e1e/3b82f6?text=Graph' },
    { id: '2', set: 'Intro to SBCs', challenge: 'A Brace', setImg: 'https://placehold.co/40x50/2c3e50/white?text=Set', challengeImg: 'https://placehold.co/40x50/0f172a/white?text=Chall', rewardImg: 'https://placehold.co/40x50/332200/white?text=Pack', price: '400', reward: '1 x Silver Pack', rewardType: 'Untradeable', value: '2,500', vfc: '6.25', graphImg: 'https://placehold.co/100x40/1e1e1e/3b82f6?text=Graph' },
    { id: '3', set: 'Throwback Marquee Matchups', challenge: 'Lombardia FC v Milano FC', setImg: 'https://placehold.co/40x50/2c3e50/white?text=Set', challengeImg: 'https://placehold.co/40x50/0f172a/white?text=Chall', rewardImg: 'https://placehold.co/40x50/332200/white?text=Pack', price: '3,650', reward: '1 x Prime Electrum Players Pack', rewardType: 'Tradeable', value: '20,000', vfc: '5.48', graphImg: 'https://placehold.co/100x40/1e1e1e/3b82f6?text=Graph' },
    { id: '4', set: 'Throwback Marquee Matchups', challenge: 'Arsenal v Tottenham Hotspur', setImg: 'https://placehold.co/40x50/2c3e50/white?text=Set', challengeImg: 'https://placehold.co/40x50/0f172a/white?text=Chall', rewardImg: 'https://placehold.co/40x50/332200/white?text=Pack', price: '4,600', reward: '1 x Premium Gold Players Pack', rewardType: 'Tradeable', value: '25,000', vfc: '5.43', graphImg: 'https://placehold.co/100x40/1e1e1e/3b82f6?text=Graph' },
    { id: '5', set: 'Throwback Marquee Matchups', challenge: 'Borussia Dortmund v VfB Stuttgart', setImg: 'https://placehold.co/40x50/2c3e50/white?text=Set', challengeImg: 'https://placehold.co/40x50/0f172a/white?text=Chall', rewardImg: 'https://placehold.co/40x50/332200/white?text=Pack', price: '2,500', reward: '1 x Gold Players Pack', rewardType: 'Tradeable', value: '12,500', vfc: '5.00', graphImg: 'https://placehold.co/100x40/1e1e1e/3b82f6?text=Graph' },
    { id: '6', set: 'Intro to Player SBCs', challenge: 'League Leader', setImg: 'https://placehold.co/40x50/2c3e50/white?text=Set', challengeImg: 'https://placehold.co/40x50/0f172a/white?text=Chall', rewardImg: 'https://placehold.co/40x50/332200/white?text=Pack', price: '550', reward: '1 x Silver Pack', rewardType: 'Untradeable', value: '2,500', vfc: '4.55', graphImg: 'https://placehold.co/100x40/1e1e1e/3b82f6?text=Graph' },
    { id: '7', set: 'Throwback Marquee Matchups', challenge: 'FC Barcelona v Athletic Club', setImg: 'https://placehold.co/40x50/2c3e50/white?text=Set', challengeImg: 'https://placehold.co/40x50/0f172a/white?text=Chall', rewardImg: 'https://placehold.co/40x50/332200/white?text=Pack', price: '3,300', reward: '1 x Jumbo Premium Gold Pack', rewardType: 'Tradeable', value: '15,000', vfc: '4.55', graphImg: 'https://placehold.co/100x40/1e1e1e/3b82f6?text=Graph' },
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
                        <span className="inline-block w-3.5 h-3.5 bg-[#ffb800] text-black text-[9px] font-extrabold rounded-full text-center leading-[14px]">C</span> Price
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
                                            <img src={sbc.setImg} alt={sbc.set} className="w-10 h-12 object-contain rounded" />
                                            <span className="font-semibold text-white whitespace-nowrap">{sbc.set}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex flex-col items-center gap-2">
                                            <img src={sbc.challengeImg} alt={sbc.challenge} className="w-10 h-12 object-contain rounded" />
                                            <span className="font-semibold text-white whitespace-nowrap">{sbc.challenge}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className="font-bold text-gray-200 flex items-center justify-center gap-1">
                                            {sbc.price}
                                            <span className="w-3.5 h-3.5 bg-[#ffb800] text-black text-[9px] font-extrabold rounded-full inline-flex items-center justify-center">C</span>
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex flex-col items-center gap-1">
                                            <img src={sbc.rewardImg} alt={sbc.reward} className="w-10 h-12 object-contain rounded" />
                                            <span className="font-medium text-white">{sbc.reward}</span>
                                            <span className={\`text-xs font-semibold \${sbc.rewardType === 'Untradeable' ? 'text-red-500' : 'text-green-500'}\`}>
                                                ({sbc.rewardType})
                                            </span>
                                        </div>
                                    </td>
                                    <td className="p-4 font-bold text-white">{sbc.value}</td>
                                    <td className="p-4 font-bold text-white">{sbc.vfc}</td>
                                    <td className="p-4">
                                        <img src={sbc.graphImg} alt="Graph" className="w-24 h-8 object-contain opacity-75 mx-auto rounded" />
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
`;

fs.writeFileSync('src/pages/SBCs/BestValueSBCs.tsx', content);
