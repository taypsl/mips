import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import styleSwitcher from './styleSwitcher';
import submitForm from './styleSwitcher';

export default combineReducers({
  router: routerReducer,
  styleSwitcher,
  counter,
  submitForm
});
