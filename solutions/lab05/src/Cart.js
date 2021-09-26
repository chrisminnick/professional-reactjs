import CartItem from './CartItem';

function Cart(){
    return(
        <div>
            <h2>Cart</h2>
            <CartItem />
            <CartItem />
            <CartItem />
            Total: $x USD
        </div>
    );
}

export default Cart;
