
import * as ActionTypes from './ActionTypes';

export function addToCart(productId) {
    return {
        type: ActionTypes.CART_ADD,
        payload: {
            productId
        }
    }
}

export function removeFromCart(productId) {
    return {
        type: ActionTypes.CART_REMOVE,
        payload: {
            productId
        }
    }
}

export function readCart() {
    return {type: ActionTypes.READ_CART}
}
export function submitCart(data){
    return {type: ActionTypes.SUBMIT_CART, payload: {data}}
}