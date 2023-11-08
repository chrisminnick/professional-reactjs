import { Book } from './types';

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
        <button>{props.inCart ? 'Remove from Cart' : 'Add to Cart'}</button>
      </div>
    </div>
  );
}

export default Product;
