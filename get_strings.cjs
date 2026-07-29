const fs = require('fs');
const buffer = fs.readFileSync('temp.ttf');
let str = '';
for (let i = 0; i < buffer.length; i++) {
    const c = buffer[i];
    if (c >= 32 && c <= 126) {
        str += String.fromCharCode(c);
    } else {
        if (str.length >= 4) console.log(str);
        str = '';
    }
}
if (str.length >= 4) console.log(str);
