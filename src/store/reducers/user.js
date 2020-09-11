import { 
	USER_LOGIN,
	USER_AUTOLOGIN,
	USER_ADD,
	USER_ADD_NAME,
	USER_LOGOUT
	//LOGOUT_USER_SUCCESS,
} from '../constants/user';


const initialState = {
	username: '',
	isLogin: false,	
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:			
			return {
				...state,
                username: action.payload.username,                				
				isLogin: true
			};
        case USER_AUTOLOGIN:			
            return {
				...state,
                ...action.data,                				
				isLogin: true
			};
		case USER_ADD:
			return {}
		case USER_ADD_NAME:
			return {
				...state,
				username: action.payload,
			}
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
