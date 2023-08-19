import React from 'react';
import styles from './CarCatalogue.module.scss';

import { getAllCars } from '../../../redux/carsRedux';
import { useSelector } from 'react-redux';

import CarBox from '../../common/CarBox/CarBox';

function CarCatalogue() {
  const cars = useSelector(getAllCars);
  const itemsPerRow = 4;
  console.log(cars);

  return (
    <section className={styles.root}>
      {cars.map((car) => (
        <div key={car.id} className={`col-${12 / itemsPerRow}`}>
          <CarBox {...car} />
        </div>
      ))}
    </section>
  );
}

export default CarCatalogue;
