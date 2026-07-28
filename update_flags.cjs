const fs = require('fs');

const flags = {
    'Portugal': 'pt',
    'Spain': 'es',
    'Albania': 'al',
    'Algeria': 'dz',
    'Australia': 'au',
    'Austria': 'at',
    'Azerbaijan': 'az',
    'Bolivia': 'bo',
    'Bosnia and Herzegovina': 'ba',
    'Bulgaria': 'bg',
    'Burkina Faso': 'bf',
    'Cameroon': 'cm',
    'Canada': 'ca',
    'Cape Verde Islands': 'cv',
    'Chile': 'cl',
    'China PR': 'cn',
    'Colombia': 'co',
    'Congo DR': 'cd',
    'Costa Rica': 'cr',
    'Croatia': 'hr',
    'Cyprus': 'cy',
    'Czechia': 'cz',
    "Côte d'Ivoire": 'ci',
    'Denmark': 'dk',
    'Ecuador': 'ec',
    'Egypt': 'eg'
};

let code = fs.readFileSync('src/pages/Market/ManagerPrices.tsx', 'utf-8');

for (const [country, codeStr] of Object.entries(flags)) {
    const safeCountry = country.replace(/'/g, "\\'");
    const emojiRegex = new RegExp(`{ country: '${safeCountry}', flag: '[^']+',`, 'g');
    code = code.replace(emojiRegex, `{ country: '${safeCountry}', flag: 'https://flagcdn.com/w40/${codeStr}.png',`);
    const emojiRegex2 = new RegExp(`{ country: "${country}", flag: '[^']+',`, 'g');
    code = code.replace(emojiRegex2, `{ country: "${country}", flag: 'https://flagcdn.com/w40/${codeStr}.png',`);
}

code = code.replace(/<span className="text-xl">\{m\.flag\}<\/span>/g, '<img src={m.flag} alt={m.country} className="w-6 h-auto shadow-sm" />');

fs.writeFileSync('src/pages/Market/ManagerPrices.tsx', code);
