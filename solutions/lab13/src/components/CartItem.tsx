import styles from './CartItem.module.css';
// import PropTypes from 'prop-types';
import Book from './Book';

interface Props {
  key: string|undefined;
  product: Book;
  removeFromCart: (id : string) => void;
}

function CartItem(props : Props) {
  return (
    <div className={styles.cartItem}>
      {props.product&&props.product.title} - {props.product&&props.product.price}{' '}
      <button onClick={() => props.product&&props.removeFromCart(props.product.id)}>x</button>
    </div>
  );
}

// CartItem.propTypes = {
//   title: PropTypes.string.isRequired,
//   price: PropTypes.string.isRequired,
// };
// CartItem.defaultProps = {
//   title: '',
//   price: '',
// };

export default CartItem;
