import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const ResolveAuthScreen = ({ navigation }) => {
  const { state, tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  const { token } = state;

  useEffect(() => {
    if (!!token) {
      navigation.navigate('LoggedIn');
    } else {
      navigation.navigate('LoggedOut');
    }
  }, [token]);

  return (
    <></>
  );
}

export default ResolveAuthScreen;
