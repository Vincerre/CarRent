import React from 'react';
import styles from './CarBox.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faPerson, faDollar } from '@fortawesome/free-solid-svg-icons';

const CarBox = ({ id, brand, model, gearbox, price, seats }) => {
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <div className={styles.content}>
          <Link to={id}>
            <h4>{brand}</h4>
            <h5>{model}</h5>
          </Link>
        </div>
        <Link to={id}>
          <img
            className={styles.image}
            alt={id}
            src={process.env.PUBLIC_URL + `/images/cars/${brand}-${model}.png`}
          />
        </Link>
        <div className={styles.description}>
          <div className={styles.info}>
            <div className={styles.gearBox}>
              <FontAwesomeIcon icon={faGear} />
              <span>{gearbox}</span>
            </div>
            <div className={styles.seatBox}>
              <FontAwesomeIcon icon={faPerson} />
              <span>{seats}</span>
            </div>
          </div>
          <div className={styles.priceBox}>
            <span>{price}</span>
            <div>
              <FontAwesomeIcon icon={faDollar} />
              <span>/day</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarBox;
