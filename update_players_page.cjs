const fs = require('fs');

let code = fs.readFileSync('src/pages/Players/Players.tsx', 'utf-8');

// Add import Eye if not present
if (!code.includes("import { Eye }")) {
    code = `import { Eye } from 'lucide-react';\n` + code;
}

// replace 👣
code = code.replace(/<td className="p-4">👣<\/td>/g, '<td className="p-4 font-bold text-gray-300">{player.foot || "R"}</td>');

// replace 🟡
code = code.replace(/🟡/g, '<span className="w-3.5 h-3.5 bg-[#ffb800] text-black text-[9px] font-extrabold rounded-full inline-flex items-center justify-center ml-1">C</span>');

// replace 👁 button
code = code.replace(/<button className="text-gray-500 hover:text-green-500 bg-gray-800 p-2 rounded">👁<\/button>/g, '<button className="text-gray-400 hover:text-green-500 bg-gray-800 p-2 rounded transition-colors" title="View Player"><Eye className="w-4 h-4" /></button>');

// replace filter list with clean labels without raw emojis
code = code.replace(
    /\['🛡 Version', '📍 Positions', '🏆 Leagues', '🌍 Nations', '🛡 Clubs', '🪙 Price', '✨ PlayStyles', '📋 Roles', '⭐ Rating', '✨ SM & WF', 'FUTBIN Rating', '★ Stats'\]/g,
    "['Version', 'Positions', 'Leagues', 'Nations', 'Clubs', 'Price', 'PlayStyles', 'Roles', 'Rating', 'SM & WF', 'FUTBIN Rating', 'Stats']"
);

fs.writeFileSync('src/pages/Players/Players.tsx', code);
