import { useState, useEffect } from 'react';
import styles from './CarPopup.module.scss';

import Button from '../../common/Button/Button';

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
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
  faPinterestP,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faHeart, faEnvelope } from '@fortawesome/free-regular-svg-icons';

const CarPopup = ({
  id,
  closePopup,
  brand,
  category,
  model,
  gearbox,
  price,
  seats,
  airCon,
}) => {
  const [days, setDays] = useState(1);
  console.log(days);

  let totalPrice = price * days;

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

  // useEffect(() => {}, [days]);

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
                      <FontAwesomeIcon icon={faPerson} />
                      <span>Air Condition:</span>
                    </div>
                    {airCon === true ? <div>Yes</div> : <div>No</div>}
                  </div>
                </div>
              </div>
              <div className={styles.rightColumn}>
                <div className={styles.description}>
                  <h3>Details</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam ac sapien facilisis, maximus sem in, laoreet metus. In
                    sed dui dolor. Donec in facilisis diam, vitae bibendum nisi.
                    Nullam gravida ipsum a luctus iaculis. Nullam lectus mi,
                    fringilla eget ornare id, auctor sed urna. Vestibulum
                    ullamcorper, augue vitae congue bibendum, purus augue mattis
                    elit, id pulvinar sem sem non purus. Quisque sit amet
                    ultricies velit, vel pretium lorem. Donec ut purus non nisl
                    cursus bibendum sit amet eu diam.
                  </p>
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
                    {totalPrice}
                    <FontAwesomeIcon icon={faDollar} />
                  </div>
                  <div className={styles.addToCart}>
                    <Button>Add to Cart</Button>
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
