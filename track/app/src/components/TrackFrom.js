import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from '@rneui/themed';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
  const { 
    state: { name, recording, locations }, 
    startRecording, 
    stopRecording, 
    changeName
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <View>
      <Spacer>
        <Input
          value={name}
          placeholder='Enter name' 
          onChangeText={changeName} 
        />
      </Spacer>
      <Spacer>
        {recording 
          ? <Button title='STOP' onPress={stopRecording} /> 
          : <Button title='Start Recording' onPress={startRecording} />
        }
      </Spacer>
      {!recording && locations.length > 0 && (
        <Spacer>
          <Button 
            title='Save Recording' 
            onPress={saveTrack}
          />
        </Spacer>
      )}
    </View>
  );
}

const styles = StyleSheet.create({

});

export default TrackForm;
