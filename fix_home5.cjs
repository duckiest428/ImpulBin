const fs = require('fs');

let file = fs.readFileSync('src/pages/Home/Home.tsx', 'utf8');

file = file.replace(`activeFilter === filter.id
                                    ? 'border-[#00e575] text-[#00e575] bg-[#00e575]/10 shadow-[0_0_20px_rgba(0,229,117,0.3)] scale-105'
                                    : 'border-[#383838] text-gray-200 bg-[#1a1a1a] hover:border-gray-400 hover:bg-white/10 hover:text-white'`, 
                                    `activeFilter === filter.id
                                    ? 'border-[#00e575] text-white bg-transparent'
                                    : 'border-[#383838] text-gray-200 bg-transparent hover:border-gray-400 hover:text-white'`);

file = file.replace(`<span className="text-sm sm:text-lg">{filter.icon}</span>`, 
                    `<span className={\`text-sm sm:text-lg \${activeFilter === filter.id ? 'text-[#00e575]' : 'text-gray-400'}\`}>{filter.icon}</span>`);

fs.writeFileSync('src/pages/Home/Home.tsx', file);
