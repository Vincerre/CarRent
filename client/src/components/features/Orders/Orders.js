import React from 'react';

const Orders = ({ id, brand, model, days, totalPrice }) => (
  <div className="m-4">
    <div className="container d-flex align-items-center ">
      <img
        className="w-50 rounded float-left"
        alt={id}
        src={process.env.PUBLIC_URL + `/images/cars/${brand}-${model}.png`}
      />
      <div className="w-50 text-center">
        <div className="m-3">
          <h5>Days</h5>
          <h4>{days}</h4>
        </div>
        <div>
          <h5>Total price:</h5>
          <h4>{totalPrice}$</h4>
        </div>
      </div>
    </div>
  </div>
);

export default Orders;
