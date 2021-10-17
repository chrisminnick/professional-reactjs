import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootReducer} from './reducers';
import rootSaga from './sagas';
import {BrowserRouter as Router} from 'react-router-dom';
import { unregister } from './registerServiceWorker';

window.renderBookstore = (containerId, history) => {
  ReactDOM.render(
    <Router>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </Router>,
    document.getElementById(containerId),
  );
  unregister();

};

window.unmountBrowse = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

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