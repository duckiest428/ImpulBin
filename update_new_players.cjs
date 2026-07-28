const fs = require('fs');

let code = fs.readFileSync('src/pages/Players/New.tsx', 'utf-8');

code = code.replace(
    /<span>🛡<\/span>\s*<span>🌍<\/span>/g,
    '<img src="https://flagcdn.com/w40/pt.png" alt="nation" className="w-4 h-3 inline-block object-cover rounded-sm" /> <img src="https://cdn.futbin.com/content/fifa24/img/clubs/241.png" alt="club" className="w-4 h-4 inline-block object-contain" />'
);

fs.writeFileSync('src/pages/Players/New.tsx', code);
