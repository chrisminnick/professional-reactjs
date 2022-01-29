import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootReducer} from './reducers';
import rootSaga from './sagas';
import {BrowserRouter as Router} from 'react-router-dom';

const {
  REACT_APP_CONTENT_HOST: contentHost,
} = process.env;

const sagaMiddleware = createSagaMiddleware();

const initialState = {
  cart: {items:[]},
  products: {products:[]}
};

const createStoreWithMiddleware =
  composeWithDevTools( applyMiddleware(sagaMiddleware) )(createStore);

let store = createStoreWithMiddleware(
    rootReducer,
    initialState
);

sagaMiddleware.run(rootSaga)

window.renderBookstore = (containerId, history,cartItems) => {
  ReactDOM.render(
    <Router>
      <Provider store={store}>
        <App contentHost = {contentHost} cartItems={cartItems} />
      </Provider>
    </Router>,
    document.getElementById(containerId),
  );
};

window.unmountBookstore = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
