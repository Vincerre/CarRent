import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Hero from './components/layout/Hero/Hero';
import Home from './components/views/Home/Home';
import NavBar from './components/layout/NavBar/NavBar';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </>
);

export default App;
