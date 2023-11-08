import styles from './Cart.module.css';
import CartItem from './CartItem';

function Cart() {
  return (
    <div className={styles.cartStyle}>
      <h2>Cart</h2>
      <CartItem />
      <CartItem />
      <CartItem />
      Total: $x USD
    </div>
  );
}

export default Cart;
