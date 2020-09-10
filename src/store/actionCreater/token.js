import {SET_TOKEN,DELETE_TOKEN} from '../constants/token'


const setToken =(token) => {    
    return{  
        type: SET_TOKEN,
        payload: token      
    }
};

const deleteToken =() => {
    return{  
        type: DELETE_TOKEN             
    }
};


export {setToken,deleteToken}