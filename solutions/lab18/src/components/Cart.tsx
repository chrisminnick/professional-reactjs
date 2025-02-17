import CartItem from './CartItem.js';
import Book from './Book.js';

function Cart(props: {
  itemsInCart: Book[];
  submitCart: (itemsInCart: Book[]) => void;
}) {
  return (
    <div>
      <h2>Cart</h2>
      {props.itemsInCart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      Total: $
      {props.itemsInCart.reduce(
        (prev, cartItem) => prev + parseFloat(cartItem.price),
        0
      )}{' '}
      USD
      <div>
        <button onClick={() => props.submitCart(props.itemsInCart)}>
          Check Out
        </button>
      </div>
    </div>
  );
}

export default Cart;
