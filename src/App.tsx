import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Players from './pages/Players/Players';
import Popular from './pages/Players/Popular';
import New from './pages/Players/New';
import SquadBuilder from './pages/SquadBuilder/SquadBuilder';
import PlaceholderPage from './components/PlaceholderPage';


export default function App() {
    return (
        <HashRouter>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/players" element={<Players />} />
                        <Route path="/players/popular" element={<Popular />} />
                        <Route path="/players/new" element={<New />} />
                        <Route path="/squad-builder" element={<SquadBuilder />} />
                    
                        <Route path="/community-squads" element={<PlaceholderPage title="Community Squads" />} />
                        <Route path="/active-sbcs" element={<PlaceholderPage title="Active SBCs" />} />
                        <Route path="/cheapest-players" element={<PlaceholderPage title="Cheapest Player By Rating" />} />
                        <Route path="/sbc-rating-combinations" element={<PlaceholderPage title="SBC Rating Combinations" />} />
                        <Route path="/best-value-sbcs" element={<PlaceholderPage title="Best Value SBCs" />} />
                        <Route path="/promo-squads" element={<PlaceholderPage title="Promo Squads" />} />
                        <Route path="/index-100" element={<PlaceholderPage title="Index 100" />} />

                    </Routes>
                </main>
                <Footer />
            </div>
        </HashRouter>
    );
}
