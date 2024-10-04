export function cart(state = { items: [] }, action = {}) {
  switch (action.type) {
    case 'CART_ADD':
      return {
        ...state,
        items: [...state.items, action.payload.productId],
      };

    case 'CART_REMOVE':
      return {
        ...state,
        items: state.items.filter(
          (item) => item.id !== action.payload.productId
        ),
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
