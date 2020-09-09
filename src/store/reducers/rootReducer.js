import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer';


const rootReducer = combineReducers({
     token : tokenReducer
 });
//const rootReducer = tokenReducer;

export default rootReducer;