import CartItem from './CartItem';
import styles from './CartItem.module.css';
import { Book } from '../types';

interface Props {
  cartItems: (Book | undefined)[];
  removeFromCart: (id: string) => void;
}

function Cart(props: Props) {
  function calculateTotal(items: (Book | undefined)[]): number {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += parseFloat(items[i].price);
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
