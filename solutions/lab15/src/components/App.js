import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import * as actionCreators from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function App(props) {
  const [isLoading, setIsLoading] = useState(false);
  const { loadProducts } = props;

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const response = await fetch(
          'http://localhost:3000/data/products.json'
        );
        const json = await response.json();
        loadProducts(json);
        shuffleArray(json);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [loadProducts]);

  /* useEffect(() => {
    shuffleArray(products);
  }, [products]);*/

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
        products={props.products}
        itemsInCart={props.itemsInCart}
        addToCart={props.addToCart}
        removeFromCart={props.removeFromCart}
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
