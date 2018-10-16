import {
  SIGNUP_SUCCESS, SIGNUP_FAILURE,
  LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_SUCCESS, 
//  SIGNUP_REQUEST, LOGOUT_REQUEST, LOGIN_REQUEST, LOGOUT_FAILURE,

} from '../constants'

const token = localStorage.getItem('token');

const initialState = {
  isAuthenticated: !!token,
  user: null,
  token
};

export default function auth(state = initialState, action){
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };

    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: ''
      };
    default:
      return state;
  }
}
