import Product from './Product';
import styles from './ProductList.module.css';

interface Book {
  id: string;
  title: string;
  author: string;
  published?: string;
  country?: string;
  lang?: string;
  pages?: string;
  image?: string;
  url?: string;
  price?: string;
}

interface Props {
  itemsInCart: string[];
  products: Book[];
  addToCart: (id: string) => void;
  removeFromCart: (idToRemove: string) => void;
}
function ProductList(props: Props) {
  const itemsInCart = props.itemsInCart;
  return (
    <ul className={styles.productList}>
      {props.products.map((product: Book) => (
        <li key={product.id} className={styles.productListItem}>
          <Product
            {...product}
            inCart={itemsInCart.includes(product.id) ? true : false}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
