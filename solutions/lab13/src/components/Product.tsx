import styles from './Product.module.css';
// import { productType } from '../types';

interface Props {
  id: string;
  title: string;
  author: string;
  published: string;
  country: string;
  lang: string;
  pages: string;
  image: string;
  url: string;
  price: string;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  inCart: string;
}

function Product(props: Props) {
  // const { title, author, published, country, lang, pages, image, url, price } =
  //   props;

  function handleClick() {
    if (props.inCart) {
      props.removeFromCart(props.id);
    } else {
      props.addToCart(props.id);
    }
  }

  return (
    <div className={styles.product}>
      <div>
        <img
          className={styles.thumbnail}
          src={props.image ? 'images/' + props.image : 'images/default.jpg'}
          alt="{title}"
        />
      </div>
      <div>
        <h2>{props.title}</h2>
        <p>
          by: {props.author}
          <br />
          published: {props.published}, {props.country}
          <br />
          language: {props.lang}
          <br />
          pages: {props.pages}
          <br />
          price: ${props.price}
          <br />
          <a href={props.url}>More info</a>
        </p>
        <button onClick={handleClick}>
          {props.inCart ? 'In Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

// Product.propTypes = productType;

export default Product;
