import Product from './Product';
import styles from './ProductList.module.css';
import PropTypes from 'prop-types';

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
}

interface Props {
  products: Book[];
  itemsInCart: string[];
  addToCart: (id: string) => void;
  removeFromCart: (idToRemove: string) => void;
}

const ProductList: React.FC<Props> = (props) => {
  const itemsInCart = props.itemsInCart;
  return (
    <ul className={styles.productList}>
      {props.products.map((product) => (
        <li key={product.id} className={styles.productListItem}>
          <Product
            {...product}
            inCart={itemsInCart.includes(product.id) ? '1' : ''}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
