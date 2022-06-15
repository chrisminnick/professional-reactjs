import { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsInCart: [],
      products: [],
      loading: false,
    };
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch('http://localhost:3000/data/products.json').then((response) =>
      response
        .json()
        .then((products) => this.shuffleArray(products))
        .then((products) => {
          this.setState({ products: products, loading: false });
        })
    );
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

  addToCart(id) {
    let newItems = [...this.state.itemsInCart, id];
    this.setState({
      itemsInCart: newItems,
    });
  }

  removeFromCart(idToRemove) {
    let newItems = this.state.itemsInCart.filter((id) => id !== idToRemove);
    this.setState({ itemsInCart: newItems });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Main
          products={this.state.products}
          itemsInCart={this.state.itemsInCart}
          addToCart={this.addToCart}
          removeFromCart={this.removeFromCart}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
