import CartItem from './CartItem';
import styles from './CartItem.module.css';
// import PropTypes from 'prop-types';
import Book from './Book';

interface Props { 
  cartItems: Book[] | []; 
  removeFromCart: (id: string) => void; 
}

function Cart(props: Props) {
  function calculateTotal(items : Book[] | []) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += Number(items[i].price);
    }
    return total;
  }

  return (
    <div className={styles.cart}>
      <h2>Cart</h2>
      {props.cartItems.length&&props.cartItems.map((item) => (
        <CartItem
          key={item&&item.id}
          product = {item&&item}
          removeFromCart={props.removeFromCart}
        />
      ))}
      Total: ${props.cartItems?calculateTotal(props.cartItems):"0"} USD
    </div>
  );
}

// Cart.propTypes = {
//   cartItems: PropTypes.array.isRequired,
// };

// Cart.defaultProps = {
//   cartItems: [],
// };

export default Cart;
