import React from 'react';
import SBCNav from '../../components/SBCNav';

export default function SBCSolutions() {
    return (
        <div className="w-full min-h-screen bg-[#1a1a1a] text-white pt-24 px-4 pb-16">
            <div className="max-w-7xl mx-auto flex flex-col gap-6">
                <div>
                    <h1 className="text-2xl font-bold text-white mb-4">SBC Solutions</h1>
                </div>
                <SBCNav />
                <div className="text-gray-400">Content coming soon.</div>
            </div>
        </div>
    );
}
