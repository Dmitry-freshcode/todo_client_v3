import { 
	USER_LOGIN,
	USER_AUTOLOGIN,
	USER_ADD,
	USER_ADD_NAME,
	USER_LOGOUT	
} from '../constants/user';


const initialState = {
	username: '',
	isLogin: false,	
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
		case USER_ADD_NAME:
			return {
				...state,
				username: action.payload,
				isLogin: true
			}
        case USER_LOGIN:			
			return {
				...state,                
			};
        case USER_AUTOLOGIN:			
            return {
				...state,
				...action.data,
			};
		case USER_ADD:
			return {};		
		case USER_LOGOUT:
			return {
			...state,
			username:'',
			isLogin: false
		}      
        default:
            return state;
    }
}

export default userReducer;
