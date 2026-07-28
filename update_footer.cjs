const fs = require('fs');
let code = fs.readFileSync('src/components/Footer.tsx', 'utf-8');
code = code.replace(/Placeholder Inc\./g, 'Electronic Arts Inc.');
fs.writeFileSync('src/components/Footer.tsx', code);
