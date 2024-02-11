import React from 'react';
import ReactDOM from 'react-dom/client';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { cart, products } from './reducers';
import App from './components/App.tsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const rootReducer = combineReducers({
  cart: cart,
  products: products,
});

const store = configureStore({ reducer: rootReducer });

const element = document.getElementById('root');
if (element !== null) {
  const root = ReactDOM.createRoot(element);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}
