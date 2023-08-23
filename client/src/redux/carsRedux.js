//SECTION selectors
export const getAllCars = ({ cars }) => cars.cars;
export const getCarById = ({ cars }, id) =>
  cars.cars.filter((car) => car.id === id);
export const getRequest = ({ request }) => request;

//SECTION actions
const createActionName = (name) => `app/cars/${name}`;

//SECTION action types

const LOAD_CARS = createActionName('LOAD_CARS');
const ADD_CAR = createActionName('ADD_CAR');
const EDIT_CAR = createActionName('EDIT_CAR');

// action creators

export const loadCars = (payload) => ({ payload, type: LOAD_CARS });
export const addCar = (payload) => ({ payload, type: ADD_CAR });
export const editCar = (payload) => ({
  type: EDIT_CAR,
  payload,
});

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CAR:
      return { ...statePart, cars: [...statePart.cars, { ...action.payload }] };
    case EDIT_CAR:
      return statePart.cars.map((car) =>
        car.id === action.payload.id ? { ...car, ...action.payload } : car
      );
    case LOAD_CARS:
      return { ...statePart, cars: [...action.payload] };

    default:
      return statePart;
  }
}
