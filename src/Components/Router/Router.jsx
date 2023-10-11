// MainRouter.jsx
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingScreen from '../LandingScreen/Landingscreen';
import StockScreen from '../LandingScreen/StockScreen';
//import StockScreen from '../path-to-your-StockScreen-component';

const MainRouter = () => {
    return (
        <HashRouter>
            <Routes>        
                <Route path="/" element={<LandingScreen />} />
                <Route path="/stock" element={<StockScreen />} />
            </Routes>
        </HashRouter>
    );
}

export default MainRouter;
