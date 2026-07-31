import React from 'react';
import { Link } from 'react-router-dom';
import { mockPlayers } from '../../data/mockPlayers';
import PlayerCard from '../../components/PlayerCard';
import { FIFA17PlayerCard } from '../../components/FIFA17PlayerCard';
import { getAssetUrl } from '../../utils/assetUrl';
import { SafeImage } from '../../components/SafeImage';

export default function Popular() {
    return (
        <div className="min-h-screen bg-[#111] text-white relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1c23]/90 to-[#111] z-0"></div>
            <div 
                className="absolute inset-0 z-0 opacity-20" 
                style={{ 
                    backgroundImage: 'url("https://www.futbin.com/design/img/bg/bg_1.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            ></div>

            <div className="relative z-10 p-4 md:p-8 max-w-[1600px] mx-auto">
                <div className="mb-8">
                    <div className="text-gray-400 text-sm mb-2 flex items-center space-x-2">
                        <Link to="/" className="hover:text-white">Home</Link>
                        <span>›</span>
                        <Link to="/players" className="hover:text-white">Players</Link>
                        <span>›</span>
                        <span className="text-gray-200">Popular</span>
                    </div>
                    <h1 className="text-3xl font-bold mb-1 flex items-center gap-2"><SafeImage src={getAssetUrl('assets/icons/main-players.svg')} className="w-[32px] h-[32px]" alt="Players" />FIFA 17 Popular Players</h1>
                    <p className="text-gray-400 text-sm">Hottest FUT 17 Players</p>
                </div>

                <div className="mb-8">
                    <button className="bg-[#1a1c23]/80 border border-gray-700 px-4 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 text-[#10b981] backdrop-blur-sm shadow-md">
                         Popular Evolution Players
                    </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-y-12 gap-x-4">
                    {mockPlayers.map(player => (
                        <div key={player.id} className="flex flex-col items-center group">
                            <div className="flex items-center gap-1 mb-2 bg-[#1a1c23] border border-gray-800 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                <SafeImage src={getAssetUrl('assets/icons/coins_bin-2.png.webp')} fallbackType="coin" className="w-3.5 h-3.5 inline" alt="coins" />
                                <span>{player.price}</span>
                            </div>

                            <div>
                                <FIFA17PlayerCard
                                    name={player.name}
                                    rating={player.rating}
                                    position={player.position}
                                    stats={{
                                        stat1: { label: 'PAC', value: player.pac },
                                        stat2: { label: 'DRI', value: player.dri },
                                        stat3: { label: 'SHO', value: player.sho },
                                        stat4: { label: 'DEF', value: player.def },
                                        stat5: { label: 'PAS', value: player.pas },
                                        stat6: { label: 'PHY', value: player.phy },
                                    }}
                                />
                            </div>
                            
                            <div className="mt-4 flex items-center gap-2 bg-black/50 px-4 py-1.5 rounded-full border border-gray-800/50">
                                <span className="text-orange-500 text-lg">🔥</span> 
                                <span className="text-white font-bold">{player.pop}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
