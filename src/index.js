import React from 'react';
import ReactDOM from 'react-dom';
import './jsx/css/Root.css';
import "./lib/Bootstrapper.css"; // Bootstrapper for Tailwind
import Core from './jsx/Core';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Core />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);