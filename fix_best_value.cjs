const fs = require('fs');

let code = fs.readFileSync('src/pages/SBCs/BestValueSBCs.tsx', 'utf-8');

// replace mockSBCs
code = code.replace(/image1: '111', image2: '222'/g, "setImg: 'https://placehold.co/40x50/2c3e50/white?text=Set', challengeImg: 'https://placehold.co/40x50/0f172a/white?text=Chall', rewardImg: 'https://placehold.co/40x50/332200/white?text=Pack'");

// replace the empty divs with images
code = code.replace(/<div className="w-8 h-8 bg-blue-900 border border-blue-500 rounded overflow-hidden"><\/div>/g, '<img src={sbc.setImg} alt={sbc.set} className="w-10 h-12 object-contain" />');
code = code.replace(/<div className="w-8 h-8 rounded-full bg-cyan-900 border border-cyan-500 overflow-hidden flex items-center justify-center text-xs">⚽<\/div>/g, '<img src={sbc.challengeImg} alt={sbc.challenge} className="w-10 h-12 object-contain" />');
code = code.replace(/<div className="w-10 h-12 bg-yellow-900 border border-yellow-600 rounded"><\/div>/g, '<img src={sbc.rewardImg} alt={sbc.reward} className="w-10 h-12 object-contain" />');
code = code.replace(/<div className="w-24 h-8 bg-\[\#3b82f6\] mx-auto opacity-50 rounded"><\/div>/g, '<img src="https://placehold.co/100x40/1e1e1e/3b82f6?text=Graph" alt="Graph" className="w-24 h-8 object-contain opacity-50" />');

fs.writeFileSync('src/pages/SBCs/BestValueSBCs.tsx', code);
