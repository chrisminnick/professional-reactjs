import Product from './Product.jsx';
import styles from './ProductList.module.css';

function ProductList() {
  return (
    <ul className={styles.productList}>
      <li className={styles.productListItem}>
        <Product />
      </li>
      <li className={styles.productListItem}>
        <Product />
      </li>
      <li className={styles.productListItem}>
        <Product />
      </li>
      <li className={styles.productListItem}>
        <Product />
      </li>
      <li className={styles.productListItem}>
        <Product />
      </li>
      <li className={styles.productListItem}>
        <Product />
      </li>
      <li className={styles.productListItem}>
        <Product />
      </li>
    </ul>
  );
}

export default ProductList;
