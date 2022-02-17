import styles from './Product.module.css';
import PropTypes from 'prop-types';

function Product(props) {
  const {
    id,
    title,
    author,
    published,
    country,
    lang,
    pages,
    image,
    url,
    price,
  } = props;

  function handleClick() {
    props.inCart ? props.removeFromCart(id) : props.addToCart(id);
  }
  return (
    <div data-testid="product" className={styles.productContainer}>
      <img
        className={styles.thumbnail}
        src={image ? '/images/' + image : 'images/default.jpg'}
        alt={title}
      />
      <p>
        <b>{title}</b>
        <br />
        Author: {author}
        <br />
        Published: {published}
        <br />
        Country: {country}
        <br />
        Language: {lang}
        <br />
        Pages: {pages}
        <br />
        <a href={url}>Link</a>
        <br />
        Price: ${price}
      </p>
      <button onClick={handleClick}>
        {props.inCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}
Product.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  published: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  pages: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
export default Product;
