import { 
    USER_LOGIN,
    USER_AUTOLOGIN,
    USER_LOGOUT,
    USER_ADD,
    USER_ADD_NAME
} from '../constants/user';


const loginUser = (data) =>{
    return{
        type: USER_LOGIN,
        payload: data
    }
}
const autologinUser = (data) =>{
    return{
        type: USER_AUTOLOGIN,
        payload: data       
    }
}
const logoutUser = () =>{
    return{
        type: USER_LOGOUT,       
    }
}
const addUser = (data) =>{
    return{
        type: USER_ADD, 
        payload: data       
    }
}
const addName = (name) =>{
    return{
        type: USER_ADD_NAME, 
        payload: name       
    }
}

export {loginUser,logoutUser,autologinUser,addUser,addName};