// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import BackgroundPage from './BackgroundPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/underconstruction" element={<BackgroundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
