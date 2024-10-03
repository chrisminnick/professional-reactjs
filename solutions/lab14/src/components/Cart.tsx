import React from 'react';
import CartItem from './CartItem.jsx';
import Book from './Book';

function Cart(props: { itemsInCart: Book[] }) {
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
    </div>
  );
}

export default Cart;
