import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import styles from './CarPopup.module.scss';
import { addCarToCart } from '../../../redux/cartRedux';

import Button from '../../common/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMinus,
  faPlus,
  faTimes,
  faGear,
  faPerson,
  faCar,
  faSnowflake,
} from '@fortawesome/free-solid-svg-icons';

const CarPopup = ({
  id,
  closePopup,
  brand,
  category,
  model,
  gearbox,
  description,
  price,
  seats,
  airCon,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [days, setDays] = useState(1);
  let totalPrice = price * days;

  const car = {
    id,
    brand,
    category,
    model,
    gearbox,
    description,
    price,
    seats,
    airCon,
    days,
    totalPrice,
  };

  const addToCart = (payload) => {
    dispatch(addCarToCart({ ...car }));
    navigate('/cart');
  };

  const addDays = () => {
    setDays((prev) => prev + 1);
  };

  const subtractDays = () => {
    if (days > 1) {
      setDays((prev) => prev - 1);
    } else {
      setDays(1);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.exit} onClick={closePopup}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.image}>
            <img
              alt={id}
              src={
                process.env.PUBLIC_URL + `/images/cars/${brand}-${model}.png`
              }
            />
          </div>
          <div className={styles.carInfo}>
            <h1>{brand}</h1>
            <h3>{model}</h3>
            <div className={styles.bottomBox}>
              <div className={styles.leftColumn}>
                <div className={styles.specs}>
                  <div className={styles.box}>
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faGear} />
                      <span>gearbox:</span>
                    </div>
                    <span>{gearbox}</span>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faPerson} />
                      <span>seats:</span>
                    </div>
                    <span>{seats}</span>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faCar} />
                      <span>category:</span>
                    </div>
                    <span>{category}</span>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faSnowflake} />
                      <span>Air Condition:</span>
                    </div>
                    {airCon === true ? <div>Yes</div> : <div>No</div>}
                  </div>
                </div>
              </div>
              <div className={styles.rightColumn}>
                <div className={styles.description}>
                  <h3>Details</h3>
                  <p>{description}</p>
                </div>
                <div className={styles.priceBox}>
                  <div className={styles.daysPicker}>
                    <h5>Days</h5>
                    <div>
                      <Button onClick={subtractDays}>
                        <FontAwesomeIcon icon={faMinus} />
                      </Button>
                      <p>{days}</p>
                      <Button onClick={addDays}>
                        <FontAwesomeIcon icon={faPlus} />
                      </Button>
                    </div>
                  </div>
                  <div className={styles.price}>
                    <h5>Total price:</h5>
                    {totalPrice}$
                  </div>
                  <div className={styles.addToCart}>
                    <Button onClick={addToCart}>Add to Cart</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarPopup;
