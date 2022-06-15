import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_ERROR': return {...state, errorMessage: payload };
    case 'SIGNIN': return {token: payload, errorMessage: '' };
    case 'CLEAR_ERROR_MESSAGE': return {...state, errorMessage: ''};
    case 'SIGN_OUT': return { errorMessage: '', token: null }
    default: return state;
  }
}

const tryLocalSignin = (dispatch) => () => {
  AsyncStorage.getItem('token')
    .then((token) => {
      if (!!token) {
        dispatch({ type: 'SIGNIN', token });
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
    });
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
    });
}

const signout = (dispatch) => async (onSuccess) => {
  await AsyncStorage.removeItem('token');
  onSuccess();
  dispatch({ type: 'SIGN_OUT' });
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { 
    signin, 
    signup, 
    clearErrorMessage, 
    tryLocalSignin, 
    signout 
  },
  { token: null, errorMessage: '' },
);
