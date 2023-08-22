import { memoize } from 'proxy-memoize';

//SECTION selectors
export const getCart = ({ cart }) => cart;
export const getTotalPrice = memoize((state) =>
  state.cart.map((car) => car.totalPrice)
);

//SECTION action name creators
const reducerName = 'cart';
const createActionName = (name) => `app/${reducerName}/${name}`;

//SECTION action types
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const UPDATE_PRODUCT = createActionName('UPDATE_PRODUCT');

//SECTION action creators
export const addCarToCart = (payload) => ({ payload, type: ADD_PRODUCT });
export const removeCarFromCart = (payload) => ({
  payload,
  type: REMOVE_PRODUCT,
});
export const updateCartProduct = (payload) => ({
  payload,
  type: UPDATE_PRODUCT,
});

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return [...statePart, { ...action.payload }];
    }
    case REMOVE_PRODUCT: {
      return [...statePart.filter((car) => car.id !== action.payload)];
    }
    case UPDATE_PRODUCT: {
      return statePart.map((car) =>
        car.id === action.payload.id
          ? { ...car, totalPrice: action.payload.totalCost }
          : car
      );
    }
    default:
      return statePart;
  }
}
