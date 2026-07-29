const opentype = require('opentype.js');
const fs = require('fs');

// WOFF2 is not natively supported by opentype.js, so let's check if it throws
try {
    const buffer = fs.readFileSync('public/assets/fonts/chemistry-style-icons.woff2');
    const font = opentype.parse(buffer);
    for (let i = 0xE900; i <= 0xE917; i++) {
        const glyph = font.charToGlyph(String.fromCharCode(i));
        console.log(`U+${i.toString(16)}: ${glyph.name}`);
    }
} catch (e) {
    console.log("Error parsing woff2:", e.message);
}
