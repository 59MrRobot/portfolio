import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { HomePage } from './components/HomePage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </div>
  );
}

export default App;
