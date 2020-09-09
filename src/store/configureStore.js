//import { routerReducer, routerMiddleware } from 'react-router-redux';
//import history from '../utils/history';
//import userReducer from '../reducers/user';


import {
    createStore,    
    compose,
    applyMiddleware,
} from 'redux';

import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer'

//import { reducer as form } from 'redux-form';


//const rootReducer = combineReducers({
    //form,    
    //user: userReducer,
    //router: routerReducer,
//});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const router = routerMiddleware(history);

export const sagaMiddleware = createSagaMiddleware()

// const initStore = () => {
//     return createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware, router)));
// };

const initStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
};

export default initStore;