import { combineReducers } from 'redux';
const { routerReducer } = require('react-router-redux');
const formReducer = require('redux-form').reducer;
import counter from './counter';
import session from './session';
import list from './list';

const rootReducer = combineReducers({
  session,
  counter,
  list,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
