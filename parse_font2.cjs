const wawoff2 = require('wawoff2');
const opentype = require('opentype.js');
const fs = require('fs');

(async () => {
    try {
        const buffer = fs.readFileSync('public/assets/fonts/chemistry-style-icons.woff2');
        const ttf = await wawoff2.decompress(buffer);
        fs.writeFileSync('temp.ttf', ttf);
        const font = opentype.loadSync('temp.ttf');
        for (let i = 0xE900; i <= 0xE917; i++) {
            const glyph = font.charToGlyph(String.fromCharCode(i));
            console.log(`U+${i.toString(16).toUpperCase()}: ${glyph.name}`);
        }
    } catch (e) {
        console.log("Error:", e);
    }
})();
