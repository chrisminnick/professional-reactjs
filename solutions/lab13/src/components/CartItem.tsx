import styles from './CartItem.module.css';
import PropTypes from 'prop-types';

interface Props {
  id: string;
  title: string;
  author: string;
  published?: string;
  country?: string;
  lang?: string;
  pages?: string;
  image?: string;
  url?: string;
  price?: string;
  removeFromCart: (idToRemove: string) => void;
}

function CartItem(props: Props) {
  return (
    <div className={styles.cartItem}>
      {props.title} - {props.price}{' '}
      <button onClick={() => props.removeFromCart(props.id)}>x</button>
    </div>
  );
}

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
CartItem.defaultProps = {
  title: '',
  price: '',
};

export default CartItem;
