import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.view1Style} />
      <View style={styles.view2Parent}>
        <View style={styles.view2Style} />
      </View>
      <View style={styles.view3Style} />
    </View>
  );
};

const boxDimensions = {
  height: 50,
  width: 50
}

const styles = StyleSheet.create({
  parentStyle: {
    height: 200,
    borderWidth: 3,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  view1Style: {
    ...boxDimensions,
    backgroundColor: 'red'
  },
  view2Parent: {
    height: 100,
    justifyContent: 'flex-end'
  },
  view2Style: {
    ...boxDimensions,
    backgroundColor: 'green',
  },
  view3Style: {
    ...boxDimensions,
    backgroundColor: 'blue'
  }
});

export default BoxScreen;
