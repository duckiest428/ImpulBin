const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// 1. Remove Loaded and icons, keep profile avatar
code = code.replace(
    /<div className="nav-right">[\s\S]*?<div className="profile-avatar"><\/div>\s*<\/div>/,
    `<div className="nav-right">
            <div className="profile-avatar"></div>
        </div>`
);

// 2. Squad builder dropdown
code = code.replace(
    /<li className="has-dropdown">\s*Squad Builder\s*<div className="dropdown-menu">[\s\S]*?<\/div>\s*<\/li>/,
    `<li className="has-dropdown">
                    Squad Builder
                    <div className="dropdown-menu">
                        <Link to="/squad-builder" >Squad Builder</Link>
                        <Link to="/community-squads">Community Squads</Link>
                    </div>
                </li>`
);

// 3. SBCs dropdown
code = code.replace(
    /<li className="has-dropdown">\s*SBCs\s*<div className="dropdown-menu">[\s\S]*?<\/div>\s*<\/li>/,
    `<li className="has-dropdown">
                    SBCs
                    <div className="dropdown-menu">
                        <Link to="/active-sbcs">Active SBCs</Link>
                        <Link to="/cheapest-players">Cheapest Player By Rating</Link>
                        <Link to="/sbc-rating-combinations">SBC Rating Combinations</Link>
                        <Link to="/best-value-sbcs">Best value SBCs</Link>
                    </div>
                </li>`
);

// 4. Mega Menu Squad Builder
code = code.replace(
    /<div className="mega-category">\s*<h3 className="mega-heading">\s*<svg[^>]*>.*?<\/svg>\s*Squad Builder\s*<\/h3>\s*<Link to="\/squad-builder" className="mega-link" >Squad Builder<\/Link>[\s\S]*?<\/div>/,
    `<div className="mega-category">
                            <h3 className="mega-heading">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9h-2V7h-2v5H6v2h2v5h2v-5h2v-2z"/></svg>
                                Squad Builder
                            </h3>
                            <Link to="/squad-builder" className="mega-link" >Squad Builder</Link>
                            <Link to="/community-squads" className="mega-link">Community Squads</Link>
                        </div>`
);

// 5. Mega Menu SBCs
code = code.replace(
    /<div className="mega-category">\s*<h3 className="mega-heading">\s*<svg[^>]*>.*?<\/svg>\s*SBCs\s*<\/h3>[\s\S]*?<\/div>/,
    `<div className="mega-category">
                            <h3 className="mega-heading">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/></svg>
                                SBCs
                            </h3>
                            <Link to="/active-sbcs" className="mega-link">Active SBCs</Link>
                            <Link to="/cheapest-players" className="mega-link">Cheapest Player By Rating</Link>
                            <Link to="/sbc-rating-combinations" className="mega-link">SBC Rating Combinations</Link>
                            <Link to="/best-value-sbcs" className="mega-link">Best value SBCs</Link>
                        </div>`
);

// 6. Squads links
code = code.replace(
    /<Link to="\/"( className="mega-link"|)?>All Promo Squads<\/Link>/g,
    `<Link to="/promo-squads"$1>All Promo Squads</Link>`
);

// 7. Market links
code = code.replace(
    /<Link to="\/"( className="mega-link"|)?>Index 100<\/Link>/g,
    `<Link to="/index-100"$1>Index 100</Link>`
);

fs.writeFileSync('src/components/Navbar.tsx', code);
console.log('patched');
