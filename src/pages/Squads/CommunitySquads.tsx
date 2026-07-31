import React from 'react';
import { getAssetUrl } from '../../utils/assetUrl';
import { SafeImage } from '../../components/SafeImage';

const mockSquads = [
    { id: 1, user: 'User Name', date: '--', name: 'Squad Name', formation: '4-1-2-1-2(2)', rating: 99, chemistry: '--/33', price: '--', platform: 'PC' },
    { id: 2, user: 'User Name', date: '--', name: 'Squad Name', formation: '4-3-3', rating: 99, chemistry: '--/33', price: '--', platform: 'PC' },
    { id: 3, user: 'User Name', date: '--', name: 'Squad Name', formation: '4-2-3-1(2)', rating: 99, chemistry: '--/33', price: '--', platform: 'PC' },
    { id: 4, user: 'User Name', date: '--', name: 'Squad Name', formation: '4-3-3(4)', rating: 99, chemistry: '--/33', price: '--', platform: 'PC' },
    { id: 5, user: 'User Name', date: '--', name: 'Squad Name', formation: '4-3-3', rating: 99, chemistry: '--/33', price: '--', platform: 'PC' },
    { id: 6, user: 'User Name', date: '--', name: 'Squad Name', formation: '4-2-4', rating: 99, chemistry: '--/33', price: '--', platform: 'PC' },
    { id: 7, user: 'User Name', date: '--', name: 'Squad Name', formation: '4-3-3', rating: 99, chemistry: '--/33', price: '--', platform: 'PC' },
    { id: 8, user: 'User Name', date: '--', name: 'Squad Name', formation: '4-3-3', rating: 99, chemistry: '--/33', price: '--', platform: 'PC' },
];

export default function CommunitySquads() {
    return (
        <div className="w-full min-h-screen bg-[#1a1a1a] text-white pt-24 px-4 pb-16">
            <div className="max-w-7xl mx-auto flex flex-col gap-6">
                
                {/* Header */}
                <div>
                    <div className="text-sm text-gray-400 mb-1 flex items-center gap-2">
                        Home <span>›</span> Builder Squads
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-1">FFUT 17 Community Squads</h1>
                    <div className="text-gray-400 text-sm mb-4">FIFA 17 Squads</div>
                    <button className="bg-[#2a2a2a] hover:bg-[#333] border border-[#333] text-sm py-1.5 px-3 rounded flex items-center gap-2 transition-colors">
                        <span className="text-xs">↺</span> FIFA 17
                    </button>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-400 text-sm">🔍</span>
                        </div>
                        <input 
                            type="text" 
                            placeholder="Search for Player..."
                            className="bg-[#111] border border-[#333] rounded pl-9 pr-3 py-1.5 text-sm w-48 text-white placeholder-gray-500 focus:outline-none focus:border-[#00e575]"
                        />
                    </div>
                    <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm py-1.5 px-4 rounded transition-colors">
                        Formation
                    </button>
                    <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm py-1.5 px-4 rounded transition-colors">
                        Rating
                    </button>
                    <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm py-1.5 px-4 rounded transition-colors">
                        Chemistry
                    </button>
                </div>

                {/* Table */}
                <div className="w-full bg-[#1e1e1e] rounded border border-[#2d2d2d] overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#111] text-xs font-semibold text-gray-400 tracking-wider">
                                <th className="p-4 uppercase">User</th>
                                <th className="p-4 uppercase">Squad Name</th>
                                <th className="p-4 uppercase text-center">Formation</th>
                                <th className="p-4 uppercase text-center">Rating</th>
                                <th className="p-4 uppercase text-center">Chemistry</th>
                                <th className="p-4 uppercase text-center">Price</th>
                                <th className="p-4 uppercase text-center">MVP</th>
                                <th className="p-4 uppercase text-center">Leagues</th>
                                <th className="p-4 uppercase text-center">Nations</th>
                                <th className="p-4 uppercase text-center">Clubs</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {mockSquads.map((sq, i) => (
                                <tr key={i} className="border-t border-[#2d2d2d] hover:bg-[#252525] transition-colors">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold shrink-0">
                                                {sq.user.charAt(0).toUpperCase()}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[#00e575] font-medium">{sq.user}</span>
                                                <span className="text-xs text-gray-500">Created: {sq.date}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-[#00e575] font-medium whitespace-nowrap">
                                        {sq.name}
                                    </td>
                                    <td className="p-4 text-center whitespace-nowrap">{sq.formation}</td>
                                    <td className="p-4 text-center">
                                        <div className="flex flex-col items-center">
                                            <span className="font-bold text-white text-lg">{sq.rating}</span>
                                            <div className="flex text-[#ffb800] gap-0.5 justify-center mt-0.5">
                                                {[1, 2, 3, 4, 5].map(s => (
                                                    <SafeImage key={s} src={getAssetUrl('assets/icons/0_starskills.svg')} className="w-2.5 h-2.5 inline-block" alt="star" />
                                                ))}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-center whitespace-nowrap">{sq.chemistry}</td>
                                    <td className="p-4 text-center text-gray-300 font-medium whitespace-nowrap">
                                        {sq.price} <span className="text-[#ffb800] text-xs">F</span>
                                    </td>
                                    <td className="p-4">
                                        <div className="w-8 h-8 bg-[#2a2a2a] mx-auto rounded overflow-hidden">
                                            <img src="https://placehold.co/32x32/333/666" alt="player" className="w-full h-full object-cover" />
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="w-6 h-6 bg-white rounded mx-auto"></div>
                                    </td>
                                    <td className="p-4">
                                        <div className="w-6 h-4 bg-gray-400 mx-auto"></div>
                                    </td>
                                    <td className="p-4">
                                        <div className="w-6 h-6 bg-red-600 rounded-full mx-auto"></div>
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
