import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ 
  initialValues = { title: '', content: '' }, 
  onSubmit, 
  submitText 
}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}>Title:</Text>
      <TextInput 
        value={title} 
        onChangeText={setTitle} 
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.input}
      />
      <Text style={styles.label}>Content:</Text>
      <TextInput 
        value={content} 
        onChangeText={setContent} 
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.input}
      />
      <Button
        title={submitText}
        onPress={() => onSubmit({ title, content })} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
    marginBottom: 15,
    padding: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default BlogPostForm;
