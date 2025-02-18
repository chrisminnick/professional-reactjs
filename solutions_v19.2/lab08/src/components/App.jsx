import { useState } from 'react';
import Header from './Header.jsx';
import ProductList from './ProductList.jsx';
import Cart from './Cart.jsx';
import Footer from './Footer.jsx';
import './App.css';
import productsData from '../data/products.json';

function App() {
  const [itemsInCart, setItemsInCart] = useState([
    {
      id: '1',
      title: 'Things Fall Apart',
      price: '5',
    },
  ]);

  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-md-8">
          <ProductList itemsInCart={itemsInCart} products={productsData} />
        </div>
        <div className="col-md-4">
          <Cart itemsInCart={itemsInCart} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
