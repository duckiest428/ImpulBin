const fs = require('fs');

let file = fs.readFileSync('src/data/mockPlayers.ts', 'utf8');

file = file.replace(/id: 1,/, "id: 1, crossPrice: '280,000', addedOn: '2 hours ago', altPos: ['LM'], priceChange: '+5,000', futbinRating: 98, pop: 3500, igs: 2450, body: 'Lean',");
file = file.replace(/id: 2,/, "id: 2, crossPrice: '1,400,000', addedOn: '1 day ago', altPos: ['RW', 'CF'], priceChange: '-10,000', futbinRating: 99, pop: 4500, igs: 2500, body: 'Unique',");

fs.writeFileSync('src/data/mockPlayers.ts', file);
