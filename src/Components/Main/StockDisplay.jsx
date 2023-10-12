import { addInsumoItem } from '../Redux/productionLineSlice';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addElement, removeAndAddToProduction } from '../Redux/ProductsSlice'; // Import actions from ProductsSlice

const StockDisplay = () => {
    const products = useSelector(state => state.products); 
    const dispatch = useDispatch();

    const getBoxShadow = (stock) => {
        if (stock <= 5) return '0 0 0 5px red';
        if (stock > 5 && stock <= 20) return '0 0 0 5px yellow';
        return '0 0 0 5px lightgreen';
    };

    return (
        <div className="stock-screen">
            <h2>Stock Overview</h2>
            <ul className="stock-list">
                {products.map((product, index) => (
                    <li key={index} style={{ boxShadow: getBoxShadow(product.stock) }}>
                        <img className='productImg' src={product.imgUrl} height={100} alt={product.name} />
                        <span className="product-name">{product.name}</span>
                        <span className="product-stock">{product.stock} {product.unityType} in stock</span>
                        <div className='add-remove'>
                            <button onClick={() => dispatch(addElement(product.name))}>+</button>
                            <button onClick={() => {
                                dispatch(removeAndAddToProduction(product.name)); 
                                dispatch(addInsumoItem(product.name)); // Dispatch action to add the product to insumos
                            }}>-</button> 
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
