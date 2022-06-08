import React from "react";
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 69 },
    { name: 'Friend #2', age: 69 },
    { name: 'Friend #3', age: 69 },
    { name: 'Friend #4', age: 69 },
    { name: 'Friend #5', age: 69 },
    { name: 'Friend #6', age: 69 },
    { name: 'Friend #7', age: 69 },
    { name: 'Friend #8', age: 69 },
    { name: 'Friend #9', age: 69 },
  ];

  return (
    <View>
      <FlatList
        data={friends}
        keyExtractor={(friend) => friend.name}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {`${item.name} - Age ${item.age}`}
            </Text>
          )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
})

export default ListScreen;
