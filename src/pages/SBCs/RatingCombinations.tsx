import React from 'react';
import SBCNav from '../../components/SBCNav';
import { getAssetUrl } from '../../utils/assetUrl';

export default function RatingCombinations() {
    const mainRatings = [75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87];
    
    // Rows of data matching the screenshot
    const dataRows = [
        [0, 0, 0, 1, 6, 1, 3, 0, 0, 4000],
        [0, 0, 0, 0, 6, 3, 2, 0, 0, 4050],
        [0, 0, 0, 3, 3, 2, 3, 0, 0, 4050],
        [0, 0, 1, 4, 1, 1, 4, 0, 0, 4050],
        [0, 0, 0, 1, 3, 6, 1, 0, 0, 4150],
        [0, 0, 0, 0, 6, 0, 1, 4, 0, 4150],
        [4, 0, 0, 0, 0, 2, 5, 0, 0, 4150],
        [0, 0, 0, 0, 2, 9, 0, 0, 0, 4250],
        [1, 0, 0, 0, 0, 10, 0, 0, 0, 4300],
        [0, 0, 0, 1, 6, 2, 1, 1, 0, 4350],
    ];

    return (
        <div className="w-full min-h-screen bg-[#1a1a1a] text-white pt-24 px-4 pb-16">
            <div className="max-w-7xl mx-auto flex flex-col gap-6">
                
                {/* Header */}
                <div>
                    <h1 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><img src={getAssetUrl('assets/icons/main-sbcs.svg')} className="w-[28px] h-[28px]" alt="SBCs" />SBC Rating Combinations</h1>
                    <button className="bg-[#2a2a2a] hover:bg-[#333] border border-[#333] text-sm py-1.5 px-3 rounded flex items-center gap-2 transition-colors w-max">
                        <span className="text-xs">↺</span> FIFA 17
                    </button>
                </div>

                <SBCNav />

                {/* Main Content Area */}
                <div className="flex flex-col lg:flex-row gap-8">
                    
                    {/* Left Side: Tabs and Table */}
                    <div className="flex-1 flex flex-col">
                        
                        {/* Sub Tabs */}
                        <div className="flex flex-wrap border-b border-[#2d2d2d] mb-6">
                            {mainRatings.map((rating) => (
                                <button 
                                    key={rating}
                                    className={`px-4 py-2 text-sm font-semibold transition-colors border-b-2 ${
                                        rating === 81 
                                            ? 'border-[#00e575] text-[#00e575] bg-[#111]' 
                                            : 'border-[#2d2d2d] bg-[#1e1e1e] text-gray-400 hover:text-white hover:bg-[#252525]'
                                    }`}
                                >
                                    {rating}
                                </button>
                            ))}
                        </div>

                        {/* Table */}
                        <div className="w-full bg-[#1e1e1e] border border-[#2d2d2d] rounded overflow-hidden">
                            <table className="w-full text-center text-sm border-collapse">
                                <thead>
                                    <tr className="bg-[#111] text-white border-b border-[#333]">
                                        <th className="p-3"></th>
                                        <th className="p-3 font-medium">
                                            <div className="flex flex-col items-center gap-1">
                                                <span className="text-lg">76</span>
                                                <span className="text-[#ffb800] text-[10px]">350 <span className="text-[#ffb800] text-[8px]">F</span></span>
                                            </div>
                                        </th>
                                        <th className="p-3 font-medium">
                                            <div className="flex flex-col items-center gap-1">
                                                <span className="text-lg">77</span>
                                                <span className="text-[#ffb800] text-[10px]">350 <span className="text-[#ffb800] text-[8px]">F</span></span>
                                            </div>
                                        </th>
                                        <th className="p-3 font-medium">
                                            <div className="flex flex-col items-center gap-1">
                                                <span className="text-lg">78</span>
                                                <span className="text-[#ffb800] text-[10px]">350 <span className="text-[#ffb800] text-[8px]">F</span></span>
                                            </div>
                                        </th>
                                        <th className="p-3 font-medium">
                                            <div className="flex flex-col items-center gap-1">
                                                <span className="text-lg">79</span>
                                                <span className="text-[#ffb800] text-[10px]">350 <span className="text-[#ffb800] text-[8px]">F</span></span>
                                            </div>
                                        </th>
                                        <th className="p-3 font-medium">
                                            <div className="flex flex-col items-center gap-1">
                                                <span className="text-lg">80</span>
                                                <span className="text-[#ffb800] text-[10px]">350 <span className="text-[#ffb800] text-[8px]">F</span></span>
                                            </div>
                                        </th>
                                        <th className="p-3 font-medium">
                                            <div className="flex flex-col items-center gap-1">
                                                <span className="text-lg border-b-2 border-[#00e575]">81</span>
                                                <span className="text-[#ffb800] text-[10px]">350 <span className="text-[#ffb800] text-[8px]">F</span></span>
                                            </div>
                                        </th>
                                        <th className="p-3 font-medium">
                                            <div className="flex flex-col items-center gap-1">
                                                <span className="text-lg">82</span>
                                                <span className="text-[#ffb800] text-[10px]">400 <span className="text-[#ffb800] text-[8px]">F</span></span>
                                            </div>
                                        </th>
                                        <th className="p-3 font-medium">
                                            <div className="flex flex-col items-center gap-1">
                                                <span className="text-lg">83</span>
                                                <span className="text-[#ffb800] text-[10px]">750 <span className="text-[#ffb800] text-[8px]">F</span></span>
                                            </div>
                                        </th>
                                        <th className="p-3 font-medium">
                                            <div className="flex flex-col items-center gap-1">
                                                <span className="text-lg">84</span>
                                                <span className="text-[#ffb800] text-[10px]">750 <span className="text-[#ffb800] text-[8px]">F</span></span>
                                            </div>
                                        </th>
                                        <th className="p-3 font-medium text-right pr-6"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataRows.map((row, idx) => (
                                        <tr key={idx} className="border-b border-[#2d2d2d] hover:bg-[#252525] transition-colors">
                                            <td className="p-3 text-[#00e575] font-bold text-center">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            </td>
                                            {row.slice(0, 9).map((val, i) => (
                                                <td key={i} className={`p-3 font-bold ${val > 0 ? 'text-white' : 'text-gray-600'}`}>
                                                    {val}
                                                </td>
                                            ))}
                                            <td className="p-3 text-right pr-6 font-bold text-[#ffb800]">
                                                {row[9].toLocaleString()} <span className="text-[10px]">F</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>

                    {/* Right Side: Calculator Tool */}
                    <div className="w-full lg:w-80 flex-shrink-0">
                        <div className="bg-[#1e1e1e] border border-[#2d2d2d] rounded overflow-hidden">
                            <div className="bg-[#111] p-3 border-b border-[#333]">
                                <h3 className="font-bold text-sm text-white">SBC Combinations Calculator</h3>
                            </div>
                            <div className="p-4 flex flex-col gap-4">
                                <div className="grid grid-cols-3 gap-2">
                                    {[76, 77, 78, 79, 80, 81, 82, 83, 84].map(num => (
                                        <button key={num} className="bg-[#111] border border-[#333] hover:border-gray-500 text-gray-300 py-1 rounded text-sm transition-colors">
                                            {num}
                                        </button>
                                    ))}
                                </div>
                                <div className="text-xs text-gray-400 space-y-3 mt-2">
                                    <p>I. Choose the SBC rating you want to achieve and see the optimal combinations in the table</p>
                                    <p>II. Input the cards you want to submit into the SBC to create a unique optimal combination</p>
                                    <p>III. Use the drop down on your chosen solution to view a breakdown of prices of individual ratings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
