import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import initialState from './initialState';
import carsReducer from './carsRedux';
import categoriesReducer from './categoriesRedux';
import brandsReducer from './brandsRedux';
import cartReducer from './cartRedux';
import orderReducer from './orderRedux';
import thunk from 'redux-thunk';

const reducers = {
  cars: carsReducer,
  categories: categoriesReducer,
  brands: brandsReducer,
  cart: cartReducer,
  orders: orderReducer,
};

const combinedReducers = combineReducers(reducers);

const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
