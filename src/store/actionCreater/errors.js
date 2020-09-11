import {
    ERROR_LOGIN_ON,
    ERROR_LOGIN_OFF,
    ERROR_EX_LOGIN_ON,
    ERROR_EX_LOGIN_OFF,
    ERROR_USER_ADD_ON,
    ERROR_USER_ADD_OFF

} from '../constants/errors'


const addLoginError =() => {    
    return{  
        type: ERROR_LOGIN_ON, 
    }
};

const subLoginError =() => {
    return{  
        type: ERROR_LOGIN_OFF             
    }
};
const addExLoginError =() => {    
    return{  
        type: ERROR_EX_LOGIN_ON, 
    }
};

const subExLoginError =() => {
    return{  
        type: ERROR_EX_LOGIN_OFF             
    }
};
const addUserAddError =() => {    
    return{  
        type: ERROR_USER_ADD_ON, 
    }
};

const subUserAddError =() => {
    return{  
        type: ERROR_USER_ADD_OFF             
    }
};



export {
    addLoginError,
    subLoginError,
    addExLoginError,
    subExLoginError,
    addUserAddError,
    subUserAddError}