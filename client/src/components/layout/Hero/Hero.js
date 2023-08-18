import React from 'react';
import styles from './Hero.module.scss';

import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';

const Hero = () => (
  <section id="hero" className={styles.root}>
    <NavBar />
    <Header />
    <div className={styles.carImgContainer}></div>
  </section>
);

export default Hero;
