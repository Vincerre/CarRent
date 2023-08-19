import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import carsReducer from './carsRedux';

const reducers = {
  cars: carsReducer,
};

const combinedReducers = combineReducers(reducers);

const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
