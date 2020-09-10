import {ERROR_LOGIN_ON,ERROR_LOGIN_OFF} from '../constants/errors'


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


export {addLoginError,subLoginError}