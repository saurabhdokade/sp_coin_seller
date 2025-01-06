import React from 'react';
import ReactDOM from 'react-dom/client';  // Change import path
import './styles/global.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create root
root.render(  // Render the app using root
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
