// src/redux/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { unityType: 'kg', name: "Harina", stock: 100, imgUrl: 'https://w0.peakpx.com/wallpaper/515/135/HD-wallpaper-mahatma-buddha-animated-mahatma-buddha-buddha-animated-lord-buddha-meditating-thumbnail.jpg' },
    { unityType: 'kg', name: "Manjar", stock: 22, imgUrl: 'https://w0.peakpx.com/wallpaper/515/135/HD-wallpaper-mahatma-buddha-animated-mahatma-buddha-buddha-animated-lord-buddha-meditating-thumbnail.jpg' },
    { unityType: 'packs', name: "Galletas", stock: 15, imgUrl: 'https://w0.peakpx.com/wallpaper/515/135/HD-wallpaper-mahatma-buddha-animated-mahatma-buddha-buddha-animated-lord-buddha-meditating-thumbnail.jpg' },
    { unityType: 'unidades', name: "Alfajores", stock: 5, imgUrl: 'https://w0.peakpx.com/wallpaper/515/135/HD-wallpaper-mahatma-buddha-animated-mahatma-buddha-buddha-animated-lord-buddha-meditating-thumbnail.jpg' }
];

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addElement: (state, action) => {
            const product = state.find(p => p.name === action.payload);
            if (product) {
                product.stock += 1;
            }
        },
        removeElement: (state, action) => {
            const product = state.find(p => p.name === action.payload);
            if (product && product.stock > 0) {
                product.stock -= 1;
            }
        }
    }
});

export const { addElement, removeElement } = productsSlice.actions;

export default productsSlice.reducer;
