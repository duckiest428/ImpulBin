const fs = require('fs');
let code = fs.readFileSync('src/pages/Players/Players.tsx', 'utf-8');

code = code.replace(/<th className="p-4">Name<\/th>/g, '<th className="p-4">NAME</th>');
code = code.replace(/<th className="p-4">Rat<\/th>/g, '<th className="p-4">RATING</th>');
code = code.replace(/<th className="p-4">Pos<\/th>/g, '<th className="p-4">POSITION</th>');
code = code.replace(/<th className="p-4">Price<\/th>/g, '<th className="p-4">PRICE</th>');
code = code.replace(/<th className="p-4">FUTBIN Rating<\/th>/g, '<th className="p-4 text-center">FUTBIN RATING</th>');
code = code.replace(/<th className="p-4">Foot<\/th>/g, '<th className="p-4 text-center">FOOT</th>');
code = code.replace(/<th className="p-4">SM<\/th>/g, '<th className="p-4 text-center">SM</th>');
code = code.replace(/<th className="p-4">WF<\/th>/g, '<th className="p-4 text-center">WF</th>');
code = code.replace(/<th className="p-4">PAC<\/th>/g, '<th className="p-4 text-center text-green-500">PAC</th>');
code = code.replace(/<th className="p-4">SHO<\/th>/g, '<th className="p-4 text-center text-red-500">SHO</th>');
code = code.replace(/<th className="p-4">PAS<\/th>/g, '<th className="p-4 text-center text-green-500">PAS</th>');
code = code.replace(/<th className="p-4">DRI<\/th>/g, '<th className="p-4 text-center text-green-500">DRI</th>');
code = code.replace(/<th className="p-4">DEF<\/th>/g, '<th className="p-4 text-center text-red-500">DEF</th>');
code = code.replace(/<th className="p-4">PHY<\/th>/g, '<th className="p-4 text-center text-green-500">PHY</th>');
code = code.replace(/<th className="p-4">POP<\/th>/g, '<th className="p-4 text-center">POP</th>');
code = code.replace(/<th className="p-4">IGS<\/th>/g, '<th className="p-4 text-center">IGS</th>');
code = code.replace(/<th className="p-4">Body<\/th>/g, '<th className="p-4">BODY</th>');

fs.writeFileSync('src/pages/Players/Players.tsx', code);
