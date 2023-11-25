import Footer from './Footer.tsx';
import Header from './Header.tsx';
import MainContainer from './MainContainer.tsx';
import { Component } from 'react';
import { Book } from '../types.ts';

interface IState {
  itemsInCart: string[];
  products: Book[];
  loading: boolean;
}

interface IProps {}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      itemsInCart: [],
      products: [],
      loading: false,
    };
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }
  shuffleArray(array: Book[]) {
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
        {this.state.loading ? <p>Loading...</p> : null}
        <MainContainer
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
