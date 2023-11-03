import Product from './Product';
import styles from './ProductList.module.css';

function ProductList(props) {
  return (
    <ul className={styles.productList}>
      <li className={styles.productListItem}>
        <Product product={props.products[0]} />
      </li>
      <li className={styles.productListItem}>
        <Product product={props.products[1]} />
      </li>
      <li className={styles.productListItem}>
        <Product product={props.products[2]} />
      </li>
      <li className={styles.productListItem}>
        <Product product={props.products[3]} />
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
