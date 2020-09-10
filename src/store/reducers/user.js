import { 
	USER_LOGIN,
	USER_AUTOLOGIN,
	USER_ADD,
	USER_ADD_NAME,
	USER_LOGOUT
	//LOGOUT_USER_SUCCESS,
} from '../constants/user';

let name = '';
let pass = '';
//let token = localStorage.getItem('access_token');
// if(token){
// 	name = user.name;
// 	pass = user.pass;
// }

const initialState = {
	user: {
		name: name,        
        //token: token,
	},
	isLogin: false,	
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
			return {
				...state,
                ...action.data,                				
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
				...state
			}
		case USER_LOGOUT:
			return {
			...state,
			isLogin: false
		}
        // case LOGOUT_USER_SUCCESS:
        //     return {
		// 		...state,
		// 		user: {
        //             name: '',
        //             token: '',					
		// 		},					
		// 	};
        default:
            return state;
    }
}

export default userReducer;
