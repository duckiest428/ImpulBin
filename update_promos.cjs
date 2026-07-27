const fs = require('fs');

let code = fs.readFileSync('src/pages/Squads/PromoSquads.tsx', 'utf-8');

code = code.replace(/title: '[^']+'/g, "title: 'Promo Team Name'");
code = code.replace(/date: '[^']+'/g, "date: '--'");
code = code.replace(/EA FIFA 17 Promo Squads/g, "FIFA 17 Promo Squads");

fs.writeFileSync('src/pages/Squads/PromoSquads.tsx', code);
