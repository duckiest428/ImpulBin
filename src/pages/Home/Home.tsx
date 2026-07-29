import React, { useState } from 'react';
import { PlayerHoverWrapper } from '../../components/PlayerHoverCard';
import { FIFA17PlayerCardBase } from '../../components/FIFA17PlayerCard';
import { popularPlayers } from '../../data/mockPlayers';

export default function Home() {
    const [activeFilter, setActiveFilter] = useState('Popular');

    const filters = [
        { id: 'Popular', label: 'Popular', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg> },
        { id: 'Latest Promo', label: 'Latest Promo', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
        { id: 'New players', label: 'New players', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg> },
        { id: 'Latest SBCs', label: 'Latest SBCs', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg> },
        { id: 'Cheapest by rating', label: 'Cheapest by rating', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> },
    ];

    return (
        <div className="w-full min-h-[calc(100vh-64px)] flex flex-col justify-start items-center px-3 sm:px-4 pt-[10vh] sm:pt-[16vh] md:pt-[22vh] pb-16 mx-auto overflow-x-hidden">
            <div className="w-full max-w-[1600px] mx-auto flex flex-col items-center justify-center text-center gap-6 sm:gap-8 md:gap-10">
                
                {/* Hero Logo & Search */}
                <header className="w-full flex flex-col items-center justify-center gap-6 sm:gap-8">
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-black italic text-[#00e575] tracking-tight drop-shadow-[0_0_30px_rgba(0,229,117,0.35)] select-none">
                        IMPULBIN
                    </h1>
                    
                    <div className="w-full max-w-2xl mx-auto flex items-center bg-[#1a1a1a] border border-[#383838] focus-within:border-[#00e575] rounded-full px-4 sm:px-6 py-2.5 sm:py-4 shadow-2xl transition-all">
                        <span className="text-gray-400 text-lg sm:text-xl mr-2 sm:mr-3 shrink-0">🔍</span>
                        <input 
                            type="text" 
                            placeholder="Search for FIFA Player..." 
                            className="w-full bg-transparent border-none text-white outline-none text-sm sm:text-base min-w-0 placeholder-gray-500"
                        />
                        <select className="bg-transparent border-none text-gray-300 text-xs sm:text-sm outline-none cursor-pointer pl-2 sm:pl-3 border-l border-gray-700 font-semibold shrink-0">
                            <option className="bg-[#1a1a1a] text-white">FIFA 17</option>
                        </select>
                    </div>
                </header>

                {/* Filter Pills Section - Centered across container */}
                <section className="w-full flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-6 px-1">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`whitespace-nowrap px-3 sm:px-6 py-1.5 sm:py-3 rounded-full border text-xs sm:text-base font-bold flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-200 cursor-pointer shadow-lg ${
                                activeFilter === filter.id
                                    ? 'border-[#00e575] text-white bg-transparent'
                                    : 'border-[#383838] text-gray-200 bg-transparent hover:border-gray-400 hover:text-white'
                            }`}
                        >
                            <span className={`text-sm sm:text-lg ${activeFilter === filter.id ? 'text-[#00e575]' : 'text-gray-400'}`}>{filter.icon}</span>
                            <span>{filter.label}</span>
                        </button>
                    ))}
                </section>

                {/* Cards Section - Centered directly beneath */}
                <main className="w-full flex justify-center items-center px-2">
                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-2 max-w-full justify-items-center">
                        {popularPlayers.map((_, idx) => (
                            <PlayerHoverWrapper key={idx} playerData={{ isPlaceholder: true, rating: '--', name: '', position: '' }}>
                                <div className="flex flex-col items-center gap-1.5 transition-transform hover:scale-105 cursor-pointer">
                                    <div className="w-[85px] sm:w-[95px] md:w-[110px]">
                                        <div className="w-full">
                                            <FIFA17PlayerCardBase 
                                                name=""
                                                rating="--"
                                                position=""
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center text-[10px] sm:text-[11px] font-bold overflow-hidden rounded-[4px] bg-[#222222] border border-[#333] shadow-sm">
                                        <div className="px-1.5 py-0.5 bg-white/10 text-white border-r border-[#333]">-</div>
                                        <div className="px-1.5 py-0.5 bg-white/10 text-white border-r border-[#333] flex items-center gap-0.5">-<span className="text-[8px]">★</span></div>
                                        <div className="px-1.5 py-0.5 bg-white/10 text-white border-r border-[#333] flex items-center gap-0.5">-<span className="text-[8px] font-black text-red-500">!</span></div>
                                        <div className="px-1.5 py-0.5 text-black bg-[#00e575]">--.-</div>
                                    </div>
                                </div>
                            </PlayerHoverWrapper>
                        ))}
                    </div>
                </main>
                <div className="mt-8 mb-4">
                    <button className="text-[#00e575] font-bold hover:underline text-sm sm:text-base cursor-pointer">All Popular Players</button>
                </div>

            </div>
        </div>
    );
}



