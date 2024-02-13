import { useState, useEffect } from 'react';
import Header from './Header.jsx';
import ProductList from './ProductList.jsx';
import Cart from './Cart.jsx';
import Footer from './Footer.jsx';
import './App.css';

function App() {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(
          'http://localhost:5173/data/products.json'
        );
        const json = await response.json();
        const shuffledArray = shuffleArray(json);
        setProducts(shuffledArray);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  function addToCart(product) {
    let newItems = [...itemsInCart, product];
    setItemsInCart(newItems);
  }
  function removeFromCart(idToRemove) {
    let newItems = itemsInCart.filter((item) => item.id !== idToRemove);
    setItemsInCart(newItems);
  }
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  if (isLoading) {
    return 'Loading...';
  } else {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-8">
            <ProductList
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              itemsInCart={itemsInCart}
              products={products}
            />
          </div>
          <div className="col-md-4">
            <Cart itemsInCart={itemsInCart} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
