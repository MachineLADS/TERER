import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<Pokedex />} />
      </Routes>
    </Router>
  );
}

export default App;