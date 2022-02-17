import Product from './Product';
import styles from './ProductList.module.css';
import PropTypes from 'prop-types';

function ProductList({
  products = [],
  itemsInCart = [],
  addToCart,
  removeFromCart,
}) {
  return (
    <ul className={styles.productList} data-testid="productlist">
      {products.map((product) => (
        <li key={product.id} className={styles.productListItem}>
          <Product
            {...product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            inCart={itemsInCart.includes(product.id) ? '1' : ''}
          />
        </li>
      ))}
    </ul>
  );
}
ProductList.propTypes = {
  itemsInCart: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      published: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      lang: PropTypes.string.isRequired,
      pages: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      url: PropTypes.string,
      price: PropTypes.string.isRequired,
    }).isRequired
  ),
};

ProductList.defaultProps = {
  itemsInCart: [],
  products: [],
};
export default ProductList;
