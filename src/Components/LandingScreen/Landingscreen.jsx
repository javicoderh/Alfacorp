// LandingScreen.jsx
import React from 'react';
import './landing.css';
import Header from '../Header/Header';
import Stock from '../Main/Stock';
import Aside from '../Aside/Aside';
import StockFormButton from '../Main/formButton';
import ProductionButton from '../Main/productionButton';

const LandingScreen = () => {
    return (
        <div className="landing-screen">
            <Header />
            <Stock />
            <StockFormButton /> 
            <ProductionButton />          
            <Aside />           
        </div>
    );
}

export default LandingScreen;
