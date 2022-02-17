import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import './App.css';
import useFetch from '../hooks/useFetch';

function App() {
  const [itemsInCart, setItemsInCart] = useState<Array<string>>([]);
  const { products, isLoading } = useFetch('/data/products.json');

  useEffect(() => {
    shuffleArray(products);
  }, [products]);

  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  function addToCart(id: string) {
    let newItems = [...itemsInCart, id];
    setItemsInCart(newItems);
  }

  function removeFromCart(idToRemove: string) {
    let newItems = itemsInCart.filter((id) => id !== idToRemove);
    setItemsInCart(newItems);
  }

  return (
    <div className="container">
      <Header />
      {isLoading ? 'Loading' : ''}
      <Main
        products={products}
        itemsInCart={itemsInCart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
