import styles from './Product.module.css';

function Product({
  title,
  author,
  published,
  country,
  lang,
  pages,
  image = 'default.jpg',
  url = '',
  price = '5',
}) {
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
          }).format(Number(price))}
          <br />
          <a href={url}>link</a>
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
