import Product from './Product';
import styles from './ProductList.module.css';
import { Book } from './types';
function ProductList(props: { products: Book[] }) {
  return (
    <ul className={styles.productList}>
      {props.products.map((product: Book) => (
        <li key={product.id} className={styles.productListItem}>
          <Product {...product} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
