import { useState } from 'react';

function useCart() {
  const [itemsInCart, setItemsInCart] = useState([]);
  function addToCart(product) {
    let newItems = [...itemsInCart, product];
    setItemsInCart(newItems);
  }
  function removeFromCart(idToRemove) {
    let newItems = itemsInCart.filter((item) => item.id !== idToRemove);
    setItemsInCart(newItems);
  }

  return [itemsInCart, addToCart, removeFromCart];
}

export default useCart;
