import {useState} from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer';
import './App.css';
import productsData from '../data/products';

function App(props) {
  const [itemsInCart,setItemsInCart] = useState(['1','2','3']);

  return (
    <div className="container">
        <Header />
        <Main products = {productsData}
              itemsInCart = {itemsInCart} 
              setItemsInCart = {setItemsInCart} />
        <Footer />
    </div>
  );
}

export default App;
