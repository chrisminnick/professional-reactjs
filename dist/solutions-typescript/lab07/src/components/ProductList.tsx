import Product from './Product';
import styles from './ProductList.module.css';
import { Book } from '../data/products';

interface ProductListProps {
  products: Book[];
}
function ProductList(props: ProductListProps) {
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
