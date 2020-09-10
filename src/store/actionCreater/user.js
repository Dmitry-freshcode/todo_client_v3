import { USER_LOGIN,USER_AUTOLOGIN,USER_LOGOUT,USER_ADD} from '../constants/user';


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

export {loginUser,logoutUser,autologinUser,addUser};