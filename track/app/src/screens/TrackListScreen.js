import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>TrackList screen</Text>
      <Button 
        title='Go to TrackDetail' 
        onPress={() => navigation.navigate('TrackDetail')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({

});

export default TrackListScreen;
