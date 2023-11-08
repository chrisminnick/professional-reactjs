import styles from './Product.module.css';

type ProductProps = {
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
  inCart: boolean;
};
function Product(props: ProductProps) {
  return (
    <div className={styles.productStyle}>
      <img
        src={props.image ? `images/${props.image}` : 'images/default.jpg'}
        className={styles.productImage}
        alt="book cover"
      />
      <div>
        <h2 className={styles.productTitle}>{props.title}</h2>
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
          <a href="{props.url}">Link</a>
        </p>
        <button>{props.inCart ? 'Remove from Cart' : 'Add to Cart'}</button>
      </div>
    </div>
  );
}

export default Product;
