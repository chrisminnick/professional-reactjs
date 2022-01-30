import styles from './CartItem.module.css';
import PropTypes from 'prop-types';

function CartItem(props) {
  return (
    <div className={styles.cartItem}>
      {props.title} - {props.price}
    </div>
  );
}

export default CartItem;
