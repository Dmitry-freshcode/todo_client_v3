import {SET_TOKEN} from '../constants/index'
const initState = {access_token : ''};

function tokenReducer(state = initState, action){
    switch(action.type){
        case SET_TOKEN: return { access_token : action.payload};
        default: return state
    }
}

export default tokenReducer;