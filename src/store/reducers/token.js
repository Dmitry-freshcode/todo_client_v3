import {SET_TOKEN,DELETE_TOKEN} from '../constants/token'
const initState = {access_token : ''};

function tokenReducer(state = initState, action){    
    switch(action.type){
        case SET_TOKEN: return { access_token : action.payload};
        case DELETE_TOKEN: return {access_token : ''};
        default: return state
    }
}

export default tokenReducer;