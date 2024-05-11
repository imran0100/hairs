import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import LoginSlice from '../features/login/LoginSlice';
import { productSlice } from '../features/products/productSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login:LoginSlice,
    product: productSlice.reducer,
  },
});
