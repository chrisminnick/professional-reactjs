import ProductList from './ProductList';
import Cart from './Cart';
import Filter from './Filter';

import PropTypes from 'prop-types';

function Main({
  products = [],
  itemsInCart = [],
  addToCart,
  removeFromCart,
  filterText,
  setFilter,
}) {
  function getProduct(products, item) {
    return products.find((product) => item === product.id);
  }
  let cartItems = itemsInCart.map((id) => getProduct(products, id));

  return (
    <main className="row" data-testid="main">
      <div className="col-md-8">
        <Filter filterText={filterText} setFilter={setFilter} />
        <ProductList
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          products={products}
          itemsInCart={itemsInCart}
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
  products: PropTypes.array.isRequired,
  itemsInCart: PropTypes.array.isRequired,
};

export default Main;
