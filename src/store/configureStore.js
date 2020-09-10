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


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const sagaMiddleware = createSagaMiddleware();

const initStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
};

export default initStore;