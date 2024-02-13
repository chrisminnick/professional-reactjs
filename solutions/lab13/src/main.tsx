import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const element = document.getElementById('root');
if (element !== null) {
  const root = ReactDOM.createRoot(element);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
