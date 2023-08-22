import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import carsReducer from './carsRedux';
import categoriesReducer from './categoriesRedux';
import brandsReducer from './brandsRedux';
import cartReducer from './cartRedux';

const reducers = {
  cars: carsReducer,
  categories: categoriesReducer,
  brands: brandsReducer,
  cart: cartReducer,
};

const combinedReducers = combineReducers(reducers);

const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
