const fs = require('fs');
let code = fs.readFileSync('src/pages/SBCs/CheapestPlayers.tsx', 'utf-8');
code = code.replace(/name: '[^']+'/g, "name: 'Player Name'");
code = code.replace(/price: \d+/g, "price: 0");
fs.writeFileSync('src/pages/SBCs/CheapestPlayers.tsx', code);

code = fs.readFileSync('src/pages/Players/Players.tsx', 'utf-8');
code = code.replace(/name: '[^']+'/g, "name: 'Player Name'");
code = code.replace(/club: '[^']+'/g, "club: 'Club Name'");
code = code.replace(/nation: '[^']+'/g, "nation: 'Nation Name'");
code = code.replace(/league: '[^']+'/g, "league: 'League Name'");
code = code.replace(/price: '[^']+'/g, "price: '--'");
fs.writeFileSync('src/pages/Players/Players.tsx', code);

code = fs.readFileSync('src/pages/Players/Popular.tsx', 'utf-8');
code = code.replace(/name: '[^']+'/g, "name: 'Player Name'");
code = code.replace(/club: '[^']+'/g, "club: 'Club Name'");
code = code.replace(/nation: '[^']+'/g, "nation: 'Nation Name'");
code = code.replace(/league: '[^']+'/g, "league: 'League Name'");
code = code.replace(/price: '[^']+'/g, "price: '--'");
fs.writeFileSync('src/pages/Players/Popular.tsx', code);

code = fs.readFileSync('src/pages/Players/New.tsx', 'utf-8');
code = code.replace(/name: '[^']+'/g, "name: 'Player Name'");
code = code.replace(/club: '[^']+'/g, "club: 'Club Name'");
code = code.replace(/nation: '[^']+'/g, "nation: 'Nation Name'");
code = code.replace(/league: '[^']+'/g, "league: 'League Name'");
code = code.replace(/price: '[^']+'/g, "price: '--'");
fs.writeFileSync('src/pages/Players/New.tsx', code);
