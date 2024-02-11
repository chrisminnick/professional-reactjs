export function addToCart(product) {
  return {
    type: 'CART_ADD',
    payload: {
      product,
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
