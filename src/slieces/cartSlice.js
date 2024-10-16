import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [
    { id: 1, title: 'phone 1', rate: 4.5, unitPrice: 40, quantity: 1, totalPrice: 40, image: '../../public/CategriesPhotos/smart phone.png' },
    { id: 2, title: 'phone 2', rate: 3.5, unitPrice: 80, quantity: 1, totalPrice: 80, image: '../../public/CategriesPhotos/smart phone.png' },
  ],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((product) => product.id !== action.payload);
    },
    increaseNumItem(state, action) {
      let item = state.cart.find((item) => item.id === action.payload);

      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseNumItem(state, action) {
      let item = state.cart.find((item) => item.id === action.payload);

      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;

      if (item.quantity === 0) cartSlice.caseReducers.DeleteItemCart(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;
export const { addItem, clearCart, increaseNumItem, decreaseNumItem, deleteItem } = cartSlice.actions;

export const getCartItems = (store) => store.cart.cart;

export const getNumPizzas = (store) => store.cart.cart.reduce((per, cur) => per + cur.quantity, 0);

export const getTotalPrice = (store) => store.cart.cart.reduce((per, cur) => per + cur.totalPrice, 0);

export const getCurrentQuantityItem = (id) => (store) => store.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
