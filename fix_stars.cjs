const fs = require('fs');
let code = fs.readFileSync('src/data/mockPlayers.ts', 'utf-8');

code = code.replace(/sm: '5★'/g, "sm: '5'");
code = code.replace(/wf: '5★!'/g, "wf: '5'");
code = code.replace(/sm: 5/g, "sm: '5'");
code = code.replace(/wf: 5/g, "wf: '5'");

fs.writeFileSync('src/data/mockPlayers.ts', code);
