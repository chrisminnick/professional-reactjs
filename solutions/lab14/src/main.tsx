import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.tsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ThemeProvider } from './contexts/ThemeContext.jsx';

const element = document.getElementById('root');
if (element !== null) {
  const root = ReactDOM.createRoot(element);
  root.render(
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
}
