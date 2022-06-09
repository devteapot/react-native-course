import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const TextScreen = () => {
  const [password, setPassword] = useState('');
  
  return (
    <View>
      <Text>Enter password:</Text>
      <TextInput 
        style={styles.input}
        value={password}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={(newText) => {
          setPassword(newText);
        }}
      />
      {password.length < 4 && (
        <Text>Your password must be at least 4 chars</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;
