import { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import ProductList from '../components/ProductList.jsx';
import Cart from '../components/Cart.jsx';
import Footer from '../components/Footer.jsx';
import './App.css';
import useBooks from '../hooks/useBooks';

function App() {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [products, isLoading] = useBooks();

  function addToCart(product) {
    let newItems = [...itemsInCart, product];
    setItemsInCart(newItems);
  }
  function removeFromCart(idToRemove) {
    let newItems = itemsInCart.filter((item) => item.id !== idToRemove);
    setItemsInCart(newItems);
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
