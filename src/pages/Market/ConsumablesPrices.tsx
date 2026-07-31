import React from 'react';
import { ChemStyleIconMap } from '../../utils/chemstyles';
import { getAssetUrl } from '../../utils/assetUrl';
import { ChemStyleIcon } from '../../components/ChemStyleIcon';
import { SafeImage } from '../../components/SafeImage';


const mockConsumables = [
    {
        "name": "Anchor",
        "price": "--",
        "min": "--",
        "max": "--",
        "boosts": {
            "pac": 2,
            "sho": 0,
            "pas": 0,
            "dri": 0,
            "def": 2,
            "phy": 2
        },
        "pos": "DEF"
    },
    {
        "name": "Architect",
        "price": "--",
        "min": "--",
        "max": "--",
        "boosts": {
            "pac": 0,
            "sho": 0,
            "pas": 3,
            "dri": 0,
            "def": 0,
            "phy": 3
        },
        "pos": "MID"
    },
    {
        "name": "Artist",
        "price": "--",
        "min": "--",
        "max": "--",
        "boosts": {
            "pac": 0,
            "sho": 0,
            "pas": 3,
            "dri": 3,
            "def": 0,
            "phy": 0
        },
        "pos": "ATT"
    },
    {
        "name": "Backbone",
        "price": "--",
        "min": "--",
        "max": "--",
        "boosts": {
            "pac": 0,
            "sho": 0,
            "pas": 2,
            "dri": 0,
            "def": 2,
            "phy": 2
        },
        "pos": "DEF"
    },
    {
        "name": "Basic",
        "price": "--",
        "min": "--",
        "max": "--",
        "boosts": {
            "pac": 1,
            "sho": 1,
            "pas": 1,
            "dri": 1,
            "def": 1,
            "phy": 1
        },
        "pos": "DEF, MID, ATT"
    },
    {
        "name": "Cat",
        "price": "--",
        "min": "--",
        "max": "--",
        "boosts": {
            "div": 0,
            "han": 0,
            "kic": 0,
            "ref": 2,
            "spd": 2,
            "pos": 2
        },
        "pos": "GK",
        "isGk": true
    },
    {
        "name": "Catalyst",
        "price": "--",
        "min": "--",
        "max": "--",
        "boosts": {
            "pac": 3,
            "sho": 0,
            "pas": 3,
            "dri": 0,
            "def": 0,
            "phy": 0
        },
        "pos": "ATT"
    },
    {
        "name": "Deadeye",
        "price": "--",
        "min": "--",
        "max": "--",
        "boosts": {
            "pac": 0,
            "sho": 3,
            "pas": 3,
            "dri": 0,
            "def": 0,
            "phy": 0
        },
        "pos": "ATT"
    },
    {
        "name": "Engine",
        "price": "--",
        "min": "--",
        "max": "--",
        "boosts": {
            "pac": 2,
            "sho": 0,
            "pas": 2,
            "dri": 2,
            "def": 0,
            "phy": 0
        },
        "pos": "ATT"
    },
    {
        "name": "Finisher",
        "price": "--",
        "min": "--",
        "max": "--",
        "boosts": {
            "pac": 0,
            "sho": 3,
            "pas": 0,
            "dri": 0,
            "def": 0,
            "phy": 3
        },
        "pos": "ATT"
    },
    {
        "name": "GK Basic",
        "price": "--",
        "min": "--",
        "max": "--",
        "boosts": {
            "div": 1,
            "han": 1,
            "kic": 1,
            "ref": 1,
            "spd": 1,
            "pos": 1
        },
        "pos": "GK",
        "isGk": true
    },
    {
        "name": "Gladiator",
        "price": "--",
        "min": "--",
        "max": "--",
        "boosts": {
            "pac": 0,
            "sho": 2,
            "pas": 0,
            "dri": 0,
            "def": 2,
            "phy": 0
        },
        "pos": "MID"
    },
    {
        "name": "Glove",
        "price": "--",
        "min": "--",
        "max": "--",
        "boosts": {
            "div": 2,
            "han": 2,
            "kic": 0,
            "ref": 0,
            "spd": 0,
            "pos": 2
        },
        "pos": "GK",
        "isGk": true
    },
    {
        "name": "Guardian",
        "price": "--",
        "min": "--",
        "max": "--",
        "boosts": {
            "pac": 0,
            "sho": 0,
            "pas": 0,
            "dri": 3,
            "def": 3,
            "phy": 0
        },
        "pos": "DEF"
    },
    {
        "name": "Hawk",
        "price": "--",
        "min": "--",
        "max": "--",
        "boosts": {
            "pac": 2,
            "sho": 2,
            "pas": 0,
            "dri": 0,
            "def": 0,
            "phy": 2
        },
        "pos": "ATT"
    },
    {
        "name": "Hunter",
        "price": "--",
        "min": "--",
        "max": "--",
        "boosts": {
            "pac": 3,
            "sho": 3,
            "pas": 0,
            "dri": 0,
            "def": 0,
            "phy": 0
        },
        "pos": "ATT"
    },
    {
        "name": "Maestro",
        "price": "--",
        "min": "--",
        "max": "--",
        "boosts": {
            "pac": 0,
            "sho": 2,
            "pas": 2,
            "dri": 2,
            "def": 0,
            "phy": 0
        },
        "pos": "MID"
    },
    {
        "name": "Marksman",
        "price": "--",
        "min": "--",
        "max": "--",
        "boosts": {
            "pac": 0,
            "sho": 2,
            "pas": 0,
            "dri": 2,
            "def": 0,
            "phy": 2
        },
        "pos": "ATT"
    },
    {
        "name": "Powerhouse",
        "price": "--",
        "min": "--",
        "max": "--",
        "boosts": {
            "pac": 0,
            "sho": 0,
            "pas": 3,
            "dri": 0,
            "def": 3,
            "phy": 0
        },
        "pos": "MID"
    },
    {
        "name": "Sentinel",
        "price": "--",
        "min": "--",
        "max": "--",
        "boosts": {
            "pac": 0,
            "sho": 0,
            "pas": 0,
            "dri": 0,
            "def": 3,
            "phy": 3
        },
        "pos": "DEF"
    },
    {
        "name": "Shadow",
        "price": "--",
        "min": "--",
        "max": "--",
        "boosts": {
            "pac": 3,
            "sho": 0,
            "pas": 0,
            "dri": 0,
            "def": 3,
            "phy": 0
        },
        "pos": "DEF"
    },
    {
        "name": "Shield",
        "price": "--",
        "min": "--",
        "max": "--",
        "boosts": {
            "div": 0,
            "han": 0,
            "kic": 2,
            "ref": 2,
            "spd": 2,
            "pos": 0
        },
        "pos": "GK",
        "isGk": true
    },
    {
        "name": "Sniper",
        "price": "--",
        "min": "--",
        "max": "--",
        "boosts": {
            "pac": 0,
            "sho": 3,
            "pas": 0,
            "dri": 3,
            "def": 0,
            "phy": 0
        },
        "pos": "ATT"
    },
    {
        "name": "Wall",
        "price": "--",
        "min": "--",
        "max": "--",
        "boosts": {
            "div": 2,
            "han": 2,
            "kic": 2,
            "ref": 0,
            "spd": 0,
            "pos": 0
        },
        "pos": "GK",
        "isGk": true
    }
];

