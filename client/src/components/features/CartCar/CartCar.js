import { useState, useEffect } from 'react';
import styles from './CartCar.module.scss';
import Button from '../../common/Button/Button';
import { useDispatch } from 'react-redux';

import { updateCartProduct } from '../../../redux/cartRedux';
import { removeCarFromCart } from '../../../redux/cartRedux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const CartCar = ({ id, brand, model, price, days, totalPrice }) => {
  const dispatch = useDispatch();

  const [day, setDay] = useState(days);
  const [totalCost, setTotalCost] = useState(totalPrice);

  useEffect(() => {
    setTotalCost(price * day);
    dispatch(updateCartProduct({ id, totalCost }));
  }, [totalCost, day]);

  const addDays = () => {
    setDay((prev) => prev + 1);
  };

  const subtractDays = () => {
    if (day > 1) {
      setDay((prev) => prev - 1);
    } else {
      setDay(1);
      setTotalCost(price * day);
    }
  };

  const remove = (payload) => {
    dispatch(removeCarFromCart(id));
  };

  return (
    <div className={styles.root}>
      <div className={`p-3 ${styles.container}`}>
        <div>
          <img
            className="w-100"
            alt={id}
            src={process.env.PUBLIC_URL + `/images/cars/${brand}-${model}.png`}
          />
        </div>
        <div className="">
          <div className={`w-100 d-flex align-items-center ${styles.sum}`}>
            <div>
              <h5>Days</h5>
            </div>
            <div className={styles.daysPicker}>
              <Button onClick={subtractDays}>
                <FontAwesomeIcon icon={faMinus} />
              </Button>

              <p>{day}</p>
              <Button onClick={addDays}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </div>
            <div className={styles.price}>
              <h5>Total price:</h5>
              <h5>{totalCost}$</h5>
            </div>
            <div>
              <Button onClick={remove}>
                <FontAwesomeIcon icon={faTrashCan} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCar;
