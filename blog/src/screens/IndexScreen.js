import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { 
    state: blogPosts, 
    getPostsAction,
    deletePostAction
  } = useContext(Context);

  useEffect(() => {
    getPostsAction();

    const unsubscribe = navigation
      .addListener('focus', () => {
        getPostsAction();
      });

    return unsubscribe;
  }, []);

  return (
    <View>
      <FlatList
        data={blogPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Show", { postId: item.id })}>
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => deletePostAction(item.id)}>
                <Feather name='trash' style={styles.deleteIcon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'grey'
  },
  title: {
    fontSize: 18,
  },
  deleteIcon: {
    fontSize: 24,
  },
});

export default IndexScreen;
