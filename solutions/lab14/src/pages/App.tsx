import Header from '../components/Header.tsx';
import ProductList from '../components/ProductList.tsx';
import Cart from '../components/Cart.jsx';
import Footer from '../components/Footer.jsx';
import './App.css';
import Book from '../types/Book';
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
