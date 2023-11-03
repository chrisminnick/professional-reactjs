import styles from './Product.module.css';
function Product(props) {
  return (
    <div>
      <h1>{props.product}</h1>
      <img
        src="/images/default.jpg"
        alt="book cover"
        className={styles.coverImage}
      />
      Image Goes Here
      <div>
        <h2>Title</h2>
        <p>
          by: Author
          <br />
          published: year, country
          <br />
          language: lang
          <br />
          pages: num-pages
          <br />
          price: $x
          <br />
          link:
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
