import Header from './Header.jsx';
import ProductList from './ProductList.jsx';
import Cart from './Cart.jsx';
import Footer from './Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-md-8">
          <ProductList />
        </div>
        <div className="col-md-4">
          <Cart />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
