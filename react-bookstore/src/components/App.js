import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import useFetch from '../hooks/useFetch';
import * as actionCreators from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function App(props) {
  const [filterText, setFilterText] = useState('');
  const [filteredProductList, setFilteredProductList] = useState([]);
  const { data, isLoading } = useFetch('/data/products.json');
  const { loadProducts, products } = props;

  useEffect(() => {
    loadProducts(data);
    setFilteredProductList(data);
  }, [loadProducts, data]);

  useEffect(() => {
    filterProducts(filterText);
    function filterProducts(filterText) {
      let filteredProducts = products.filter((product) =>
        product.title.includes(filterText)
      );
      setFilteredProductList(filteredProducts);
    }
  }, [filterText, products]);

  useEffect(() => {
    shuffleArray(data);
  }, [data]);

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
        products={filteredProductList}
        itemsInCart={props.itemsInCart}
        addToCart={props.addToCart}
        removeFromCart={props.removeFromCart}
        setFilter={setFilterText}
        filterText={filterText}
        submitCart={props.submitCart}
      />
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    itemsInCart: state.cart.items,
    products: state.products.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
