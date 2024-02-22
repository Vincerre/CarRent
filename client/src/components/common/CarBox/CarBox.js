import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './CarBox.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faPerson, faDollar } from '@fortawesome/free-solid-svg-icons';

import CarPopup from '../../features/CarPopup/CarPopup';

const CarBox = ({
  id,
  brand,
  model,
  gearbox,
  description,
  price,
  seats,
  category,
  airCon,
}) => {
  const props = {
    id,
    brand,
    model,
    gearbox,
    description,
    price,
    seats,
    category,
    airCon,
  };
  const [showPopup, setShowPopup] = useState(false);
  const [popup, setPopup] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 1500) {
      setPopup(true);
    } else {
      setPopup(false);
    }
  }, [window.innerWidth]);

  const closePopup = () => {
    setShowPopup(false);
  };
  const openPopup = () => {
    setShowPopup(true);
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <div>
          <div className={styles.content}>
            <Link to={`car/${id}`}>
              <h4>{brand}</h4>
              <h5>{model}</h5>
            </Link>
          </div>
          {popup && <button onClick={openPopup}>Quick View</button>}
        </div>
        <Link to={`car/${id}`}>
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

      {showPopup &&
        popup &&
        createPortal(
          <CarPopup {...props} closePopup={closePopup} />,
          document.body,
        )}
    </div>
  );
};

export default CarBox;
