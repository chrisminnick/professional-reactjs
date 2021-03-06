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
    getProducts,
    addToCart,
    readCart,
    removeFromCart,
    submitCart,
  } = props;

  useEffect(() => {
    try {
      setIsLoading(true);
      getProducts();
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  }, [setIsLoading, getProducts]);

  useEffect(() => {
    readCart();
  }, [products]);

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
