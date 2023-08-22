import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/views/Home/Home';
import NavBar from './components/layout/NavBar/NavBar';
import Footer from './components/layout/Footer/Footer';
import CarPage from './components/views/CarPage/CarPage';
import Cart from './components/views/Cart/Cart';
import Checkout from './components/views/Checkout/Checkout';
import Login from './components/features/Login/Login';
import Register from './components/features/Register/Register';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/car/:carId" element={<CarPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cart/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    <Footer />
  </>
);

export default App;
