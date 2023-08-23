import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getCart } from '../../../redux/cartRedux';

import CartCar from '../../features/CartCar/CartCar';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import Button from '../../common/Button/Button';

const Cart = () => {
  const cart = useSelector(getCart);
  console.log(cart);

  return (
    <div className="d-flex flex-column align-items-center">
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
            <div className="row m-4 text-center w-50">
              <OrderSummary />
              <Button to={'/cart/checkout'}>Checkout</Button>
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default Cart;
