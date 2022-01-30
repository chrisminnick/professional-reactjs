import ProductList from './ProductList';
import Cart from './Cart';
import PropTypes from 'prop-types';

function Main(props) {
  function getProduct(products, item) {
    return products.find((product) => item === product.id);
  }
  let cartItems = props.itemsInCart.map((id) => getProduct(props.products, id));

  return (
    <main className="row">
      <div className="col-md-8">
        <ProductList
          products={props.products}
          itemsInCart={props.itemsInCart}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
        />
      </div>
      <div className="col-md-4">
        <Cart cartItems={cartItems} />
      </div>
    </main>
  );
}

Main.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  inCart: PropTypes.array.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      published: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      lang: PropTypes.string.isRequired,
      pages: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired
  ),
};

Main.defaultProps = {
  products: [],
  inCart: [],
};
export default Main;
