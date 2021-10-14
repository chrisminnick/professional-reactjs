
export function addToCart(productId) {
    return {
        type: 'CART_ADD',
        payload: {
            productId
        }
    }
}

export function removeFromCart(productId) {
    return {
        type: 'CART_REMOVE',
        payload: {
            productId
        }
    }
}
export function getProducts(){
    return {type: 'GET_PRODUCTS'}
}

export function loadProducts(products) {
    return {type: 'LOAD_PRODUCTS', products}
}
export function readCart() {
    return {type: 'READ_CART'}
}
export function submitCart(data){
    return {type: 'SUBMIT_CART', payload: {data}}
}