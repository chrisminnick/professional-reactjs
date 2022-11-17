import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { fetchProducts } from '../api/products';

import './App.css';

function App() {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetchProducts();
        const json = await response.json();
        setProducts(json);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [setProducts]);

  /* useEffect(() => {
    shuffleArray(products);
  }, [products]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  } */

  function addToCart(id) {
    let newItems = [...itemsInCart, id];
    setItemsInCart(newItems);
  }

  function removeFromCart(idToRemove) {
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
      <Footer />
    </div>
  );
}

export default App;
