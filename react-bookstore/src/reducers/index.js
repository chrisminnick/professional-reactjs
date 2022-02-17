export function cart(state = {}, action = {}) {
  switch (action.type) {
    case 'CHECKOUT':
      return {
        ...state,
        items: [],
      };
    case 'CART_ADD':
      return {
        ...state,
        items: [...state.items, action.payload.productId],
      };
    case 'CART_REMOVE':
      return {
        ...state,
        items: state.items.filter((id) => id !== action.payload.productId),
      };
    default:
      return state;
  }
}

export function products(state = {}, action = {}) {
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
}
