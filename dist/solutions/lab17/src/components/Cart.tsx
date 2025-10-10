import CartItem from './CartItem.jsx';
import { CartProps } from '../types/cart.js';

function Cart(props: CartProps) {
  return (
    <div>
      <h2>Cart</h2>
      {props.itemsInCart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      Total: $
      {props.itemsInCart.reduce(
        (prev, cartItem) => prev + parseFloat(cartItem.price),
        0
      )}{' '}
      USD
      <div>
        <button onClick={() => props.submitCart(props.itemsInCart)}>
          Check Out
        </button>
      </div>
    </div>
  );
}

export default Cart;
