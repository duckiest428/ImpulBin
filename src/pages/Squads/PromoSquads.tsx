import React from 'react';

const promoSquads = [
    { title: 'Futties Icon and Heroes 1', date: '24.07.2026', color: 'bg-red-900/40 border-red-500', players: 10 },
    { title: 'Futties Team 1', date: '24.07.2026', color: 'bg-pink-900/40 border-pink-500', players: 40 },
    { title: 'Summer Stars Winners', date: '21.07.2026', color: 'bg-blue-900/40 border-blue-500', players: 16 },
    { title: 'Summer Stars', date: '17.07.2026', color: 'bg-indigo-900/40 border-indigo-500', players: 32 },
    { title: 'Phenoms', date: '10.07.2026', color: 'bg-purple-900/40 border-purple-500', players: 40 },
    { title: 'Glory Hunters 2', date: '03.07.2026', color: 'bg-emerald-900/40 border-emerald-500', players: 32 },
    { title: 'Glory Hunters', date: '26.06.2026', color: 'bg-teal-900/40 border-teal-500', players: 32 },
    { title: 'Greats of the Game', date: '19.06.2026', color: 'bg-cyan-900/40 border-cyan-500', players: 40 },
    { title: 'Star Performers', date: '18.06.2026', color: 'bg-sky-900/40 border-sky-500', players: 40 },
];

export default function PromoSquads() {
    return (
        <div className="w-full min-h-screen bg-[#1a1a1a] text-white pt-24 px-4 pb-16 relative">
            
            {/* Background Image Overlay Mock */}
            <div className="absolute inset-0 top-16 h-[50vh] bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a] z-0 overflow-hidden pointer-events-none">
                <div className="w-full h-full opacity-10 flex items-center justify-center text-9xl font-black italic select-none">
                    PLAYER BG
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
                
                {/* Header */}
                <div>
                    <div className="text-sm text-gray-400 mb-1 flex items-center gap-2">
                        Home <span>›</span> TOTW Squads
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-1">FUT 26 TOTWs, TOTY, TOTS</h1>
                    <div className="text-gray-400 text-sm mb-4">EA FC 26 Promo Squads</div>
                    <button className="bg-[#2a2a2a] hover:bg-[#333] border border-[#333] text-sm py-1.5 px-3 rounded flex items-center gap-2 transition-colors w-max">
                        <span className="text-xs">↺</span> FC 26
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {promoSquads.map((squad, i) => (
                        <div key={i} className="bg-[#1e1e1e] rounded-lg border border-[#333] overflow-hidden flex flex-col h-[340px]">
                            {/* Card Header */}
                            <div className="bg-[#111] p-3 flex justify-between items-center border-b border-[#333]">
                                <h3 className="font-bold text-sm text-white">{squad.title}</h3>
                                <div className="text-xs text-gray-400 flex flex-col text-right">
                                    <span>Created:</span>
                                    <span>{squad.date}</span>
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className={`flex-1 p-4 flex flex-col relative ${squad.color} border-t-4`}>
                                <div className="grid grid-cols-4 gap-2 h-full content-start pt-2">
                                    {/* Mock Player Cards */}
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(card => (
                                        <div key={card} className="aspect-[2/3] bg-black/50 border border-white/20 rounded shadow-sm"></div>
                                    ))}
                                </div>
                                <div className="absolute bottom-3 right-4">
                                    <button className="text-sm font-bold text-white hover:underline drop-shadow-md">
                                        View all {squad.players} Players
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
