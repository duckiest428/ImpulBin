const fs = require('fs');

let code = fs.readFileSync('src/pages/Squads/CommunitySquads.tsx', 'utf-8');
code = code.replace(/user: '[^']+'/g, "user: 'User Name'");
code = code.replace(/date: '[^']+'/g, "date: '--'");
code = code.replace(/name: '[^']+'/g, "name: 'Squad Name'");
code = code.replace(/price: '[^']+'/g, "price: '--'");
code = code.replace(/chemistry: '[^']+'/g, "chemistry: '--/33'");
code = code.replace(/rating: \d+/g, "rating: 99");
code = code.replace(/EA FIFA 17 Squads/g, "FIFA 17 Squads");
fs.writeFileSync('src/pages/Squads/CommunitySquads.tsx', code);

code = fs.readFileSync('src/pages/Market/ConsumablesPrices.tsx', 'utf-8');
code = code.replace(/price: '[^']+'/g, "price: '--'");
code = code.replace(/min: '[^']+'/g, "min: '--'");
code = code.replace(/max: '[^']+'/g, "max: '--'");
fs.writeFileSync('src/pages/Market/ConsumablesPrices.tsx', code);

code = fs.readFileSync('src/pages/Market/Index100.tsx', 'utf-8');
code = code.replace(/price: '[^']+'/g, "price: '--'");
fs.writeFileSync('src/pages/Market/Index100.tsx', code);

code = fs.readFileSync('src/pages/Market/PriceRanges.tsx', 'utf-8');
code = code.replace(/name: '[^']+'/g, "name: 'Player Name'");
code = code.replace(/newMin: '[^']+'/g, "newMin: '--'");
code = code.replace(/newMax: '[^']+'/g, "newMax: '--'");
code = code.replace(/oldMin: '[^']+'/g, "oldMin: '--'");
code = code.replace(/oldMax: '[^']+'/g, "oldMax: '--'");
fs.writeFileSync('src/pages/Market/PriceRanges.tsx', code);

