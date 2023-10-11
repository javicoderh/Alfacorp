// LandingScreen.jsx
import React from 'react';
import './landing.css';
import Header from '../Header/Header';
import Stock from '../Main/Stock';
import Aside from '../Aside/Aside';

const LandingScreen = () => {
    return (
        <div className="landing-screen">
            <Header />
            <Stock />
            <Aside />
        </div>
    );
}

export default LandingScreen;
