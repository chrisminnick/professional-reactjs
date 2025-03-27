import Header from './Header.tsx';
import ProductList from './ProductList.tsx';
import Cart from './Cart.jsx';
import Footer from './Footer.jsx';
import './App.css';
import Book from './Book';
import useProducts from '../hooks/useProducts.tsx';
import useCart from '../hooks/useCart.tsx';

function App() {
  const [products, isLoading]: [Book[] | [], boolean] = useProducts();
  const [itemsInCart, addToCart, removeFromCart]: [
    Book[],
    (product: Book) => void,
    (idToRemove: string) => void
  ] = useCart();

  if (isLoading) {
    return <p>Loading....</p>;
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
