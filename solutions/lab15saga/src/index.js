import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {cart, products} from './reducers';
import createSagaMiddleware from 'redux-saga';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';


import mySaga from './sagas';
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
	cart: cart,
	products: products
});


const initialState = {
  cart: {items:[]},
  products: {products:[]}
};


const createStoreWithMiddleware =
    compose( applyMiddleware(sagaMiddleware) )(createStore);

let store = createStoreWithMiddleware(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(mySaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
