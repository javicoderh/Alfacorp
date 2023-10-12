// redux/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './ProductsSlice';
import productionLineReducer from './productionLineSlice';

const rootReducer = combineReducers({
    products: productsReducer,
    productionLine: productionLineReducer
});

export default rootReducer;
