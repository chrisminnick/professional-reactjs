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
      itemsInCart: ['1', '2', '3'],
    };
  }
  render() {
    return (
      <div className="container">
        <Header />
        <button onClick={() => this.setState({ itemsInCart: ['5'] })}>
          change to 5
        </button>
        <MainContainer
          products={products}
          itemsInCart={this.state.itemsInCart}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
