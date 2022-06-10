import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const { addPostAction } = useContext(Context);

  return (
    <View>
      <BlogPostForm 
        onSubmit={({ title, content }) => 
          addPostAction(title, content, () => navigation.navigate("Index"))
        }
        submitText='Add Blog Post'
      />
    </View>
  );
}

const styles = StyleSheet.create({

});

export default CreateScreen;
