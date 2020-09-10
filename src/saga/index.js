import { all } from 'redux-saga/effects';
import {watchAction } from './auth'

export default function* rootSaga() {    
    yield all([
        watchAction(),        
    ]);
};