import {ERROR_LOGIN_ON,ERROR_LOGIN_OFF} from '../constants/errors'
const initState = {};

function errorsReducer(state = initState, action){    
    switch(action.type){
        case ERROR_LOGIN_ON:return { ...state, loginError : true};
        case ERROR_LOGIN_OFF: return {...state, loginError : false};
        default: return state
    }
}

export default errorsReducer;