import styles from './Cart.module.css';
import CartItem from './CartItem';
import { Book } from '../types';
import { useParams } from 'react-router-dom';

function Cart(props: {
  cartItems: Book[];
  removeFromCart: (id: string) => void;
}) {
  const params = useParams();

  function calculateTotal() {
    const total = props.cartItems.reduce((total, item): number => {
      return total + Number(item.price);
    }, 0);
    return total;
  }

  return (
    <div className={styles.cartStyle}>
      <h2>Cart #: {params.id}</h2>
      {props.cartItems.map((item) => (
        <div>
          <CartItem key={item.id} title={item.title} price={item.price} />
          &nbsp;
          <button onClick={() => props.removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      Total: ${calculateTotal()}
    </div>
  );
}

export default Cart;
