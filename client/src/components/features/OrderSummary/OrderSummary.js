import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getTotalPrice } from '../../../redux/cartRedux';

import styles from './OrderSummary.module.scss';
import Button from '../../common/Button/Button';

const OrderSummary = () => {
  const arr = useSelector(getTotalPrice);

  console.log(arr);

  let sum = 0;
  arr.map((item) => {
    sum += item;
    return sum;
  });

  return (
    <div className="container text-center">
      <div className={`row m-5 ${styles.summary}`}>
        <h4>Order summary:</h4>
        <h4>{sum}$</h4>
        <Button to={'/cart/checkout'}>Checkout</Button>
      </div>
    </div>
  );
};

export default OrderSummary;
