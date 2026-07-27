const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const importPlaceholder = `import PlaceholderPage from './components/PlaceholderPage';\n`;
if (!code.includes('PlaceholderPage')) {
    code = code.replace("import SquadBuilder from './pages/SquadBuilder/SquadBuilder';", "import SquadBuilder from './pages/SquadBuilder/SquadBuilder';\n" + importPlaceholder);
}

const newRoutes = `
                        <Route path="/community-squads" element={<PlaceholderPage title="Community Squads" />} />
                        <Route path="/active-sbcs" element={<PlaceholderPage title="Active SBCs" />} />
                        <Route path="/cheapest-players" element={<PlaceholderPage title="Cheapest Player By Rating" />} />
                        <Route path="/sbc-rating-combinations" element={<PlaceholderPage title="SBC Rating Combinations" />} />
                        <Route path="/best-value-sbcs" element={<PlaceholderPage title="Best Value SBCs" />} />
                        <Route path="/promo-squads" element={<PlaceholderPage title="Promo Squads" />} />
                        <Route path="/index-100" element={<PlaceholderPage title="Index 100" />} />
`;

code = code.replace(
    /<\/Routes>/,
    newRoutes + "\n                    </Routes>"
);

fs.writeFileSync('src/App.tsx', code);
console.log('patched app.tsx');
