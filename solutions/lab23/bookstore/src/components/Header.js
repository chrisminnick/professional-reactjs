import CartLink from './CartLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


function Header(props){
    return (
        <header className="container">
            <div className="row p-4">
            <div className="col-md-9">            
                <h1>Welcome to React Bookstore</h1>
            </div>
            <div className="col-md-3">
            <CartLink itemsInCart = {props.itemsInCart} />

            </div>
           
            </div>
        </header>
    )
}

export default Header;