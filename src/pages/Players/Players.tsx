import { Eye } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { mockPlayers } from '../../data/mockPlayers';
import { getAssetUrl } from '../../utils/assetUrl';
import { SafeImage } from '../../components/SafeImage';

export default function Players() {
    const getStatColor = (value: number) => {
        if (value >= 90) return 'text-green-500 border-green-900 bg-green-900/20';
        if (value >= 80) return 'text-yellow-500 border-yellow-900 bg-yellow-900/20';
        if (value >= 70) return 'text-orange-500 border-orange-900 bg-orange-900/20';
        return 'text-red-500 border-red-900 bg-red-900/20';
    };

    return (
        <div className="min-h-screen bg-[#111] text-white relative">
            {/* Background overlay */}
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
                        <span className="text-gray-200">Players</span>
                    </div>
                    <h1 className="text-3xl font-bold mb-1 flex items-center gap-2"><img src={getAssetUrl('assets/icons/main-players.svg')} className="w-[32px] h-[32px]" alt="Players" />FIFA 17 Players</h1>
                    <p className="text-gray-400 text-sm">FIFA 17 Database & Ratings</p>
                </div>

                {/* Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <button className="bg-black border border-gray-700 px-4 py-2 rounded font-bold hover:bg-gray-800 flex items-center gap-2">
                            <span>⏱</span> FIFA 17
                        </button>
                        <div className="relative flex-1 md:w-80">
                            <input 
                                type="text" 
                                placeholder="Player name" 
                                className="w-full bg-black border border-gray-700 rounded py-2 px-3 pl-10 text-white focus:outline-none focus:border-[#10b981]"
                            />
                            <span className="absolute left-3 top-2 text-gray-400">🔍</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center bg-black border border-gray-700 rounded overflow-hidden">
                        <button className="px-4 py-2 bg-gray-800 text-white border-r border-gray-700">☷</button>
                        <button className="px-4 py-2 hover:bg-gray-800 text-gray-400">🛡</button>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {['Version', 'Positions', 'Leagues', 'Nations', 'Clubs', 'Price', 'PlayStyles', 'Roles', 'Rating', 'SM & WF', 'FUTBIN Rating', 'Stats'].map(filter => (
                        <button key={filter} className="bg-black border border-gray-700 px-3 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
                            <span>{filter}</span>
                        </button>
                    ))}
                    <button className="bg-black border border-gray-700 px-3 py-2 rounded text-sm font-bold hover:bg-gray-800">+</button>
                </div>

                {/* Table */}
                <div className="bg-[#1a1c23]/80 border border-gray-800 rounded-lg overflow-x-auto backdrop-blur-sm">
                    <table className="w-full text-left border-collapse whitespace-nowrap text-sm">
                        <thead>
                            <tr className="bg-black/50 border-b border-gray-800 text-xs font-bold text-gray-400 uppercase">
                                <th className="p-4">NAME</th>
                                <th className="p-4">RATING</th>
                                <th className="p-4">POSITION</th>
                                <th className="p-4">PRICE</th>
                                <th className="p-4 text-center">FUTBIN RATING</th>
                                <th className="p-4 text-center">FOOT</th>
                                <th className="p-4 text-center">SM</th>
                                <th className="p-4 text-center">WF</th>
                                <th className="p-4 text-center text-green-500">PAC</th>
                                <th className="p-4 text-center text-red-500">SHO</th>
                                <th className="p-4 text-center text-green-500">PAS</th>
                                <th className="p-4 text-center text-green-500">DRI</th>
                                <th className="p-4 text-center text-red-500">DEF</th>
                                <th className="p-4 text-center text-green-500">PHY</th>
                                <th className="p-4 text-center">POP</th>
                                <th className="p-4 text-center">IGS</th>
                                <th className="p-4">BODY</th>
                                <th className="p-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800/50">
                            {mockPlayers.map(player => (
                                <tr key={player.id} className="hover:bg-gray-800/50 transition-colors group">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="relative w-12 h-12 flex-shrink-0">
                                                <SafeImage src={player.image} fallbackType="player" alt={player.name} className="w-full h-full object-contain" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-white text-base">{player.name}</div>
                                                <div className="text-xs text-gray-400">{player.type}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="w-8 h-8 rounded border border-gray-600 flex items-center justify-center font-bold text-lg bg-[#2a0e1c] text-pink-200">
                                            {player.rating}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex flex-col items-center">
                                            <span className="font-bold">{player.position}<span className="text-green-500">++</span></span>
                                            <span className="text-xs text-gray-500">{player.altPos}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="font-bold flex items-center gap-1">
                                            {player.price} <SafeImage src={getAssetUrl('assets/icons/coins_bin-2.png.png')} fallbackType="coin" className="w-3.5 h-3.5 inline" alt="coins" />
                                        </div>
                                        <div className={`text-xs ${player.priceChange.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                            {player.priceChange.startsWith('+') ? '↗' : '↘'} {player.priceChange}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex flex-col items-center">
                                            <span className="bg-green-600 text-white px-2 py-0.5 rounded text-xs font-bold">{player.futbinRating}</span>
                                            <span className="text-xs text-gray-400 mt-1">{player.position} - H</span>
                                        </div>
                                    </td>
                                    <td className="p-4 font-bold text-gray-300">{(player as any).foot || "R"}</td>
                                    <td className="p-4">{player.sm}★</td>
                                    <td className="p-4">{player.wf}★</td>
                                    
                                    <td className="p-4"><span className={`px-2 py-1 border rounded font-medium ${getStatColor(player.pac)}`}>{player.pac}</span></td>
                                    <td className="p-4"><span className={`px-2 py-1 border rounded font-medium ${getStatColor(player.sho)}`}>{player.sho}</span></td>
                                    <td className="p-4"><span className={`px-2 py-1 border rounded font-medium ${getStatColor(player.pas)}`}>{player.pas}</span></td>
                                    <td className="p-4"><span className={`px-2 py-1 border rounded font-medium ${getStatColor(player.dri)}`}>{player.dri}</span></td>
                                    <td className="p-4"><span className={`px-2 py-1 border rounded font-medium ${getStatColor(player.def)}`}>{player.def}</span></td>
                                    <td className="p-4"><span className={`px-2 py-1 border rounded font-medium ${getStatColor(player.phy)}`}>{player.phy}</span></td>
                                    
                                    <td className="p-4">{player.pop}</td>
                                    <td className="p-4">{player.igs}</td>
                                    <td className="p-4 text-xs">
                                        <div className="text-gray-300">{player.body.split(',')[0]}</div>
                                        <div className="font-medium">{player.body.split(',')[1]}</div>
                                        <div className="font-bold">{player.body.split(',')[2]}</div>
                                    </td>
                                    <td className="p-4 text-center">
                                        <button className="text-gray-400 hover:text-green-500 bg-gray-800 p-2 rounded transition-colors" title="View Player"><Eye className="w-4 h-4" /></button>
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
