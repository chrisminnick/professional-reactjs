import Product from './Product';
import styles from './ProductList.module.css';

function ProductList(props) {
  const itemsInCart = props.itemsInCart;
  return (
    <ul className={styles.productList}>
      {props.products.map((product) => (
        <li key={product.id} className={styles.productListItem}>
          <Product
            {...product}
            inCart={itemsInCart.includes(product.id) ? true : false}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
