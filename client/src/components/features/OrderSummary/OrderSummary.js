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
    <div className="text-center m-4">
      <div className="m-4">
        <h2>Order summary</h2>
        <h2>{sum}$</h2>
      </div>
    </div>
  );
};

export default OrderSummary;
