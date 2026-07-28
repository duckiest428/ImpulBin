const fs = require('fs');
let code = fs.readFileSync('src/pages/SBCs/CheapestPlayers.tsx', 'utf-8');

code = code.replace(/name: 'Player Name', pos: '([^']+)', price: 0/g, "name: 'Player Name', pos: '$1', price: 0, image: 'https://cdn.futbin.com/content/fifa24/img/players/p54050041.png'");

code = code.replace(/<img src=\{`https:\/\/placehold.co\/32x32\/111\/444`\} alt="player" className="w-full h-full object-cover" \/>/g, '<img src={player.image} alt="player" className="w-full h-full object-cover" />');

fs.writeFileSync('src/pages/SBCs/CheapestPlayers.tsx', code);
