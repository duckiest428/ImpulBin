const opentype = require('opentype.js');
const font = opentype.parse(require('fs').readFileSync('temp.ttf'));
for (let i = 0xE900; i <= 0xE917; i++) {
    const glyph = font.charToGlyph(String.fromCharCode(i));
    console.log(`U+${i.toString(16).toUpperCase()}: ${glyph.name}`);
}
