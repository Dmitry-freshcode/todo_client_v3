import { takeEvery, call, put } from 'redux-saga/effects';
//import { push } from 'react-router-redux';
import { USER_LOGIN,USER_LOGOUT,USER_AUTOLOGIN ,USER_ADD} from '../../store/constants/user'
import { loginUser,addUser} from '../../api'
import { setToken,deleteToken } from '../../store/actionCreater/token'
import {addLoginError,subLoginError} from '../../store/actionCreater/errors'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* watchAction() {    
	yield takeEvery(USER_LOGIN, workerLogin);
	yield takeEvery(USER_LOGOUT, workerLogout);
    yield takeEvery(USER_AUTOLOGIN, workerAutologin);
    yield takeEvery(USER_ADD, workerAddUser);
}

export function* workerLogin(data){     
    const response = yield loginUser(data.payload);      
    if (response.data){  
        localStorage.setItem("access_token",response.data.access_token);      
        yield put(setToken(response.data.access_token));
    }     
    if (response.error === 401 ){
        yield put(addLoginError());
        yield delay(2000);
        yield put(subLoginError());
        //console.log('неверный логин или пароль');
    }
}

export function* workerLogout(){    
    localStorage.removeItem("access_token"); 
    yield put(deleteToken());
}

export function* workerAutologin(){
    const token = localStorage.getItem('access_token');    
    if (token){
        yield put(setToken(token));
    }
}

export function* workerAddUser(data){
    //console.log(data);
    const response = yield addUser(data.payload);
    console.log(response);
}
