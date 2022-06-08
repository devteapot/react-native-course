import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail 
        title='Forest'
        imageSource={require('../../assets/forest.jpg')}
        score={0}
      />
      <ImageDetail 
        title='Beach'
        imageSource={require('../../assets/beach.jpg')}
        score={69}
      />
      <ImageDetail 
        title='Mountain'
        imageSource={require('../../assets/mountain.jpg')}
        score={420}
      />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ImageScreen;
