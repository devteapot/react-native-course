import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const TextScreen = () => {
  const [name, setName] = useState('');
  
  return (
    <View>
      <Text>Enter password:</Text>
      <TextInput 
        style={styles.input}
        value={name}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={(newText) => {
          setName(newText);
        }}
      />
      {name.length < 5 && (
        <Text>Your password must be at least 5 chars</Text>
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
