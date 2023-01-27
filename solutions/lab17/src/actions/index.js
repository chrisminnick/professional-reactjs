import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export function readCart() {
  return { type: 'READ_CART' };
}
export function addToCart(productId) {
  return {
    type: 'CART_ADD',
    payload: {
      productId,
    },
  };
}

export function removeFromCart(productId) {
  return {
    type: 'CART_REMOVE',
    payload: {
      productId,
    },
  };
}

export function loadProducts(products) {
  return { type: 'LOAD_PRODUCTS', products };
}

export const submitCart = createAsyncThunk('CHECKOUT', async (data) => {
  const res = await axios.post('http://localhost:8080/checkout', data);
  return res.data;
});

export function checkOut(data) {
  return { type: 'CHECKOUT', payload: { data } };
}
