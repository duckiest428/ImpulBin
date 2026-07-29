const opentype = require('opentype.js');
const font = opentype.parse(require('fs').readFileSync('temp.ttf'));
const unicodes = [0xE901, 0xE904, 0xE908, 0xE909, 0xE90B, 0xE912, 0xE913, 0xE914];

for (let u of unicodes) {
    const glyph = font.charToGlyph(String.fromCharCode(u));
    const path = glyph.getPath(0, 0, 72);
    const pathData = path.toSVG();
    
    // count number of M (moveto) commands, which roughly correlates to number of subpaths
    const mCount = (pathData.match(/M/g) || []).length;
    console.log(`U+${u.toString(16).toUpperCase()} - Points: ${glyph.points ? glyph.points.length : 0} | Subpaths (M): ${mCount} | bbox: ${Math.round(glyph.xMin)}, ${Math.round(glyph.yMin)} to ${Math.round(glyph.xMax)}, ${Math.round(glyph.yMax)}`);
}
