import { all } from 'redux-saga/effects';
import {watchActionTodo } from './todo'
import {watchActionAuth } from './auth'

export default function* rootSaga() {    
    yield all([
        watchActionAuth(), 
        watchActionTodo(),

    ]);
};