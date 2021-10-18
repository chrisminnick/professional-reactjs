export function cart(state = {}, action = {}) {
    let newCart;
	switch(action.type) {
		case 'CART_ADD':
            newCart = [...state.items, action.payload.productId];
            localStorage.setItem("cart", JSON.stringify(newCart));
            return {
                ...state,
                items: newCart
            };   
		case 'CART_REMOVE':
            newCart = state.items.filter(id => id !== action.payload.productId);
            localStorage.setItem("cart", JSON.stringify(newCart));
			return {
                ...state,
                items: newCart
            };
        case 'READ_CART':
            let cart = localStorage.getItem("cart");
            cart = JSON.parse(cart);
            return {
                ...state,
                items: cart || []             
            }
        case 'CHECKOUT_SUCCEEDED':
            return {
                ...state,
                items: []
            };
		default:
			return state; //no relevant action type
	}
}