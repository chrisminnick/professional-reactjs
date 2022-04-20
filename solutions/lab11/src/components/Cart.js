import CartItem from './CartItem';
import styles from './CartItem.module.css';

function Cart(props) {
  function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += Number(items[i].price);
    }
    return total;
  }

  return (
    <div className={styles.cart}>
      <h2>Cart</h2>
      {props.cartItems.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          removeFromCart={props.removeFromCart}
        />
      ))}
      Total: ${calculateTotal(props.cartItems)} USD
    </div>
  );
}

export default Cart;
