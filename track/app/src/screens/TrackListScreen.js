import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import { ListItem } from '@rneui/themed';

const TrackListScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);

  return (
    <FlatList
      data={state}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <TouchableOpacity 
          onPress={() => {
            navigation.navigate('TrackDetail', { _id: item._id })
          }}
        >
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({

});

export default TrackListScreen;
