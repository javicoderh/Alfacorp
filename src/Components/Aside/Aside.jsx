// Aside.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import './aside.css'

const Aside = () => {
    const products = useSelector(state => state.products);

    return (
        <aside>
            <h3>low stock products:</h3>
            <ul>
                {products.map(product => {
                    let textColor;
                    if (product.stock <= 5) textColor = 'red';
                    else if (product.stock > 5 && product.stock <= 20) textColor = 'yellow';
                    else return null;  // Skip products with stock over 20

                    return (
                        <li key={product.name} style={{ color: textColor }}>
                            {product.name}: {product.stock} {product.unityType}
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}

export default Aside;
