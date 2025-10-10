import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import './App.css';
import useBooks from '../hooks/useBooks';
import * as actionCreators from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AppProps } from '../types/app';
import { Routes, Route } from 'react-router-dom';

function App(props: AppProps) {
  const [products, isLoading, serverError] = useBooks();

  if (serverError) {
    return <p>There has been an error.</p>;
  } else if (isLoading) {
    return <p>Loading....</p>;
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
                    products={products}
                    itemsInCart={props.itemsInCart}
                    addToCart={props.addToCart}
                    removeFromCart={props.removeFromCart}
                  />
                }
              />
              <Route
                path="/cart"
                element={
                  <Cart
                    itemsInCart={props.itemsInCart}
                    removeFromCart={props.removeFromCart}
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
