// MainRouter.jsx
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingScreen from '../LandingScreen/Landingscreen';
import StockScreen from '../LandingScreen/StockScreen';
import FormScreen from '../LandingScreen/formScreen';
import ProductionScreen from '../LandingScreen/ProductionScreen';
//import StockScreen from '../path-to-your-StockScreen-component';

const MainRouter = () => {
    return (
        <HashRouter>
            <Routes>        
                <Route path="/" element={<LandingScreen />} />
                <Route path="/stock" element={<StockScreen />} />
                <Route path="/stockForm" element={<FormScreen />}></Route>
                <Route path="/productionLine" element={<ProductionScreen />} />
            </Routes>
        </HashRouter>
    );
}

export default MainRouter;
