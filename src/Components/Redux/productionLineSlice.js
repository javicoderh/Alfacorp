// src/redux/productionLineSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    insumos: {},
    producción: {
        cuchufli: { cantidad: 0 }
    }
};

const productionLineSlice = createSlice({
    name: 'productionLine',
    initialState,
    reducers: {
        addInsumoItem: (state, action) => {
            if (state.insumos[action.payload]) {
                state.insumos[action.payload].cantidad += 1;
            } else {
                state.insumos[action.payload] = { cantidad: 1 };
            }
        },
        addProductionItem: (state, action) => {
            if (state.producción[action.payload]) {
                state.producción[action.payload].cantidad += 1;
            } else {
                state.producción[action.payload] = { cantidad: 1 };
            }
        },
        removeProductionItem: (state, action) => {
            if (state.producción[action.payload] && state.producción[action.payload].cantidad > 0) {
                state.producción[action.payload].cantidad -= 1;
            }
        }
    }
});

export const { addInsumoItem, addProductionItem, removeProductionItem } = productionLineSlice.actions;

export default productionLineSlice.reducer;
