import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import 'react-responsive-modal/styles.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './helper/ScrollToTop';
import { CenterContextProvider } from './context/CenterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <CenterContextProvider>
    <ScrollToTop/>
    <App />
    </CenterContextProvider>
  </Router>
);

