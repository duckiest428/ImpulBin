const fs = require('fs');
let file = fs.readFileSync('src/pages/Home/Home.tsx', 'utf8');

const targetStr = `<img src={player.image} alt={player.name} className="w-full h-auto drop-shadow-lg" />`;
const replaceStr = `<div className="transform origin-top scale-[0.6] sm:scale-[0.7] md:scale-[0.85] h-[230px] sm:h-[260px] md:h-[300px]">
                                            <FIFA17PlayerCard 
                                                name={player.name}
                                                rating={player.rating}
                                                position="ST"
                                            />
                                        </div>`;

file = file.replace(targetStr, replaceStr);
fs.writeFileSync('src/pages/Home/Home.tsx', file);
