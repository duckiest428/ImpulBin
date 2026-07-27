import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Players from './pages/Players/Players';
import Popular from './pages/Players/Popular';
import New from './pages/Players/New';
import SquadBuilder from './pages/SquadBuilder/SquadBuilder';

import CommunitySquads from './pages/Squads/CommunitySquads';
import PromoSquads from './pages/Squads/PromoSquads';

import ActiveSBCs from './pages/SBCs/ActiveSBCs';
import CheapestPlayers from './pages/SBCs/CheapestPlayers';
import SBCSolutions from './pages/SBCs/SBCSolutions';
import RatingCombinations from './pages/SBCs/RatingCombinations';
import BestValueSBCs from './pages/SBCs/BestValueSBCs';

import Index100 from './pages/Market/Index100';
import PriceRanges from './pages/Market/PriceRanges';
import ManagerPrices from './pages/Market/ManagerPrices';
import ConsumablesPrices from './pages/Market/ConsumablesPrices';

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
                        
                        <Route path="/squads/community" element={<CommunitySquads />} />
                        <Route path="/squads/promo" element={<PromoSquads />} />
                        
                        <Route path="/sbcs" element={<ActiveSBCs />} />
                        <Route path="/sbcs/cheapest" element={<CheapestPlayers />} />
                        <Route path="/sbcs/solutions" element={<SBCSolutions />} />
                        <Route path="/sbcs/combinations" element={<RatingCombinations />} />
                        <Route path="/sbcs/best-value" element={<BestValueSBCs />} />
                        
                        <Route path="/market/index100" element={<Index100 />} />
                        <Route path="/market/price-ranges" element={<PriceRanges />} />
                        <Route path="/market/managers" element={<ManagerPrices />} />
                        <Route path="/market/consumables" element={<ConsumablesPrices />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </HashRouter>
    );
}
