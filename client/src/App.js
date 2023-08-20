import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/views/Home/Home';
import NavBar from './components/layout/NavBar/NavBar';
import Footer from './components/layout/Footer/Footer';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </>
);

export default App;
