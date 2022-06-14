import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';
import Link from '../components/Link';

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm 
        title='Sign In to Your Account'
        submitTitle='Sign In'
        onSubmit={signin}
        errorMessage={state.errorMessage}
      />
      <Link onPress={() => {
        navigation.navigate('Signup')
      }}>
        Don't have an account? Sign up instead
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  },
});

export default SigninScreen;
