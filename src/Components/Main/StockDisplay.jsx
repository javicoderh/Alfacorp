// StockScreen.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addElement, removeElement } from '../Redux/ProductsSlice'; // Adjust the path to your actual location

const StockDisplay = () => {
    const products = useSelector(state => state.products); // Grabbing products from Redux store
    const dispatch = useDispatch();

    const getBoxShadow = (stock) => {
        if (stock <= 5) return '0 5px 0px 5px red';
        if (stock > 5 && stock <= 20) return '0 5px 0px 5px yellow';
        return '0 5px 0px 5px lightgreen';
    };

    return (
        <div className="stock-screen">
            <h2>Stock Overview</h2>
            <ul className="stock-list">
                {products.map((product, index) => (
                    <li key={index} style={{ boxShadow: getBoxShadow(product.stock) }}>
                        <img src={product.imgUrl} height={100} alt={product.name} />
                        <span className="product-name">{product.name}</span>
                        <span className="product-stock">{product.stock} {product.unityType} in stock</span>
                        <div className='add-remove'>
                            <button onClick={() => dispatch(addElement(product.name))}>+</button>
                            <button onClick={() => dispatch(removeElement(product.name))}>-</button>
                        </div>
                    </li>
                ))}
            </ul>
            <Link to="/">
                <button className='home'>Home</button>
            </Link>
        </div>
    );
}

export default StockDisplay;
