import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import Home from './components/views/Home/Home';
import NavBar from './components/layout/NavBar/NavBar';
import Footer from './components/layout/Footer/Footer';
import CarPage from './components/views/CarPage/CarPage';
import Cart from './components/views/Cart/Cart';
import Checkout from './components/views/Checkout/Checkout';
import Login from './components/features/Login/Login';
import Register from './components/features/Register/Register';
import OrderSentPage from './components/views/OrderSentPage/OrderSentPage';

import { loadCars } from './redux/carsRedux';

const App = () => {
  const dispatch = useDispatch();

  const fetchCars = () => {
    fetch('http://localhost:3000/api/cars')
      .then((res) => res.json())
      .then((cars) => dispatch(loadCars(cars)))
      .then((cars) => console.log(cars));
  };

  useEffect(fetchCars, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car/:carId" element={<CarPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/checkout" element={<Checkout />} />
        <Route path="/order/sent" element={<OrderSentPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
