import Header from '../components/Header.jsx';
import ProductList from '../components/ProductList.jsx';
import Cart from '../components/Cart.jsx';
import Footer from '../components/Footer.jsx';
import { useTheme } from '../contexts/ThemeContext';

import './App.css';
import useBooks from '../hooks/useBooks.js';
import useCart from '../hooks/useCart.jsx';

function App() {
  const { theme } = useTheme();

  const [products, isLoading] = useBooks();
  const [itemsInCart, addToCart, removeFromCart] = useCart();

  if (isLoading) {
    return 'Loading...';
  } else {
    return (
      <div className={`container-fluid ${theme}`}>
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
