import {ERROR_LOGIN_ON,ERROR_LOGIN_OFF,ERROR_EX_LOGIN_ON,ERROR_EX_LOGIN_OFF} from '../constants/errors'
const initState = {};

function errorsLoginReducer(state = initState, action){    
    switch(action.type){
        case ERROR_LOGIN_ON:return { ...state, loginError : true};
        case ERROR_LOGIN_OFF: return {...state, loginError : false};
        case ERROR_EX_LOGIN_ON:return { ...state, loginExError : true};
        case ERROR_EX_LOGIN_OFF: return {...state, loginExError : false};
        default: return state
    }
}

export default errorsLoginReducer ;