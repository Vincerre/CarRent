// selectors

export const getAllCars = ({ cars }) => cars;
export const getCarById = ({ cars }, id) => cars.filter((car) => car.id === id);

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
