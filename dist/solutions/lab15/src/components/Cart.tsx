import CartItem from './CartItem.jsx';
import { CartProps } from '../../types/cart.ts';

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
    </div>
  );
}

export default Cart;
