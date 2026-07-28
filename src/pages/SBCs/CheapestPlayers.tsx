import React from 'react';
import SBCNav from '../../components/SBCNav';

const mockPlayers = {
    81: Array.from({ length: 6 }).map((_, i) => ({ id: `81-${i}`, name: 'Player Name', pos: '---', price: '--' })),
    82: Array.from({ length: 6 }).map((_, i) => ({ id: `82-${i}`, name: 'Player Name', pos: '---', price: '--' })),
    83: Array.from({ length: 6 }).map((_, i) => ({ id: `83-${i}`, name: 'Player Name', pos: '---', price: '--' })),
    84: Array.from({ length: 6 }).map((_, i) => ({ id: `84-${i}`, name: 'Player Name', pos: '---', price: '--' })),
};

export default function CheapestPlayers() {
    return (
        <div className="w-full min-h-screen bg-[#1a1a1a] text-white pt-24 px-4 pb-16">
            <div className="max-w-7xl mx-auto flex flex-col gap-6">
                
                {/* Header */}
                <div>
                    <div className="text-sm text-gray-400 mb-1 flex items-center gap-2">
                        Home <span>›</span> Cheapest Players
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-1">FIFA 17 Cheapest Players</h1>
                    <div className="text-gray-400 text-sm mb-4">Cheapest players for SBCs</div>
                    <button className="bg-[#2a2a2a] hover:bg-[#333] border border-[#333] text-sm py-1.5 px-3 rounded flex items-center gap-2 transition-colors w-max">
                        <span className="text-xs">↺</span> FIFA 17
                    </button>
                </div>

                <SBCNav />

                {/* Grid of Ratings */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.keys(mockPlayers).map((rating) => (
                        <div key={rating} className="bg-[#1e1e1e] rounded border border-[#333] overflow-hidden flex flex-col">
                            {/* Column Header */}
                            <div className="bg-[#111] p-3 flex justify-between items-center border-b border-[#333]">
                                <h3 className="font-bold text-sm text-white">{rating} Rated Players</h3>
                                <button className="text-xs text-gray-400 hover:text-white transition-colors">Show all</button>
                            </div>
                            {/* Player List */}
                            <div className="flex flex-col">
                                {mockPlayers[rating as unknown as keyof typeof mockPlayers].map((player) => (
                                    <div key={player.id} className="flex items-center justify-between p-2 border-b border-[#2d2d2d] hover:bg-[#252525] transition-colors last:border-0">
                                        <div className="flex items-center gap-3 overflow-hidden">
                                            <div className="w-8 h-8 bg-[#252525] border border-[#333] rounded shrink-0 flex items-center justify-center text-gray-500 font-mono text-[10px]">
                                                --
                                            </div>
                                            <div className="flex flex-col overflow-hidden">
                                                <span className="text-sm font-semibold truncate text-gray-400">
                                                    {player.name} <span className="text-gray-500 font-normal">({player.pos})</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 shrink-0 bg-[#111] px-2 py-1 rounded border border-[#333]">
                                            <span className="text-[#3b82f6] text-[10px]">■</span>
                                            <span className="text-xs font-bold text-gray-500 font-mono">{player.price}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
