import { useState, useEffect } from 'react';
import Header from './Header.tsx';
import ProductList from './ProductList.tsx';
import Cart from './Cart.jsx';
import Footer from './Footer.jsx';
import './App.css';
import Book from './Book';
import { useBooks } from '../hooks/useBooks.js';

function App() {
  const [itemsInCart, setItemsInCart] = useState<Array<Book>>([]);

  const { books, isLoading, serverError } = useBooks();

  function addToCart(product: Book) {
    let newItems = [...itemsInCart, product];
    setItemsInCart(newItems);
  }
  function removeFromCart(idToRemove: string) {
    let newItems = itemsInCart.filter((item) => item.id !== idToRemove);
    setItemsInCart(newItems);
  }

  if (isLoading) {
    return 'Loading...';
  } else if (serverError) {
    return <p>{serverError}</p>;
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
              products={books}
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
