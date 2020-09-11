import { 
    TODO_CREATE,
    TODO_FIND_ALL,
    TODO_DELETE,
    TODO_UPDATE_STATE,
    TODO_SAVE_STATE} from '../constants/todo';

const addTodo = (data) =>{    
    return{
        type: TODO_CREATE, 
        payload: data       
    }
}
const findAllTodo = (data) =>{
    console.log(data);
    return{
        type: TODO_FIND_ALL,
        payload: data                
    }
}
const deleteTodo = (data) =>{
    return{
        type: TODO_DELETE, 
        payload: data       
    }
}
const updateStateTodo = (data) =>{
    return{
        type: TODO_UPDATE_STATE, 
        payload: data       
    }
}
const saveStateTodo = (data) =>{
    return{
        type: TODO_SAVE_STATE, 
        payload: data       
    }
}

export {addTodo,findAllTodo,deleteTodo,updateStateTodo,saveStateTodo};