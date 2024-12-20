import { Component } from 'react';

import Footer from './Footer.tsx';
import Header from './Header.tsx';
import MainContainer from './MainContainer.tsx';
import { products } from '../data/products.ts';

interface IProps {}
interface IState {
  itemsInCart: string[];
}

class App extends Component<IProps, IState> {
  constructor(props: object) {
    super(props);
    this.state = {
      itemsInCart: [],
    };
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart(itemToAdd: string) {
    const newItemsInCart = [...this.state.itemsInCart, itemToAdd];
    this.setState({ itemsInCart: newItemsInCart });
  }
  removeFromCart(id: string) {
    this.setState({
      itemsInCart: this.state.itemsInCart.filter((item: string) => item !== id),
    });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <MainContainer
          products={products}
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
