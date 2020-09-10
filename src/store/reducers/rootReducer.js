import { combineReducers } from 'redux';
import token from './token';
import user from './user';
import errors from './errors';


const rootReducer = combineReducers({
     token : token,
     user : user,
     errors: errors,
 });
//const rootReducer = tokenReducer;

export default rootReducer;