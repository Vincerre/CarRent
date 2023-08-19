import React from 'react';
import styles from './Hero.module.scss';

import carImg from '../../../assets/hero-car.png';
import shapeImg from '../../../assets/hero-car-shape.png';

import NavBar from '../NavBar/NavBar';
import Button from '../../common/Button/Button';

const Hero = () => (
  <section id="hero" className={styles.root}>
    <NavBar />
    <div className={styles.hero_container}>
      <div className={styles.hero_headers}>
        <h1>
          Get More Out of
          <p>
            <span>Your</span> Journey
          </p>
        </h1>
        <div className={styles.slogan}>
          <h3>Drive Your Way to Freedom, Rent a Car Today</h3>
          <Button href={'#main'}>Get vehicle here</Button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
