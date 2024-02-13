import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import * as actionCreators from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './Header.tsx';
import ProductList from './ProductList.tsx';
import Cart from './Cart.jsx';
import Footer from './Footer.jsx';
import './App.css';
import Book from './Book';

function App(props: any) {
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(
          'http://localhost:5173/data/products.json'
        );
        const json = await response.json();
        const shuffledArray = shuffleArray(json);
        props.loadProducts(shuffledArray);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
    props.readCartFromLocalStorage();
  }, []);

  function shuffleArray(array: Book[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  if (isLoading) {
    return 'Loading...';
  } else {
    return (
      <div className="container">
        <Header itemsInCart={props.itemsInCart} />
        <div className="row">
          <div className="col-md-12">
            <Routes>
              <Route
                path="/"
                element={
                  <ProductList
                    addToCart={props.addToCart}
                    removeFromCart={props.removeFromCart}
                    itemsInCart={props.itemsInCart}
                    products={props.products}
                  />
                }
              />
              <Route
                path="/cart"
                element={
                  <Cart
                    itemsInCart={props.itemsInCart}
                    submitCart={props.submitCart}
                  />
                }
              />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state: any, props: any) => {
  return {
    itemsInCart: state.cart.items,
    products: state.products.products,
  };
};

const mapDispatchToProps = (dispatch: any, props: any) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
