// LandingScreen.jsx
import React from 'react';
import './landing.css';
import Header from '../Header/Header';
import Stock from '../Main/Stock';

const LandingScreen = () => {
    return (
        <div className="landing-screen">
            <Header />
            <Stock />
        </div>
    );
}

export default LandingScreen;
