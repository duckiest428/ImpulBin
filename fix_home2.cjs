const fs = require('fs');

let file = fs.readFileSync('src/pages/Home/Home.tsx', 'utf8');

// Add import for popularPlayers if missing
if (!file.includes('popularPlayers')) {
    file = file.replace(`import { FIFA17PlayerCard } from '../../components/FIFA17PlayerCard';`, `import { FIFA17PlayerCard } from '../../components/FIFA17PlayerCard';\nimport { popularPlayers } from '../../data/mockPlayers';`);
}

// Replace the main section
const mainStart = file.indexOf('<main className="w-full');
const mainEnd = file.indexOf('</main>') + 7;

const newMain = `<main className="w-full flex justify-center items-center px-2">
                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-2 max-w-full justify-items-center">
                        {popularPlayers.map((player) => (
                            <PlayerHoverWrapper key={player.id} playerData={player}>
                                <div className="flex flex-col items-center gap-1.5 transition-transform hover:scale-105 cursor-pointer">
                                    <div className="w-[85px] sm:w-[95px] md:w-[110px]">
                                        <img src={player.image} alt={player.name} className="w-full h-auto drop-shadow-lg" />
                                    </div>
                                    <div className="flex items-center text-[10px] sm:text-[11px] font-bold overflow-hidden rounded-[4px] bg-[#222222] border border-[#333] shadow-sm">
                                        <div className="px-1.5 py-0.5 bg-[#400000] text-white border-r border-[#333]">{player.foot}</div>
                                        <div className="px-1.5 py-0.5 bg-[#400000] text-white border-r border-[#333] flex items-center gap-0.5">{player.sm}<span className="text-[8px]">★</span></div>
                                        <div className="px-1.5 py-0.5 bg-[#400000] text-white border-r border-[#333] flex items-center gap-0.5">{player.wf}<span className="text-[8px] font-black text-red-500">!</span></div>
                                        <div className={\`px-1.5 py-0.5 text-black \${player.score >= 90 ? 'bg-[#00e575]' : player.score >= 80 ? 'bg-[#00c565]' : player.score >= 70 ? 'bg-[#ffb800]' : 'bg-[#ff3333]'}\`}>{player.score.toFixed(1)}</div>
                                    </div>
                                </div>
                            </PlayerHoverWrapper>
                        ))}
                    </div>
                </main>
                <div className="mt-8 mb-4">
                    <button className="text-[#00e575] font-bold hover:underline text-sm sm:text-base cursor-pointer">All Popular Players</button>
                </div>`;

file = file.substring(0, mainStart) + newMain + file.substring(mainEnd);

fs.writeFileSync('src/pages/Home/Home.tsx', file);
