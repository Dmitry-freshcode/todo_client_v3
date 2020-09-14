import { takeEvery, put } from 'redux-saga/effects';
import { 
    TODO_CREATE,
    TODO_FIND_ALL,
    TODO_SAVE_STATE,
    TODO_DELETE,
    TODO_DELETE_ALL,
    TODO_EDIT_CURRENT
} from '../../store/constants/todo'
import { addTodo,getTodo,deleteTodo} from '../../api'
//import { setToken,deleteToken } from '../../store/actionCreater/token'
//import {addLoginError,subLoginError,addExLoginError,subExLoginError} from '../../store/actionCreater/errors'
import { store } from '../../index'




//const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* watchActionTodo() {    
	yield takeEvery(TODO_CREATE, workerAddTodo);
    yield takeEvery(TODO_FIND_ALL, workerFindTodo);
    yield takeEvery(TODO_DELETE, workerDeleteTodo);
    yield takeEvery(TODO_EDIT_CURRENT, workerEditCurrent);
    // yield takeEvery(USER_AUTOLOGIN, workerAutologin);
    // yield takeEvery(USER_ADD, workerAddUser);  
}

export function* workerAddTodo(data){    
    //console.log(data);
    yield addTodo(data.payload)
    yield workerFindTodo(data);
    
}

export function* workerFindTodo(){
    //console.log(data)
        const request = yield getTodo()
        console.log(request);  
    yield put( {type: TODO_SAVE_STATE, payload: request.data})
}

export function* workerDeleteTodo(data){ 
    
    console.log(data); 
    const username = store.getState().user.username;
    const token = store.getState().token.access_token;
     yield deleteTodo(data.payload);
     yield put({type: TODO_DELETE_ALL})
     yield workerFindTodo();
    //console.log(data);   
    //const request = yield getTodo(data.payload)    
    //yield put( {type: TODO_SAVE_STATE, payload: request.data})
}
export function* workerEditCurrent(){
    yield workerFindTodo();
}