import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
