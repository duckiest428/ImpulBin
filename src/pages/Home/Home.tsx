import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home-container">
            <header className="hero">
                <h1 className="brand-logo">IMPULBIN</h1>
                <div className="main-search-wrapper">
                    <span style={{ color: '#aaa', fontSize: '20px' }}>🔍</span>
                    <input type="text" placeholder="Search for Impulsum Player..." />
                    <select>
                        <option>FIFA 17</option>
                    </select>
                </div>
            </header>
            
            <section className="pills-container">
                <button className="pill active">🔥 Popular</button>
            </section>
            
            <main className="main-content">
                <h2 className="section-title">EA FIFA 17 Popular Players</h2>
                <div className="cards-grid">
                    {/* Placeholder cards */}
                    <div className="placeholder-card">+</div>
                    <div className="placeholder-card">+</div>
                    <div className="placeholder-card">+</div>
                </div>
                <div className="footer-link">All Popular Players</div>
            </main>
        </div>
    );
}
