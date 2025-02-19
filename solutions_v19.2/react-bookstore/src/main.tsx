import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './pages/App.js';
import { ThemeProvider } from './contexts/ThemeContext.js';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { cart, products } from './reducers.js';
const rootReducer = combineReducers({
  cart: cart,
  products: products,
});
const store = configureStore({ reducer: rootReducer });

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ThemeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}
