import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_ERROR': return {...state, errorMessage: payload };
    case 'SIGNIN': return {token: payload, errorMessage: '' };
    case 'CLEAR_ERROR_MESSAGE': return {...state, errorMessage: ''};
    default: return state;
  }
}

const tryLocalSignin = (dispatch) => (onSuccess, onError) => {
  AsyncStorage.getItem('token')
    .then((token) => {
      if (token) {
        dispatch({ type: 'SIGNIN', token });
        onSuccess();
      } else {
        onError();
      }
    });
}

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'CLEAR_ERROR_MESSAGE' });
}

const signup = (dispatch) => ({ email, password}) => {
  trackerApi
    .post('/signup', { email, password })
    .then(async ({ data }) => {
      await AsyncStorage.setItem('token', data.token);
      dispatch({ type: 'SIGNIN', payload: data.token });
    })
    .catch(() => {
      dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong with sign up' })
    })
}

const signin = (dispatch) => ({ email, password}) => {
  trackerApi
    .post('/signin', { email, password })
    .then(async ({ data }) => {
      await AsyncStorage.setItem('token', data.token);
      dispatch({ type: 'SIGNIN', payload: data.token });
    })
    .catch(() => {
      dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong with sign in' })
    })
}

const signout = (dispatch) => ({ email, password}) => {
  
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: '' },
);
