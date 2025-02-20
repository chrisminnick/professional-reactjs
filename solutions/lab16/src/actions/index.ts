import { Book } from '../types/book.js';
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
