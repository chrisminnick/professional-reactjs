import Product from './Product';
import styles from './ProductList.module.css';
import { Book } from '../types';
function ProductList(props: { products: Book[]; itemsInCart: string[] }) {
  return (
    <ul className={styles.productList}>
      {props.products.map((product: Book) => (
        <li key={product.id} className={styles.productListItem}>
          <Product
            product={product}
            inCart={props.itemsInCart.includes(product.id) ? true : false}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
