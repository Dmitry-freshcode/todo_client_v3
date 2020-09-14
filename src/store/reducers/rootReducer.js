import { combineReducers } from 'redux';
import token from './token';
import user from './user';
import errors from './errors';
import todo from './todo';


const rootReducer = combineReducers({
     token : token,
     user : user,
     errors: errors,
     todo: todo
 });


export default rootReducer;