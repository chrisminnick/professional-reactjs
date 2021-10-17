import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MicroFrontend from './MicroFrontend';

const {
  REACT_APP_BOOKSTORE_HOST: bookstoreHost
} = process.env;

const Bookstore = ({ history }) => (
  <MicroFrontend history={history} host={bookstoreHost} name="Bookstore" />
);

function App() {
  return (
    <BrowserRouter>
    test
      <Switch>
	      <Route exact path="/" component={Bookstore} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
