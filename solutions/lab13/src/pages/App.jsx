import Header from '../components/Header.jsx';
import ProductList from '../components/ProductList.jsx';
import Cart from '../components/Cart.jsx';
import Footer from '../components/Footer.jsx';
import { useTheme } from '../hooks/useTheme';

import './App.css';
import useBooks from '../hooks/useBooks.js';
import useCart from '../hooks/useCart.jsx';

function App() {
  const { theme } = useTheme();

  const [products, isLoading, serverError] = useBooks();
  const [itemsInCart, addToCart, removeFromCart] = useCart();

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className={`container-fluid ${theme}`}>
        <Header />
        <div className="row">
          <div className="col-md-8">
            {serverError ? (
              <>
                <p>
                  There was an error loading the products, please try again.
                </p>
                <p>
                  <code>
                    {serverError.name}: {serverError.message}
                  </code>
                </p>
              </>
            ) : (
              <ProductList
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                itemsInCart={itemsInCart}
                products={products}
              />
            )}
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
