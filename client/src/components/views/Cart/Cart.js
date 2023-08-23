import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getCart } from '../../../redux/cartRedux';

import CartCar from '../../features/CartCar/CartCar';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import Button from '../../common/Button/Button';
import { useEffect } from 'react';

import { useState } from 'react';

const Cart = () => {
  const cart = useSelector(getCart);
  const [items, setItems] = useState([]);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const cartProducts = JSON.parse(localStorage.getItem('cart'));

  return (
    <div className="container-fluid justify-content-center">
      <h1 className="text-center m-4">Your Cart</h1>
      <>
        {cartProducts.length === 0 ? (
          <h3 className="text-center m-4">No cars</h3>
        ) : (
          <>
            {cartProducts.map((car) => (
              <div key={car.id} className="row">
                <CartCar {...car} />
              </div>
            ))}
            <div className="m-4 p-4 text-center">
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
