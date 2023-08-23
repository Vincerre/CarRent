import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getTotalPrice } from '../../../redux/cartRedux';

const OrderSummary = () => {
  const arr = useSelector(getTotalPrice);

  let sum = 0;
  arr.map((item) => {
    sum += item;
    return sum;
  });

  return (
    <div className="text-center">
      <div className="row m-5">
        <h2>Order summary</h2>
        <h2>{sum}$</h2>
      </div>
    </div>
  );
};

export default OrderSummary;
