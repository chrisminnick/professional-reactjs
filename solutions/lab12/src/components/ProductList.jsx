import PropTypes from 'prop-types';
import Product from './Product.jsx';
import styles from './ProductList.module.css';
import { productsType } from '../types';

function ProductList(props) {
  let itemIds = props.itemsInCart.map((item) => item.id);

  return (
    <ul className={styles.productList}>
      {props.products.map((product) => (
        <li key={product.id} className={styles.productListItem}>
          <Product
            {...product}
            inCart={itemIds.includes(product.id) ? true : false}
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
  itemsInCart: PropTypes.array.isRequired,
  products: productsType,
};

ProductList.defaultProps = {
  products: [],
  itemsInCart: [],
};

export default ProductList;
