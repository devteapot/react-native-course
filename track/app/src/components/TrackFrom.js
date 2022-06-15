import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from '@rneui/themed';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = () => {
  const { 
    state, 
    startRecording, 
    stopRecording, 
    changeName 
  } = useContext(LocationContext);

  const { name, recording, locations } = state;

  console.log(locations)

  return (
    <View>
      <Spacer>
        <Input
          value={name}
          placeholder='Enter name' 
          onChangeText={changeName} 
        />
      </Spacer>
      {recording 
        ? <Button title='STOP' onPress={stopRecording} /> 
        : <Button title='Start Recording' onPress={startRecording} />
      }
    </View>
  );
}

const styles = StyleSheet.create({

});

export default TrackForm;
