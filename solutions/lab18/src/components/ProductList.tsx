import Product from './Product.js';
import styles from './ProductList.module.css';
import { ProductListProps } from '../types/productList.js';
import { Book } from '../types/book.js';

function ProductList(props: ProductListProps) {
  let itemIds = props.itemsInCart.map((item: Book) => item.id);

  return (
    <ul className={styles.productList}>
      {props.products.map((product: Book) => (
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

export default ProductList;
