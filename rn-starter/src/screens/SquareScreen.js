import React, { useState, useReducer } from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import ColorAdjuster from '../components/ColorAdjuster';
import ImageDetail from '../components/ImageDetail';

const MIN_COLOR = 0;
const MAX_COLOR = 255;
const COLOR_INCREMENT = 15;

const increase = (x) => x + COLOR_INCREMENT;
const decrease = (x) => x - COLOR_INCREMENT;

const canIncrease = (x) => increase(x) <= MAX_COLOR;
const canDecrease = (x) => decrease(x) >= MIN_COLOR;

const capitalise = (s) => s.replace(/^\w/, (c) => c.toUpperCase());

const SquareScreen = () => {
  const reducer = (state, action) => ({
    ...state,
    [action.color]: action.modFn(state[action.color])
  });

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item}
        data={['red', 'green', 'blue']}
        renderItem={({ item }) => (
          <ColorAdjuster 
            title={capitalise(item)}
            color={state[item]}
            onIncrease={() => {
              dispatch({ color: item, modFn: increase });
            }}
            onDecrease={() => {
              dispatch({ color: item, modFn: decrease });
            }}
            increaseDisabled={!canIncrease(state[item])}
            decreaseDisabled={!canDecrease(state[item])}
          />
        )}
      />
      <View 
        style={{
          ...styles.colorBox, 
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`
        }} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  colorBox: {
    height: 150,
    width: 150,
  }
});

export default SquareScreen;
