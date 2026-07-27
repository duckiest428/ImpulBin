const fs = require('fs');

let code = fs.readFileSync('src/pages/Market/MarketPlayerList.tsx', 'utf-8');

code = code.replace(/name: '[^']+'/g, "name: 'Player Name'");
code = code.replace(/price: '[^']+'/g, "price: '0'");
code = code.replace(/updated: '[^']+'/g, "updated: '--'");
code = code.replace(/trend: '[^']+'/g, "trend: '--'");
code = code.replace(/avgPrice: '[^']+'/g, "avgPrice: '0'");
code = code.replace(/diffPct: '[^']+'/g, "diffPct: '--'");
code = code.replace(/diffVal: '[^']+'/g, "diffVal: '--'");
code = code.replace(/tax: '[^']+'/g, "tax: '0'");
code = code.replace(/afterTax: '[^']+'/g, "afterTax: '0'");

fs.writeFileSync('src/pages/Market/MarketPlayerList.tsx', code);
