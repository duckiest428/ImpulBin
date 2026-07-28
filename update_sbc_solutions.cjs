const fs = require('fs');

let code = fs.readFileSync('src/pages/SBCs/SBCSolutions.tsx', 'utf-8');

code = code.replace(
    /<div className="w-10 h-12 bg-\[\#2c3e50\] border-2 border-indigo-400 rounded flex items-center justify-center shadow-lg shadow-indigo-500\/20">\s*<span className="text-indigo-300 text-xs">🛡️<\/span>\s*<\/div>/g,
    '<img src="https://placehold.co/40x50/2c3e50/white?text=Set" alt="Set" className="w-10 h-12 object-contain rounded" />'
);

code = code.replace(
    /<div className="w-8 h-10 bg-cyan-900 border border-cyan-500 rounded flex items-center justify-center">\s*<span className="text-cyan-400 text-xs">🏃<\/span>\s*<\/div>/g,
    '<img src="https://placehold.co/40x50/0f172a/white?text=Chall" alt="Challenge" className="w-10 h-12 object-contain rounded" />'
);

fs.writeFileSync('src/pages/SBCs/SBCSolutions.tsx', code);
