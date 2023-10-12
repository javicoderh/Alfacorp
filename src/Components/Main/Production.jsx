// ProductionScreen.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProductionItem, removeProductionItem } from '../Redux/productionLineSlice';
import {Link} from 'react-router-dom';

const ProductionScreen = () => {
    const productionLine = useSelector(state => state.productionLine);
    const dispatch = useDispatch();

    return (
        <div className="production-screen">
            <h2 className='productionTitle'>Linea de Producción</h2>
            <div className="insumos-section">
                <h3> Insumos</h3>
                <ul>
                    {Object.entries(productionLine.insumos).map(([key, value]) => (
                        <li className='Insumos' key={key}>{key}: {value.cantidad} items</li>
                    ))}
                </ul>
                <hr />
            </div>
            <div className="products-section">
                <h3>Producción</h3>
                <ul>
                    {Object.entries(productionLine.producción).map(([key, value]) => (
                        <li className='productosListos' key={key}>
                            <span>{key}: </span>
                            <span>{value.cantidad} items</span>
                            <button className='botonProducto' onClick={() => dispatch(addProductionItem(key))}>+</button>
                            <button className='botonProducto' onClick={() => dispatch(removeProductionItem(key))}>-</button>
                        </li>
                    ))}
                </ul>
            </div>
            <Link to="/">
                <button className='home'>Home</button>
            </Link>
        </div>
    );
}

export default ProductionScreen;
