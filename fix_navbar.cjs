const fs = require('fs');

let file = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

const targetObjectives = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-7c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3z"/></svg>`;
file = file.replace(targetObjectives, `<img src={\`\${import.meta.env.BASE_URL}assets/icons/main-objectives.svg\`} className="w-[18px] h-[18px]" alt="Objectives" />`);

const targetQuickLinks = `                {/* Sidebar (Quick Links) */}
                <div className="mega-sidebar">
                    <h3 className="mega-sidebar-heading">Quick Links</h3>
                    
                    <Link to="/" className="mega-sidebar-link">
                        <span><span className="mega-sidebar-icon">📰</span> News</span>
                    </Link>
                    <Link to="/" className="mega-sidebar-link">
                        <span><span className="mega-sidebar-icon">🏷️</span> Shop</span>
                    </Link>

                    <h3 className="mega-sidebar-heading">Tools & Games</h3>
                    <Link to="/" className="mega-sidebar-link">
                        <span><span className="mega-sidebar-icon">👤</span> Guess The Player</span>
                    </Link>
                    <Link to="/" className="mega-sidebar-link">
                        <span><span className="mega-sidebar-icon">🛠️</span> FUT Card Creator</span>
                    </Link>
                    <Link to="/" className="mega-sidebar-link">
                        <span><span className="mega-sidebar-icon">⚖️</span> Higher or Lower</span>
                    </Link>
                    <Link to="/" className="mega-sidebar-link">
                        <span><span className="mega-sidebar-icon">📋</span> Tier List Builder</span>
                    </Link>
                </div>`;

const newQuickLinks = `                {/* Sidebar */}
                <div className="mega-sidebar">
                    <h3 className="mega-sidebar-heading">Tools & Games</h3>
                    <Link to="/" className="mega-sidebar-link">
                        <span className="flex items-center gap-2"><img src={\`\${import.meta.env.BASE_URL}assets/icons/main-guess-the-player.svg\`} className="w-5 h-5 opacity-70" alt="Guess The Player" /> Guess The Player</span>
                    </Link>
                    <Link to="/" className="mega-sidebar-link">
                        <span className="flex items-center gap-2"><img src={\`\${import.meta.env.BASE_URL}assets/icons/main-card-creator.svg\`} className="w-5 h-5 opacity-70" alt="FUT Card Creator" /> FUT Card Creator</span>
                    </Link>
                    <Link to="/" className="mega-sidebar-link">
                        <span className="flex items-center gap-2"><img src={\`\${import.meta.env.BASE_URL}assets/icons/main-higher-lower.svg\`} className="w-5 h-5 opacity-70" alt="Higher or Lower" /> Higher or Lower</span>
                    </Link>
                    <Link to="/" className="mega-sidebar-link">
                        <span className="flex items-center gap-2"><img src={\`\${import.meta.env.BASE_URL}assets/icons/main-tier-list.svg\`} className="w-5 h-5 opacity-70" alt="Tier List Builder" /> Tier List Builder</span>
                    </Link>
                </div>`;

file = file.replace(targetQuickLinks, newQuickLinks);

fs.writeFileSync('src/components/Navbar.tsx', file);
