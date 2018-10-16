import {
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE
} from '../constants'
import fetch from "isomorphic-fetch";

export function signup(username, password) {
  return (dispatch) => {
    dispatch({
      type: SIGNUP_REQUEST
    });

    return fetch('http://localhost:8000/v1/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: {
        'Content-type':'application/json',
        'Accept': 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          return json;
        }
        throw new Error(json.message);
      })
      .then(json => {
        if (!json.token){
          throw new Error('Token is not provided');
        }
          localStorage.setItem('token', json.token);
        return json;
      })
      .then(json => dispatch({
        type: SIGNUP_SUCCESS,
        payload: json
      }))
      .catch(reason => dispatch({
        type: SIGNUP_FAILURE,
        payload: reason
      }));
  }
}

export function login(username, password){
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST
    });

    return fetch('http://localhost:8000/v1/login', {
      method: 'POST',
      headers: {
        'Content-type':'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          return json;
        }
        throw new Error(json.message);
      })
      .then(json => {
        if (!json.token){
          throw new Error('Token is not provided');
        }
        localStorage.setItem('token', json.token);
        return json;
      })
      .then(json => dispatch({
        type: LOGIN_SUCCESS,
        payload: json
      }))
      .catch(reason => dispatch({
        type: LOGIN_FAILURE,
        payload: reason
      }));
  }
}

export function logout(){
  return (dispatch) => {
    dispatch({
      type: LOGOUT_REQUEST
    })
  }
}