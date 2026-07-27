const fs = require('fs');

let code = fs.readFileSync('src/data/mockPlayers.ts', 'utf-8');

code = code.replace(/name: '[^']+'/g, "name: 'Player Name'");
code = code.replace(/rating: \d+/g, "rating: 99");
code = code.replace(/position: '[A-Z0-9]+'/g, "position: 'POS'");
code = code.replace(/club: '[^']+'/g, "club: 'Club Name'");
code = code.replace(/nation: '[^']+'/g, "nation: 'Nation Name'");
code = code.replace(/league: '[^']+'/g, "league: 'League Name'");
code = code.replace(/crossPrice: '[^']+'/g, "crossPrice: '0'");

fs.writeFileSync('src/data/mockPlayers.ts', code);
