import Product from './Product';
import styles from './ProductList.module.css';
import PropTypes from 'prop-types';

function ProductList(props) {
  const itemsInCart = props.itemsInCart;
  return (
    <ul className={styles.productList} data-testid="product-list">
      {props.products.map((product) => (
        <li key={product.id} className={styles.productListItem}>
          <Product
            {...product}
            inCart={itemsInCart.includes(product.id) ? '1' : ''}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
          />
        </li>
      ))}
    </ul>
  );
}

ProductList.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  inCart: PropTypes.array.isRequired,
};

ProductList.defaultProps = {
  products: [],
  inCart: [],
};

export default ProductList;
