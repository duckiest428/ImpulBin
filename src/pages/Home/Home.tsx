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
        <div className="home-container min-h-screen pb-20">
            <header className="hero">
                <h1 className="brand-logo">IMPULBIN</h1>
                <div className="main-search-wrapper">
                    <span style={{ color: '#aaa', fontSize: '20px' }}>🔍</span>
                    <input type="text" placeholder="Search for FIFA Player..." />
                    <select>
                        <option>FIFA 17</option>
                    </select>
                </div>
            </header>
            
            {/* Filter Pills with ample margin & whitespace-nowrap */}
            <section className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 my-12 sm:my-16 px-4 max-w-6xl mx-auto w-full">
                {filters.map((filter) => (
                    <button
                        key={filter.id}
                        onClick={() => setActiveFilter(filter.id)}
                        className={`whitespace-nowrap px-5 py-2.5 rounded-full border-2 text-sm sm:text-base font-bold flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-md ${
                            activeFilter === filter.id
                                ? 'border-[#00e575] text-[#00e575] bg-[#00e575]/10 shadow-[0_0_18px_rgba(0,229,117,0.25)] scale-105'
                                : 'border-[#383838] text-gray-200 bg-[#1a1a1a]/90 hover:border-gray-400 hover:bg-white/10 hover:text-white'
                        }`}
                    >
                        <span className="text-base">{filter.icon}</span>
                        <span>{filter.label}</span>
                    </button>
                ))}
            </section>
            
            {/* Placeholder Cards Row with ample top spacing */}
            <main className="max-w-[1400px] mx-auto px-4 pt-4 pb-16">
                <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
                    {[1, 2, 3, 4, 5, 6].map((slot) => (
                        <div
                            key={slot}
                            className="w-[135px] sm:w-[155px] h-[195px] sm:h-[225px] rounded-2xl border-2 border-dashed border-[#3a3a3a] hover:border-[#00e575] bg-[#161616] flex items-center justify-center text-gray-500 hover:text-[#00e575] transition-all duration-200 cursor-pointer group shadow-xl hover:-translate-y-1"
                        >
                            <span className="text-3xl font-light text-gray-400 group-hover:scale-125 group-hover:text-[#00e575] transition-transform">+</span>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

