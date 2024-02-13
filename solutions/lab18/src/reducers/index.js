export function cart(state = { items: [] }, action = {}) {
  switch (action.type) {
    case 'CART_ADD':
      return {
        ...state,
        items: [...state.items, action.payload.product],
      };

    case 'CART_REMOVE':
      return {
        ...state,
        items: action.payload || [],
      };
    case 'CHECKOUT/fulfilled':
      return {
        ...state,
        items: [],
      };
    case 'READ_CART_FROM_LOCAL_STORAGE':
      return {
        ...state,
        items: action.payload || [],
      };

    default:
      return state; //no relevant action type
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
      return state; //no relevant action type
  }
}
