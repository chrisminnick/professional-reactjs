import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { cart, products } from './reducers';

const rootReducer = combineReducers({
  cart,
  products,
});

const store = configureStore({ reducer: rootReducer });

// import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* reportWebVitals();
 */
