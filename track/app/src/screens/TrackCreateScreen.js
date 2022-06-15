import React, { useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';
import Map from '../components/Map';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import { useIsFocused } from '@react-navigation/native';
import TrackForm from '../components/TrackFrom';

const TrackCreateScreen = () => {
  const { state, addLocation } = useContext(LocationContext);

  const isFocused = useIsFocused();
  const [err] = useLocation(
    isFocused, 
    (location) => addLocation(location, state.recording),
  );

  return (
    <SafeAreaView edges={['top']}>
      <Text h3>TrackCreate screen</Text>
      <Map />
      {!!err && (
        <Text>Please enable location services</Text>
      )}
      <TrackForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default TrackCreateScreen;
