import { Book } from './types';

function Product(props: Book) {
  return (
    <div>
      <img
        src={props.image ? `images/${props.image}` : 'images/default.jpg'}
        style={{ width: '200px' }}
        alt="book cover"
      />
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
          <a href="{props.url}">Link</a>
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
