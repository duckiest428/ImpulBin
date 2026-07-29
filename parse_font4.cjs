const opentype = require('opentype.js');
const font = opentype.parse(require('fs').readFileSync('temp.ttf'));
for (const [key, value] of Object.entries(font.glyphs.glyphs)) {
    if (value.unicode) {
        console.log(`Unicode: ${value.unicode.toString(16)} Name: ${value.name}`);
    }
}
