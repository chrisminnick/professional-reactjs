import Product from './Product';
import styles from './ProductList.module.css';
import PropTypes from 'prop-types';

function ProductList(props){
    const itemsInCart = props.itemsInCart;
    return(
        <ul className={styles.productList}>
            {props.products.map(product => (
                <li key={product.id}
                    className={styles.productListItem}>
                    <Product {...product} 
                             inCart = {itemsInCart.includes(product.id)?'1':''} 
                             addToCart = {props.addToCart} 
                             removeFromCart = {props.removeFromCart} />

                </li>
            ))}
        </ul>
    ); 
}

ProductList.propTypes = {
    itemsInCart:PropTypes.array.isRequired,
    addToCart:PropTypes.func.isRequired,
    removeFromCart:PropTypes.func.isRequired,
    products:PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        author:PropTypes.string.isRequired,
        published:PropTypes.string.isRequired,
        country:PropTypes.string.isRequired,
        lang:PropTypes.string.isRequired,
        pages:PropTypes.string.isRequired,
        image:PropTypes.string.isRequired,
        url:PropTypes.string.isRequired, 
        price:PropTypes.string.isRequired
    }).isRequired)
}

ProductList.defaultProps = {
    itemsInCart: [],
    products: []
}

export default ProductList;
