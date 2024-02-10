import React from 'react';
import Header from './Header.jsx';
import ProductList from './ProductList.jsx';
import Cart from './Cart.jsx';
import Footer from './Footer.jsx';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      products: [],
      itemsInCart: [
        {
          id: '1',
          title: 'Things Fall Apart',
          price: '5',
        },
      ],
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
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  componentDidMount() {
    this.setState({ loading: true });

    fetch('//localhost:5173/data/products.json')
      .then((response) => response.json())
      .then((products) => this.shuffleArray(products))
      .then((products) => {
        this.setState({ products: products, loading: false });
      });
  }

  render() {
    if (this.state.loading) {
      return 'Loading...';
    } else {
      return (
        <div className="container">
          <Header />
          <div className="row">
            <div className="col-md-8">
              <ProductList
                addToCart={this.addToCart}
                removeFromCart={this.removeFromCart}
                itemsInCart={this.state.itemsInCart}
                products={this.state.products}
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
}

export default App;
