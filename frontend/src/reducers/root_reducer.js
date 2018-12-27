import { combineReducers } from 'redux';
import session from './sesion_reducer';

const RootReducer = combineReducers({
  session
});

export default RootReducer;