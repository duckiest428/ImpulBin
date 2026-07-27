const fs = require('fs');

const code = `import React from 'react';
import PlaceholderPage from '../../components/PlaceholderPage';

export default function Players() {
    return <PlaceholderPage title="Players" />;
}
`;

fs.writeFileSync('src/pages/Players/Players.tsx', code);
fs.writeFileSync('src/pages/Players/Popular.tsx', code.replace('Players', 'Popular').replace('title="Players"', 'title="Popular Players"'));
fs.writeFileSync('src/pages/Players/New.tsx', code.replace('Players', 'New').replace('title="Players"', 'title="New Players"'));
console.log('patched players');
