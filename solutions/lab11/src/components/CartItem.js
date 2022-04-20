import styles from './CartItem.module.css';
import PropTypes from 'prop-types';

function CartItem(props) {
  return (
    <div className={styles.cartItem}>
      {props.title} - {props.price}{' '}
      <button onClick={() => props.removeFromCart(props.id)}>x</button>
    </div>
  );
}

export default CartItem;
