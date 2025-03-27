import { useState, useEffect } from 'react';
import Header from '../components/Header.tsx';
import ProductList from '../components/ProductList.tsx';
import Cart from '../components/Cart.tsx';
import Footer from '../components/Footer.tsx';
import './App.css';
import useBooks from '../hooks/useBooks.ts';
import { Book } from '../../types/book.ts';
import { useTheme } from '../contexts/ThemeContext.jsx';
function App() {
  const { theme, toggleTheme } = useTheme();

  const [itemsInCart, setItemsInCart] = useState<Array<Book>>([]);

  const [products, isLoading, serverError] = useBooks();

  function addToCart(product: Book) {
    let newItems = [...itemsInCart, product];
    setItemsInCart(newItems);
  }
  function removeFromCart(idToRemove: string) {
    let newItems = itemsInCart.filter((item) => item.id !== idToRemove);
    setItemsInCart(newItems);
  }

  if (serverError) {
    return <p>There has been an error.</p>;
  } else if (isLoading) {
    return <p>Loading....</p>;
  } else {
    return (
      <div className={`${theme} + " container"`}>
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
