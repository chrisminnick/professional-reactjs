import styles from './Cart.module.css';
import CartItem from './CartItem';

function Cart(props: { cartItems: any[] }) {
  return (
    <div className={styles.cartStyle}>
      <h2>Cart</h2>
      {props.cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      Total: $x USD
    </div>
  );
}

export default Cart;
