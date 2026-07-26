import React, { useState } from 'react';

interface PlayerCardProps {
    player: {
        name: string;
        rating: number;
        position: string;
        image: string;
        pac: number;
        sho: number;
        pas: number;
        dri: number;
        def: number;
        phy: number;
        nation?: string;
        club?: string;
    };
    width?: string;
}

export default function PlayerCard({ player, width = "w-48" }: PlayerCardProps) {
    const [imgSrc, setImgSrc] = useState(player.image);

    const handleImageError = () => {
        setImgSrc('https://cdn.futbin.com/content/fifa24/img/players/p54050041.png'); // Fallback placeholder
    };

    return (
        <div className={`relative ${width} aspect-[2/3] bg-gradient-to-b from-[#f9d784] to-[#c29633] rounded-t-2xl rounded-b-[40px] p-2 shadow-2xl flex flex-col justify-between overflow-hidden border-2 border-[#fff0c8]`}>
            {/* Background texture */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.futbin.com/design/img/bg/bg_1.png')] bg-cover mix-blend-overlay"></div>
            
            {/* Top section: Rating & Position */}
            <div className="relative z-10 flex justify-between items-start pt-2 px-2">
                <div className="flex flex-col items-center text-black">
                    <span className="text-3xl font-black leading-none">{player.rating}</span>
                    <span className="text-sm font-bold uppercase">{player.position}</span>
                    <div className="mt-1 flex flex-col gap-1">
                        <div className="w-5 h-3 bg-red-600 border border-black shadow-sm" title={player.nation}></div>
                        <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center border border-black overflow-hidden" title={player.club}>
                            <span className="text-[8px] font-bold">CLUB</span>
                        </div>
                    </div>
                </div>
                
                {/* Player Image */}
                <div className="absolute right-0 top-2 w-32 h-32 -mr-2">
                    <img 
                        src={imgSrc} 
                        alt={player.name} 
                        className="w-full h-full object-contain object-bottom drop-shadow-[0_10px_8px_rgba(0,0,0,0.5)]" 
                        onError={handleImageError}
                    />
                </div>
            </div>

            {/* Bottom section: Name & Stats */}
            <div className="relative z-10 flex flex-col items-center pb-2">
                <div className="text-center font-bold text-black uppercase tracking-tight text-lg mb-1 leading-none w-full truncate border-b border-black/20 pb-1">
                    {player.name}
                </div>
                
                <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-black text-xs font-bold w-full px-2">
                    <div className="flex justify-between"><span>{player.pac}</span> <span>PAC</span></div>
                    <div className="flex justify-between"><span>{player.dri}</span> <span>DRI</span></div>
                    <div className="flex justify-between"><span>{player.sho}</span> <span>SHO</span></div>
                    <div className="flex justify-between"><span>{player.def}</span> <span>DEF</span></div>
                    <div className="flex justify-between"><span>{player.pas}</span> <span>PAS</span></div>
                    <div className="flex justify-between"><span>{player.phy}</span> <span>PHY</span></div>
                </div>
                
                <div className="mt-1 flex justify-center gap-1 opacity-80">
                    <span className="text-[10px] text-black">⚙️ ⚙️ ⚙️</span>
                </div>
            </div>
        </div>
    );
}
