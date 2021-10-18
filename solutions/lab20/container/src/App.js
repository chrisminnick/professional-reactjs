import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About';

import MicroFrontend from './MicroFrontend';

const {
  REACT_APP_BOOKSTORE_HOST: bookstoreHost,
} = process.env;

const Bookstore = ({ history }) => (
  <MicroFrontend history={history} host={bookstoreHost} name="Bookstore" />
);


const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Bookstore} />
        <Route exact path="/about" render={About} />
        {/* <Route exact path="/cart" component={Cart} /> */}
      </Switch>
      <Footer />
    </React.Fragment>
  </BrowserRouter>
);

export default App;
