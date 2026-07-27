import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SBCNav() {
    const location = useLocation();
    
    const tabs = [
        { name: 'SBCs', path: '/sbcs' },
        { name: 'Cheapest SBCs', path: '/sbcs/cheapest' },
        { name: 'SBC Solutions', path: '/sbcs/solutions' },
        { name: 'Rating Combinations', path: '/sbcs/combinations' },
        { name: 'Best Value', path: '/sbcs/best-value' }
    ];

    return (
        <div className="w-full flex items-center justify-start border-b border-[#2d2d2d] mb-6 overflow-x-auto custom-scrollbar">
            {tabs.map(tab => (
                <Link
                    key={tab.path}
                    to={tab.path}
                    className={`whitespace-nowrap px-4 py-3 text-sm font-semibold transition-colors border-b-2 ${
                        location.pathname === tab.path 
                            ? 'border-[#00e575] text-[#00e575]' 
                            : 'border-transparent text-gray-400 hover:text-white hover:border-gray-500'
                    }`}
                >
                    {tab.name}
                </Link>
            ))}
        </div>
    );
}
