import CartItem from './CartItem';
import styles from './CartItem.module.css';

function Cart(props) {
  return (
    <div className={styles.cart} data-testid="cart">
      <h2>Cart</h2>
      {props.cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      Total: $
      {props.cartItems.reduce(
        (prev, cartItem) => prev + parseFloat(cartItem.price),
        0
      )}
      USD
    </div>
  );
}

export default Cart;
