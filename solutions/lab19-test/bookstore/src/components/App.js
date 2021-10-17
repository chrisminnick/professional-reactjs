import {useState,useEffect} from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer';
import * as actionCreators from '../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
const defaultHistory = createBrowserHistory();

function App(props) {

  const [isLoading, setIsLoading] = useState(false); 
  const {products,itemsInCart,getProducts,addToCart,removeFromCart,submitCart} = props;

  useEffect(() => {
    function fetchData() {
      const host = process.env.REACT_APP_CONTENT_HOST;
        try {
            setIsLoading(true);
            getProducts(host);
            setIsLoading(false);

        } catch (e) {
            console.error(e);
        }
    };
    fetchData();
  }, [setIsLoading,getProducts]);






  return (
    <Router history={this.props.history || defaultHistory}>
    <div className="container">
      <Header />
      {(isLoading)?"Loading":""}
      <Main products = {products}
            itemsInCart = {itemsInCart} 
            addToCart = {addToCart}
            removeFromCart = {removeFromCart}
            submitCart = {submitCart}
            />
      <Footer />
    </div>
    </Router>
  );
  }

const mapStateToProps = (state, props) => {
  return {
      itemsInCart: state.cart.items,
      products: state.products.products

  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
