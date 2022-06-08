import React, { useState, useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const CounterScreen = () => {
  const reducer = (state, action) => {
    const { type, payload } = action;
    
    switch (type) {
      case 'increase': return state + payload;
      case 'decrease': return state - payload;
      default: return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <View>
      <Button 
        title='increase'
        onPress={() => {
          dispatch({type: 'increase', payload: 1});
        }}  
      />
      <Button 
        title='decrease' 
        onPress={() => {
          dispatch({type: 'decrease', payload: 1});
        }}  
      />
      <Text>Current count: {state}</Text>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default CounterScreen;
