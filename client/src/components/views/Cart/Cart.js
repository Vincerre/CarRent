import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getCart } from '../../../redux/cartRedux';

import CartCar from '../../features/CartCar/CartCar';
import OrderSummary from '../../features/OrderSummary/OrderSummary';

const Cart = () => {
  const cart = useSelector(getCart);

  return (
    <div>
      <h1 className="text-center m-4">Your Cart</h1>
      <>
        {cart.length === 0 ? (
          <h3 className="text-center m-4">No cars</h3>
        ) : (
          <>
            {cart.map((car) => (
              <div key={car.id} className="row">
                <CartCar {...car} />
              </div>
            ))}
            <OrderSummary />
          </>
        )}
      </>
    </div>
  );
};

export default Cart;
