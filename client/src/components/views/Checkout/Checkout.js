import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getCart } from '../../../redux/cartRedux';

import OrderSummary from '../../features/OrderSummary/OrderSummary';
import Orders from '../../features/Orders/Orders';
import OrderForm from '../../features/OrderForm/OrderForm';

const Checkout = () => {
  const cart = useSelector(getCart);

  return (
    <div className="d-flex flex-column">
      {cart.map((car) => (
        <div key={car.id}>
          <Orders {...car} />
        </div>
      ))}
      <OrderForm {...cart} />
      <OrderSummary />
    </div>
  );
};

export default Checkout;
