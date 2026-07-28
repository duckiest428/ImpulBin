const fs = require('fs');
let code = fs.readFileSync('src/data/mockPlayers.ts', 'utf-8');

code = code.replace(/pac: \d+/g, "pac: 99");
code = code.replace(/sho: \d+/g, "sho: 99");
code = code.replace(/pas: \d+/g, "pas: 99");
code = code.replace(/dri: \d+/g, "dri: 99");
code = code.replace(/def: \d+/g, "def: 99");
code = code.replace(/phy: \d+/g, "phy: 99");
code = code.replace(/sm: [0-9]+(★)?/g, "sm: '5★'");
code = code.replace(/wf: [0-9]+(★)?!/g, "wf: '5★!'");
code = code.replace(/futbinRating: [0-9\.]+/g, "futbinRating: 99");
code = code.replace(/body: '[^']+'/g, "body: 'POS - H'");
code = code.replace(/added: '[^']+'/g, "added: '2026-07-26'");
code = code.replace(/pop: [0-9\-]+/g, "pop: 999");
code = code.replace(/igs: [0-9]+/g, "igs: 9999");
code = code.replace(/price: '[^']+'/g, "price: '0'");

fs.writeFileSync('src/data/mockPlayers.ts', code);
