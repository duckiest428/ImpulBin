import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Players from './pages/Players/Players';
import Popular from './pages/Players/Popular';
import New from './pages/Players/New';
import SquadBuilder from './pages/SquadBuilder/SquadBuilder';

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
                    </Routes>
                </main>
                <Footer />
            </div>
        </HashRouter>
    );
}
