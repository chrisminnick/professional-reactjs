import ProductList from './ProductList';
import { Component } from 'react';
import Cart from './Cart';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="row">
        <div className="col-sm-6 col-md-8 col-lg-10">
          <ProductList />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-2">
          <Cart />
        </div>
      </main>
    );
  }
}
export default Main;
