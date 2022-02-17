import CartItem from './CartItem';
import PropTypes from 'prop-types';

function Cart({ cartItems = [] }) {
  function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += Number(items[i].price);
    }
    return total;
  }
  return (
    <div data-testid="cart">
      <p>Cart</p>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      Total: ${calculateTotal(cartItems)} USD
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
};
export default Cart;
