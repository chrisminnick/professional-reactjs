import useRating from '../hooks/useRating';
import styles from './Product.module.css';
import Book from '../types/Book';

interface ProductProps extends Book {
  avgRating?: string;
  inCart: boolean;
  addToCart: (product: Book) => void;
  removeFromCart: (id: string) => void;
}

function Product(props: ProductProps) {
  const { rating, stars, setRating } = useRating();
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
    avgRating,
    inCart,
  } = props;
  function handleClick() {
    if (inCart) {
      props.removeFromCart(id);
    } else {
      props.addToCart({ id: id, title: title, price: price });
    }
  }

  return (
    <div className={styles.product}>
      <div>
        <img
          className={styles.thumbnail}
          src={image ? 'images/' + image : 'images/default.jpg'}
          alt={title}
          data-testid="thumb"
        />
      </div>
      <div>
        <h2>{title}</h2>
        <p>
          Your rating:{' '}
          <select
            data-testid="selectRating"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </p>
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
        <p>{rating ? `your rating: ${rating}` : `avg rating: ${avgRating}`}</p>
        <button onClick={handleClick}>
          {inCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

export default Product;
