// Stock.jsx
import React from 'react';
import './main.css';
import buddha from '../../assets/buddha.jpg'
import {Link} from 'react-router-dom'


const ProductionButton = () => {
    return (
        <Link to="/productionLine">
            <div className="productionButton">
                <img src={buddha} alt="Stock Image" className="stock-image" />
                <h3 className="stockForm-title">Linea de <br></br> producción</h3>        
            </div>
        </Link>
    );
}

export default ProductionButton;
