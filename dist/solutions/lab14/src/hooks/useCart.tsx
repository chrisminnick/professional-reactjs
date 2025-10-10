import { useState } from 'react';
import Book from '../types/Book';

type UseCartReturn = [
  Book[],
  (product: Book) => void,
  (idToRemove: string) => void
];

function useCart(): UseCartReturn {
  const [itemsInCart, setItemsInCart] = useState<Array<Book> | []>([]);

  function addToCart(product: Book) {
    let newItems = [...itemsInCart, product];
    setItemsInCart(newItems);
  }

  function removeFromCart(idToRemove: string) {
    let newItems = itemsInCart.filter((item) => item.id !== idToRemove);
    setItemsInCart(newItems);
  }

  return [itemsInCart, addToCart, removeFromCart];
}

export default useCart;
