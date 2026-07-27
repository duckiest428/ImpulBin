import React from 'react';
import PlayerCard from './PlayerCard';

export default function PlaceholderPage({ title }: { title: string }) {
    // Generate some dummy players
    const dummyPlayers = Array.from({ length: 10 }).map((_, i) => ({
        name: `Player ${i + 1}`,
        rating: 80 + i,
        position: ['ST', 'CB', 'CM', 'GK', 'RW'][i % 5],
        image: 'https://cdn.futbin.com/content/fifa24/img/players/p54050041.png',
        pac: 70 + i,
        sho: 75 + i,
        pas: 80 + i,
        dri: 85 - i,
        def: 60 + i,
        phy: 70 + i,
    }));

    return (
        <div className="container mx-auto" style={{ padding: '20px' }}>
            <h1 className="text-3xl font-bold mb-6 text-white">{title}</h1>
            <p className="text-gray-400 mb-8">This page is currently under construction. Here are some placeholder cards until the database integration is complete!</p>
            
            <div className="flex flex-wrap gap-6">
                {dummyPlayers.map((player, idx) => (
                    <PlayerCard key={idx} player={player} />
                ))}
            </div>
        </div>
    );
}
