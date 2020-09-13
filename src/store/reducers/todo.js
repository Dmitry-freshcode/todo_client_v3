import { 
    TODO_CREATE,
	TODO_FIND_ALL,
	TODO_SAVE_STATE,
	TODO_DELETE_ALL,
    TODO_DELETE,
    TODO_UPDATE_STATE
} from '../constants/todo';


const initialState = {
	
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_CREATE:			
			return {...state};
		case TODO_FIND_ALL:			
			 return {...state};
		case TODO_SAVE_STATE:
			return {
				...state,
				...action.payload
			}
		case TODO_DELETE_ALL:
			return {
				//todo:''
			}
		case TODO_DELETE:
			console.log(action)
			return 	{
				...state				
			};

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