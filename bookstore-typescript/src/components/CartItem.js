import styles from './CartItem.module.css';
import PropTypes from 'prop-types';

function CartItem(props) {
  return (
    <div className={styles.cartItem} data-testid="itemInCart">
      {props.title} - {props.price}
    </div>
  );
}

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
export default CartItem;
