import styles from './Product.module.css';
import { Book } from '../types';
type ProductProps = {
  product: Book;
  inCart: boolean;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
};
function Product(props: ProductProps) {
  const { title, image, author, published, country, lang, pages, price, url } =
    props.product;

  function handleClick() {
    if (props.inCart) {
      props.removeFromCart(props.product.id);
    } else {
      props.addToCart(props.product.id);
    }
  }

  return (
    <div className={styles.productStyle}>
      <img
        src={image ? `images/${image}` : 'images/default.jpg'}
        className={styles.productImage}
        alt="book cover"
      />
      <div>
        <h2 className={styles.productTitle}>{title}</h2>
        <p>
          by: {author}
          <br />
          published: {published}, {country}
          <br />
          language: {lang}
          <br />
          pages: {pages}
          <br />
          price: ${price}
          <br />
          <a href={url}>Link</a>
        </p>
        <button onClick={handleClick}>
          {props.inCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

export default Product;
