import { takeEvery, put } from 'redux-saga/effects';
import { 
    USER_LOGIN,
    USER_LOGOUT,
    USER_AUTOLOGIN,
    USER_ADD,
    USER_ADD_NAME
} from '../../store/constants/user'
import { 
    TODO_EDIT_CURRENT,    
    TODO_DELETE_CURRENT
} from '../../store/constants/todo'
import {
    loginUser,
    addUser,
    getProfile,    
} from '../../api'
import { setToken,deleteToken } from '../../store/actionCreater/token'
import { deleteAllTodo } from '../../store/actionCreater/todo'
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

function* getTodos(token,username){  
    let currentPage = yield localStorage.getItem("currentPage"); 
    currentPage = !currentPage? 1 : currentPage;        
    yield put(setToken(token));    
    yield put( {type: USER_ADD_NAME, payload:username})    
    yield put( {type: TODO_EDIT_CURRENT, payload:Number(currentPage)});   
}

export function* workerAutologin(){
    const token = yield localStorage.getItem('access_token');
    if(token)  {
        try{
            const profile = yield getProfile(token);                
            yield getTodos(token,profile.data.username);                 
        }    catch {
            yield put(deleteToken()); 
        }
    }       
 
}

export function* workerLogin(data){      
    try{
        const response = yield loginUser(data.payload); 
        const token = response.data.access_token;        
        const username = data.payload.username;
        localStorage.setItem("access_token",token);      
        yield getTodos(token,username)  
        
    } catch{
        yield put(addLoginError());    
        console.log('неверный логин или пароль');   
        yield delay(2000);
        yield put(subLoginError());        
    }   
}

export function* workerLogout(){    
    yield put( {type: TODO_DELETE_CURRENT})    
    yield put(deleteToken());    
    yield put(deleteAllTodo());
    localStorage.removeItem("currentPage");
    localStorage.removeItem("access_token"); 
}
   
export function* workerAddUser(data){    
    const response = yield addUser(data.payload);       
    if(response.response.status === 400){  
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
