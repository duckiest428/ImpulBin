import React, { useState } from 'react';

export default function Home() {
    const [activeFilter, setActiveFilter] = useState('Popular');

    const filters = [
        { id: 'Popular', label: 'Popular', icon: '🔥' },
        { id: 'Latest Promo', label: 'Latest Promo', icon: '⚡' },
        { id: 'New players', label: 'New players', icon: '🚀' },
        { id: 'Latest SBCs', label: 'Latest SBCs', icon: '🔥' },
        { id: 'Evolutions', label: 'Evolutions', icon: '🛡️' },
        { id: 'Cheapest by rating', label: 'Cheapest by rating', icon: '🎯' },
    ];

    return (
        <div className="min-h-[calc(100vh-64px)] w-full flex flex-col items-center justify-center px-4 py-8 sm:py-12 mx-auto">
            <div className="w-full max-w-5xl flex flex-col items-center justify-center mx-auto text-center">
                {/* Hero Logo & Search */}
                <header className="w-full flex flex-col items-center justify-center mb-8 sm:mb-12">
                    <h1 className="text-6xl sm:text-7xl md:text-8xl font-black italic text-[#00e575] tracking-tight mb-6 drop-shadow-[0_0_25px_rgba(0,229,117,0.3)]">
                        IMPULBIN
                    </h1>
                    <div className="w-full max-w-xl mx-auto flex items-center bg-[#1a1a1a] border border-[#383838] focus-within:border-[#00e575] rounded-full px-5 py-3 shadow-2xl transition-all">
                        <span className="text-gray-400 text-lg mr-3">🔍</span>
                        <input 
                            type="text" 
                            placeholder="Search for FIFA Player..." 
                            className="w-full bg-transparent border-none text-white outline-none text-sm sm:text-base placeholder-gray-500"
                        />
                        <select className="bg-transparent border-none text-gray-300 text-xs sm:text-sm outline-none cursor-pointer pl-3 border-l border-gray-700 font-semibold">
                            <option className="bg-[#1a1a1a] text-white">FIFA 17</option>
                        </select>
                    </div>
                </header>
                
                {/* Filter Pills Container - Centered */}
                <section className="w-full flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 mb-10 sm:mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`whitespace-nowrap px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-md ${
                                activeFilter === filter.id
                                    ? 'border-[#00e575] text-[#00e575] bg-[#00e575]/10 shadow-[0_0_15px_rgba(0,229,117,0.25)] scale-105'
                                    : 'border-[#383838] text-gray-300 bg-[#1a1a1a]/80 hover:border-gray-400 hover:bg-white/10 hover:text-white'
                            }`}
                        >
                            <span>{filter.icon}</span>
                            <span>{filter.label}</span>
                        </button>
                    ))}
                </section>
                
                {/* Placeholder Cards Row - Centered */}
                <main className="w-full flex justify-center items-center">
                    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-5">
                        {[1, 2, 3, 4, 5, 6].map((slot) => (
                            <div
                                key={slot}
                                className="w-[120px] sm:w-[140px] h-[175px] sm:h-[200px] rounded-2xl border-2 border-dashed border-[#383838] hover:border-[#00e575] bg-[#161616] flex items-center justify-center text-gray-500 hover:text-[#00e575] transition-all duration-200 cursor-pointer group shadow-xl hover:-translate-y-1"
                            >
                                <span className="text-3xl font-light text-gray-400 group-hover:scale-125 group-hover:text-[#00e575] transition-transform">+</span>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}


