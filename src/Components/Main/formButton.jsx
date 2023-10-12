// Stock.jsx
import React from 'react';
import './main.css';
import buddha from '../../assets/buddha.jpg'
import {Link} from 'react-router-dom'


const StockFormButton = () => {
    return (
        <Link to="/stockForm">
            <div className="stockFormButton">
                <img src={buddha} alt="Stock Image" className="stock-image" />
                <h3 className="stockForm-title">formulario <br></br> de ingreso</h3>        
            </div>
        </Link>
    );
}

export default StockFormButton;
