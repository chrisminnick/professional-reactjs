import styles from './Cart.module.css';
import CartItem from './CartItem';
import { Book } from '../types';

function Cart(props: { cartItems: Book[] }) {
  return (
    <div className={styles.cartStyle}>
      <h2>Cart</h2>
      {props.cartItems.map((item) => (
        <CartItem key={item.id} title={item.title} price={item.price} />
      ))}
      Total: $x USD
    </div>
  );
}

export default Cart;
