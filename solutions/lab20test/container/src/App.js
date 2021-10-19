import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MicroFrontend from './MicroFrontend';
import Header from './Header';

const {
  REACT_APP_BOOKSTORE_HOST: bookstoreHost,
} = process.env;
const {
  REACT_APP_CART_HOST: cartHost,
} = process.env;
const Bookstore = ({ history }) => (
  <MicroFrontend history={history} host={bookstoreHost} name="Bookstore" />
);
const Cart = ({ history }) => (
  <MicroFrontend history={history} host={cartHost} name="Cart" />
);
function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Bookstore} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
