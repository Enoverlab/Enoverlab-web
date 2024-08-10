import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'react-responsive-modal/styles.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './helper/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ScrollToTop/>
    <App />
  </Router>
);

