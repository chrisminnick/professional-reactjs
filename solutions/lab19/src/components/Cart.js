import CartItem from './CartItem';
import styles from './CartItem.module.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Cart(props) {
  let { cartNumber } = useParams();

  function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += Number(items[i].price);
    }
    return total;
  }

  return (
    <div className={styles.cart}>
      <h2>Cart {cartNumber ? `#${cartNumber}` : ''}</h2>
      {props.cartItems.map((item) => (
        <CartItem
          key={item.id}
          removeFromCart={props.removeFromCart}
          {...item}
        />
      ))}
      Total: ${calculateTotal(props.cartItems)} USD
      <div>
        <button
          onClick={() => {
            props.submitCart(props.cartItems);
          }}
        >
          Check Out
        </button>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

Cart.defaultProps = {
  cartItems: [],
};

export default Cart;
