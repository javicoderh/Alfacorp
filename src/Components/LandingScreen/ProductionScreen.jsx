// ProductionScreen.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import Production from '../Main/Production';
import {Link} from 'react-router-dom'

const ProductionScreen = () => {
    const productionLine = useSelector(state => state.productionLine); 

    return (
        <div className="landing-screen">
            <Header />
            <Production />
        </div>
    );
}

export default ProductionScreen;
