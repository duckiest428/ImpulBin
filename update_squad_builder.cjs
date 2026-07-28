const fs = require('fs');

let code = fs.readFileSync('src/pages/SquadBuilder/SquadBuilder.tsx', 'utf-8');

code = code.replace(
    /\['🛡 Version', '📍 Position', '🏆 League', '🌍 Nation', '🛡 Club', '✨ SM & WF', '👟 Foot', '🏃 WR'\]/g,
    "['Version', 'Position', 'League', 'Nation', 'Club', 'SM & WF', 'Foot', 'WR']"
);

code = code.replace(/0 🟡/g, '0 <span className="w-3.5 h-3.5 bg-[#ffb800] text-black text-[9px] font-extrabold rounded-full inline-flex items-center justify-center ml-1">C</span>');

fs.writeFileSync('src/pages/SquadBuilder/SquadBuilder.tsx', code);
