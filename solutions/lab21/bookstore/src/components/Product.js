import styles from './Product.module.css';
import PropTypes from 'prop-types';
const {
    REACT_APP_CONTENT_HOST: contentHost,
  } = process.env;

function Product(props){
    const { title, author, published, country, lang, pages, image, url, price } = props;
    
    function handleClick(){
        if(props.inCart) {
            props.removeFromCart(props.id);
        } else {
            props.addToCart(props.id);
        }
    }    
    
    return(
        <div className={styles.product}>
            <div><img className={styles.thumbnail} src={image ? `${contentHost}/images/` + image:`${contentHost}/images/default.jpg`} alt="{title}" /></div>
            <div>
                <h2>{title}</h2>
                <p>
                    by: {author}<br />
                    published: {published}, {country}<br />
                    language: {lang}<br />
                    pages: {pages}<br />
                    price: ${price}<br />
                </p>
                <button 
                    onClick={handleClick}>
	                    {props.inCart?"In Cart":"Add to Cart"}
                </button>
            </div>
        </div>
    );
}

Product.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    published: PropTypes.string,
    country: PropTypes.string,
    lang: PropTypes.string,
    pages: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    price: PropTypes.string.isRequired
};

Product.defaultProps = {
    title: '',
    price: ''
}

export default Product;