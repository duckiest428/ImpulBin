import React from 'react';
import SBCNav from '../../components/SBCNav';
import { getAssetUrl } from '../../utils/assetUrl';

export default function SBCSolutions() {
    return (
        <div className="w-full min-h-screen bg-[#1a1a1a] text-white pt-24 px-4 pb-16 relative">
            {/* Background Overlay Mock */}
            <div className="absolute inset-0 top-0 h-[60vh] bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a] z-0 overflow-hidden pointer-events-none">
                <div className="w-full h-full opacity-20 bg-[url('https://www.futbin.com/design/img/pitch.png?v=2')] bg-cover bg-center"></div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col relative z-10">
                {/* Header Section */}
                <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-1">
                        Home <span>›</span> SBC Community Squads
                    </div>
                    <h1 className="text-2xl font-bold text-white flex items-center gap-2"><img src={getAssetUrl('assets/icons/main-sbcs.svg')} className="w-[28px] h-[28px]" alt="SBCs" />SBC Community Squads</h1>
                    <div className="text-gray-400 text-sm">Search and filter SBC squads</div>
                </div>

                <div className="mb-4 mt-8">
                    <button className="bg-[#111] hover:bg-[#222] border border-[#333] text-sm py-1.5 px-3 rounded flex items-center gap-2 transition-colors w-max">
                        <span className="text-xs">↺</span> FC 26
                    </button>
                </div>

                <SBCNav />

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                    <div className="flex-1 min-w-[200px] max-w-sm flex items-center bg-[#111] border border-[#333] focus-within:border-[#00e575] rounded px-3 py-1.5 transition-all">
                        <span className="text-gray-400 text-sm mr-2">🔍</span>
                        <input
                            type="text"
                            placeholder="Search for Player..."
                            className="w-full bg-transparent border-none text-white outline-none text-sm placeholder-gray-500"
                        />
                    </div>
                    <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm py-1.5 px-4 rounded transition-colors">
                        Challenges
                    </button>
                    <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm py-1.5 px-4 rounded transition-colors">
                        Rating
                    </button>
                    <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm py-1.5 px-4 rounded transition-colors">
                        Chemistry
                    </button>
                </div>

                {/* Table */}
                <div className="bg-[#111] border border-[#333] rounded-lg overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="border-b border-[#333] bg-[#000]">
                                <th className="p-3 text-center uppercase text-xs text-gray-300 font-bold w-48">Set</th>
                                <th className="p-3 text-center uppercase text-xs text-gray-300 font-bold w-48">Challenge</th>
                                <th className="p-3 text-center uppercase text-xs text-gray-300 font-bold">Squad</th>
                                <th className="p-3 text-center uppercase text-xs text-gray-300 font-bold">Price</th>
                                <th className="p-3 text-center uppercase text-xs text-gray-300 font-bold">Chemistry</th>
                                <th className="p-3 text-center uppercase text-xs text-gray-300 font-bold">Rating</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {[1, 2, 3, 4].map((idx) => (
                                <tr key={idx} className="border-b border-[#222] hover:bg-[#1a1a1a] transition-colors">
                                    <td className="p-4 text-center">
                                        <div className="flex flex-col items-center justify-center gap-2">
                                            <div className="w-10 h-12 bg-[#252525] rounded border border-[#333] flex items-center justify-center text-gray-500 font-mono text-xs">
                                                --
                                            </div>
                                            <span className="text-gray-400 font-medium text-xs">Set Name</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-center">
                                        <div className="flex flex-col items-center justify-center gap-2">
                                            <div className="w-10 h-12 bg-[#252525] rounded border border-[#333] flex items-center justify-center text-gray-500 font-mono text-xs">
                                                --
                                            </div>
                                            <span className="text-gray-400 font-medium text-xs">Challenge Name</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-center font-bold text-gray-400">Squad Name</td>
                                    <td className="p-4 text-center text-gray-500 font-mono">--</td>
                                    <td className="p-4 text-center text-gray-500 font-mono">--/33</td>
                                    <td className="p-4 text-center text-gray-500 font-mono">--</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

