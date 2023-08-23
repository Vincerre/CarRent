import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import styles from './CarPage.module.scss';

import Button from '../../common/Button/Button';

import { getCarById } from '../../../redux/carsRedux';
import { addCarToCart } from '../../../redux/cartRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMinus,
  faPlus,
  faGear,
  faPerson,
  faDollar,
  faCar,
  faSnowflake,
} from '@fortawesome/free-solid-svg-icons';

const CarPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carId } = useParams();
  const car = useSelector((state) => getCarById(state, carId));
  console.log('car', car);

  const [days, setDays] = useState(1);
  const [totalPrice, setTotalPrice] = useState(car[0].price);

  useEffect(() => {
    setTotalPrice(car[0].price * days);
  }, [days, car]);

  const addToCart = (payload) => {
    dispatch(addCarToCart({ ...car[0], days, totalPrice }));
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
      <div className={styles.container + ' container-fluid'}>
        <div className={styles.leftColumn}>
          <div className={styles.image}>
            <img
              alt={car[0].id}
              src={
                process.env.PUBLIC_URL +
                `/images/cars/${car[0].brand}-${car[0].model}.png`
              }
            />
          </div>

          <div className={styles.info}>
            <div className={styles.specs}>
              <div className={styles.box}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faGear} />
                  <span>gearbox:</span>
                </div>
                <span>{car[0].gearbox}</span>
              </div>
              <div className={styles.box}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faPerson} />
                  <span>seats:</span>
                </div>
                <span>{car[0].seats}</span>
              </div>
              <div className={styles.box}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faCar} />
                  <span>category:</span>
                </div>
                <span>{car[0].category}</span>
              </div>
              <div className={styles.box}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faSnowflake} />
                  <span>Air Condition:</span>
                </div>
                {car[0].airCon === true ? <div>Yes</div> : <div>No</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container + ' container-fluid'}>
        <div className={styles.rightColumn}>
          <div className={styles.description}>
            <h3>Details</h3>
            <p>{car[0].description}</p>
          </div>
          <div className={styles.priceBox}>
            <h5>Days</h5>
            <div className={styles.daysPicker}>
              <Button onClick={subtractDays}>
                <FontAwesomeIcon icon={faMinus} />
              </Button>
              <p>{days}</p>
              <Button onClick={addDays}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </div>
            <div className={styles.price}>
              <h5>Total price:</h5>
              <p>
                {totalPrice}
                <FontAwesomeIcon icon={faDollar} />
              </p>
            </div>
            <div className={styles.addToCart}>
              <Button onClick={addToCart}>Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarPage;
