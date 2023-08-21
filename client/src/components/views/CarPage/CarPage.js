import { useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import styles from './CarPage.module.scss';

import Button from '../../common/Button/Button';

import { getCarById } from '../../../redux/carsRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faExpandAlt,
  faExchangeAlt,
  faShoppingBasket,
  faMinus,
  faPlus,
  faTimes,
  faGear,
  faPerson,
  faDollar,
  faCar,
  faSnowflake,
} from '@fortawesome/free-solid-svg-icons';

const ProductPage = () => {
  const [days, setDays] = useState(1);

  const { carId } = useParams();
  const car = useSelector((state) => getCarById(state, carId));
  console.log(car);

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
  let totalPrice = car[0].price * days;

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
            </div>
            <div className={styles.box}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faPerson} />
                <span>Air Condition:</span>
              </div>
              {car[0].airCon === true ? <div>Yes</div> : <div>No</div>}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container + ' container-fluid'}>
        <div className={styles.rightColumn}>
          <div className={styles.description}>
            <h3>Details</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac
              sapien facilisis, maximus sem in, laoreet metus. In sed dui dolor.
              Donec in facilisis diam, vitae bibendum nisi. Nullam gravida ipsum
              a luctus iaculis. Nullam lectus mi, fringilla eget ornare id,
              auctor sed urna. Vestibulum ullamcorper, augue vitae congue
              bibendum, purus augue mattis elit, id pulvinar sem sem non purus.
              Quisque sit amet ultricies velit, vel pretium lorem. Donec ut
              purus non nisl cursus bibendum sit amet eu diam.
            </p>
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
              <Button>Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
