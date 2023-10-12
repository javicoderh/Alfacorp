// src/components/stockForm.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addElement, removeElement } from '../Redux/ProductsSlice';
import { Link } from 'react-router-dom'
import './main.css'

const StockForm = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const [stored, setStored] = useState(false);
    const [title, setTitle] = useState(true)

    const [formData, setFormData] = useState(
        products.reduce((acc, product) => {
            acc[product.name] = '';
            return acc;
        }, {})
    );

    const storeMessage = () => {
        setStored(true);
        setTitle(false);
        setTimeout(() => {
          setStored(false);
          setTitle(true);
        }, 4000);
      };

    const handleChange = (e, productName) => {
        if (!isNaN(e.target.value)) { // Ensure only numbers are entered
            setFormData(prevData => ({ ...prevData, [productName]: e.target.value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        for (const productName in formData) {
            const additionalStock = parseInt(formData[productName]);

            // Add stock
            for (let i = 0; i < additionalStock; i++) {
                dispatch(addElement(productName));
            }

            // Reset input value for that product
            setFormData(prevData => ({ ...prevData, [productName]: '' }));
        }
    };

    

    return (
        <form className='stockForm' onSubmit={handleSubmit}>
            {title && <h2>Rellena el formulario para ingresar productos al stock</h2>}
            {stored && <h2 className='Checked'>Elementos almacenados correctamente!</h2>}
            {products.map(product => (
                <div className='formProduct' key={product.name}>
                    <label>{product.name}</label>
                    <input 
                        type="number"
                        value={formData[product.name]}
                        onChange={(e) => handleChange(e, product.name)}
                        min="0"
                        placeholder={product.unityType}
                    />
                </div>
            ))}
            <div className='colNest'>
            <button onClick={storeMessage} className='addToStorage' type="submit">Add to Stock</button>
            <Link to="/">
                <button className='formHome'>Home</button>
            </Link>
            </div>
        </form>
    );
};

export default StockForm;
