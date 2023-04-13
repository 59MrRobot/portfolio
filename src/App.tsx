import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Particles } from './components/Particles';
import { Projects } from './pages/Projects';

const App: React.FC = () => {
  return (
    <div className="app">
      <Particles />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
