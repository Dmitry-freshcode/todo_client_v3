import { takeEvery, put } from 'redux-saga/effects';
import { 
    TODO_CREATE,    
    TODO_SAVE_STATE,
    TODO_DELETE,
    TODO_DELETE_ALL,
    TODO_EDIT_CURRENT, 
    TODO_FIND,
} from '../../store/constants/todo'
import { addTodo,getTodo,deleteTodo} from '../../api'
import {sendReload} from '../../api/socket'

export function* watchActionTodo() {    
	yield takeEvery(TODO_CREATE, workerAddTodo);    
    yield takeEvery(TODO_DELETE, workerDeleteTodo);
    yield takeEvery(TODO_EDIT_CURRENT, workerEditCurrent);
    yield takeEvery(TODO_FIND, FindTodo); 
}

export function* FindTodo(){ 
    try{      
        const request = yield getTodo();
        if(request){
            yield put( {type: TODO_SAVE_STATE, payload: request.data})
        }        
    } catch (e) {
        console.log(e);
    }  
}

export function* workerAddTodo(data){    
    yield addTodo(data.payload)
    yield sendReload();
        
}

export function* workerDeleteTodo(data){        
     yield deleteTodo(data.payload);
     yield put({type: TODO_DELETE_ALL})
     yield sendReload();
       
}

export function* workerEditCurrent(data){         
    localStorage.setItem("currentPage",data.payload);    
    yield sendReload();
      
}

