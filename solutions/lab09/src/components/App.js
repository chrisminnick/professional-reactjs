import { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import productsData from '../data/products';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsInCart: [],
    };
  }

  removeFromCart = (idToRemove) => {
    let newItems = this.state.itemsInCart.filter((id) => id !== idToRemove);
    this.setState({ itemsInCart: newItems });
  };
  addToCart = (id) => {
    let newItems = [...this.state.itemsInCart, id];
    this.setState({
      itemsInCart: newItems,
    });
  };
  render() {
    return (
      <div className="container">
        <Header />

        <Main
          products={productsData}
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
