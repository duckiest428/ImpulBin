import React, { useState } from 'react';
import { PlayerHoverWrapper } from '../../components/PlayerHoverCard';
import { FIFA17PlayerCard } from '../../components/FIFA17PlayerCard';

export default function Home() {
    const [activeFilter, setActiveFilter] = useState('Popular');

    const filters = [
        { id: 'Popular', label: 'Popular', icon: '🔥' },
        { id: 'Latest Promo', label: 'Latest Promo', icon: '⚡' },
        { id: 'New players', label: 'New players', icon: '🚀' },
        { id: 'Latest SBCs', label: 'Latest SBCs', icon: '🔥' },
        { id: 'Cheapest by rating', label: 'Cheapest by rating', icon: '🎯' },
    ];

    return (
        <div className="w-full min-h-[calc(100vh-64px)] flex flex-col justify-start items-center px-3 sm:px-4 pt-[10vh] sm:pt-[16vh] md:pt-[22vh] pb-16 mx-auto overflow-x-hidden">
            <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center gap-6 sm:gap-8 md:gap-10">
                
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
                            className={`whitespace-nowrap px-3 sm:px-6 py-1.5 sm:py-3 rounded-full border-2 text-xs sm:text-base font-bold flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-200 cursor-pointer shadow-lg ${
                                activeFilter === filter.id
                                    ? 'border-[#00e575] text-[#00e575] bg-[#00e575]/10 shadow-[0_0_20px_rgba(0,229,117,0.3)] scale-105'
                                    : 'border-[#383838] text-gray-200 bg-[#1a1a1a] hover:border-gray-400 hover:bg-white/10 hover:text-white'
                            }`}
                        >
                            <span className="text-sm sm:text-lg">{filter.icon}</span>
                            <span>{filter.label}</span>
                        </button>
                    ))}
                </section>

                {/* Cards Section - Centered directly beneath */}
                <main className="w-full flex justify-center items-center">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-6 md:gap-8 max-w-full justify-items-center">
                        {[1, 2, 3, 4, 5, 6].map((slot) => {
                            if (slot === 1) {
                                return (
                                    <div key={slot} className="flex flex-col items-center gap-1.5 sm:gap-2">
                                        <div className="flex items-center justify-center gap-1.5 bg-[#1a1c20] border border-[#333] px-2 py-0.5 rounded text-[10px] sm:text-xs font-mono font-bold text-gray-300 shadow-sm w-full max-w-[85%]">
                                            <span className="w-3 h-3 bg-[#118cd7] text-white text-[8px] font-extrabold rounded-sm inline-flex items-center justify-center border border-[#0d6b9e]"></span>
                                            60,000
                                        </div>
                                        <FIFA17PlayerCard 
                                            name="Mbappé"
                                            rating={92}
                                            position="ST"
                                        />
                                        <div className="flex items-center gap-1 text-[#ff5500] font-bold text-[11px] sm:text-sm mt-0.5">
                                            🔥 398
                                        </div>
                                    </div>
                                );
                            }
                            return (
                                <div key={slot} className="flex flex-col items-center gap-1.5 sm:gap-2">
                                    <div className="flex items-center justify-center gap-1.5 bg-[#1a1c20] border border-[#333] px-2 py-0.5 rounded text-[10px] sm:text-xs font-mono font-bold text-gray-300 shadow-sm w-full max-w-[85%]">
                                        <span className="w-3 h-3 bg-[#118cd7] text-white text-[8px] font-extrabold rounded-sm inline-flex items-center justify-center border border-[#0d6b9e]"></span>
                                        ---
                                    </div>
                                    <FIFA17PlayerCard 
                                        name="---"
                                        rating="--"
                                        position="-"
                                    />
                                    <div className="flex items-center gap-1 text-[#ff5500] font-bold text-[11px] sm:text-sm mt-0.5">
                                        🔥 --
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </main>

            </div>
        </div>
    );
}



