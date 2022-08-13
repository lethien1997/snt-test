import { combineReducers } from 'redux';
import login from './reducers/login';
import animals from './reducers/animals';
import animal from './reducers/animal';



export default combineReducers({
  login, animals, animal
});
