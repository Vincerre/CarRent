import { useState } from 'react';
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
  price,
  seats,
  category,
  airCon,
}) => {
  const props = { id, brand, model, gearbox, price, seats, category, airCon };
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
  };
  const openPopup = () => {
    setShowPopup(true);
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <div className={styles.content}>
          <Link to={id}>
            <h4>{brand}</h4>
            <h5>{model}</h5>
          </Link>
        </div>
        <button onClick={openPopup}>
          <img
            className={styles.image}
            alt={id}
            src={process.env.PUBLIC_URL + `/images/cars/${brand}-${model}.png`}
          />
        </button>
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
        createPortal(
          <CarPopup {...props} closePopup={closePopup} />,
          document.body
        )}
    </div>
  );
};

export default CarBox;
