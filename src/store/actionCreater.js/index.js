import {SET_TOKEN} from '../constants/index'

const setToken =(token) => {
    return{  
        type: SET_TOKEN,
        payload: token      
    }
};

export {setToken}