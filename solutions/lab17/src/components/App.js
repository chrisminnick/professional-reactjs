import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import * as actionCreators from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './App.css';

function App(props) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    products,
    itemsInCart,
    loadProducts,
    addToCart,
    removeFromCart,
    submitCart,
    readCart,
  } = props;

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(
          'http://localhost:3000/data/products.json'
        );
        const json = await response.json();
        shuffleArray(json);
        loadProducts(json);
        readCart();
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [loadProducts, readCart]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  return (
    <div className="container">
      <Header />
      {isLoading ? 'Loading' : ''}
      <Main
        products={products}
        itemsInCart={itemsInCart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        submitCart={submitCart}
      />
      <Footer />
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    itemsInCart: state.cart.items,
    products: state.products.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
