import Product from './Product.jsx';
import styles from './ProductList.module.css';

function ProductList(props) {
  return (
    <ul className={styles.productList}>
      {props.products.map((product) => (
        <li key={product.id} className={styles.productListItem}>
          <Product {...product} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
