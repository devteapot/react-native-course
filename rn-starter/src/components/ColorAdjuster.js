import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const ColorAdjuster = ({ title, color, onIncrease, onDecrease, increaseDisabled, decreaseDisabled }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Button
        disabled={increaseDisabled}
        title={`More ${title}`}
        onPress={onIncrease}
      />
      <Button
        disabled={decreaseDisabled}
        title={`Less ${title}`}
        onPress={onDecrease}
      />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ColorAdjuster;
