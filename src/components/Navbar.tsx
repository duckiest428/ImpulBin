import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [isOpen]);

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
                        <Link to="/squads/community">Community Squads</Link>
                    </div>
                </li>
                <li className="has-dropdown">
                    SBCs
                    <div className="dropdown-menu">
                        <Link to="/sbcs">Active SBCs</Link>
                        <Link to="/sbcs/cheapest">Cheapest Players By Rating</Link>
                        <Link to="/sbcs/solutions">SBC Solutions</Link>
                        <Link to="/sbcs/combinations">Rating Combinations</Link>
                        <Link to="/sbcs/best-value">Best Value SBCs</Link>
                    </div>
                </li>
                <li className="has-dropdown">
                    Squads
                    <div className="dropdown-menu">
                        <Link to="/squads/promo">All Promo Squads</Link>
                    </div>
                </li>
                <li className="has-dropdown">
                    <Link to="/market/index100" className="text-inherit no-underline">Market</Link>
                    <div className="dropdown-menu">
                        <Link to="/market/players">Market Player List</Link>
                        <Link to="/market/price-ranges">Price Range Updates</Link>
                        <Link to="/market/managers">Manager Prices</Link>
                        <Link to="/market/consumables">Consumable Prices</Link>
                        <Link to="/">Index 81-86</Link>
                        <Link to="/market/index100">Index 100</Link>
                    </div>
                </li>
            </ul>
        </div>

        <div className="nav-right">
            <div className="profile-avatar"></div>
        </div>
    </nav>

    {/* MEGA MENU OVERLAY */}
    <div className={`mega-menu-overlay ${isOpen ? "open" : ""}`} id="megaMenu" onClick={(e) => {
        if ((e.target as HTMLElement).closest('a')) {
            setIsOpen(false);
        }
    }}>
        <div className="mega-container">
            <div className="mega-content">
                <div className="mega-main">
                    {/* Column 1 */}
                    <div className="mega-col">
                        <div className="mega-category">
                            <h3 className="mega-heading">
                                <img src={`${import.meta.env.BASE_URL}assets/icons/main-players.svg`} className="w-[18px] h-[18px]" alt="Players" />
                                 Players
                            </h3>
                            <Link to="/players" className="mega-link" >Players</Link>
                            <Link to="/players/popular" className="mega-link" >Popular Players</Link>
                            <Link to="/players/new" className="mega-link" >New Players</Link>
                        </div>
                        <div className="mega-category">
                            <h3 className="mega-heading">
                                <img src={`${import.meta.env.BASE_URL}assets/icons/main-squads.svg`} className="w-[18px] h-[18px]" alt="Squads" />
                                Squads
                            </h3>
                            <Link to="/squads/promo" className="mega-link">All Promo Squads</Link>
                        </div>
                    </div>
                    
                    {/* Column 2 */}
                    <div className="mega-col">
                        <div className="mega-category">
                            <h3 className="mega-heading">
                                <img src={`${import.meta.env.BASE_URL}assets/icons/main-squad-builder.svg`} className="w-[18px] h-[18px]" alt="Squad Builder" />
                                Squad Builder
                            </h3>
                            <Link to="/squad-builder" className="mega-link" >Squad Builder</Link>
                            <Link to="/squads/community" className="mega-link">Community Squads</Link>
                        </div>
                        <div className="mega-category">
                            <h3 className="mega-heading">
                                <img src={`${import.meta.env.BASE_URL}assets/icons/main-sbcs.svg`} className="w-[18px] h-[18px]" alt="SBCs" />
                                SBCs
                            </h3>
                            <Link to="/sbcs" className="mega-link">Active SBCs</Link>
                            <Link to="/sbcs/cheapest" className="mega-link">Cheapest Players By Rating</Link>
                            <Link to="/sbcs/solutions" className="mega-link">SBC Solutions</Link>
                            <Link to="/sbcs/combinations" className="mega-link">Rating Combinations</Link>
                            <Link to="/sbcs/best-value" className="mega-link">Best Value SBCs</Link>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="mega-col">
                        <div className="mega-category">
                            <h3 className="mega-heading">
                                <Link to="/market/index100" className="flex items-center gap-2 text-inherit no-underline">
                                    <img src={`${import.meta.env.BASE_URL}assets/icons/main-market.svg`} className="w-[18px] h-[18px]" alt="Market" />
                                    Market
                                </Link>
                            </h3>
                            <Link to="/market/players" className="mega-link">Market Player List</Link>
                            <Link to="/market/price-ranges" className="mega-link">Price Range Updates</Link>
                            <Link to="/market/managers" className="mega-link">Manager Prices</Link>
                            <Link to="/market/consumables" className="mega-link">Consumable Prices</Link>
                            <Link to="/" className="mega-link">Index 81-86</Link>
                            <Link to="/market/index100" className="mega-link">Index 100</Link>
                        </div>
                    </div>

                    {/* Column 4 */}
                    <div className="mega-col">
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
