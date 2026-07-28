const fs = require('fs');
let code = fs.readFileSync('src/data/mockPlayers.ts', 'utf-8');
code = code.replace(/fullName: '[^']+'/g, "fullName: 'Player Name'");
code = code.replace(/image: '[^']+'/g, "image: 'https://cdn.futbin.com/content/fifa24/img/players/p54050041.png'");
code = code.replace(/price: '[^']+'/g, "price: '--'"); // Though price is already removed from some places
code = code.replace(/prices: \{[^\}]+\}/g, "prices: { ps: '--', xbox: '--', pc: '--' }"); // Not sure if this exists
fs.writeFileSync('src/data/mockPlayers.ts', code);
