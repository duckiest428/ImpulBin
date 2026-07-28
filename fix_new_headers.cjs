const fs = require('fs');
let code = fs.readFileSync('src/pages/Players/New.tsx', 'utf-8');

code = code.replace(/<th className="p-4">Name<\/th>/g, '<th className="p-4">NAME</th>');
code = code.replace(/<th className="p-4 text-center">Rating<\/th>/g, '<th className="p-4 text-center">RATING</th>');
code = code.replace(/<th className="p-4 text-center">Position<\/th>/g, '<th className="p-4 text-center">POSITION</th>');
code = code.replace(/<th className="p-4 text-center">Price<\/th>/g, '<th className="p-4 text-center">PRICE</th>');
code = code.replace(/<th className="p-4 text-center text-green-500">Range<\/th>/g, '<th className="p-4 text-center text-green-500">RANGE</th>');
code = code.replace(/<th className="p-4 text-center">Added On<\/th>/g, '<th className="p-4 text-center">ADDED ON</th>');
code = code.replace(/<th className="p-4 text-center">Range<\/th>/g, '<th className="p-4 text-center">RANGE</th>');

fs.writeFileSync('src/pages/Players/New.tsx', code);
