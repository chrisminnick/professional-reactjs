import Product from './Product';
import styles from './ProductList.module.css';

function ProductList(props) {
  return (
    <ul className={styles.productList}>
      {props.products.map((product) => (
        <li key={product.id} className={styles.productListItem}>
          <Product {...product} />
        </li>
      ))}
      <button onClick={props.setOptions}>do the thing</button>
    </ul>
  );
}

export default ProductList;
