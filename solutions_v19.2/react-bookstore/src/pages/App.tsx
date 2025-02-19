import { useState, useEffect } from 'react';
import Header from '../components/Header.js';
import ProductList from '../components/ProductList.js';
import Cart from '../components/Cart.js';
import Footer from '../components/Footer.js';
import './App.css';
import useBooks from '../hooks/useBooks.js';
import * as actionCreators from '../actions/index.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AppProps } from '../types/app.js';
function App(props: AppProps) {
  const [products, isLoading, serverError] = useBooks();

  if (serverError) {
    return <p>There has been an error.</p>;
  } else if (isLoading) {
    return <p>Loading....</p>;
  } else {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-8">
            <ProductList
              addToCart={props.addToCart}
              removeFromCart={props.removeFromCart}
              itemsInCart={props.itemsInCart}
              products={products}
            />
          </div>
          <div className="col-md-4">
            <Cart itemsInCart={props.itemsInCart} />
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
