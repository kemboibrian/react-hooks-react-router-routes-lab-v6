// index.js
import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);