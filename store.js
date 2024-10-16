import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './src/slieces/cartSlice';
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default store;
