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
        <div className="home-container min-h-screen pb-16">
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
            
            {/* Filter Pills */}
            <section className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 my-10 sm:my-14 px-4 max-w-5xl mx-auto w-full">
                {filters.map((filter) => (
                    <button
                        key={filter.id}
                        onClick={() => setActiveFilter(filter.id)}
                        className={`px-5 py-2.5 rounded-full border-2 text-sm sm:text-base font-bold flex items-center gap-2.5 transition-all duration-200 cursor-pointer shadow-md ${
                            activeFilter === filter.id
                                ? 'border-[#00e575] text-[#00e575] bg-[#00e575]/10 shadow-[0_0_20px_rgba(0,229,117,0.3)] scale-105'
                                : 'border-gray-600 text-gray-200 hover:border-gray-400 hover:bg-white/5 hover:text-white'
                        }`}
                    >
                        <span className="text-base">{filter.icon}</span>
                        <span>{filter.label}</span>
                    </button>
                ))}
            </section>
            
            {/* Placeholder Cards Row */}
            <main className="max-w-[1700px] mx-auto px-4 pt-6 sm:pt-10 pb-16">
                <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-6">
                    {[1, 2, 3, 4, 5, 6].map((slot) => (
                        <div
                            key={slot}
                            className="w-[130px] sm:w-[150px] h-[190px] sm:h-[220px] rounded-2xl border-2 border-dashed border-gray-600 hover:border-[#00e575] bg-white/[0.03] flex items-center justify-center text-gray-400 hover:text-[#00e575] transition-all duration-200 cursor-pointer group shadow-lg"
                        >
                            <span className="text-3xl font-light group-hover:scale-125 transition-transform">+</span>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
