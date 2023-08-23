import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
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
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
