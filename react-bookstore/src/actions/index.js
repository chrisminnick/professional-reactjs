import axios from 'axios';

export function submitCart(data) {
  return (dispatch) => {
    axios
      .post('http://localhost:8080/checkout', { data })
      .then((response) => {
        console.log(JSON.stringify(response.data));
        dispatch(checkOut(response.data));
      })
      .catch((error) =>
        dispatch({
          type: 'FETCH_FAILED',
          error,
        })
      );
  };
}
export function checkOut(data) {
  return { type: 'CHECKOUT', payload: { data } };
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
