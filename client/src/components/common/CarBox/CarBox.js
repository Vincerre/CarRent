import React from 'react';
import styles from './CarBox.module.scss';

const CarBox = ({ id }) => {
  return (
    <div className={styles.root}>
      {id}
      <div className={styles.photo}>
        <img
          className={styles.image}
          alt={id}
          src={process.env.PUBLIC_URL + `/images/cars/${id}.png`}
        />
      </div>
    </div>
  );
};

export default CarBox;
