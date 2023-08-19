import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from '../NavBar/NavBar';

const MainLayout = ({ children }) => (
  <div>
    <NavBar />
    {children}
  </div>
);

export default MainLayout;
