import { combineReducers } from 'redux';
const { routerReducer } = require('react-router-redux');
const formReducer = require('redux-form').reducer;
import lists from './listreducer';
import listItems from './listitemreducer';

const rootReducer = combineReducers({


  lists,
  listItems,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
