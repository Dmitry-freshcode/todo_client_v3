import { takeEvery, call, put } from 'redux-saga/effects';
import { USER_LOGIN,USER_LOGOUT,USER_AUTOLOGIN ,USER_ADD, USER_ADD_NAME} from '../../store/constants/user'
import { TODO_FIND_ALL } from '../../store/constants/todo'
import { loginUser,addUser,getProfile} from '../../api'
import { setToken,deleteToken } from '../../store/actionCreater/token'
import {
    addLoginError,
    subLoginError,
    addExLoginError,
    subExLoginError,
    addUserAddError,
    subUserAddError,
} from '../../store/actionCreater/errors'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* watchActionAuth() {    
	yield takeEvery(USER_LOGIN, workerLogin);
	yield takeEvery(USER_LOGOUT, workerLogout);
    yield takeEvery(USER_AUTOLOGIN, workerAutologin);
    yield takeEvery(USER_ADD, workerAddUser);  
}

export function* workerLogin(data){      
    const response = yield loginUser(data.payload);      
    if (response.status === "wrong pass" || response.statusCode === 401  ){
        yield put(addLoginError());
        yield delay(2000);
        yield put(subLoginError());
        console.log('неверный логин или пароль');
    }   
    if (response.data){  
        localStorage.setItem("access_token",response.data.access_token);      
        yield put(setToken(response.data.access_token));
        yield put( {type: USER_ADD_NAME, payload:data.payload.username})  
        }
   
}

export function* workerLogout(){    
    localStorage.removeItem("access_token"); 
    yield put(deleteToken());
}

export function* workerAutologin(){
    const token = localStorage.getItem('access_token');    
    if (token){
        const profile = yield getProfile(token);         
        yield put(setToken(token));        
        yield put( {type: USER_ADD_NAME, payload:profile.data.username}) 
        yield put( {type: TODO_FIND_ALL, payload:{token:token,username:profile.data.username}})       
    }
}

export function* workerAddUser(data){    
    const response = yield addUser(data.payload);    
    if(response.data.status === 'userIsExist'){  
          console.log('логин занят');       
          yield put(addExLoginError());          
          yield delay(2000);
          yield put(subExLoginError());              
    } else{
        console.log('юзер добавлен');       
        yield put(addUserAddError());          
        yield delay(2000);
        yield put(subUserAddError());
    }


    
    
}
