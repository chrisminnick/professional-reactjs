export function cart(state = { items: [] }, action = {}) {
  switch (action.type) {
    case 'READ_CART':
      let cart = localStorage.getItem('cart');
      cart = JSON.parse(cart);
      return {
        ...state,
        items: cart || [],
      };
    case 'CART_ADD':
      const newCart = [...state.items, action.payload.productId];
      localStorage.setItem('cart', JSON.stringify(newCart));
      console.log(newCart);
      return {
        ...state,
        items: newCart,
      };
    case 'CART_REMOVE':
      const newCart2 = state.items.filter(
        (id) => id !== action.payload.productId
      );
      localStorage.setItem('cart', JSON.stringify(newCart2));

      return {
        ...state,
        items: newCart2,
      };
    case 'CHECKOUT/fulfilled':
      return {
        ...state,
        items: [],
      };
    case 'CHECKOUT/rejected':
      return state;

    default:
      return state;
  }
}
export function products(state = { products: [] }, action = {}) {
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      return {
        ...state,
        products: action.products,
      };
    default:
      console.log(state);
      return state; //no relevant action type
  }
}
