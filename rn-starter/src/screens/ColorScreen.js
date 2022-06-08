import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const getRandomColor = () => 
  `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button 
        title='Add a Aolor'
        onPress={() => 
          setColors((c) => [
            ...c, 
            getRandomColor(),
          ])
        }  
      />
      <FlatList 
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => (
          <View style={{ ...styles.colorBox, backgroundColor: item }} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  colorBox: {
    width: 100,
    height: 100,
  }
});

export default ColorScreen;
