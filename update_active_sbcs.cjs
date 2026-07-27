const fs = require('fs');
let code = fs.readFileSync('src/pages/SBCs/ActiveSBCs.tsx', 'utf-8');
code = code.replace(/title: '[^']+'/g, "title: 'SBC Name'");
code = code.replace(/rewardTitle: '[^']+'/g, "rewardTitle: 'Reward Name'");
code = code.replace(/price: '[^']+'/g, "price: '--'");
code = code.replace(/expires: '[^']+'/g, "expires: '--'");
fs.writeFileSync('src/pages/SBCs/ActiveSBCs.tsx', code);
