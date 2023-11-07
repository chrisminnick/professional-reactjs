function Product() {
  return (
    <div>
      <img
        src="images/default.jpg"
        style={{ width: '200px' }}
        alt="book cover"
      />
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
