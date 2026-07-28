const fs = require('fs');

const content = `import React from 'react';

export interface PriceRangeChangeItem {
    id: string;
    name: string;
    rating: number;
    position: string;
    version: string;
    oldMin: string;
    oldMax: string;
    newMin: string;
    newMax: string;
    addedOn: string;
    img: string;
    cardBg?: string;
}

const mockPriceChanges: PriceRangeChangeItem[] = [
    {
        id: '1',
        name: 'Lionel Messi',
        rating: 99,
        position: 'RW',
        version: 'Futties',
        oldMin: '10,000',
        oldMax: '3,500,000',
        newMin: '15,000',
        newMax: '4,500,000',
        addedOn: '2026-07-27',
        img: 'https://cdn.futbin.com/content/fifa24/img/players/p158023.png'
    },
    {
        id: '2',
        name: 'Cristiano Ronaldo',
        rating: 99,
        position: 'ST',
        version: 'Summer Stars Winners',
        oldMin: '10,000',
        oldMax: '3,000,000',
        newMin: '15,000',
        newMax: '4,000,000',
        addedOn: '2026-07-27',
        img: 'https://cdn.futbin.com/content/fifa24/img/players/p20801.png'
    },
    {
        id: '3',
        name: 'Kylian Mbappé',
        rating: 98,
        position: 'ST',
        version: 'TOTS',
        oldMin: '25,000',
        oldMax: '2,200,000',
        newMin: '25,000',
        newMax: '2,800,000',
        addedOn: '2026-07-26',
        img: 'https://cdn.futbin.com/content/fifa24/img/players/p231747.png'
    },
    {
        id: '4',
        name: 'Jude Bellingham',
        rating: 97,
        position: 'CM',
        version: 'Path to Glory',
        oldMin: '15,000',
        oldMax: '1,500,000',
        newMin: '15,000',
        newMax: '1,900,000',
        addedOn: '2026-07-26',
        img: 'https://cdn.futbin.com/content/fifa24/img/players/p252371.png'
    },
    {
        id: '5',
        name: 'Ronaldinho',
        rating: 98,
        position: 'CAM',
        version: 'FUTTIES Icon',
        oldMin: '50,000',
        oldMax: '5,000,000',
        newMin: '50,000',
        newMax: '6,500,000',
        addedOn: '2026-07-25',
        img: 'https://cdn.futbin.com/content/fifa24/img/players/p28130.png'
    },
    {
        id: '6',
        name: 'Virgil van Dijk',
        rating: 96,
        position: 'CB',
        version: 'TOTS',
        oldMin: '10,000',
        oldMax: '800,000',
        newMin: '10,000',
        newMax: '1,100,000',
        addedOn: '2026-07-25',
        img: 'https://cdn.futbin.com/content/fifa24/img/players/p203376.png'
    },
    {
        id: '7',
        name: 'Vinícius Jr.',
        rating: 97,
        position: 'LW',
        version: 'ShapeShifters',
        oldMin: '20,000',
        oldMax: '1,800,000',
        newMin: '20,000',
        newMax: '2,200,000',
        addedOn: '2026-07-24',
        img: 'https://cdn.futbin.com/content/fifa24/img/players/p238794.png'
    },
    {
        id: '8',
        name: 'Kevin De Bruyne',
        rating: 96,
        position: 'CDM',
        version: 'TOTW',
        oldMin: '5,000',
        oldMax: '450,000',
        newMin: '5,000',
        newMax: '600,000',
        addedOn: '2026-07-24',
        img: 'https://cdn.futbin.com/content/fifa24/img/players/p192985.png'
    },
    {
        id: '9',
        name: 'Thierry Henry',
        rating: 95,
        position: 'CF',
        version: 'Hero',
        oldMin: '12,000',
        oldMax: '950,000',
        newMin: '12,000',
        newMax: '1,200,000',
        addedOn: '2026-07-23',
        img: 'https://cdn.futbin.com/content/fifa24/img/players/p1625.png'
    },
    {
        id: '10',
        name: 'Alisson Becker',
        rating: 94,
        position: 'GK',
        version: 'Gold Rare',
        oldMin: '3,000',
        oldMax: '250,000',
        newMin: '3,000',
        newMax: '350,000',
        addedOn: '2026-07-23',
        img: 'https://cdn.futbin.com/content/fifa24/img/players/p212831.png'
    },
    {
        id: '11',
        name: 'Théo Hernandez',
        rating: 95,
        position: 'LB',
        version: 'Path to Glory',
        oldMin: '8,000',
        oldMax: '650,000',
        newMin: '8,000',
        newMax: '850,000',
        addedOn: '2026-07-22',
        img: 'https://cdn.futbin.com/content/fifa24/img/players/p232656.png'
    },
    {
        id: '12',
        name: 'Achraf Hakimi',
        rating: 93,
        position: 'RB',
        version: 'TOTW',
        oldMin: '5,000',
        oldMax: '300,000',
        newMin: '5,000',
        newMax: '400,000',
        addedOn: '2026-07-22',
        img: 'https://cdn.futbin.com/content/fifa24/img/players/p235212.png'
    }
];

export default function PriceRanges() {
    return (
        <div className="w-full min-h-screen bg-[#1a1a1a] text-white pt-24 px-4 pb-16 relative">
            {/* Background Overlay */}
            <div className="absolute inset-0 top-16 h-[50vh] bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a] z-0 overflow-hidden pointer-events-none">
                <div className="w-full h-full opacity-5 flex items-center justify-center text-9xl font-black italic select-none">
                    MARKET
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
                {/* Header */}
                <div>
                    <div className="text-sm text-gray-400 mb-1 flex items-center gap-2">
                        Home <span>›</span> Players <span>›</span> Price Ranges
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-1">FIFA 17 Price Range Changes</h1>
                    <div className="text-gray-400 text-sm mb-4">FUT 17 Price Range Updates</div>
                    <button className="bg-[#111] hover:bg-[#222] border border-[#333] text-sm py-1.5 px-3 rounded flex items-center gap-2 transition-colors w-max font-bold">
                        <span>↺</span> FIFA 17
                    </button>
                </div>

                {/* Search & Filters */}
                <div className="flex flex-col gap-4 mb-2">
                    <div className="relative w-full md:w-80">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                            🔍
                        </div>
                        <input
                            type="text"
                            placeholder="Player name"
                            className="bg-[#0a0a0a] border border-[#333] rounded pl-9 pr-3 py-2 text-sm w-full text-white placeholder-gray-500 focus:outline-none focus:border-[#00e575]"
                        />
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm font-bold py-1.5 px-4 rounded transition-colors">
                            Version
                        </button>
                        <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm font-bold py-1.5 px-4 rounded transition-colors">
                            Positions
                        </button>
                        <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm font-bold py-1.5 px-4 rounded transition-colors">
                            Leagues
                        </button>
                        <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm font-bold py-1.5 px-4 rounded transition-colors">
                            Nations
                        </button>
                        <button className="bg-[#111] border border-[#333] hover:border-gray-500 text-white text-sm font-bold py-1.5 px-4 rounded transition-colors">
                            Clubs
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="w-full bg-[#1e1e1e] rounded-lg border border-[#333] overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[900px]">
                        <thead>
                            <tr className="bg-[#111] text-[11px] font-bold text-gray-300 tracking-wider border-b border-[#333]">
                                <th className="p-3.5 uppercase">NAME</th>
                                <th className="p-3.5 uppercase text-center">RATING</th>
                                <th className="p-3.5 uppercase text-center">POSITION</th>
                                <th className="p-3.5 uppercase text-center">VERSION</th>
                                <th className="p-3.5 uppercase text-center text-red-400">OLD MIN</th>
                                <th className="p-3.5 uppercase text-center text-green-400">OLD MAX</th>
                                <th className="p-3.5 uppercase text-center text-red-400">NEW MIN</th>
                                <th className="p-3.5 uppercase text-center text-green-400">NEW MAX</th>
                                <th className="p-3.5 uppercase text-right">ADDED ON</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {mockPriceChanges.map((player) => (
                                <tr key={player.id} className="border-b border-[#2d2d2d] hover:bg-[#252525] transition-colors">
                                    <td className="p-3.5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-12 bg-[#111] rounded overflow-hidden flex-shrink-0 border border-[#333] flex items-center justify-center p-0.5">
                                                <img
                                                    src={player.img}
                                                    alt={player.name}
                                                    className="w-full h-full object-contain"
                                                    onError={(e) => {
                                                        (e.target as HTMLElement).style.display = 'none';
                                                    }}
                                                />
                                            </div>
                                            <span className="font-bold text-white">{player.name}</span>
                                        </div>
                                    </td>
                                    <td className="p-3.5 text-center">
                                        <span className="bg-[#2a2a2a] border border-[#444] text-[#ffb800] px-2 py-0.5 rounded text-xs font-bold">
                                            {player.rating}
                                        </span>
                                    </td>
                                    <td className="p-3.5 text-center font-semibold text-gray-300">{player.position}</td>
                                    <td className="p-3.5 text-center text-gray-300 font-medium">{player.version}</td>
                                    <td className="p-3.5 text-center font-medium text-gray-300">
                                        <span className="inline-flex items-center gap-1">
                                            {player.oldMin}
                                            <span className="w-3.5 h-3.5 bg-[#ffb800] text-black text-[9px] font-extrabold rounded-full inline-flex items-center justify-center">C</span>
                                        </span>
                                    </td>
                                    <td className="p-3.5 text-center font-medium text-gray-300">
                                        <span className="inline-flex items-center gap-1">
                                            {player.oldMax}
                                            <span className="w-3.5 h-3.5 bg-[#ffb800] text-black text-[9px] font-extrabold rounded-full inline-flex items-center justify-center">C</span>
                                        </span>
                                    </td>
                                    <td className="p-3.5 text-center font-bold text-white">
                                        <span className="inline-flex items-center gap-1">
                                            {player.newMin}
                                            <span className="w-3.5 h-3.5 bg-[#ffb800] text-black text-[9px] font-extrabold rounded-full inline-flex items-center justify-center">C</span>
                                        </span>
                                    </td>
                                    <td className="p-3.5 text-center font-bold text-white">
                                        <span className="inline-flex items-center gap-1">
                                            {player.newMax}
                                            <span className="w-3.5 h-3.5 bg-[#ffb800] text-black text-[9px] font-extrabold rounded-full inline-flex items-center justify-center">C</span>
                                        </span>
                                    </td>
                                    <td className="p-3.5 text-right text-gray-400 text-xs font-mono">
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
`;

fs.writeFileSync('src/pages/Market/PriceRanges.tsx', content);
