import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockPlayers } from '../../data/mockPlayers';
import { getAssetUrl } from '../../utils/assetUrl';

type Player = typeof mockPlayers[0];

export default function SquadBuilder() {
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
    const [squad, setSquad] = useState<Record<string, Player | null>>({
        'LW': null, 'ST': null, 'RW': null,
        'LCM': null, 'CM': null, 'RCM': null,
        'LB': null, 'LCB': null, 'RCB': null, 'RB': null,
        'GK': null,
        'Manager': null,
        'S1': null, 'S2': null, 'S3': null, 'S4': null, 'S5': null, 'S6': null, 'S7': null,
        'R1': null, 'R2': null, 'R3': null, 'R4': null, 'R5': null
    });

    const formationPositions = [
        { id: 'LW', label: 'LW', top: '15%', left: '20%' },
        { id: 'ST', label: 'ST', top: '10%', left: '50%' },
        { id: 'RW', label: 'RW', top: '15%', left: '80%' },
        { id: 'LCM', label: 'CM', top: '40%', left: '25%' },
        { id: 'CM', label: 'CM', top: '40%', left: '50%' },
        { id: 'RCM', label: 'CM', top: '40%', left: '75%' },
        { id: 'LB', label: 'LB', top: '70%', left: '15%' },
        { id: 'LCB', label: 'CB', top: '70%', left: '38%' },
        { id: 'RCB', label: 'CB', top: '70%', left: '62%' },
        { id: 'RB', label: 'RB', top: '70%', left: '85%' },
        { id: 'GK', label: 'GK', top: '90%', left: '50%' },
    ];

    const subs = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7'];
    const reserves = ['R1', 'R2', 'R3', 'R4', 'R5'];

    const handleSelectSlot = (slotId: string) => {
        setSelectedSlot(slotId);
        window.scrollTo(0, 0);
    };

    const handleAddPlayer = (player: Player) => {
        if (selectedSlot) {
            setSquad({ ...squad, [selectedSlot]: player });
            setSelectedSlot(null);
        }
    };

    const handleRemovePlayer = (slotId: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setSquad({ ...squad, [slotId]: null });
    };

    const SlotCard = ({ slotId, label, isManager = false }: { slotId: string, label?: string, isManager?: boolean }) => {
        const player = squad[slotId];
        return (
            <div 
                className={`relative flex flex-col items-center justify-center cursor-pointer transition-transform hover:scale-105 ${isManager ? 'w-20 h-28' : 'w-24 h-36'}`}
                onClick={() => handleSelectSlot(slotId)}
            >
                {player ? (
                    <div className="relative w-full h-full flex flex-col items-center group">
                        <img src={player.image} alt={player.name} className="w-full h-full object-contain drop-shadow-lg" />
                        <button 
                            className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                            onClick={(e) => handleRemovePlayer(slotId, e)}
                        >
                            ×
                        </button>
                    </div>
                ) : (
                    <div className="w-full h-full bg-[#242424] rounded-t-lg rounded-b-2xl flex flex-col items-center justify-center relative overflow-hidden shadow-xl" style={{clipPath: 'polygon(5% 0, 95% 0, 100% 10%, 100% 80%, 50% 100%, 0 80%, 0 10%)'}}>
                        <div className="absolute inset-0 border-2 border-dashed border-[#10b981] opacity-70 m-1" style={{clipPath: 'polygon(5% 0, 95% 0, 100% 10%, 100% 80%, 50% 100%, 0 80%, 0 10%)'}}></div>
                        <div className="text-[#10b981] text-3xl z-10 font-light">+</div>
                    </div>
                )}
                {label && !player && (
                    <div className="absolute -bottom-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-md border border-gray-700 z-10">
                        {label}
                    </div>
                )}
            </div>
        );
    };

    if (selectedSlot) {
        return (
            <div className="min-h-screen bg-[#111] text-white py-8 px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex gap-8">
                    {/* Left Column: Search UI */}
                    <div className="flex-1">
                        <div className="mb-6">
                            <div className="text-gray-400 text-sm mb-2 flex items-center space-x-2">
                                <Link to="/" className="hover:text-white">Home</Link>
                                <span>›</span>
                                <Link to="/" className="hover:text-white">FIFA 17 Community Squads</Link>
                                <span>›</span>
                                <span className="text-gray-200">Squad Builder</span>
                            </div>
                            <h1 className="text-3xl font-bold mb-1 flex items-center gap-2"><img src={getAssetUrl('assets/icons/main-squad-builder.svg')} className="w-[32px] h-[32px]" alt="Squad Builder" />FIFA 17 Squad Builder</h1>
                            <p className="text-gray-400 text-sm">Create FIFA 17 Squads</p>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-700 mb-6">
                            <div className="flex space-x-6">
                                <button className="pb-3 border-b-2 border-[#10b981] text-white font-medium">Search</button>
                                <button className="pb-3 text-gray-400 hover:text-white font-medium">My Evolution Players</button>
                                <button className="pb-3 text-gray-400 hover:text-white font-medium">Saved Evolution Players</button>
                            </div>
                            <button 
                                onClick={() => setSelectedSlot(null)}
                                className="pb-3 text-gray-400 hover:text-white text-xl"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="mb-4 relative max-w-sm">
                            <input 
                                type="text" 
                                placeholder="Search for Player..." 
                                className="w-full bg-black border border-gray-700 rounded py-2 px-3 text-white focus:outline-none focus:border-[#10b981]"
                            />
                            <button className="absolute right-3 top-2 text-gray-400 hover:text-white">✕</button>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {['Version', 'Position', 'League', 'Nation', 'Club', 'SM & WF', 'Foot', 'WR'].map(filter => (
                                <button key={filter} className="bg-black border border-gray-700 px-3 py-1.5 rounded text-sm font-medium hover:bg-gray-800 transition-colors flex items-center">
                                    <span>{filter}</span>
                                </button>
                            ))}
                        </div>

                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-4">
                                <button className="text-gray-400 text-sm underline hover:text-white">Clear all</button>
                                <div className="bg-gray-800 text-sm px-3 py-1 rounded-full flex items-center gap-2">
                                    All Positions: GK, LB, CB, RB, CAM, CM, CDM, RM, LM, ST, RW, LW 
                                    <span className="text-gray-400 cursor-pointer hover:text-white">✕</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center gap-2 mb-6 text-sm">
                            <button className="text-gray-500 hover:text-white">‹</button>
                            <button className="bg-[#10b981] text-black w-8 h-8 rounded flex items-center justify-center font-bold">1</button>
                            <button className="text-gray-400 hover:text-white w-8 h-8 flex items-center justify-center">2</button>
                            <button className="text-gray-400 hover:text-white w-8 h-8 flex items-center justify-center">3</button>
                            <span className="text-gray-400">...1764</span>
                            <button className="text-gray-400 hover:text-white">›</button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
                            {mockPlayers.map(player => (
                                <div 
                                    key={player.id} 
                                    className="cursor-pointer transition-transform hover:scale-105"
                                    onClick={() => handleAddPlayer(player)}
                                >
                                    <img src={player.image} alt={player.name} className="w-full h-auto drop-shadow-xl" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full lg:w-80 flex-shrink-0 mt-24">
                        <SidebarInfo />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#111] text-white py-8 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-6">
                    <div className="text-gray-400 text-sm mb-2 flex items-center space-x-2">
                        <Link to="/" className="hover:text-white">Home</Link>
                        <span>›</span>
                        <Link to="/" className="hover:text-white">FIFA 17 Community Squads</Link>
                        <span>›</span>
                        <span className="text-gray-200">Squad Builder</span>
                    </div>
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-3xl font-bold mb-1 flex items-center gap-2"><img src={getAssetUrl('assets/icons/main-squad-builder.svg')} className="w-[32px] h-[32px]" alt="Squad Builder" />FIFA 17 Squad Builder</h1>
                            <p className="text-gray-400 text-sm">Create FIFA 17 Squads</p>
                        </div>
                        <button className="border border-[#10b981] text-[#10b981] px-6 py-2 rounded-full font-medium hover:bg-[#10b981] hover:text-white transition-colors">
                            Add Tactics
                        </button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1 max-w-4xl">
                        <div className="flex items-start">
                            <div className="mr-4 mt-12 z-20">
                                <SlotCard slotId="Manager" label="Manager" isManager={true} />
                            </div>

                            <div className="flex-1 relative aspect-[4/3] rounded-lg overflow-hidden border border-green-800 shadow-2xl">
                                <div className="absolute inset-0 bg-green-700" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10%, rgba(255,255,255,0.05) 10%, rgba(255,255,255,0.05) 20%)' }}>
                                    <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white opacity-40 -translate-x-1/2"></div>
                                    <div className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-white opacity-40 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                                    <div className="absolute left-0 top-1/4 bottom-1/4 w-1/5 border-2 border-l-0 border-white opacity-40"></div>
                                    <div className="absolute right-0 top-1/4 bottom-1/4 w-1/5 border-2 border-r-0 border-white opacity-40"></div>
                                </div>
                                
                                {formationPositions.map(pos => (
                                    <div 
                                        key={pos.id} 
                                        className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                                        style={{ top: pos.top, left: pos.left }}
                                    >
                                        <SlotCard slotId={pos.id} label={pos.label} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 space-y-4 px-4 lg:pl-24">
                            <div className="flex justify-start gap-4 overflow-x-auto pb-4 hide-scrollbar">
                                {subs.map(slotId => (
                                    <div key={slotId} className="flex-shrink-0">
                                        <SlotCard slotId={slotId} />
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-start gap-4 overflow-x-auto pb-4 hide-scrollbar">
                                {reserves.map(slotId => (
                                    <div key={slotId} className="flex-shrink-0">
                                        <SlotCard slotId={slotId} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-80 flex-shrink-0">
                        <SidebarInfo />
                    </div>
                </div>
            </div>
        </div>
    );
}

function SidebarInfo() {
    return (
        <div className="bg-[#1a1c23] rounded-lg border border-gray-800 p-5 shadow-xl sticky top-24">
            <h3 className="font-bold text-lg mb-3">Create Squad</h3>
            <div className="flex gap-2 mb-6">
                <input 
                    type="text" 
                    placeholder="Squad name" 
                    className="flex-1 bg-[#111] border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#10b981]"
                />
                <button className="bg-[#2d323b] p-2 rounded hover:bg-gray-700 transition-colors text-gray-300">
                    💾
                </button>
            </div>

            <h3 className="font-bold text-lg mb-3">Squad info</h3>
            <div className="flex justify-between items-center mb-6">
                <select className="bg-[#111] border border-gray-700 rounded px-3 py-1.5 text-sm outline-none">
                    <option>4-3-3</option>
                    <option>4-4-2</option>
                    <option>3-5-2</option>
                </select>
                <div className="text-right">
                    <div className="text-sm text-gray-400">Squad Rating: 0</div>
                    <div className="flex gap-1 justify-end mt-1 text-gray-600">
                        ★ ★ ★ ★ ★
                    </div>
                </div>
            </div>

            <div className="flex justify-between text-center mb-6 border-b border-gray-800 pb-6">
                {['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'].map(stat => (
                    <div key={stat} className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded border border-gray-700 bg-[#111] flex items-center justify-center text-sm mb-1">-</div>
                        <div className="text-[10px] text-gray-400">{stat}</div>
                    </div>
                ))}
            </div>

            <button className="w-full flex justify-between items-center text-sm text-gray-300 hover:text-white mb-6">
                <span>Full Squad Averages</span>
                <span>▼</span>
            </button>

            <div className="flex justify-between items-center mb-6">
                <span className="font-bold">Total Chemistry</span>
                <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-0"></div>
                    </div>
                    <span className="text-sm text-gray-400">0/33</span>
                </div>
            </div>

            <div className="mb-2">
                <span className="font-bold">Price</span>
            </div>
            <div className="flex gap-4 text-sm font-medium">
                <span className="flex items-center gap-1 text-[#10b981]">
                    0 <img src={getAssetUrl('assets/icons/coins_bin-2.png.webp')} className="w-3.5 h-3.5 inline" alt="coins" />
                </span>
            </div>
        </div>
    );
}
