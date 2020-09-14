import { 
    TODO_CREATE,
	TODO_FIND_ALL,
	TODO_SAVE_STATE,
	TODO_DELETE_ALL,
	TODO_DELETE,
	TODO_EDIT_CURRENT,
    //TODO_UPDATE_STATE
} from '../constants/todo';


const initialState = {
	todos:'',
	currentPage:1,
	pages:'',
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_CREATE:			
			return {...state};
		case TODO_FIND_ALL:
			console.log(action);			 	
			 return state				
			 ;
		case TODO_SAVE_STATE:
					
			return {				
				...state,
				...action.payload
			}
		case TODO_DELETE_ALL:
			return {
				...state,
				todos:[],
				pages:'',
				currentPage:'',				
			}
		case TODO_DELETE:			
			return state;
		case TODO_EDIT_CURRENT:
			console.log();
			return {
				...state,
				currentPage:action.payload
			}

		// case USER_ADD:
		// 	return {}
		// case USER_ADD_NAME:
		// 	return {
		// 		...state,
		// 		username: action.payload,
		// 	}
		// case USER_LOGOUT:
		// 	return {
		// 	...state,
		// 	username:'',
		// 	isLogin: false
		// }      
        default:
            return state;
    }
}

export default todoReducer;