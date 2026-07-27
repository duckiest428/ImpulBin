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
            
            {/* Filter Pills matching Image 2 */}
            <section className="flex justify-center gap-2 sm:gap-3 flex-wrap my-8 px-4 max-w-6xl mx-auto">
                {filters.map((filter) => (
                    <button
                        key={filter.id}
                        onClick={() => setActiveFilter(filter.id)}
                        className={`px-5 py-2 rounded-full border text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                            activeFilter === filter.id
                                ? 'border-[#00e575] text-[#00e575] bg-white/5 shadow-[0_0_12px_rgba(0,229,117,0.2)]'
                                : 'border-gray-700 text-gray-300 hover:border-gray-500 hover:bg-white/5'
                        }`}
                    >
                        <span>{filter.icon}</span>
                        <span>{filter.label}</span>
                    </button>
                ))}
            </section>
            
            {/* Placeholder Cards Row */}
            <main className="max-w-[1700px] mx-auto px-4">
                <div className="flex flex-wrap xl:flex-nowrap justify-center gap-4 py-8">
                    {[1, 2, 3, 4, 5, 6].map((slot) => (
                        <div
                            key={slot}
                            className="w-[125px] sm:w-[140px] h-[180px] sm:h-[200px] rounded-xl border-2 border-dashed border-gray-700 hover:border-[#00e575] bg-white/[0.02] flex items-center justify-center text-gray-500 hover:text-[#00e575] transition-all cursor-pointer group"
                        >
                            <span className="text-2xl font-light group-hover:scale-125 transition-transform">+</span>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
