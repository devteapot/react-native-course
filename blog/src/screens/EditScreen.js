import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';


const EditScreen = ({ navigation, route }) => {
  const { state, editPostAction } = useContext(Context);
  const post = state.find((p) => p.id === route.params.postId);

  return (
    <View>
      <BlogPostForm 
        onSubmit={({ title, content }) => 
          editPostAction(
            post.id, 
            title, 
            content, 
            () => navigation.pop()
          )
        }
        submitText='Edit Blog Post'
        initialValues={{ 
          title: post.title, 
          content: post.title 
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({

});

export default EditScreen;
