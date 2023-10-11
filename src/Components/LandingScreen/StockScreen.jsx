import React from 'react';
import './landing.css';
import Header from '../Header/Header';
import StockDisplay from '../Main/StockDisplay';


const StockScreen = () => {
    return (
        <div className="landing-screen">
            <Header />
            <StockDisplay />
        </div>
    );
}

export default StockScreen;
