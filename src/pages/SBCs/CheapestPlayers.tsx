import React from 'react';
import SBCNav from '../../components/SBCNav';

const ratings = [81, 82, 83, 84, 85, 86, 87, 88];

const mockPlayers = {
    81: [
        { name: 'Player Name', pos: 'ST', price: 0 },
        { name: 'Player Name', pos: 'GK', price: 0 },
        { name: 'Player Name', pos: 'ST', price: 0 },
        { name: 'Player Name', pos: 'LW', price: 0 },
        { name: 'Player Name', pos: 'CM', price: 0 },
        { name: 'Player Name', pos: 'RW', price: 0 },
        { name: 'Player Name', pos: 'GK', price: 0 },
    ],
    82: [
        { name: 'Player Name', pos: 'ST', price: 0 },
        { name: 'Player Name', pos: 'CB', price: 0 },
        { name: 'Player Name', pos: 'CB', price: 0 },
        { name: 'Player Name', pos: 'RW', price: 0 },
        { name: 'Player Name', pos: 'ST', price: 0 },
        { name: 'Player Name', pos: 'GK', price: 0 },
        { name: 'Player Name', pos: 'CB', price: 0 },
    ],
    83: [
        { name: 'Player Name', pos: 'RW', price: 0 },
        { name: 'Player Name', pos: 'CM', price: 0 },
        { name: 'Player Name', pos: 'GK', price: 0 },
        { name: 'Player Name', pos: 'GK', price: 0 },
        { name: 'Player Name', pos: 'CM', price: 0 },
        { name: 'Player Name', pos: 'LW', price: 0 },
        { name: 'Player Name', pos: 'LM', price: 0 },
    ],
    84: [
        { name: 'Player Name', pos: 'CB', price: 0 },
        { name: 'Player Name', pos: 'RB', price: 0 },
        { name: 'Player Name', pos: 'ST', price: 0 },
        { name: 'Player Name', pos: 'CM', price: 0 },
        { name: 'Player Name', pos: 'CDM', price: 0 },
        { name: 'Player Name', pos: 'CM', price: 0 },
        { name: 'Player Name', pos: 'ST', price: 0 },
    ],
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
                                {mockPlayers[rating as unknown as keyof typeof mockPlayers].map((player, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-2 border-b border-[#2d2d2d] hover:bg-[#252525] transition-colors last:border-0">
                                        <div className="flex items-center gap-3 overflow-hidden">
                                            <div className="w-8 h-8 bg-[#333] rounded overflow-hidden shrink-0">
                                                <img src={`https://placehold.co/32x32/111/444`} alt="player" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex flex-col overflow-hidden">
                                                <span className="text-sm font-semibold truncate text-[#f0f0f0]">
                                                    {player.name} <span className="text-gray-500 font-normal">({player.pos})</span>
                                                </span>
                                                <div className="flex items-center gap-1 mt-0.5">
                                                    <div className="w-3 h-2 bg-gray-400 rounded-sm"></div>
                                                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 shrink-0 bg-[#111] px-2 py-1 rounded border border-[#333]">
                                            <span className="text-[#3b82f6] text-[10px]">■</span>
                                            <span className="text-xs font-bold text-gray-200">{player.price}</span>
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
