import React from 'react';
import './landing.css';
import Header from '../Header/Header';
import StockDisplay from '../Main/StockDisplay';
import StockForm from '../Main/stockForm';


const FormScreen = () => {
    return (
        <div className="landing-screen">
            <Header />
            <StockForm />
        </div>
    );
}

export default FormScreen;
