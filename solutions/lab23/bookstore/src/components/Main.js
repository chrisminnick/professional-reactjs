import ProductList from './ProductList';
import Cart from './Cart';
import PropTypes from 'prop-types';
import { Switch, Link, Route } from 'react-router-dom';

function Main(props) {
  function getProduct(products, item) {
    return products.find((product) => item === product.id);
  }
  let cartItems = props.itemsInCart.map((id) => getProduct(props.products, id));
  return (
    <main className="row">
      <div className="col-md-12">
        <ProductList
          products={props.products}
          itemsInCart={props.itemsInCart}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
        />

        {/* <Route exact path='/cart'>
                        <Cart cartItems = {cartItems} 
                        removeFromCart = {props.removeFromCart} 
                        submitCart = {props.submitCart} 
                        />
                    </Route> */}
      </div>
    </main>
  );
}

Main.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  itemsInCart: PropTypes.array.isRequired,
};

Main.defaultProps = {
  products: [],
  itemsInCart: [],
};
export default Main;
