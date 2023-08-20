import React from 'react';
import styles from './Hero.module.scss';

import Button from '../../common/Button/Button';

const Hero = () => (
  <section id="hero" className={styles.root}>
    <div className={styles.hero_container}>
      <div className={styles.hero_headers}>
        <h1>
          Get More Out of
          <p>
            <span>Your</span> Journey
          </p>
        </h1>
        <div className={styles.slogan}>
          <h3>
            Drive Your Way to Freedom <p>Rent a Car Today</p>
          </h3>
          <Button href={'#cars'}>Get vehicle here</Button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
