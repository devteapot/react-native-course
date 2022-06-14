import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input, Text } from "@rneui/themed";
import Spacer from '../components/Spacer';

const AuthForm = ({ onSubmit, submitTitle, title, errorMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Spacer>
        <Text h3>{title}</Text>
      </Spacer>
      <Input 
        label='Email' 
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Spacer />
      <Input 
        label='Password' 
        value={password}
        onChangeText={setPassword} 
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry
      />
      {errorMessage !== '' && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
      <Spacer>
        <Button 
          title={submitTitle}
          onPress={() => {
            onSubmit({ email, password });
          }} 
        />
      </Spacer>
    </View>
  );
}

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15
  }
});

export default AuthForm;
