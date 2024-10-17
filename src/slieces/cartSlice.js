import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push({ ...action.payload, quantity: 1, totalPrice: action.payload.priceAfterDiscount ?? action.payload.price });
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((product) => product['_id'] !== action.payload);
    },
    increaseNumItem(state, action) {
      let item = state.cart.find((item) => item['_id'] === action.payload);

      item.quantity++;
      item.totalPrice = item.priceAfterDiscount * item.quantity;
    },
    decreaseNumItem(state, action) {
      let item = state.cart.find((item) => item['_id'] === action.payload);

      item.quantity--;
      item.totalPrice = item.priceAfterDiscount * item.quantity;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;
export const { addItem, clearCart, increaseNumItem, decreaseNumItem, deleteItem } = cartSlice.actions;

export const getCartItems = (store) => store.cart.cart;

export const getTotalPrice = (store) => store.cart.cart.reduce((per, cur) => per + cur.totalPrice, 0);

export const getCurrentQuantityItem = (id) => (store) => store.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
