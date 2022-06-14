import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext'; 
import Link from '../components/Link';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm 
        title='Sign Up for Tracker'
        submitTitle='Sign Up'
        onSubmit={signup}
        errorMessage={state.errorMessage}
      />
      <Link onPress={() => {
        navigation.navigate('Signin')
      }}>
        Already have an account? Sign in instead
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

export default SignupScreen;
