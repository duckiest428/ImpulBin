const fs = require('fs');

const data = [
    { name: 'Anchor', price: '4.5K', min: '150', max: '5K', boosts: { pac: 2, sho: 0, pas: 0, dri: 0, def: 2, phy: 2 }, pos: 'DEF' },
    { name: 'Architect', price: '200', min: '150', max: '5K', boosts: { pac: 0, sho: 0, pas: 3, dri: 0, def: 0, phy: 3 }, pos: 'MID' },
    { name: 'Artist', price: '200', min: '150', max: '5K', boosts: { pac: 0, sho: 0, pas: 3, dri: 3, def: 0, phy: 0 }, pos: 'ATT' },
    { name: 'Backbone', price: '200', min: '150', max: '5K', boosts: { pac: 0, sho: 0, pas: 2, dri: 0, def: 2, phy: 2 }, pos: 'DEF' },
    { name: 'Basic', price: '650', min: '150', max: '5K', boosts: { pac: 1, sho: 1, pas: 1, dri: 1, def: 1, phy: 1 }, pos: 'DEF, MID, ATT' },
    { name: 'Cat', price: '300', min: '150', max: '5K', boosts: { div: 0, han: 0, kic: 0, ref: 2, spd: 2, pos: 2 }, pos: 'GK', isGk: true },
    { name: 'Catalyst', price: '2.1K', min: '150', max: '5K', boosts: { pac: 3, sho: 0, pas: 3, dri: 0, def: 0, phy: 0 }, pos: 'ATT' },
    { name: 'Deadeye', price: '200', min: '150', max: '5K', boosts: { pac: 0, sho: 3, pas: 3, dri: 0, def: 0, phy: 0 }, pos: 'ATT' },
    { name: 'Engine', price: '1K', min: '150', max: '5K', boosts: { pac: 2, sho: 0, pas: 2, dri: 2, def: 0, phy: 0 }, pos: 'ATT' },
    { name: 'Finisher', price: '200', min: '150', max: '5K', boosts: { pac: 0, sho: 3, pas: 0, dri: 0, def: 0, phy: 3 }, pos: 'ATT' },
    { name: 'GK Basic', price: '4K', min: '150', max: '5K', boosts: { div: 1, han: 1, kic: 1, ref: 1, spd: 1, pos: 1 }, pos: 'GK', isGk: true },
    { name: 'Gladiator', price: '200', min: '150', max: '5K', boosts: { pac: 0, sho: 2, pas: 0, dri: 0, def: 2, phy: 0 }, pos: 'MID' },
    { name: 'Glove', price: '200', min: '150', max: '5K', boosts: { div: 2, han: 2, kic: 0, ref: 0, spd: 0, pos: 2 }, pos: 'GK', isGk: true },
    { name: 'Guardian', price: '200', min: '150', max: '5K', boosts: { pac: 0, sho: 0, pas: 0, dri: 3, def: 3, phy: 0 }, pos: 'DEF' },
    { name: 'Hawk', price: '3.8K', min: '150', max: '5K', boosts: { pac: 2, sho: 2, pas: 0, dri: 0, def: 0, phy: 2 }, pos: 'ATT' },
    { name: 'Hunter', price: '400', min: '150', max: '5K', boosts: { pac: 3, sho: 3, pas: 0, dri: 0, def: 0, phy: 0 }, pos: 'ATT' },
    { name: 'Maestro', price: '200', min: '150', max: '5K', boosts: { pac: 0, sho: 2, pas: 2, dri: 2, def: 0, phy: 0 }, pos: 'MID' },
    { name: 'Marksman', price: '800', min: '150', max: '5K', boosts: { pac: 0, sho: 2, pas: 0, dri: 2, def: 0, phy: 2 }, pos: 'ATT' },
    { name: 'Powerhouse', price: '200', min: '150', max: '5K', boosts: { pac: 0, sho: 0, pas: 3, dri: 0, def: 3, phy: 0 }, pos: 'MID' },
    { name: 'Sentinel', price: '200', min: '150', max: '5K', boosts: { pac: 0, sho: 0, pas: 0, dri: 0, def: 3, phy: 3 }, pos: 'DEF' },
    { name: 'Shadow', price: '500', min: '150', max: '5K', boosts: { pac: 3, sho: 0, pas: 0, dri: 0, def: 3, phy: 0 }, pos: 'DEF' },
    { name: 'Shield', price: '300', min: '150', max: '5K', boosts: { div: 0, han: 0, kic: 2, ref: 2, spd: 2, pos: 0 }, pos: 'GK', isGk: true },
    { name: 'Sniper', price: '200', min: '150', max: '5K', boosts: { pac: 0, sho: 3, pas: 0, dri: 3, def: 0, phy: 0 }, pos: 'ATT' },
    { name: 'Wall', price: '250', min: '150', max: '5K', boosts: { div: 2, han: 2, kic: 2, ref: 0, spd: 0, pos: 0 }, pos: 'GK', isGk: true },
];

let file = fs.readFileSync('src/pages/Market/ConsumablesPrices.tsx', 'utf8');

const importStatement = `import React from 'react';\nimport { ChemStyleIconMap } from '../../utils/chemstyles';\n`;
file = file.replace(`import React from 'react';`, importStatement);

const mockConsumablesString = `const mockConsumables = ${JSON.stringify(data, null, 4)};`;
file = file.replace(/const mockConsumables = \[[\s\S]*?\];/, mockConsumablesString);

// Replace icon with ChemStyleIconMap
file = file.replace(/<span className="text-xl w-6 text-center">\{c\.icon\}<\/span>/, `<span className="chem-icon text-gray-300 text-[24px] w-6 text-center">{ChemStyleIconMap[c.name] || ''}</span>`);

// Use coin image instead of 'F'
const coinImg = `<img src={\`\${import.meta.env.BASE_URL}assets/icons/coins_bin-2.png.webp\`} className="w-3.5 h-3.5 inline ml-1" alt="coins" />`;
file = file.replace(/\{c\.price\} <span className="text-\[#ffb800\] text-\[10px\]">F<\/span>/g, `{c.price} ${coinImg}`);
file = file.replace(/\{c\.min\} <span className="text-\[#ffb800\] text-\[10px\]">F<\/span>/g, `{c.min} ${coinImg}`);
file = file.replace(/\{c\.max\} <span className="text-\[#ffb800\] text-\[10px\]">F<\/span>/g, `{c.max} ${coinImg}`);

fs.writeFileSync('src/pages/Market/ConsumablesPrices.tsx', file);
