const fs = require('fs');

['src/pages/Market/PriceRanges.tsx', 'src/pages/Market/MarketPlayerList.tsx'].forEach(filePath => {
    if (!fs.existsSync(filePath)) return;
    let code = fs.readFileSync(filePath, 'utf-8');
    code = code.replace(/<span>🛡️<\/span>\s*Version/g, 'Version');
    code = code.replace(/<span>🌍<\/span>\s*Nations/g, 'Nations');
    code = code.replace(/<span>⚽<\/span>\s*Clubs/g, 'Clubs');
    fs.writeFileSync(filePath, code);
});
