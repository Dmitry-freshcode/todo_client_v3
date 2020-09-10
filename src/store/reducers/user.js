import { 
	USER_LOGIN,
	USER_AUTOLOGIN,
	USER_ADD,
	//LOGOUT_USER_SUCCESS,
} from '../constants/user';

let name = '';
let pass = '';
let token = localStorage.getItem('access_token');
// if(token){
// 	name = user.name;
// 	pass = user.pass;
// }

const initialState = {
	user: {
		name: name,        
        token: token,
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
			return {
				
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
