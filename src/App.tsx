import React from 'react';
import './App.scss';
import { Home } from './components/Home';
import { Technology } from './components/Technology';
import { Work } from './components/Work';
import { About } from './components/About';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <Home />

      <Technology />

      <Work />

      <About />

      <Footer />
    </div>
  );
}

export default App;
