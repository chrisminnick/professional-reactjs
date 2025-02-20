import { Book } from '../types/book.js';
interface Action {
  type: string;
  payload?: any;
  products?: Book[];
}

export function cart(
  state = { items: [] as Book[] },
  action: Action = { type: '' }
) {
  switch (action.type) {
    case 'CART_ADD':
      return {
        ...state,
        items: [...state.items, action.payload],
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
export function products(
  state = { products: [] },
  action: Action = { type: '' }
) {
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
