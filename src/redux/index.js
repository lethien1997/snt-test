import { combineReducers } from 'redux';
import login from './reducers/login';
import animals from './reducers/animals';


export default combineReducers({
  login, animals
});
