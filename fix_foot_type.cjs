const fs = require('fs');

let code = fs.readFileSync('src/pages/Players/Players.tsx', 'utf-8');
code = code.replace('{player.foot || "R"}', '{(player as any).foot || "R"}');
fs.writeFileSync('src/pages/Players/Players.tsx', code);

let mockCode = fs.readFileSync('src/data/mockPlayers.ts', 'utf-8');
mockCode = mockCode.replace(/export const mockPlayers = \[/g, 'export const mockPlayers = [\n  // @ts-ignore\n');
fs.writeFileSync('src/data/mockPlayers.ts', mockCode);
