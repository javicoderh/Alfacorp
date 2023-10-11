// Stock.jsx
import React from 'react';
import './main.css';
import buddha from '../../assets/buddha.jpg'
import {Link} from 'react-router-dom'


const Stock = () => {
    return (
        <Link to="/stock">
            <div className="stock">
                <img src={buddha} alt="Stock Image" className="stock-image" />
                <h3 className="stock-title">Stock</h3>        
            </div>
        </Link>
    );
}

export default Stock;
