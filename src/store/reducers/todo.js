import { 
    TODO_CREATE,	
	TODO_SAVE_STATE,
	TODO_DELETE_ALL,
	TODO_DELETE,
	TODO_EDIT_CURRENT,
	TODO_DELETE_CURRENT   
} from '../constants/todo';


const initialState = {
	todos:[],
	currentPage:1,
	pages:0,
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_CREATE:			
			return {...state};		
		case TODO_SAVE_STATE:					
			return {				
				...state,
				...action.payload
			}
		case TODO_DELETE_ALL:
			return {
				...state,
				todos:[],
				pages:0,								
			}
		case TODO_DELETE:			
			return state;
		case TODO_EDIT_CURRENT:
			console.log();
			return {
				...state,
				currentPage:action.payload
			}
		case TODO_DELETE_CURRENT:			
			return {
				...state,
				currentPage:''
			}   
        default:
            return state;
    }
}

export default todoReducer;