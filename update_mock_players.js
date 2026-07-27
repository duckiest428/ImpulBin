const fs = require('fs');

let code = fs.readFileSync('src/data/mockPlayers.ts', 'utf-8');

// Replace real player names with "Player Name"
code = code.replace(/name: '[^']+'/g, "name: 'Player Name'");

// Replace ratings with a placeholder like 99
code = code.replace(/rating: \d+/g, "rating: 99");

// Replace positions with a generic one
code = code.replace(/position: '[A-Z]+'/g, "position: 'POS'");

// Replace clubs with "Club Name"
code = code.replace(/club: '[^']+'/g, "club: 'Club Name'");

// Replace nations with "Nation Name"
code = code.replace(/nation: '[^']+'/g, "nation: 'Nation Name'");

// Replace leagues with "League Name"
code = code.replace(/league: '[^']+'/g, "league: 'League Name'");

fs.writeFileSync('src/data/mockPlayers.ts', code);
