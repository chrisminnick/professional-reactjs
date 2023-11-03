import ProductList from './ProductList';
import { Component } from 'react';
import Cart from './Cart';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { products: ['eggs'], state: 'NC' };
  }

  setProducts() {
    this.setState({ products: ['toast'] });
  }

  render() {
    return (
      <main className="row">
        <div className="col-sm-6 col-md-8 col-lg-10">
          {this.state.state}
          <ProductList products={this.state.products} />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-2">
          <Cart />
        </div>
        <button onClick={this.setProducts.bind(this)}>make toast</button>
      </main>
    );
  }
}
export default Main;
