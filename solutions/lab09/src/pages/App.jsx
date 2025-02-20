import React from 'react';
import Header from '../components/Header.jsx';
import ProductList from '../components/ProductList.jsx';
import Cart from '../components/Cart.jsx';
import Footer from '../components/Footer.jsx';
import './App.css';
import productsData from '../data/products.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsInCart: [],
    };
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }
  addToCart(product) {
    let newItems = [...this.state.itemsInCart, product];
    this.setState({
      itemsInCart: newItems,
    });
  }
  removeFromCart(idToRemove) {
    let newItems = this.state.itemsInCart.filter(
      (item) => item.id !== idToRemove
    );
    this.setState({ itemsInCart: newItems });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-8">
            <ProductList
              addToCart={this.addToCart}
              removeFromCart={this.removeFromCart}
              itemsInCart={this.state.itemsInCart}
              products={productsData}
            />
          </div>
          <div className="col-md-4">
            <Cart itemsInCart={this.state.itemsInCart} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
