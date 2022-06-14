import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Spacer from './Spacer';

const Link = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Spacer>
        <Text style={styles.link}>{children}</Text>
      </Spacer>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    color: 'blue'
  }
});

export default Link;