export default function ConsumablesPrices() {
    return (
        <div className="w-full min-h-screen bg-[#1a1a1a] text-white pt-24 px-4 pb-16 relative">
            
            {/* Background Overlay Mock */}
            <div className="absolute inset-0 top-0 h-full bg-gradient-to-b from-[#1a1a1a]/40 to-[#1a1a1a] z-0 overflow-hidden pointer-events-none">
                <div className="w-full h-[60vh] opacity-20 bg-[url('https://placehold.co/1920x1080/1a1a1a/2d2d2d')] bg-cover bg-center"></div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
                
                {/* Header */}
                <div>
                    <div className="text-sm text-gray-400 mb-1 flex items-center gap-2">
                        Home <span>›</span> Consumables <span>›</span> Chemistry Styles
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-6">FIFA 17 Chemistry Styles</h1>
                </div>



                {/* Table */}
                <div className="w-full bg-[#1e1e1e]/80 rounded-lg border border-[#333] overflow-hidden mt-4 shadow-2xl backdrop-blur-sm">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#0a0a0a] text-[10px] font-bold text-white tracking-widest border-b border-[#333]">
                                <th className="p-4 uppercase w-1/5">NAME</th>
                                <th className="p-4 uppercase">PRICE</th>
                                <th className="p-4 uppercase">MIN PRICE</th>
                                <th className="p-4 uppercase">MAX PRICE</th>
                                <th className="p-4 uppercase w-2/5">BOOST</th>
                                <th className="p-4 uppercase text-center">PREFERRED POSITIONS</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-semibold">
                            {mockConsumables.map((c, i) => (
                                <tr key={i} className="border-b border-[#2d2d2d] hover:bg-[#252525] transition-colors">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <ChemStyleIcon name={c.name} className="w-6 h-6 shrink-0" />
                                            <span className="text-white">{c.name}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-gray-300">
                                        {c.price} <SafeImage src={getAssetUrl('assets/icons/coins_bin-2.png.png')} fallbackType="coin" className="w-3.5 h-3.5 inline ml-1" alt="coins" />
                                    </td>
                                    <td className="p-4 text-gray-300">
                                        {c.min} <SafeImage src={getAssetUrl('assets/icons/coins_bin-2.png.png')} fallbackType="coin" className="w-3.5 h-3.5 inline ml-1" alt="coins" />
                                    </td>
                                    <td className="p-4 text-gray-300">
                                        {c.max} <SafeImage src={getAssetUrl('assets/icons/coins_bin-2.png.png')} fallbackType="coin" className="w-3.5 h-3.5 inline ml-1" alt="coins" />
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-end gap-3 text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                                            {c.isGk ? (
                                                <>
                                                    <div className="flex flex-col items-center gap-1 w-6"><span>DIV</span>{c.boosts.div! > 0 && <div className={`w-4 ${c.boosts.div === 1 ? 'h-1 bg-[#00e575]' : c.boosts.div === 2 ? 'h-2 border-y-[3px] border-[#00e575] bg-transparent' : 'h-3 border-y-[3px] border-[#00e575] bg-transparent flex flex-col justify-center items-center'} `}>{c.boosts.div === 3 && <div className="w-4 h-[3px] bg-[#00e575]"></div>}</div>}</div>
                                                    <div className="flex flex-col items-center gap-1 w-6"><span>HAN</span>{c.boosts.han! > 0 && <div className={`w-4 ${c.boosts.han === 1 ? 'h-1 bg-[#00e575]' : c.boosts.han === 2 ? 'h-2 border-y-[3px] border-[#00e575] bg-transparent' : 'h-3 border-y-[3px] border-[#00e575] bg-transparent flex flex-col justify-center items-center'} `}>{c.boosts.han === 3 && <div className="w-4 h-[3px] bg-[#00e575]"></div>}</div>}</div>
                                                    <div className="flex flex-col items-center gap-1 w-6"><span>KIC</span>{c.boosts.kic! > 0 && <div className={`w-4 ${c.boosts.kic === 1 ? 'h-1 bg-[#00e575]' : c.boosts.kic === 2 ? 'h-2 border-y-[3px] border-[#00e575] bg-transparent' : 'h-3 border-y-[3px] border-[#00e575] bg-transparent flex flex-col justify-center items-center'} `}>{c.boosts.kic === 3 && <div className="w-4 h-[3px] bg-[#00e575]"></div>}</div>}</div>
                                                    <div className="flex flex-col items-center gap-1 w-6"><span>REF</span>{c.boosts.ref! > 0 && <div className={`w-4 ${c.boosts.ref === 1 ? 'h-1 bg-[#00e575]' : c.boosts.ref === 2 ? 'h-2 border-y-[3px] border-[#00e575] bg-transparent' : 'h-3 border-y-[3px] border-[#00e575] bg-transparent flex flex-col justify-center items-center'} `}>{c.boosts.ref === 3 && <div className="w-4 h-[3px] bg-[#00e575]"></div>}</div>}</div>
                                                    <div className="flex flex-col items-center gap-1 w-6"><span>SPD</span>{c.boosts.spd! > 0 && <div className={`w-4 ${c.boosts.spd === 1 ? 'h-1 bg-[#00e575]' : c.boosts.spd === 2 ? 'h-2 border-y-[3px] border-[#00e575] bg-transparent' : 'h-3 border-y-[3px] border-[#00e575] bg-transparent flex flex-col justify-center items-center'} `}>{c.boosts.spd === 3 && <div className="w-4 h-[3px] bg-[#00e575]"></div>}</div>}</div>
                                                    <div className="flex flex-col items-center gap-1 w-6"><span>POS</span>{c.boosts.pos! > 0 && <div className={`w-4 ${c.boosts.pos === 1 ? 'h-1 bg-[#00e575]' : c.boosts.pos === 2 ? 'h-2 border-y-[3px] border-[#00e575] bg-transparent' : 'h-3 border-y-[3px] border-[#00e575] bg-transparent flex flex-col justify-center items-center'} `}>{c.boosts.pos === 3 && <div className="w-4 h-[3px] bg-[#00e575]"></div>}</div>}</div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="flex flex-col items-center gap-1 w-6"><span>PAC</span>{c.boosts.pac! > 0 && <div className={`w-4 ${c.boosts.pac === 1 ? 'h-1 bg-[#00e575]' : c.boosts.pac === 2 ? 'h-2 border-y-[3px] border-[#00e575] bg-transparent' : 'h-3 border-y-[3px] border-[#00e575] bg-transparent flex flex-col justify-center items-center'} `}>{c.boosts.pac === 3 && <div className="w-4 h-[3px] bg-[#00e575]"></div>}</div>}</div>
                                                    <div className="flex flex-col items-center gap-1 w-6"><span>SHO</span>{c.boosts.sho! > 0 && <div className={`w-4 ${c.boosts.sho === 1 ? 'h-1 bg-[#00e575]' : c.boosts.sho === 2 ? 'h-2 border-y-[3px] border-[#00e575] bg-transparent' : 'h-3 border-y-[3px] border-[#00e575] bg-transparent flex flex-col justify-center items-center'} `}>{c.boosts.sho === 3 && <div className="w-4 h-[3px] bg-[#00e575]"></div>}</div>}</div>
                                                    <div className="flex flex-col items-center gap-1 w-6"><span>PAS</span>{c.boosts.pas! > 0 && <div className={`w-4 ${c.boosts.pas === 1 ? 'h-1 bg-[#00e575]' : c.boosts.pas === 2 ? 'h-2 border-y-[3px] border-[#00e575] bg-transparent' : 'h-3 border-y-[3px] border-[#00e575] bg-transparent flex flex-col justify-center items-center'} `}>{c.boosts.pas === 3 && <div className="w-4 h-[3px] bg-[#00e575]"></div>}</div>}</div>
                                                    <div className="flex flex-col items-center gap-1 w-6"><span>DRI</span>{c.boosts.dri! > 0 && <div className={`w-4 ${c.boosts.dri === 1 ? 'h-1 bg-[#00e575]' : c.boosts.dri === 2 ? 'h-2 border-y-[3px] border-[#00e575] bg-transparent' : 'h-3 border-y-[3px] border-[#00e575] bg-transparent flex flex-col justify-center items-center'} `}>{c.boosts.dri === 3 && <div className="w-4 h-[3px] bg-[#00e575]"></div>}</div>}</div>
                                                    <div className="flex flex-col items-center gap-1 w-6"><span>DEF</span>{c.boosts.def! > 0 && <div className={`w-4 ${c.boosts.def === 1 ? 'h-1 bg-[#00e575]' : c.boosts.def === 2 ? 'h-2 border-y-[3px] border-[#00e575] bg-transparent' : 'h-3 border-y-[3px] border-[#00e575] bg-transparent flex flex-col justify-center items-center'} `}>{c.boosts.def === 3 && <div className="w-4 h-[3px] bg-[#00e575]"></div>}</div>}</div>
                                                    <div className="flex flex-col items-center gap-1 w-6"><span>PHY</span>{c.boosts.phy! > 0 && <div className={`w-4 ${c.boosts.phy === 1 ? 'h-1 bg-[#00e575]' : c.boosts.phy === 2 ? 'h-2 border-y-[3px] border-[#00e575] bg-transparent' : 'h-3 border-y-[3px] border-[#00e575] bg-transparent flex flex-col justify-center items-center'} `}>{c.boosts.phy === 3 && <div className="w-4 h-[3px] bg-[#00e575]"></div>}</div>}</div>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                    <td className="p-4 text-center text-gray-300">
                                        {c.pos}
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
