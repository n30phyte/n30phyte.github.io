import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Hero from './Hero';

ReactDOM.render(
  <React.StrictMode>
    <Hero />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
