import React from 'react';
import { Link } from 'react-router-dom';
import { mockPlayers } from '../../data/mockPlayers';

export default function New() {
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
                        <span className="text-gray-200">New</span>
                    </div>
                    <h1 className="text-3xl font-bold mb-1">FIFA 17 New Players</h1>
                    <p className="text-gray-400 text-sm">Latest FUT 17 Players added</p>
                </div>

                <div className="flex justify-end mb-4">
                    <div className="flex items-center bg-black border border-gray-700 rounded overflow-hidden">
                        <button className="px-4 py-2 bg-gray-800 text-white border-r border-gray-700">☷</button>
                        <button className="px-4 py-2 hover:bg-gray-800 text-gray-400">🛡</button>
                    </div>
                </div>

                <div className="bg-[#1a1c23]/80 border border-gray-800 rounded-lg overflow-x-auto backdrop-blur-sm">
                    <table className="w-full text-left border-collapse whitespace-nowrap text-sm">
                        <thead>
                            <tr className="bg-black/50 border-b border-gray-800 text-xs font-bold text-gray-400 uppercase">
                                <th className="p-4">NAME</th>
                                <th className="p-4 text-center">RATING</th>
                                <th className="p-4 text-center">POSITION</th>
                                <th className="p-4 text-center">PRICE</th>
                                <th className="p-4 text-center">RANGE</th>
                                <th className="p-4 text-center">ADDED ON</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800/50">
                            {mockPlayers.map(player => (
                                <tr key={player.id} className="hover:bg-gray-800/50 transition-colors">
                                    <td className="p-4">
                                        <div className="flex items-center gap-4">
                                            <div className="relative w-16 h-16 flex-shrink-0">
                                                <img src={player.image} alt={player.name} className="w-full h-full object-contain" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-white text-base">{player.name}</div>
                                                <div className="text-xs text-gray-400 flex gap-1 mt-1">
                                                    <img src="https://flagcdn.com/w40/pt.png" alt="nation" className="w-4 h-3 inline-block object-cover rounded-sm" /> <img src="https://cdn.futbin.com/content/fifa24/img/clubs/241.png" alt="club" className="w-4 h-4 inline-block object-contain" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-center">
                                        <div className="inline-flex w-10 h-10 rounded border border-gray-600 items-center justify-center font-bold text-lg bg-[#2a0e1c] text-pink-200 shadow-lg">
                                            {player.rating}
                                        </div>
                                    </td>
                                    <td className="p-4 text-center font-bold text-gray-300">
                                        {player.position}
                                    </td>
                                    <td className="p-4 text-center">
                                        <span className="text-[#00e575] font-medium">{player.crossPrice}</span>
                                    </td>
                                    <td className="p-4 text-center">
                                        <span className="text-[#00e575] font-medium">0 ➔ 0</span>
                                    </td>
                                    <td className="p-4 text-center text-gray-400">
                                        {player.addedOn}
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
