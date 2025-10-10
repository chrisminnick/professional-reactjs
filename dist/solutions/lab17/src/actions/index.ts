import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { Book } from '../types/book.js';

export const submitCart = createAsyncThunk('CHECKOUT', async (data: Book[]) => {
  const res = await axios.post('http://localhost:8080/checkout', data);
  return res.data;
});

export function addToCart(product: Book) {
  return {
    type: 'CART_ADD',
    payload: {
      ...product,
    },
  };
}

export function removeFromCart(productId: string) {
  return {
    type: 'CART_REMOVE',
    payload: {
      productId,
    },
  };
}

export function loadProducts(products: Book[]) {
  return { type: 'LOAD_PRODUCTS', products };
}
