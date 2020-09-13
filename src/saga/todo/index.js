import { takeEvery, call, put } from 'redux-saga/effects';
import { TODO_CREATE,TODO_FIND_ALL ,TODO_SAVE_STATE,TODO_DELETE,TODO_DELETE_ALL} from '../../store/constants/todo'
import { addTodo,getTodo,getProfile,deleteTodo} from '../../api'
import { setToken,deleteToken } from '../../store/actionCreater/token'
import {addLoginError,subLoginError,addExLoginError,subExLoginError} from '../../store/actionCreater/errors'
import { store } from '../../index'




const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* watchActionTodo() {    
	yield takeEvery(TODO_CREATE, workerAddTodo);
    yield takeEvery(TODO_FIND_ALL, workerFindTodo);
    yield takeEvery(TODO_DELETE, workerDeleteTodo);
    // yield takeEvery(USER_AUTOLOGIN, workerAutologin);
    // yield takeEvery(USER_ADD, workerAddUser);  
}

export function* workerAddTodo(data){    
    //console.log(data);
    yield addTodo(data.payload)
    const request2 = yield workerFindTodo(data);
    
}

export function* workerFindTodo(data){
        const request = yield getTodo(data.payload)
        //console.log(data);  
    yield put( {type: TODO_SAVE_STATE, payload: request.data})
}

export function* workerDeleteTodo(data){ 
    
    console.log(data); 
    const username = store.getState().user.username;
    const token = store.getState().token.access_token;
     yield deleteTodo(data.payload);
     yield put({type: TODO_DELETE_ALL})
     yield workerFindTodo({payload: {token: token, username: username}});
    //console.log(data);   
    //const request = yield getTodo(data.payload)    
    //yield put( {type: TODO_SAVE_STATE, payload: request.data})
}