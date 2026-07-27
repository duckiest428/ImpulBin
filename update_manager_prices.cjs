const fs = require('fs');

const newMock = `const mockManagers = [
    { country: 'Portugal', flag: '🇵🇹', bronze: '--', silver: '--', gold: '--' },
    { country: 'Spain', flag: '🇪🇸', bronze: '--', silver: '--', gold: '--' },
    { country: 'Albania', flag: '🇦🇱', bronze: '--', silver: '--', gold: '--' },
    { country: 'Algeria', flag: '🇩🇿', bronze: '--', silver: '--', gold: '--' },
    { country: 'Australia', flag: '🇦🇺', bronze: '--', silver: '--', gold: '--' },
    { country: 'Austria', flag: '🇦🇹', bronze: '--', silver: '--', gold: '--' },
    { country: 'Azerbaijan', flag: '🇦🇿', bronze: '--', silver: '--', gold: '--' },
    { country: 'Bolivia', flag: '🇧🇴', bronze: '--', silver: '--', gold: '--' },
    { country: 'Bosnia and Herzegovina', flag: '🇧🇦', bronze: '--', silver: '--', gold: '--' },
    { country: 'Bulgaria', flag: '🇧🇬', bronze: '--', silver: '--', gold: '--' },
    { country: 'Burkina Faso', flag: '🇧🇫', bronze: '--', silver: '--', gold: '--' },
    { country: 'Cameroon', flag: '🇨🇲', bronze: '--', silver: '--', gold: '--' },
    { country: 'Canada', flag: '🇨🇦', bronze: '--', silver: '--', gold: '--' },
    { country: 'Cape Verde Islands', flag: '🇨🇻', bronze: '--', silver: '--', gold: '--' },
    { country: 'Chile', flag: '🇨🇱', bronze: '--', silver: '--', gold: '--' },
    { country: 'China PR', flag: '🇨🇳', bronze: '--', silver: '--', gold: '--' },
    { country: 'Colombia', flag: '🇨🇴', bronze: '--', silver: '--', gold: '--' },
    { country: 'Congo DR', flag: '🇨🇩', bronze: '--', silver: '--', gold: '--' },
    { country: 'Costa Rica', flag: '🇨🇷', bronze: '--', silver: '--', gold: '--' },
    { country: 'Croatia', flag: '🇭🇷', bronze: '--', silver: '--', gold: '--' },
    { country: 'Cyprus', flag: '🇨🇾', bronze: '--', silver: '--', gold: '--' },
    { country: 'Czechia', flag: '🇨🇿', bronze: '--', silver: '--', gold: '--' },
    { country: 'Côte d\\'Ivoire', flag: '🇨🇮', bronze: '--', silver: '--', gold: '--' },
    { country: 'Denmark', flag: '🇩🇰', bronze: '--', silver: '--', gold: '--' },
    { country: 'Ecuador', flag: '🇪🇨', bronze: '--', silver: '--', gold: '--' },
    { country: 'Egypt', flag: '🇪🇬', bronze: '--', silver: '--', gold: '--' }
];`;

let code = fs.readFileSync('src/pages/Market/ManagerPrices.tsx', 'utf-8');
code = code.replace(/const mockManagers = \[\s*[\s\S]*?\s*\];/, newMock);
fs.writeFileSync('src/pages/Market/ManagerPrices.tsx', code);
