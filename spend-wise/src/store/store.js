import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice'
import alertSlice from './alertSlice'

const store = configureStore({
    reducer: {
        auth: authSlice,
        alert:alertSlice
    }
});

export default store;