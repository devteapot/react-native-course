import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { Context as TrackContext } from '../context/TrackContext';

const TrackDetailScreen = ({ route }) => {  
  const { _id } = route.params;
  const { state } = useContext(TrackContext);

  const track = state.find((t) => t._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <View>
      <Text>{track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
      >
        <Polyline coordinates={track.locations.map(({ coords }) => coords)} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 300,
  }
});

export default TrackDetailScreen;
