import Footer from './Footer.tsx';
import Header from './Header.tsx';
import MainContainer from './MainContainer.tsx';
import { Component } from 'react';
import { products } from '../data/products.ts';

interface IState {
  itemsInCart: string[];
}

interface IProps {}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      itemsInCart: [],
    };
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart(id: string) {
    this.setState({ itemsInCart: [...this.state.itemsInCart, id] });
  }

  removeFromCart(id: string) {
    this.setState({
      itemsInCart: this.state.itemsInCart.filter((item) => item !== id),
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
