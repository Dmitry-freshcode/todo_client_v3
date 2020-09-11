import { takeEvery, call, put } from 'redux-saga/effects';
import { TODO_CREATE,TODO_FIND_ALL ,TODO_SAVE_STATE} from '../../store/constants/todo'
import { addTodo,getTodo,getProfile} from '../../api'
import { setToken,deleteToken } from '../../store/actionCreater/token'
import {addLoginError,subLoginError,addExLoginError,subExLoginError} from '../../store/actionCreater/errors'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* watchActionTodo() {    
	yield takeEvery(TODO_CREATE, workerAddTodo);
	yield takeEvery(TODO_FIND_ALL, workerFindTodo);
    // yield takeEvery(USER_AUTOLOGIN, workerAutologin);
    // yield takeEvery(USER_ADD, workerAddUser);  
}

export function* workerAddTodo(data){    
    const request = yield addTodo(data.payload)
    console.log(request);
}

export function* workerFindTodo(data){    
    const request = yield getTodo(data)
    //console.log(request);
    yield put( {type: TODO_SAVE_STATE, payload: request.data})
}