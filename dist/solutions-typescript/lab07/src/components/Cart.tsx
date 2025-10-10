import CartItem from './CartItem';
import styles from './Cart.module.css';

function Cart() {
  return (
    <div className={styles.cart}>
      <h2>Cart</h2>
      <CartItem />
      <CartItem />
      <CartItem />
      Total: $x USD
    </div>
  );
}

export default Cart;
