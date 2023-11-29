import styles from './Product.module.css';

interface ProductProps {
  title: string;
  author: string;
  published: string;
  country: string;
  lang: string;
  pages: string;
  image: string;
  url: string;
  price: string;
}
function Product(props: ProductProps) {
  const { title, author, published, country, lang, pages, image, url, price } =
    props;
  return (
    <div className={styles.product}>
      <div>
        <img
          className={styles.thumbnail}
          src={'images/' + image}
          alt="{title}"
        />
      </div>
      <div>
        <h2>{title}</h2>
        <p>
          by: {author}
          <br />
          published: {published}, {country}
          <br />
          language: {lang}
          <br />
          pages: {pages}
          <br />
          price:{' '}
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(parseFloat(price))}
          <br />
          <a href={url}>link</a>
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
