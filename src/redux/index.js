import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/Reducer.js';
import gamesReducer from './games/Reducer.js';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        game: gamesReducer,
    }
})