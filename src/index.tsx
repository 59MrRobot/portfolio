import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import { HashRouter } from "react-router-dom";

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
