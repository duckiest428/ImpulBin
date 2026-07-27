import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isAccountOpen, setIsAccountOpen] = useState(false);

    return (
        <>
            <nav className="navbar">
        <div className="nav-left">
            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "✕" : "☰"}</button>
            <Link to="/" className="nav-icon-logo" style={{'cursor': 'pointer', 'textDecoration': 'none'}}>IB</Link>
        </div>
        
        <div className="nav-center">
            <div className="nav-search-compact">
                <span style={{'color': '#888'}}>🔍</span>
                <input type="text" placeholder="Search for Player..." />
                <select>
                    <option>FIFA 17</option>
                </select>
            </div>
            
            <ul className="nav-links">
                <li className="has-dropdown">
                    Players
                    <div className="dropdown-menu">
                        <Link to="/players" >Players</Link>
                        <Link to="/players/popular" >Popular Players</Link>
                        <Link to="/players/new" >New Players</Link>
                    </div>
                </li>
                <li className="has-dropdown">
                    Squad Builder
                    <div className="dropdown-menu">
                        <Link to="/squad-builder" >Squad Builder</Link>
                        <Link to="/community-squads">Community Squads</Link>
                    </div>
                </li>
                <li className="has-dropdown">
                    SBCs
                    <div className="dropdown-menu">
                        <Link to="/active-sbcs">Active SBCs</Link>
                        <Link to="/cheapest-players">Cheapest Player By Rating</Link>
                        <Link to="/sbc-rating-combinations">SBC Rating Combinations</Link>
                        <Link to="/best-value-sbcs">Best value SBCs</Link>
                    </div>
                </li>
                <li className="has-dropdown">
                    Squads
                    <div className="dropdown-menu">
                        <Link to="/promo-squads">All Promo Squads</Link>
                        <Link to="/">Futties Icon and Heroes 1</Link>
                        <Link to="/">Futties Team 1</Link>
                        <Link to="/">Summer Stars Winners</Link>
                        <Link to="/">Summer Stars</Link>
                    </div>
                </li>
                <li className="has-dropdown">
                    Market
                    <div className="dropdown-menu">
                        <Link to="/">Market Player List</Link>
                        <Link to="/">Price Range Updates</Link>
                        <Link to="/">Manager Prices</Link>
                        <Link to="/">Consumable Prices</Link>
                        <Link to="/index-100">Index 100</Link>
                        <Link to="/">Index 81-86</Link>
                    </div>
                </li>
                <li className="has-dropdown">
                    Evolutions
                    <div className="dropdown-menu">
                        <Link to="/">Evolutions</Link>
                        <Link to="/">Evolution Builder</Link>
                        <Link to="/">My Evolutions</Link>
                        <Link to="/">Saved Evolutions</Link>
                    </div>
                </li>
                <li className="has-dropdown">
                    Community
                    <div className="dropdown-menu">
                        <Link to="/">Forums</Link>
                        <Link to="/">User rankings</Link>
                        <Link to="/">Clubs</Link>
                        <Link to="/">Leagues</Link>
                        <Link to="/">Nations</Link>
                    </div>
                </li>
            </ul>
        </div>

        <div className="nav-right">
            
            
            <div className="account-dropdown-container" style={{position: 'relative'}}>
                <div className="profile-avatar" onClick={() => setIsAccountOpen(!isAccountOpen)} style={{cursor: 'pointer'}}></div>
                {isAccountOpen && (
                    <div className="dropdown-menu" style={{display: 'block', right: 0, left: 'auto', padding: '15px', minWidth: '200px', marginTop: '10px'}}>
                        <h4 style={{marginBottom: '10px', color: 'white', fontWeight: 'bold'}}>Account Login</h4>
                        <input type="text" placeholder="Username" style={{width: '100%', marginBottom: '10px', padding: '8px', background: '#222', border: '1px solid #444', color: 'white', borderRadius: '4px', outline: 'none'}} />
                        <input type="password" placeholder="Password" style={{width: '100%', marginBottom: '10px', padding: '8px', background: '#222', border: '1px solid #444', color: 'white', borderRadius: '4px', outline: 'none'}} />
                        <button style={{width: '100%', padding: '8px', background: '#10b981', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold'}} onClick={() => setIsAccountOpen(false)}>Login</button>
                    </div>
                )}
            </div>


        </div>
    </nav>

    {/* MEGA MENU OVERLAY */}
    <div className={`mega-menu-overlay ${isOpen ? "open" : ""}`} id="megaMenu">
        <div className="mega-container">
            <div className="mega-content">
                <div className="mega-main">
                    {/* Column 1 */}
                    <div className="mega-col">
                        <div className="mega-category">
                            <h3 className="mega-heading">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg> 
                                Players
                            </h3>
                            <Link to="/players" className="mega-link" >Players</Link>
                            <Link to="/players/popular" className="mega-link" >Popular Players</Link>
                            <Link to="/players/new" className="mega-link" >New Players</Link>
                        </div>
                        <div className="mega-category">
                            <h3 className="mega-heading">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                                Squads
                            </h3>
                            <Link to="/promo-squads" className="mega-link">All Promo Squads</Link>
                            <Link to="/" className="mega-link">Futties Icon and Heroes 1</Link>
                            <Link to="/" className="mega-link">Futties Team 1</Link>
                            <Link to="/" className="mega-link">Summer Stars Winners</Link>
                            <Link to="/" className="mega-link">Summer Stars</Link>
                        </div>
                    </div>
                    
                    {/* Column 2 */}
                    <div className="mega-col">
                        <div className="mega-category">
                            <h3 className="mega-heading">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9h-2V7h-2v5H6v2h2v5h2v-5h2v-2z"/></svg>
                                Squad Builder
                            </h3>
                            <Link to="/squad-builder" className="mega-link" >Squad Builder</Link>
                            <Link to="/community-squads" className="mega-link">Community Squads</Link>
                        </div>
                        <div className="mega-category">
                            <h3 className="mega-heading">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/></svg>
                                SBCs
                            </h3>
                            <Link to="/active-sbcs" className="mega-link">Active SBCs</Link>
                            <Link to="/cheapest-players" className="mega-link">Cheapest Player By Rating</Link>
                            <Link to="/sbc-rating-combinations" className="mega-link">SBC Rating Combinations</Link>
                            <Link to="/best-value-sbcs" className="mega-link">Best value SBCs</Link>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="mega-col">
                        <div className="mega-category">
                            <h3 className="mega-heading">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/></svg>
                                Evolutions
                            </h3>
                            <Link to="/" className="mega-link">Evolutions</Link>
                            <Link to="/" className="mega-link">Evolution Builder</Link>
                            <Link to="/" className="mega-link">My Evolutions</Link>
                            <Link to="/" className="mega-link">Saved Evolutions</Link>
                        </div>
                        <div className="mega-category">
                            <h3 className="mega-heading">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/></svg>
                                Market
                            </h3>
                            <Link to="/" className="mega-link">Market Player List</Link>
                            <Link to="/" className="mega-link">Price Range Updates</Link>
                            <Link to="/" className="mega-link">Manager Prices</Link>
                            <Link to="/" className="mega-link">Consumable Prices</Link>
                            <Link to="/index-100" className="mega-link">Index 100</Link>
                            <Link to="/" className="mega-link">Index 81-86</Link>
                        </div>
                    </div>

                    {/* Column 4 */}
                    <div className="mega-col">
                        <div className="mega-category">
                            <h3 className="mega-heading">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>
                                Community
                            </h3>
                            <Link to="/" className="mega-link">Forums</Link>
                            <Link to="/" className="mega-link">User rankings</Link>
                            <Link to="/" className="mega-link">Clubs</Link>
                            <Link to="/" className="mega-link">Leagues</Link>
                            <Link to="/" className="mega-link">Nations</Link>
                        </div>
                        <div className="mega-category">
                            <h3 className="mega-heading">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-7c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3z"/></svg>
                                Objectives
                            </h3>
                            <Link to="/" className="mega-link">All Objectives</Link>
                            <Link to="/" className="mega-link">FIFA Season</Link>
                        </div>
                    </div>
                </div>

                {/* Sidebar (Quick Links) */}
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
                </div>
            </div>

        </div>
    </div>

    {/* HERO */}
    
    
        </>
    );
}
