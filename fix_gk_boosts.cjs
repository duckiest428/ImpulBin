const fs = require('fs');

let file = fs.readFileSync('src/pages/Market/ConsumablesPrices.tsx', 'utf8');

const gkBoostStats = ['div', 'han', 'kic', 'ref', 'spd', 'pos'];
let replacement = '<>';
for (const stat of gkBoostStats) {
    const STAT = stat.toUpperCase();
    replacement += `\n                                                    <div className="flex flex-col items-center gap-1 w-6"><span>${STAT}</span>{c.boosts.${stat}! > 0 && <div className={\`w-4 \${c.boosts.${stat} === 1 ? 'h-1 bg-[#00e575]' : c.boosts.${stat} === 2 ? 'h-2 border-y-[3px] border-[#00e575] bg-transparent' : 'h-3 border-y-[3px] border-[#00e575] bg-transparent flex flex-col justify-center items-center'} \`}>{c.boosts.${stat} === 3 && <div className="w-4 h-[3px] bg-[#00e575]"></div>}</div>}</div>`;
}
replacement += '\n                                                </>';

// The previous GK block was this:
const oldGkRegex = /<>\s*<div className="flex flex-col items-center gap-1 w-6"><span>DIV[\s\S]*?<\/div>[\s\S]*?<\/>/;

file = file.replace(oldGkRegex, replacement);

fs.writeFileSync('src/pages/Market/ConsumablesPrices.tsx', file);
