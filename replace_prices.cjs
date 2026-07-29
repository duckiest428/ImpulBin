const fs = require('fs');
let file = fs.readFileSync('src/pages/Market/ConsumablesPrices.tsx', 'utf8');

// Find the mockConsumables array and replace all price, min, max values with '--'
file = file.replace(/"price": "[^"]+"/g, '"price": "--"');
file = file.replace(/"min": "[^"]+"/g, '"min": "--"');
file = file.replace(/"max": "[^"]+"/g, '"max": "--"');

fs.writeFileSync('src/pages/Market/ConsumablesPrices.tsx', file);
