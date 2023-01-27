export function cart(state = { items: [] }, action = {}) {
  switch (action.type) {
    case 'CART_ADD':
      const newState = {
        ...state,
        items: [...state.items, action.payload.productId],
      };
      console.log(newState);
      return newState;
    case 'CART_REMOVE':
      return {
        ...state,
        items: state.items.filter((id) => id !== action.payload.productId),
      };
    case 'READ_CART':
      let cart = localStorage.getItem('cart');
      cart = JSON.parse(cart);
      return {
        ...state,
        items: cart || [],
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
