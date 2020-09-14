import { 
    TODO_CREATE,    
    TODO_DELETE,
    TODO_UPDATE_STATE,
    TODO_SAVE_STATE,
    TODO_DELETE_ALL,
    TODO_EDIT_CURRENT,
    TODO_DELETE_CURRENT
} from '../constants/todo';

const addTodo = (data) =>{    
    return{
        type: TODO_CREATE, 
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
const deleteAllTodo = () =>{
    return{
        type: TODO_DELETE_ALL,                      
    }
}
const editCurrentTodo = (id) =>{
    return{
        type: TODO_EDIT_CURRENT,
        payload:id,              
    }
}
const deleteCurrentTodo = (id) =>{
    return{
        type: TODO_DELETE_CURRENT,                    
    }
}

export {
    addTodo,    
    deleteTodo,
    updateStateTodo,
    saveStateTodo,
    deleteAllTodo,
    editCurrentTodo,
    deleteCurrentTodo};