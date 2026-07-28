const fs = require('fs');

let code = fs.readFileSync('src/pages/Players/Popular.tsx', 'utf-8');

code = code.replace(
    /<span className="text-blue-500">🎮<\/span>/g,
    '<span className="w-3.5 h-3.5 bg-[#ffb800] text-black text-[9px] font-extrabold rounded-full inline-flex items-center justify-center">C</span>'
);

code = code.replace(/<span>⚗️<\/span>/g, '');

fs.writeFileSync('src/pages/Players/Popular.tsx', code);
