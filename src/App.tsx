import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import { About } from './components/About';
import { HomePage } from './components/HomePage';
import { Projects } from './components/Projects';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="App">
      <Routes location={location} key={location.key}>
          <Route path="/" element={<HomePage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
